const Discord = require("discord.js")
module.exports = {
    config:{
    name: "ping",
    aliases: ["latency"],
    category: "info",
    description: "Returns latency and API ping",
    useage: "ping",
    },
    run: async (client, message, args) => {
        return message.reply(
            message.channel.send(` :white_check_mark:  | WebSocket Ping Is **${new Date().getTime() - message.createdTimestamp} ms** | Message Edit Ping Is **${client.ws.ping} ms**`)
            
        )
    }
}

