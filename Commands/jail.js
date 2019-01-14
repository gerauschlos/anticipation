const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    let general_chat = "mainmatch";
    let deadchat = "graveyard"
    let location = message.channel.name;
   
    
    if(location === general_chat || location === deadchat) return;
    console.log("YES");

<<<<<<< HEAD
    if(message.member.roles.some(r=>["Testers", "Host", "Admin"].includes(r.name))){
=======
    if(message.member.roles.some(r=>["Host", "Admin", "Owner"].includes(r.name))){
>>>>>>> 6eab823d576c7e5c6a502549f05283f31cc7d2fc
        let tagged = message.mentions.roles.first();
        let jailed = tagged.id;

        let cell = tagged.name; //UPDATED   
        jailed = tagged;
<<<<<<< HEAD
        
        message.guild.channels.find(channel => channel.name === cell).send(`${jailed} you have been jailed`);
        message.guild.channels.find(channel => channel.name === cell).send("Use '!?send [message]' to talk to the jailor");
        message.channel.send(`${message.author} You have successfully jailed the user`); 
        exports.person = jailed; return 
=======
        bot.channels.get(cell).send(`${jailed} you have been jailed`);
        bot.channels.get(cell).send("Use '>send [message]' to talk to the jailor");
        message.channel.send(`${jailed} has been jailed`);  
>>>>>>> 6eab823d576c7e5c6a502549f05283f31cc7d2fc
    }
}

module.exports.help = {
    name: "jail"
}