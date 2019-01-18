const Discord = require("discord.js");
const fs = require ("fs");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let owner = config.Gangster
    if(message.author.id !== owner) {
        message.channel.send(`**Error:** 403 Forbidden.`)
    } else {

        function loadCmds () {
            fs.readdir("./Commands/", (err, files) => {
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
                    let props = require(`./Commands/${f}`);
                    console.log(`Loading ${f}...`);
                    bot.commands.set(props.help.name, props);
                    exports.help
            
                })
            
                console.log(`────────────────────────────────────────`)
            
            })}
        

        loadCmds()
        message.channel.send({embed:{description:"All Commands Reloaded"}})


    }

}


module.exports.help = {
    name: "reload"

}