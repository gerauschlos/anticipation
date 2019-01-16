const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    if(message.member.roles.has(r=>[cell,"Host", "Admin"])){
        if(cell === message_channel){

            bot.channels.get(jailor_channel).send(`${message.author}: `+ message_sent);
            message.channel.send("sent");
            return;
        }else{

            if(jailor_channel === message_channel){
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