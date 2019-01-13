const Discord = require("discord.js");
var previousJailed = require('./jail.js');


module.exports.run = async (bot, message, args) => {
    let match_members = message.guild.roles.get("529053936120758303"); //UPDATED
    if(message.member.roles.some(r=>["God", "Host", "testing"].includes(r.name))){
        message.channel.overwritePermissions(match_members, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true
        })
          .then(updated => console.log(updated.permissionOverwrites.get(match_members)))
          .catch(console.error)
    let cell = "523881129149726721"; //UPDATED
    bot.channels.get(cell).overwritePermissions(previousJailed, {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false
        })
          .then(updated => console.log(updated.permissionOverwrites.get(previousJailed)))
          .catch(console.error)      
        
        message.channel.send("🌄 Sunrise")
    }else{
        message.channel.send(`You are not the host of this game!`);
    }
}

module.exports.help = {
    name: "day"
}