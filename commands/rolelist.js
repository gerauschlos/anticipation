const Discord = require("discord.js");
const fs = require ("fs");

module.exports.run = async (bot, message, args) => {

    let data = fs.readFileSync('Commands/rolelist.txt', 'base64');  
    let buff = new Buffer.from(data, 'base64');  
    let text = buff.toString('utf-8');
    let location = message.channel.name;
    console.log(location);
    console.log("Working");
    if(location ==! "staff" || location ==! "game-logs") return;
    console.log("Still working...");

    if(message.member.roles.some(r=>["Owner", "Programmers", "Developer","Admin"].includes(r.name))){

        message.channel.send(text);
    } else {

        message.channel.send(`**Error:** 403 Forbidden`)
    }

}

module.exports.help = {
    name: "rolelist"
}