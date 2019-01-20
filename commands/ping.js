const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
    let location = message.channel.name;
    console.log(`Location: ${location}`);
    message.channel.send(`Pong! | API Latency is ${Math.round(bot.ping)}ms`)
   
}

module.exports.help = {
    name: "ping"
}