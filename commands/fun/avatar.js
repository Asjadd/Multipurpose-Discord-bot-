  
const Discord = require("discord.js")
module.exports = {
    config: {
        name: "avatar",
        description: "avatar",
        usage: "avatar <@tag a user",
        example: "avatar",
        aliases: ["avatar"]
    },

    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

        if (!member.user.avatarURL) return message.channel.send(`That user does not have an avatar`);

        const avatar = new Discord.MessageEmbed()
            .setTitle(`${member.user.username}'s Avatar`)
            .setColor("#fc7703").setFooter("Typhon Bot Clone by Asjad#0060")
            .setImage(member.user.avatarURL())
            .setURL(member.user.avatarURL())
        message.channel.send(avatar)
    }
};