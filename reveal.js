const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let rolename = '460976106049110018';
    let Mayor = '533127664769433600';
    if(message.member.roles.has(rolename)){
        message.channel.send(`${message.author} has revealed themselves as Mayor`);
        message.member.addRole(Mayor).catch(console.error);
    }else{
        message.channel.send(`${message.author} yeh nice try dude`);
    }
}

module.exports.help = {
    name: "reveal"
}