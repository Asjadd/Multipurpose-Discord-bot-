const Discord = require('discord.js')
const urban = require('urban.js')
module.exports = {
    config : {
    name: "urban",
    category: "fun",
  description: "Shows you a deffinition from urban dictionary",
  usage: "urban <your word>",
    },
  run: async (client, message, args) => {

  const bargs =  message.content.split(' ');
  const searchString = bargs.slice(1).join(' ')
  if(!searchString)return message.channel.send(", :x: | Usage: `\;urban <Text>\`")
  
  
  
urban(searchString).then(urbans=>{
  
  message.channel.send({embed: {
     
          
      description: `__**${urbans.word}**__\n\n**Definition**\n${urbans.definition}\n\n**Example**\n${urbans.example}\n\n**Tags:** ${urbans.tags}\n\n👍 **${urbans.thumbsUp}** *Thumbs Up* **|** 👎 **${urbans.thumbsDown}** *Thumbs Down*`,
      author: {
          name: message.author.username,
          icon_url: message.author.avatarURL,
      },
      color: 0xffff00,
  

      timestamp: new Date(),
  
  }
})
})

  }
  };