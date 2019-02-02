const Discord = require("discord.js");
const fs = require('fs');
const countdown = require("countdown");

module.exports.run = async (bot, message, args) => {
    let CurrentDate = new Date()
    let month = CurrentDate.getMonth()
    let day = CurrentDate.getDate()
    let year = CurrentDate.getFullYear()
    console.log(year);
    let matchtime = countdown(new Date(), new Date(year, month, day, 17, 00, 00, 00) ).toString();
   //message.delete().catch();
    message.channel.send(`The match will start in ${matchtime}!`)
    
}


module.exports.help = {
    name:"matchtime"
}