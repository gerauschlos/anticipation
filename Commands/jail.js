const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let general_chat = "mainmatch";
    let deadchat = "graveyard"
    let location = message.channel.name;

    
    if(location === general_chat || location === deadchat) return;
    console.log("YES");

    if(message.member.roles.some(r=>["testing", "Host", "God"].includes(r.name))){
        let tagged = message.mentions.roles.first();
        let jailed = tagged.id;
 //       console.log(jailed);
        let cell = "523881129149726721"; //UPDATED
         //     exports.person = jailed;
        bot.channels.get(cell).overwritePermissions(jailed, {
            SEND_MESSAGES: true,
            READ_MESSAGE_HISTORY: false,
            READ_MESSAGES: true,
        })
          .then(updated => console.log(updated.permissionOverwrites.get(jailed)))
          .catch(console.error)   
        jailed = tagged;
        bot.channels.get(cell).send(`${jailed} you have been jailed`);
        bot.channels.get(cell).send("Use '>send [message]' to talk to the jailor");
        message.channel.send(`${message.author} You have successfully jailed ${jailed}`);  
    }
}

module.exports.help = {
    name: "jail"
}