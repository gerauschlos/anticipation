const Discord = require("discord.js");
const important = require("../important.js");

module.exports.run = async (bot, message, args) => {
    let message_sent = args;
    let cell = important.getjailed();
    let message_channel = message.channel.name
    if(cell === "no") return;
    if(message.member.roles.has(r=>[cell,"Host", "Admin"])){
        if(cell === message_channel){

            bot.channels.get(jailor_channel).send(`${message.author}: `+ message_sent);
            message.channel.send("sent");
            return;
        }else{
            if("jail" === message_channel){
            bot.channels.get(cell).send("**Jailor:** "+ message_sent);
            message.channel.send("sent");
            return;
            }
        }
    }
}



module.exports.help = {
    name: "send"
}