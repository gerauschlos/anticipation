const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
        let message_sent = '';
        let logs = "533777407354601472"; //UPDATED
        let general_chat = "523693033825501190"; //UPDATED
        let location = message.channel.id;
        let player = `${message.author}`;

        if(location === general_chat) return;
      //console.log(args[1]);
      //if(args[1] !== " kill" || args[1] !== " protect" || args[1] !== " invest") return;

        for(let i=0; i<args.length; i++ ){
            message_sent += args[i];
        }  
        bot.channels.get(logs).send(player+"-"+message_sent)  ;
}

module.exports.help = {
    name: "action"
}