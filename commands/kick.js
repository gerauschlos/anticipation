const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) ) {
        return message.channel.send(`404: Not Found!`)
    }

    let kicked = message.mentions.members.first() || message.guild.members.get(args[0]);
    let reason = args.slice(1).join(' ');

    if (!kicked) {
        return message.channel.send(`Please mention a valid user!`)
    }

    if(kicked.hasPermission('ADMINISTRATOR') === true){
        return message.channel.send(kicked + " is an administrator and I refuse to kick them <:ree:538562884909662223>");
    }

    if (!kicked.bannable) {
        return message.channel.send(`I cannot kick this user! Do they have a higher role? Do I have ban permissions? `)
    }

    await kicked.kick(reason)
        .catch(error => message.channel.send(`I cannot kick ${kicked.username} because: ${error}`));
    message.channel.send(`${kicked.user.tag} was kicked because: ${reason}`)
}

module.exports.help = {
    name:"kick"
}