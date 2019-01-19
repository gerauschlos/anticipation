const Discord = require("discord.js");
const fs = require ("fs");
const config = require('../config.json');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


module.exports.run = async (bot, message, args) => {

    let owner = config.Gangster
    let Silent = config.x88silent
    if(message.author.id !== owner && message.author.id !== Silent) {
        message.channel.send(`**Error:** 403 Forbidden.`)
    } else {

        function loadCmds () {
            fs.readdir("commands/", (err, files) => {
                if (err) console.log(err);
            
                let jsfile = files.filter(f => f.split(".").pop() === "js");
                // Every file in command folder is a command (it counts how much files)
                if(jsfile.length <= 0){
                    console.log("No commands were found. Add commands to the Commands folder, and try again.");
                    return;
                }
            
                console.log(`Loading Commands...`)
                console.log(`────────────────────────────────────────`)
            
                jsfile.forEach((f, i) => {
                    // The files created are shown in the terminal
                    let props = require(`../commands/${f}`);
                    console.log(`Loading ${f}...`);
                    bot.commands.set(props.help.name, props);
                    exports.help
            
                })
            
                console.log(`────────────────────────────────────────`)
            
            })}
        

        loadCmds()
        message.channel.send({embed:{description:"All Commands Reloaded"}});


    }

}


module.exports.help = {
    name: "reload"

}