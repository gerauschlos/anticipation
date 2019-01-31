const Discord = require("discord.js");
const important = require("../important.js");

module.exports.run = async (bot, message, args) => {

    let location = message.channel.name;
    let tagged = message.mentions.roles;
    let cell = tagged.name;  

    if(important.getday() === false){
        message.channel.send("This command cannot be used in the night :grimacing:");
        return;
    }
    
    if(location !== "jail") return;

    if(message.member.roles.some(r=>["Host", "Admin", "Owner", important.jailor].includes(r.name))){
        let jailed = cell.toString();
        important.setjailed(jailed);  
    }

}

module.exports.help = {
    name: "jail"
}