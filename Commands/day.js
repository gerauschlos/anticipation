const Discord = require("discord.js");
var previousJailed = require('./jail.js');


module.exports.run = async (bot, message, args) => {
    
    let match_members = message.guild.roles.get("529053936120758303"); //UPDATED

    if(message.member.roles.some(r=>["Admin", "Host", "Owner"].includes(r.name))){
        message.channel.overwritePermissions(match_members, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true
        })
          .then(updated => console.log(updated.permissionOverwrites.get(match_members)))
          .catch(console.error)   
        
        message.channel.send("🌄 Sunrise")
        
        for(let i=0; i<26; i++ ){
            message.guild.channels.find(channel => channel.name === i).send(`---------------------------------**DAY TIME**----------------------------------`);
        }

    }else{
        message.channel.send(`You are not the host of this game!`);
    }
    
}

module.exports.help = {
    name: "day"
}