const Discord = require("discord.js");
const important = require("../important.js");


module.exports.run = async (bot, message, args) => {
    // console.log("Important: "+important.getday());
    let cell = important.getjailed();
    console.log(important.getjailed());
    let eachChannel = "wow";
    let match_members = message.guild.roles.get("529053936120758303"); //UPDATED
    if(message.channel.name !== "mainmatch") return;
    if(message.member.roles.some(r=>["Admin", "Host", "Owner"].includes(r.name))){
        message.channel.overwritePermissions(match_members, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: false
        })
          .then(updated => console.log(updated.permissionOverwrites.get(match_members)))
          .catch(console.error)
        message.delete().catch();
        message.channel.send("🌃 Sunset"+`@Players`);
        important.setday(false);
        if(cell !== "no"){
            message.guild.channels.find(channel => channel.name === cell).send("You have been jailed")
            message.guild.channels.find(channel => channel.name === cell).send("Use '!?send [message]' to talk to the jailor")
            message.guild.channels.find(channel => channel.name === "jail").send("You have successfully jailed the user")
        }else{
            message.guild.channels.find(channel => channel.name === "jail").send(`You forgot to jail someone :weary:`)
        }
        
       for(let i=1; i<26; i++ ){
            eachChannel = i.toString();
          //  console.log(eachChannel);
            message.guild.channels.find(channel => channel.name === eachChannel).send("```----------------------- **NIGHT TIME** -----------------------```")
        }              
    } else {
        message.channel.send(`**Error:** 403 Forbidden`);
    }
}

module.exports.help = {
    name: "night"
}