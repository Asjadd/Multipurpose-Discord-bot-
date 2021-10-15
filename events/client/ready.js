const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../config');
const { MessageEmbed } = require("discord.js")

module.exports = bot => {
  try{
    const stringlength = 69;
  
    console.log(` | `.bold.brightGreen + `Discord Bot is online!`.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length-`Discord Bot is online!`.length)+ "  ".bold.brightGreen)
   
  }catch{ /* */ }
    function presence() {
      let status = [';help', 'zenitsu.xyz',] 
      let rstatus = Math.floor(Math.random() * status.length); 
      bot.user.setPresence({
          status: "idle", 
          activity: {
              name: `${status[rstatus]}`, 
              }
             
      }); 
  }
  console.log(`Powered By Asjad https://github.com/AsjadOwO`)
  console.log(`Logged in as ${bot.user.tag}!`)
  setInterval(presence, 5000)
  }
  