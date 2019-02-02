const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    let banned = message.mentions.members.first();
    let reason = args.slice(1).join(' ');


    if(!message.member.roles.some(r=>["Administrator", "Trusted"].includes(r.name)) ) {
        return message.channel.send(`404: Not Found!`)
    }

    if(banned.hasPermission === 'ADMINISTRATOR'){
        return message.channel.send(banned + " is an administrator and I refuse to ban them <:ree:538562884909662223>");
    }

    if(!banned) {
        return message.channel.send(`Please mention a vaild user!`)
    }

    if (!banned.bannable) {
        return message.channel.send(`I cannot ban that user! Do they have a higher role? Do I have ban permissions?`)
    }

    if (!reason) {
        reason = "No reason provided!"
    }

    await banned.ban(reason)
        .catch(error => message.channel.send(`Cannot ban ${banned.username} because of: ${error}`));
    message.channel.send(`${banned.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
    
}

module.exports.help = {
    name: "ban"
}