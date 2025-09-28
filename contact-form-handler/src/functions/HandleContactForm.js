const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");
const sgMail = require("@sendgrid/mail");

module.exports = async function (context, req) {
    try {
        // Validate and parse form data
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            context.res = {
                status: 400,
                body: "Name, email, and message are required fields.",
            };
            return;
        }

        // Send email notification
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const emailMessage = {
            to: process.env.NOTIFICATION_EMAIL, // Your email address
            from: process.env.SENDGRID_SENDER_EMAIL, // Verified sender email
            subject: "New Contact Form Submission",
            text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };
        await sgMail.send(emailMessage);

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
