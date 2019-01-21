const Discord = require("discord.js");
const fs = require ("fs");

module.exports.run = async (bot, message, args) => {

    var commandList = fs.readFileSync('modules/commands.txt', 'utf8');
    message.channel.send(commandList);

}

module.exports.help = {
    name: "help"
}