const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");
const { EmailClient } = require("@azure/communication-email");

module.exports = async function (context, req) {
    context.log("HandleContactForm function started");
    try {
        context.log("Request body:", req.body);
        // Validate and parse form data
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            context.res = {
                status: 400,
                body: "Name, email, and message are required fields.",
            };
            return;
        }

        // Send email notification using ACS
        const connectionString = process.env.ACS_CONNECTION_STRING;
        const emailClient = new EmailClient(connectionString);
        const emailMessage = {
            sender: process.env.ACS_SENDER_EMAIL, // Verified sender email
            content: {
                subject: "New Contact Form Submission",
                plainText: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
            },
            recipients: {
                to: [{ email: process.env.NOTIFICATION_EMAIL }],
            },
        };
        await emailClient.send(emailMessage);

        // Store data in Azure Table Storage
        const tableName = process.env.TABLE_NAME;
        const accountName = process.env.STORAGE_ACCOUNT_NAME;
        const accountKey = process.env.STORAGE_ACCOUNT_KEY;
        const credential = new AzureNamedKeyCredential(accountName, accountKey);
        const tableClient = new TableClient(
            `https://${accountName}.table.core.windows.net`,
            tableName,
            credential
        );

        const entity = {
            partitionKey: "ContactForm",
            rowKey: new Date().toISOString(),
            name,
            email,
            message,
        };
        await tableClient.createEntity(entity);

        // Respond with success
        context.res = {
            status: 200,
            body: "Contact form submitted successfully.",
        };
    } catch (error) {
        context.log.error("Error processing contact form:", error);
        context.res = {
            status: 500,
            body: "An error occurred while processing the contact form.",
        };
    }
};
