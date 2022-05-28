const {exec} = require("child_process");

module.exports = {
    "name": "update",
    "options": [
        {
            "name": "tekst",
            "description": "Tekst wyświetlany przed odpowiedzią bota",
            "type": 3,
            "required": false,
        },
    ],
    "description": "Sprawdza oraz wgrywa update",
    "aliases": [],
    "hideHelp": true,
    run: (bot, args, message) => {
        if(!bot.owners.includes(message.author.id)) return;
        exec("git pull", async (error, output) => {
            if(error) {
                message.channel.send("Błąd, sprawdź konsolkę!")
                console.log(error)
            }

            if(output.includes("Already up to date.")) {
                return message.channel.send(bot.embed.setDescription("Wszystko aktualne!").setTitle("Updater"))
            }

            if(output.length > 2047) {
                console.log(output)
                output = "Przekroczono limit discord, wynik został zapisany do konsolki!"
            }

            const embed = bot.embed.setTitle("Updater")
                .setDescription(`\`\`\`diff\n${output}\`\`\``)
            await message.channel.send("", embed)
            await message.channel.send("Trwa restartowanie bota w celu wczytania aktualizacji!");
            process.exit(0);
        })
    }
}
