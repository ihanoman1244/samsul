require("dotenv").config();
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
superagent = require('superagent'),
os = require('os');
const config = require("./config");
const constants = require("./util/constants");

const keepAlive = require('./server'); 


const intents = Object.values(constants.IntentsFlags).filter(
    (v) => typeof v === "number"
);
const client = new Client({
	disableEveryone: true,
    intents,
    ws: {
        properties: {
            browser: "Discord iOS"
        }
    }
});

client.commands = new Collection();
client.games = new Collection();

client.config = config;
keepAlive()
const handlerFiles = readdirSync("./handler/");
handlerFiles.forEach((fileName) => require(`./handler/${fileName}`)(client));

// mongoose

client.login(process.env.token); 

