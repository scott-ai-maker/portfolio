module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = req.body && req.body.name;
    const email = req.body && req.body.email;
    const message = req.body && req.body.message;

    if (!name || !email || !message) {
        context.res = {
            status: 400,
            body: "Please provide name, email, and message."
        };
        return;
    }

    context.res = {
        status: 200,
        body: `Hello ${name}, your message has been received!`
    };
};