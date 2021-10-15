const Discord = require("discord.js");

const translate = require("translatte");

module.exports = {
    config: {

name: "translate",
   aliases: ["tr"],
category: "🌍 fun",
description: "Translates a Text from a Language to another Language",
usage: "translate <from> <to> <TEXT>",
    },
run: async (client, message, args) => {

    if(!args[0]) return message.channel.send(":x: | Usage: `\;translate <Language> <Text>\`")

  if(!args[1]) return message.channel.send(":x: | Usage: `\;translate <Language> <Text>\`")

  if(!args[2]) return message.channel.send(":x: | Usage: `\;translate <Language> <Text>\`")

translate(args.slice(2).join(" "), {from: args[0], to: args[1]}).then(res=>{
  let embed = new Discord.MessageEmbed()
  .setColor("#fc7703")
  .setThumbnail("https://imgur.com/0DQuCgg.png")
  .setFooter("Typhon Bot Clone by Asjad#0060",config.AVATARURL)
  .addField(`From: \`${args[0]}\``.substr(0, 256), args.slice(2).join(" ").substr(0, 1024))
  .addField("\u200B", "\u200B")
  .addField(`To: \`${args[1]}\``.substr(0, 256), res.text.substr(0, 1024))
  message.channel.send(embed)
  }).catch(err => {
    let embed = new Discord.MessageEmbed()
    .setColor("#fc7703")
    .setTitle(":x: Error | Something went wrong")
    .setFooter("Typhon Bot Clone by Asjad#0060",config.AVATARURL)
    .setDescription(String("```"+err.stack+"```").substr(0, 2000))
    message.channel.send(embed)
      console.log(err);
  });
}
};