const {
    MessageEmbed
} = require("discord.js");
const {
    stripIndents
} = require("common-tags");

const {MessageButton} = require('discord-buttons');
const disbut = require('discord-buttons');

module.exports = {
    config: {
    name: "help",
    aliases: ["h"],
    cooldown: 3,
    category: "📣 Information Commands",
    description: "Returns all commands, or one specific command info",
    useage: "help [Command]"
},
    run: async (client, message, args) => {
        //GET THE PREFIX
       
            

            const embed2 = new MessageEmbed()
            .setColor('#fc7703')
            .setTitle(`TYPHON BOT COMMANDS`)
            .setDescription(`Use \`;help\` followed by a command name to get more additional information on a command. For example: \`;help ban!\` 
            `)
            // .setDescription(' [Website](https://www.zenitsu.xyz/) <:right:840675212369592371> [Invite Me](https://discord.com/oauth2/authorize?client_id=783404187017805864&scope=bot&permissions=4361029390) <:right:840675212369592371> [Support Server](https://discord.gg/PyXBnXzprX)   <:790350356767834124:861297396550074369>            ')
            .setThumbnail('https://images-ext-1.discordapp.net/external/PT9j8guEpbbTPjMF9S1CGq4W4KT1IRpFA02sB6CL-aM/https/cdn.discordapp.com/avatars/756052319417925633/5a5256290cd803d97b940b39f5937cb8.webp')
            .addFields(
                { name: '**Bot Owner**', value: "`\eval premium serverban servers\`"  },
                { name: '**Fun Commands**', value: "`\avatar meme superscript translate urban wiki\`", },
                { name: '**Info Commands**', value: "`\help info invite ping support \`", },
                // { name: '\u200B', value: '\u200B' },
                { name: '**Moderation Commands**', value: ' ``ban clearwarns hide kick lock purge role+ role- setnick slowmode unhide unlock voicekick voicemove warn warnings``', },
                { name: '**Premium Commands**', value: '`\announce blacklist disable enable snipe\`', },
                { name: '**Utility Commands**', value: '`\addemoji afk embed mmode setprefix weather\`', },
                

            )
            
            .setTimestamp()
            .setFooter(`Typhon Bot Clone by Asjad#0060`)

           
             
             
            message.channel.send({
                embed : embed2,
               
            })

           
        }
     
 

       


}

