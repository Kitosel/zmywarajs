module.exports = {
    "name": "usunmape",
    "options": [
        {
            "name": "tekst",
            "description": "Tekst wyświetlany przed odpowiedzią bota",
            "type": 3,
            "required": false,
        },
    ],
    "description": "Jak usunąć starą mapę",
    "aliases": [],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Jak usunąć mapę?")
            .setImage("https://github.com/kCyfer/craftserve-bot/blob/main/img/usunmape.png?raw=true")
            .setDescription('By usunąć aktualną mapę wystarczy przejść do zakładki **Pliki**, a następnie przy folderach zaczynających się najczęściej na **world (lub na twoją własną nazwę określoną w ustawieniach serwera)** kliknąć **zębatkę -> Usuń**')


        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}