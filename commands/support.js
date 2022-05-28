module.exports = {
    "name": "support",
    "options": [
        {
            "name": "tekst",
            "description": "Tekst wyświetlany przed odpowiedzią bota",
            "type": 3,
            "required": false,
        },
    ],
    "description": "Oficjalny kontakt z supportem",
    "aliases": [],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Wyślij proszę oficjalne zgłoszenie do supportu.")
            .setDescription('**Możesz to zrobić poprzez:**\n1. Formularz w zakładce [Kontakt](https://craftserve.pl/contact) w panelu Craftserve,\n2. Adres email **support@craftserve.pl** podając ID swojego serwera.\n\n**Czas na odpowiedź supportu wynosi do 48h roboczych!**')


        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}