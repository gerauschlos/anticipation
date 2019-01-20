const Discord = require("discord.js");
let config = require("../config.json");


module.exports.run = async (bot, message, args) => {
    let Mayor = config.mayor;
    let location = message.channel.name;
    if(location !== "mainmatch") return;
    let mayorRole = message.guild.roles.get("533794447607988250")
    if(message.member.roles.has(Mayor)){
        message.channel.send(`${message.author} has revealed themselves as Mayor`);
        message.member.addRole(mayorRole).catch(console.error);
    }else{
        message.channel.send(`${message.author}, Error: 403 Forbidden`);
    }
}

module.exports.help = {
    name: "reveal"
}