const Discord = require("discord.js");
const fs = require ("fs");
const important = JSON.parse(fs.readFileSync('important.json', 'utf-8'))


module.exports.run = async (bot, message, args) => {
    
    let chat = " ";
    let match_members = message.guild.roles.get("529053936120758303"); //UPDATED
    if(message.channel.name !== "mainmatch") return;
    if(message.member.roles.some(r=>["Administrator", "Host", "Owner", "Programmers"].includes(r.name))){
        message.delete().catch();
        message.channel.overwritePermissions(match_members, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true
        })
          .then(updated => console.log(updated.permissionOverwrites.get(match_members)))
          .catch(console.error)   
        
        important._day = true;
        fs.writeFile('important.json',JSON.stringify(important),'utf8',(err) => {
            if (err) throw err;
        console.log("Saved.");
        });
      //  console.log("Important: "+important.getday());
        message.delete().catch();
        message.channel.send("🌄 Sunrise"+` <@&529053936120758303>`)

        important._jailed = "noone";

    } else {
        message.channel.send(`**Error:** 403 Forbibben`);
    }
    
}

module.exports.help = {
    name: "day"
}