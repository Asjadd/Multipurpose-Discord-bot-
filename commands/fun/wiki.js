const Discord = require("discord.js");
    const fetch = require("node-fetch");

module.exports = {
    config: {
  name: "wikipedia",
  aliases: ["wiki", "wikip"],
  category: "fun",
  description: "Search Anything on Wikipedia",
  usage: "wikipedia <Query>",
    },
  run: async (client, message, args) => {

    const wiki = args.join(' ')
    if(!wiki) return message.reply(":x: | Usage: ``;wiki <Text>``") 
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}` 

    let response
    try {
        response = await fetch(url).then(res => res.json()) 
    }
    catch (e) {
        return message.reply('An Error Occured, Try Again.')
    }

    try {
        if(response.type === 'disambiguation') { 
            const embed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setTitle(response.title) 
            .setURL(response.content_urls.desktop.page) 
            .setDescription([`
            ${response.extract}
            Links For Topic You Searched [Link](${response.content_urls.desktop.page}).`])
            .setFooter("Typhon Bot Clone by Asjad#0060", client.user.displayAvatarURL())
            message.channel.send(embed)
        }
        else { // If Only One Result
            const embed = new Discord.MessageEmbed()
            try{embed.            setColor("ORANGE")        }catch{}
            try{embed.setTitle(response.title)}catch{} // Title Of Topic
            try{embed.setURL(response.content_urls.desktop.page)}catch{} 
            try{embed.setThumbnail(response.thumbnail.source)}catch(e){console.log(e)}
            try{embed.setDescription(response.extract)}catch{}
            try{embed.setFooter("Typhon Bot Clone by Asjad#0060•",config.AVATARURL)}catch{}
            message.channel.send(embed)
        }
    }
    catch (e){
      console.log(e)
        return message.reply('Provide A Valid Query To Search.') 
    }
  }
};