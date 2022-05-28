module.exports = {
    "name": "essentials",
    "options": [
        {
            "name": "tekst",
            "description": "Tekst wyświetlany przed odpowiedzią bota",
            "type": 3,
            "required": false,
        },
    ],
    "description": "Podstawowy plugin na każdym serwerze",
    "aliases": [],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("EssentialsX, czyli podstawowe komendy serwerowe")
            .setDescription('EssentialsX dostarcza podstawowych komend serwerowych, takich jak spawn, sethome czy tpa, a także ekonomii. Typowy serwer Minecraft korzysta z trzech pluginów z paczki EssentialsX, czyli niego samego, EssentialsXSpawn oraz EssentialsXChat.\n\nWszystkie trzy można pobrać na stronie https://essentialsx.net/downloads.html.\n\nPozostałe wtyczki z paczki zazwyczaj nie są potrzebne i nie należy ich wgrywać jeśli nie mamy ku temu powodu.')


        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}