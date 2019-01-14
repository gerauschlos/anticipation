const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    let general_chat = "mainmatch";
    let deadchat = "graveyard"
    let location = message.channel.name;
   
    
    if(location === general_chat || location === deadchat) return;
    console.log("YES");

    if(message.member.roles.some(r=>["Host", "Admin", "Owner"].includes(r.name))){
        let tagged = message.mentions.roles.first();
        let jailed = tagged.id;

        let cell = tagged.name; //UPDATED   
        jailed = tagged;
        
        message.guild.channels.find(channel => channel.name === cell).send(`${jailed} you have been jailed`);
        message.guild.channels.find(channel => channel.name === cell).send("Use '!?send [message]' to talk to the jailor");
        message.channel.send(`${message.author} You have successfully jailed the user`);  
    }
}

module.exports.help = {
    name: "jail"
}