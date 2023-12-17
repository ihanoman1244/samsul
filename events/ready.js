const { activitytype } = require("discord.js")

module.exports = {
    name: "ready",
    exec(client) {
			

	console.log(`${client.user.tag} berhasil online ✅`)
		}
} 
