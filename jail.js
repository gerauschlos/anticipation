const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let Jailor = message.guild.roles.get("532752296593981452");
    if(message.member.roles.some(r=>["new role", "Host"].includes(r.name))){
        let tagged = message.mentions.users.first();
        let jailed = tagged.id;
        message.channel.overwritePermissions(jailed, {
            SEND_MESSAGES: true,
            READ_MESSAGE_HISTORY: false
        })
        message.channel.send(`${message.author} Please remember to unjail them at day`);  
    }
}

module.exports.help = {
    name: "jail"
}