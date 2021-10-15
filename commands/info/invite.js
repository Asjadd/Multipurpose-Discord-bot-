const Discord = require("discord.js")
module.exports = {
    config: {
    name: "invite",
    aliases: [""],
    category: "info",
    description: "Invite the Bot to your Server",
    useage: "invite",
    },
    run: async (client, message, args) => {
        let inviteembed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setTitle("Invite Bot")
            .setDescription("[Invite Me](https://discord.com/oauth2/authorize?client_id=783404187017805864&scope=bot&permissions=4361029390)                                                  ")
            .setFooter("Typhon Bot clone by | Asjad#0060   ", client.user.displayAvatarURL())
            .setThumbnail("https://images-ext-1.discordapp.net/external/PT9j8guEpbbTPjMF9S1CGq4W4KT1IRpFA02sB6CL-aM/https/cdn.discordapp.com/avatars/756052319417925633/5a5256290cd803d97b940b39f5937cb8.webp")

        message.reply(inviteembed);
    }
}

