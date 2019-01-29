const Discord = require("discord.js");
var lowerCase = require('lower-case');
const important = require("../important.js");

module.exports.run = async (bot, message, args) => {
        let message_sent = args[1];
        let logs = "533777407354601472"; //UPDATED
        let general_chat = "523693033825501190"; //UPDATED
        let location = message.channel.parent.name;
        let player = `${message.author.username}`;



        if(location !== "Player Chats") return;
        if(important.getday()){
            return message.channel.send("You can only use this command at night.");
        }
      //console.log(args[1]);
      //if(args[1] !== " kill" || args[1] !== " protect" || args[1] !== " invest") return;

        /*for(let i=0; i<args.length; i++ ){
            message_sent += args[i];
        }  */
        //if()
        let roles = ["Admin"]
    //    if(message.mentions.roles() === true){

        message.channel.send("Confirm (Y/N)?");
        const filter = msg => msg.author.id === message.author.id;
        let response = await message.channel.awaitMessages(filter, {time: 5000,max:1 ,errors: ["time"]}).catch()
        let reply = response.map(msg => msg.content.split("Confirm (Y/N)?")).join(" ");
        console.log(reply);
        if(lowerCase(reply) === ", y" || lowerCase(reply) === ", yes"){
            bot.channels.find(channel => channel.name === "game-logs").send(`${message.author}: `+ message_sent);
            message.channel.send(":thumbsup:")
        }else{
            message.channel.send("**Cancelled**");  
        }

 /*       }else{
            message.channel.send("You have to tag a **role** for this command");
        } */ 
        

        

        //bot.channels.get(logs).send("```"+player+":"+message_sent+"```")  ;
}

module.exports.help = { 
    name: "action"
}