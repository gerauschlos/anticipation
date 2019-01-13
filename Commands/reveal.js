const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let testing = '533782866694504459';
    let Mayor = '533794447607988250';
    if(message.member.roles.has(testing)){
        message.channel.send(`${message.author} has revealed themselves as Mayor`);
        message.member.addRole(Mayor).catch(console.error);
    }else{
        message.channel.send(`${message.author} yeh nice try dude`);
    }
}

module.exports.help = {
    name: "reveal"
}