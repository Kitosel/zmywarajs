const Discord = require("discord.js");
const fs = require("fs");

const TOKEN = '';

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ]
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.login(TOKEN);
