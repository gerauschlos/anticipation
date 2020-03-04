const discord = require('discord.js');
const inquirer = require('inquirer');
const fs = require('fs');
const config = require('./config.json');

const bot = new discord.Client({
	// Create discord client, disable the @everyone tag from being abused.
    disableEveryone: true
});

bot.commands = new discord.Collection();

// Load the commands from the commands subdirectory.
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
	
    // If no commands are found, ask if to continue, or to exit.
    if (jsfile.length <= 1) {
        inquirer.prompt({
            name: 'startupconfirmation',
            type: 'confirm',
            message: 'No commands were found. Continue to start the bot?',
        }).then(answers => {
            jsfile.forEach((f, i) => {

                let props = require(`./commands/${f}`);
                console.log(`Loading ${f}...`);
                bot.commands.set(props.help.name, props);
                exports.help
        
            })
        })
    }
	
	// Load the stuff from each file


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