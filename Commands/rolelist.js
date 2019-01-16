const Discord = require("discord.js");
const fs = require ("fs");

module.exports.run = async (bot, message, args) => {

    var commandList = fs.readFileSync('Commands/commands.txt', 'utf8');

    if(message.member.roles.some(r=>["Owner", "Programmers", "Developer"].includes(r.name))){

        message.channel.send(commandList);
    } else {

        message.channel.send(`**Error:** 403 Forbidden`)
    }

}

module.exports.help = {
    name: "rolelist"
}