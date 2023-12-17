module.exports = {
    name: "messageCreate",
    exec(client, message) {
        if (message.author.bot) return;

        const prefix = client.config.prefix;

        if (message.content.startsWith(prefix)) {
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const commandName = args.shift().toLowerCase();
					
            const command = client.commands.find((c) => {
                return c.name.toLowerCase() === commandName || c.aliases?.includes(commandName); 
            });
            if (command) command.exec(client, message, args);
        }
    }
} 
