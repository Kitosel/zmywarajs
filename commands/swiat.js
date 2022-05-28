module.exports = {
    "name": "swiat",
    "options": [
        {
            "name": "tekst",
            "description": "Tekst wyświetlany przed odpowiedzią bota",
            "type": 3,
            "required": false,
        },
    ],
    "description": "Jak użyć własnego świata",
    "aliases": [],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Jak wgrać własną mapę")
            .setDescription('By wgrać mapę na serwer należy jej folder uploadować do głównego katalogu serwera za pomocą programu FTP.\nNastępnie proszę przejść do panelu ustawień serwera do zakładki `Serwer` i tam w opcji `Nazwa świata` proszę wybrać nowo wgrany świat.\nTeraz wystarczy uruchomić serwer i na niego wejść.\n\nInformacje o tym jak wgrywać pliki na serwer za pomocą programu FTP znajdują się pod poleceniem **!ftp**')


        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}