const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const clean = text => {
        if (typeof (text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
    if (message.author.id !== config.ownerIDs1 && message.author.id !== config.ownerIDs2) return message.channel.send('io mate stop tryna use the command');
    try {
        await message.delete();
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string") {
            evaled = require('util').inspect(evaled);
        }
    
        message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
        console.log(err);
    }
}

module.exports.help = {
    name: "eval"
}