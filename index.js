const Discord = require("discord.js");
const fs = require("fs");

const TOKEN = 'OTQ0MDYzNzQ4MTI0MDY1ODIz.Yg8J4Q.o-jruBaFg2uYlMSd10Q4BA7HJwI';

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