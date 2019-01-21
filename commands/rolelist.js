const Discord = require("discord.js");
const fs = require ("fs");

module.exports.run = async (bot, message, args) => {

    let data = fs.readFileSync('modules/rolelist.txt', 'uft-8');   
    let location = message.channel.name;
    console.log(location);
    if(location ==! "staff" || location ==! "game-logs") return;

    if(message.member.roles.some(r=>["Owner", "Programmers", "Developer","Admin"].includes(r.name))){

        message.channel.send(data);
    } else {

        message.channel.send(`**Error:** 404 Not Found`)
    }

}

module.exports.help = {
    name: "rolelist"
}