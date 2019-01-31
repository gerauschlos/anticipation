const Discord = require("discord.js");
const lowerCase = require('lower-case');
const important = require("../important.js");

module.exports.run = async (bot, message, args) => {
        let message_sent = args[1];
        let location = message.channel.parent.name;

        // If not in correcet category returns
        if(location !== "Player Chats") return;
        if(important.getday()){
            return message.channel.send("You can only use this command at night.");
        }

        //Confirms their action for the night
        message.channel.send("Confirm (Y/N)?");
        const filter = msg => msg.author.id === message.author.id;
        let response = await message.channel.awaitMessages(filter, {
        time: 5000,
        max:1,
        errors: ["time"]
        }).then(collected => {
            let reply = collected.first().content;
            if(lowerCase(reply) === "y" || lowerCase(reply) === "yes"){
            bot.channels.find(channel => channel.name === "game-logs").send(`${message.author}: `+ message_sent);
            message.channel.send(":thumbsup:")
            }else{
            message.channel.send("**Cancelled**");  
           }

        }).catch(err => {
            message.channel.send("**Cancelled**");
        })
}

module.exports.help = { 
    name: "action"
}