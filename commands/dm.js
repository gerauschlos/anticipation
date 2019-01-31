const Discord = require('discord.js');
const fs = require('fs');
const config = require('../config.json')

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.some(r=>["Developer"].includes(r.name)) ) {
        return message.channel.send(`404: Forbidden`)
    }
        let dm = message.toString().split(' ').shift().shift().join(' ')
        let member = message.mentions.users[0] 
        member.send(dm) 
}


module.exports.help = {
    name: "dm"
}