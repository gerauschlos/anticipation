const Discord = require("discord.js");
const config = require ("./config.json");
const bot = new Discord.Client({disableEveryone: true});
const fs = require ("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    // Every file in command folder is a command (it counts how much files)
    if(jsfile.length <= 0){
        console.log("No commands were found!");
        return;
    }

    jsfile.forEach((f, i) => {
        // The files created are shown in the terminal
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        exports.help
    })
})

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("Prefix is '>'!", {type: "STREAMING"});
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