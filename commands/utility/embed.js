const { MessageEmbed } = require("discord.js")

module.exports = {
    config: {
  name: "embed",
  category: "🌍 Utility",
  aliases: ["createembed"],
  useage: "embed <Title> ++ <Description>",
  description: "Let's you create an Embed",
    },


run: async (client, message, args, user, text, prefix) => {
  try{
    if(!args[0])
      return message.channel.send(
          " :x: | Usage: ;embed <Text> ++ <Description"
      )
    let userargs = args.join(" ").split("++");
    let title = userargs[0];
    let desc = userargs.slice(1).join(" ")
    message.channel.send(new MessageEmbed()
    .setColor("ORANGE")
    .setFooter("Typhon bot clone by Asjad#0060")
      .setTitle(title ? title : "")
      .setDescription(desc ? desc : "")
    )
  } catch (e) {
      console.log(String(e.stack).bgRed)
      return message.channel.send(new MessageEmbed()
          .setColor("ORANGE")
          .setFooter("Typhon bot clone by Asjad#0060")
          .setTitle(`ERROR | An error occurred`)
          .setDescription(`\`\`\`${e.stack}\`\`\``)
      );
  }
}
}