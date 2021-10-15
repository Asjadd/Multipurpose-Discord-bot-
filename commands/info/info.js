const {
    MessageEmbed
} = require("discord.js");
const {
    version
} = require("discord.js");
module.exports = {
    config:{
    name: "info",
    category: "info",
    description: "Sends detailed info about the client",
    usage: "info",
    },
    run: async (client, message, args) => {

        let totalMembers = client.guilds.cache.reduce((c, g) => c + g.memberCount, 0);
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;


        const embed2 = new MessageEmbed()
        .setColor('#fc7703')
        .setTitle(`TYPHON BOT`)
        
        // .setDescription(' [Website](https://www.zenitsu.xyz/) <:right:840675212369592371> [Invite Me](https://discord.com/oauth2/authorize?client_id=783404187017805864&scope=bot&permissions=4361029390) <:right:840675212369592371> [Support Server](https://discord.gg/PyXBnXzprX)   <:790350356767834124:861297396550074369>            ')
        .setThumbnail('https://images-ext-1.discordapp.net/external/PT9j8guEpbbTPjMF9S1CGq4W4KT1IRpFA02sB6CL-aM/https/cdn.discordapp.com/avatars/756052319417925633/5a5256290cd803d97b940b39f5937cb8.webp')
        .addFields(
            { name: '**Version**', value: "v0.8.8" , inline: true },
            { name: '**Discordjs**', value: "v12.5.3", inline: true },
            { name: '**Clone by **', value: "<@439728998809862154>", inline: true },
            // { name: '\u200B', value: '\u200B' },
            { name: '**Total Servers**', value: `${client.guilds.cache.size}`, inline: true },
            { name: '**Total Users**', value: `${totalMembers}`, inline: true },
            { name: '**Uptime**', value: `${days}d  ${hours}h   ${minutes}  ${seconds}`, inline: true },
            { name: '**Github**', value: `[Github]()`, inline: true },
            { name: '**Zenitsu Link**', value: `[Zenitsu]()`, inline: true },
            { name: '**Orginal Bot Link**', value: `[Invite]()`, inline: true },


            

        )
        
        .setTimestamp()
        .setFooter(`Typhon Bot Clone by Asjad#0060`)

       
         
         
        message.channel.send({
            embed : embed2,
           
        })

        













    }
}