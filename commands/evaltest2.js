const Discord = require('discord.js');
const config = require('../config.json');
const { inspect } = require('util');

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== config.ownerIDs1 && message.author.id !== config.ownerIDs2) return message.channel.send('io mate stop tryna use the command');

    let evaled;
    try {
        await message.delete();
        evaled = await eval(args.join(' '));
        message.channel.send(inspect(evaled));
        console.log(inspect(evaled));
    }
    catch (err) {
        console.error(err);
        message.channel.send('There was an error during evaluation.');
    }
}

module.exports.help = {
    name: "eval2"
}