const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
        let message_sent = args[1];
        let logs = "533777407354601472"; //UPDATED
        let general_chat = "523693033825501190"; //UPDATED
        let location = message.channel.parent.name;
        let player = `${message.author.username}`;
        var role = new Map();

        role.set("1","Bodygaurd,Godfather,Arsonist or Crusader")
        role.set("2", "Lookout, Forger, Coven Leader")
        role.set("3", "")
        role.set("4")
        role.set("5")
        role.set("6")
        role.set("7")
        role.set("8")
        role.set("9")
        role.set("10")
        role.set("11")
        role.set("12")
        role.set("13")
        role.set("14")
        role.set("15")
        role.set("16")
        role.set("17")
        role.set("18")
        role.set("19")
        role.set("20")


        if(location !== "Player Chats") return;
      //console.log(args[1]);
      //if(args[1] !== " kill" || args[1] !== " protect" || args[1] !== " invest") return;

        /*for(let i=0; i<args.length; i++ ){
            message_sent += args[i];
        }  */
        //if()
        let roles = ["Admin"]
        if(message_sent.startWith(" invest") === " invest"){
            player = message.mentions.roles.first().toString;
            messager.channel.send(role.get(player)); 
        }
        

        

        bot.channels.get(logs).send("```"+player+":"+message_sent+"```")  ;
}

module.exports.help = {
    name: "action"
}