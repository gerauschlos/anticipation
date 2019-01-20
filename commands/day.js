const Discord = require("discord.js");
const important = require("../important.js");


module.exports.run = async (bot, message, args) => {
    
    let chat = " ";
    let match_members = message.guild.roles.get("529053936120758303"); //UPDATED
    if(message.channel.name !== "mainmatch") return;
    if(message.member.roles.some(r=>["Admin", "Host", "Owner", "Programmers"].includes(r.name))){
        message.channel.overwritePermissions(match_members, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true
        })
          .then(updated => console.log(updated.permissionOverwrites.get(match_members)))
          .catch(console.error)   
        
        important.setday(true);
      //  console.log("Important: "+important.getday());
        message.channel.send("🌄 Sunrise")
        
       for(let i=1; i<26; i++ ){
            chat = i.toString();
            message.guild.channels.find(channel => channel.name === chat).send("```-------------------------------- **DAY TIME** ---------------------------------```");
        }

        important.setjailed("no");

    }else{
        message.channel.send(`**Error:** 403 Forbibben`);
    }
    
}

module.exports.help = {
    name: "day"
}