const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

        let message_sent = '';  
        let cell = "523881129149726721"; //UPDATED
        let jailor_channel = "533791950080573440";//UPDATED
        let message_channel = message.channel.id;
        for(let i=0; i<args.length; i++ ){
            message_sent += args[i];
        }
        if(cell === message_channel){
            bot.channels.get(jailor_channel).send(`${message.author}: `+ message_sent);
        }else{
            if(jailor_channel === message_channel){
                bot.channels.get(cell).send("**Jailor:** "+ message_sent);
            }
        }
}

module.exports.help = {
    name: "send"
}