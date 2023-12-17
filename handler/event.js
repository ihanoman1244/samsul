const { readdirSync } = require("fs");

module.exports = (client) => {
    const files = readdirSync("./events/").filter((f) => f.endsWith(".js"));
    files.forEach((fileName) => {
        const event = require(`../events/${fileName}`);
        if (event.name && event.exec) {
            client.on(event.name, (...args) => event.exec(client, ...args));
        }
    });
} 
