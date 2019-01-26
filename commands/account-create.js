const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    let sender = message.author
    let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf-8'));
    
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 0;
    
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
        if (err) console.error(err)

})

}

module.exports.help = {
    name: "open-account"
}