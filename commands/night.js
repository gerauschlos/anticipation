const Discord = require("discord.js");
const fs = require ("fs");
const important = JSON.parse(fs.readFileSync('important.json', 'utf-8'))


module.exports.run = async (bot, message, args) => {
    // console.log("Important: "+important.getday());
    let cell = important._jailed;
    
    let match_members = message.guild.roles.get("529053936120758303"); //UPDATED
    if(message.channel.name !== "mainmatch") return;
    if(message.member.roles.some(r=>["Administrator", "Host", "Owner"].includes(r.name))){
        message.delete().catch();
        message.channel.overwritePermissions(match_members, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: false
        })
          .then(updated => console.log(updated.permissionOverwrites.get(match_members)))
          .catch(console.error)
        message.delete().catch();
        message.channel.send("🌃 Sunset"+` <@&529053936120758303>`);
        important._day = false;
        fs.writeFile('important.json',JSON.stringify(important),'utf8',(err) => {
        if (err) throw err;
        console.log("Saved.");
    });
        if(cell !== "noone"){
            message.guild.channels.find(channel => channel.name === cell).send("You have been jailed")
            message.guild.channels.find(channel => channel.name === cell).send("Use '!?send [message]' to talk to the jailor")
            message.guild.channels.find(channel => channel.name === "jail").send("You have successfully jailed the user")
        }else{
            message.guild.channels.find(channel => channel.name === "jail").send(`You forgot to jail someone :weary:`)
        }        
    } else {
        message.channel.send(`**Error:** 403 Forbidden`);
    }
}

module.exports.help = {
    name: "night"
}