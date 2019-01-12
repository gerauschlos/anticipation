const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let Jailor = message.guild.roles.get("532752296593981452");
    if(message.member.roles.some(r=>["new role", "Host"].includes(r.name))){
        let tagged = message.mentions.users.first();
        let jailed = tagged.id;
        message.channel.overwritePermissions(jailed, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        }) 
    }
}

module.exports.help = {
    name: "unjail"
}