const Discord = require('discord.js');
const fs = require('fs');
const countdown = require('countdown')

module.exports.run = async (bot, message, args) => {

    let matchtime = countdown(new Date(), new Date(2019, 0, 28, 17, 00, 00, 00) ).toString();
    message.channel.send(`The match will start in ${matchtime}!`)

}


module.exports.help = {
    name:"matchtime"
}