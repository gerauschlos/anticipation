const Discord = require("discord.js");
const fs = require ("fs");
const important = JSON.parse(fs.readFileSync('important.json', 'utf-8'))

module.exports.run = async (bot, message, args) => {
    let message_sent = args[1];
    let cell = important._jailed;
    let message_channel = message.channel.name
    console.log(cell);
    if(cell === "no") return;
    if(message.member.roles.has(r=>[cell,"Host", "Admin"])){
        if(cell === message_channel.toString()){

            bot.channels.find(channel => channel.name === "jail").send(`${message.author}: `+ message_sent);
            message.channel.send("sent");
            return;
         }else{
            if(message_channel.toString() === "jail"){
                bot.channels.get(channel => channel.name === cell).send("**Jailor:** "+ message_sent);
                message.channel.send("sent");
                return;
            }
        }
    }
}



module.exports.help = {
    name: "send"
}