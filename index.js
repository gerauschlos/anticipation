const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');

const bot = new Discord.Client({
	// no idea what the fuck this does
    disableEveryone: true
});

bot.commands = new Discord.Collection();

// Load the commands from the commands subdirectory
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
	
	// No commands found, throw an error and quit
    if (jsfile.length <= 0) {
        console.log("No commands were found. Add commands to the Command folder, and try again.");
        return;
    }

    console.log(`Loading Commands...`)
    console.log(`────────────────────────────────────────`)
	
	// Load the stuff from each file
    jsfile.forEach((f, i) => {

        let props = require(`./commands/${f}`);
        console.log(`Loading ${f}...`);
        bot.commands.set(props.help.name, props);
        exports.help

    })

    console.log(`────────────────────────────────────────`)

})

// Ran on receiving a message
bot.on('message', async message => {
    let prefix = config.prefix;

	// If the message is from the bot, doesn't start with the prefix, or
	// is a DM to the bot, then we can safely ignore it
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

	// Split the messasge into the command and the arguments
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.split(cmd); // not safe, will fuck everything up if one of the args is the command
	                                       // this looks like it returns a length 1 array with 1 string inside no matter what - is this right?
    
	// Run the command. Is there any way to edit variables in this particular scope while in the command scope?
	// If not, we should look for a different approach - that's gonna be important when it comes to voting
    if (message.content.startsWith(prefix)) {
        let commandfile = bot.commands.get(cmd.slice(prefix.length));
        if (commandfile) commandfile.run(bot, message, args);
    }
});

bot.on('ready', async () => {
    console.log(`Anticipation is now ready to receive commands.`);
	// sets the prefix in the status
    bot.user.setPresence({
        game: {
            name: '| Prefix: ?',
            type: 'PLAYING',
        },
        status: 'online',
        afk: false,
    }).catch(err => console.log(err));
});

bot.login(config.token);
