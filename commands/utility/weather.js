const weather = require('weather-js');
const { Client, Collection, MessageEmbed } = require(`discord.js`);

const path = require("path");
module.exports = {
    config:{

  name: path.parse(__filename).name,
  category: "🎮 Fun Commands",
  useage: `${path.parse(__filename).name} <C/F> <Location>`,
description: "*Image cmd in the style:* " + path.parse(__filename).name ,
    },
  run: async (client, message, args) => {
    let degree;
      if(args[0]){
        if(args[0] === "C" || args[0] === "c" || args[0] === "F" || args[0] === "f"){
            degree = args[0].toUpperCase();
        } else{
            return message.channel.send("Enter a valid degree type (C | F).");
        }
      } else{
        return message.channel.send(`Wrong Format try: \`${PREFIX}weather <C/F> <Location>\``);
      }

      if(!args[1]) return message.channel.send("Enter a location to search for.");

      weather.find({search: args[1], degreeType: degree}, function(err, result) {
        try{
         
          let embed = new MessageEmbed()
            .setColor("ORANGE").setFooter("TYPHON BOT CLONE BY ASJAD#0060",config.AVATARURL)
            .setTitle(`Weather`)
            .setThumbnail(result[0].current.imageUrl)
            .setDescription(`Showing weather data for ${result[0].location.name}`)
            .addField("**Temp:**", `${result[0].current.temperature}°${result[0].location.degreetype}`, true)
            .addField("**Weather:**", `${result[0].current.skytext}`, true)
            .addField("**Day:**", `${result[0].current.shortday}`, true)
            .addField("**Feels like:**", `${result[0].current.feelslike}°${result[0].location.degreetype}`, true)
            .addField("**Humidity:**", `${result[0].current.humidity}%`, true)
            .addField("**Wind:**", `${result[0].current.winddisplay}`, true)
            .setFooter("Typhon Bot cloned by Asjad#0060",config.AVATARURL)

          message.channel.send(embed); 
        } catch(err){
          console.log(err); 

          return message.channel.send("Are you sure that place exists?"); 
        }
      });
  }
}