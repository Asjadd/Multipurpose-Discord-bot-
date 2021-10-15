const Discord = require("discord.js")
module.exports = {
    config: {
    name: "support",
    aliases: [""],
    category: "support",
    description: "support Server",
    useage: "support",
    },
    run: async (client, message, args) => {
        let supportsexeembed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            
            .setDescription("[Support Server](https://discord.gg/SvfZ7GJrZd)                                                  ")
            .setFooter("Typhon Bot clone by | Asjad#0060   ", client.user.displayAvatarURL())
            .setThumbnail("https://images-ext-1.discordapp.net/external/PT9j8guEpbbTPjMF9S1CGq4W4KT1IRpFA02sB6CL-aM/https/cdn.discordapp.com/avatars/756052319417925633/5a5256290cd803d97b940b39f5937cb8.webp")

        message.reply(supportsexeembed);
    }
}

