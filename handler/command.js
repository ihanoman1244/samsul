const { readdirSync } = require("fs");
const path = require("path");

module.exports = (client) => {
    readdirSync("./commands/").forEach((category) => {
        const files = readdirSync(`./commands/${category}/`);
        files.forEach((fileName) => {
            const command = require(`../commands/${category}/${fileName}`);
            if (command.name && command.exec) {
                command.path = path.resolve(__dirname, `../commands/${category}/${fileName}`);
                client.commands.set(command.name, command);
						}
				})
		}
)} 
