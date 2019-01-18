const Discord = require("discord.js");
const config = require ("./config.json");
const bot = new Discord.Client({disableEveryone: true});
const fs = require ("fs");
bot.commands = new Discord.Collection();

function loadCmds () {
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    // Every file in command folder is a command (it counts how much files)
    if(jsfile.length <= 0){
        console.log("No commands were found. Add commands to the Command folder, and try again.");
        return;
    }

    console.log(`Loading Commands...`)
    console.log(`────────────────────────────────────────`)

    jsfile.forEach((f, i) => {
        // The files created are shown in the terminal
        let props = require(`./commands/${f}`);
        console.log(`Loading ${f}...`);
        bot.commands.set(props.help.name, props);
        exports.help

    })

    console.log(`────────────────────────────────────────`)

})}

loadCmds();

bot.on("ready", async () => {
    console.log(`Town of Salem: ${bot.user.username} - Online!`)
    bot.user.setActivity("Prefix is '!?'", {type: "PLAYING"});
});

bot.on("message", async message => {
    let prefix = config.prefix;
    

    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = message.content.split(cmd); 

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

});

bot.login(config.token);