const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let owner = config.Gangster
    let mention = message.mentions.members.first();
    if(message.author.id !== owner) {
        message.channel.send(`**Error:** 404 Not Found`);
    } else {
        message.channel.send(`This command is a **WIP**!`)
    }

}

module.exports.help = {
    name: "award"
}