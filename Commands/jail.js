const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    let general_chat = "mainmatch";
    let deadchat = "graveyard"
    let location = message.channel.name;
    let message_sent = ''; 
    let message_channel = message.channel.id;
    let jailor_channel = "533791950080573440";//UPDATED
    let tagged = message.mentions.roles.first();
    let jailed = tagged;
    let cell = tagged.name; //UPDATED   
    
    if(location === general_chat || location === deadchat) return;

  
    for(let i=3; i<args.length; i++ ){
         message_sent += args[i];
         console.log(message_sent);
    }

    if(message.member.roles.has(r=>[cell,"Host", "Admin"])){
    if(args[0] === "send"){
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

    if(message.member.roles.some(r=>["Host", "Admin", "Owner"].includes(r.name))){
        
        message.guild.channels.find(channel => channel.name === cell).send(`${jailed}: You are jailed!`);
        message.guild.channels.find(channel => channel.name === cell).send("Use '!?send [message]' to talk to the jailor");
        message.channel.send(`${message.author}: Your target was jailed!`);  
    }

}

module.exports.help = {
    name: "jail"
}