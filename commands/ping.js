const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let pingMessage = await message.channel.send(`Ping is being calculated! :bar_chart:`);
    let brt = Math.round(pingMessage.createdTimestamp - message.createdTimestamp);
    let api = Math.round(bot.ping);
    let yl = Math.round(brt - api);

    pingMessage.edit(`:hourglass: Bot Respond Time: ${brt}ms\n:robot: API Latency: ${api}ms\n:label: Your Latency: ${yl}ms`);
}

module.exports.help = {
    name: "ping" // To-Do: Add alias = "Pong";
}