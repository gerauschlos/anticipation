const Discord = require("discord.js");
const important = require("../important.js");

module.exports.run = async (bot, message, args) => {
    let cell = "Does it even matter?";
    let location = message.channel.name;
    let tagged = message.mentions.roles.first();
    if(tagged === undefined){
    message.channel.send("You have to mention a **playerrole** for this command to work");
    return;
    }else{
        for(let i = 0; i<26; i++ ){
            cell = tagged.name; 
            if(i.toString() === cell){
                break;
            }else{
                if(i === 25){
                   message.channel.send("You have to mention a **playerrole** for this command to work");
                   return;
                }
            }
        }
    }



    
    if(location !== "jail") return;
    if(important.getday() === false){
        message.channel.send("This command cannot be used in the night :grimacing:");
        return;
    }
    

    if(message.member.roles.some(r=>["Host", "Admin", "Owner", important.jailor].includes(r.name))){
            
        let jailed = cell.toString();
        important.setjailed(jailed);  
    }

}

module.exports.help = {
    name: "jail"
}