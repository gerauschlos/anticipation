const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');

const bot = new Discord.Client({
    disableEveryone: true
});

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");

    if (jsfile.length <= 0) {
        console.log("No commands were found. Add commands to the Command folder, and try again.");
        return;
    }

    console.log(`Loading Commands...`)
    console.log(`────────────────────────────────────────`)

    jsfile.forEach((f, i) => {

        let props = require(`./commands/${f}`);
        console.log(`Loading ${f}...`);
        bot.commands.set(props.help.name, props);
        exports.help

    })

    console.log(`────────────────────────────────────────`)

})

bot.on('message', async message => {
    let prefix = config.prefix;

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.split(cmd);

    if (message.content.startsWith(prefix)) {
        let commandfile = bot.commands.get(cmd.slice(prefix.length));
        if (commandfile) commandfile.run(bot, message, args);
    }
});

bot.on('ready', async () => {
    console.log(`Anticipation is now ready to receive commands.`);
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