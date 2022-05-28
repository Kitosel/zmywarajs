module.exports = {
    "name": "google",
    "options": [
        {
            "name": "treść",
            "description": "Słowa które chcesz wyszukać",
            "type": 3,
            "required": true,
        },
    ],
    "description": "Zaprowadzi Cię do rozwiązania problemu",
    "aliases": [],
    run: (bot, args, message) => {
        const regexp = new RegExp('<[@#!&](.*?)>','g');
        const filtered = args.filter(a => !regexp.test(a)).join("+").replaceAll("\n", "+");

        const mention = message.mentions?.users.first() || "";
        const embed = bot.embed
            .setTitle("Google")
            .setDescription(`[https://letmegooglethat.com/?q=${filtered}](https://letmegooglethat.com/?q=${filtered})`);
        return message.channel.send(!!mention ? `<@${mention.id}>` : "", embed);
    }
}