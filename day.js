const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
    let rolename = message.guild.roles.get("460976106049110018");
    if(message.member.roles.some(r=>["Programmers", "Host"].includes(r.name))){
        message.channel.overwritePermissions(rolename, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true
        })
          .then(updated => console.log(updated.permissionOverwrites.get(rolename)))
          .catch(console.error)
    let Channel = "460953238670147587";
    bot.channels.get(Channel).overwritePermissions(rolename, {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false
        })
          .then(updated => console.log(updated.permissionOverwrites.get(rolename)))
          .catch(console.error)      
        
        message.channel.send("**It is now day time!**")
    }else{
        message.channel.send(`You are not the host of this game!`);
    }
}

module.exports.help = {
    name: "day"
}
