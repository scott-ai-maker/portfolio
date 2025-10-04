require('dotenv').config();
const { EmailClient } = require('@azure/communication-email');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = req.body?.name;
    const email = req.body?.email;
    const message = req.body?.message;

    if (!name || !email || !message) {
        context.res = {
            status: 400,
            body: "Please provide name, email, and message."
        };
        return;
    }

    const connectionString = process.env.ACS_CONNECTION_STRING;
    const senderEmail = process.env.SENDER_EMAIL || "contact@mail.scottgordonportfolio.com"; // Use environment variable if available
    const recipientEmail = process.env.RECIPIENT_EMAIL;

    if (!connectionString || !senderEmail || !recipientEmail) {
        context.log.error("Missing required environment variables.");
        context.res = {
            status: 500,
            body: "Server configuration error. Please try again later."
        };
        return;
    }

    const emailClient = new EmailClient(connectionString);

    const emailMessage = {
        sender: senderEmail,
        content: {
            subject: `New Contact Form Submission from ${name}`,
            plainText: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
        },
        recipients: {
            to: [{ email: recipientEmail }]
        }
    };

    try {
        const poller = await emailClient.beginSend(emailMessage);
        const response = await poller.pollUntilDone();
        context.log(`Email sent successfully. Message ID: ${response.id}`);
        context.res = {
            status: 200,
            body: `Hello ${name}, your message has been received!`
        };
    } catch (error) {
        context.log.error('Error sending email:', error);
        context.res = {
            status: 500,
            body: "An error occurred while sending your message. Please try again later."
        };
    }
};