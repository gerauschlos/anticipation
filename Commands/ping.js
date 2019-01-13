const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {

    message.channel.send(`Pong! | API Latency is ${Math.round(bot.ping)}ms`)
   // console.log(rolename);
}

module.exports.help = {
    name: "ping"
}