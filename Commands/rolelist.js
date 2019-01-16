const Discord = require("discord.js");
const fs = require ("fs");

module.exports.run = async (bot, message, args) => {

    var roleList = fs.readFileSync('Commands/rolelist.txt', 'utf8'); 
    let location = message.channel.name;
    console.log(location);
    console.log("Going");
    if(location ==! "staff" || location ==! "game-logs") return;
    console.log("Still going . . .");

    if(message.member.roles.some(r=>["Owner", "Programmers", "Developer","Admin"].includes(r.name))){

        message.channel.send(roleList);
    } else {

        message.channel.send(`**Error:** 403 Forbidden`)
    }

}

module.exports.help = {
    name: "rolelist"
}