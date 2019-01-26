const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    let sender = message.author
    let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf-8'));

    if (!userData[sender.id + message.guild.id]) {
        userData[sender.id + message.guild.id] = {}
        userData[sender.id + message.guild.id].money = 0;
        message.channel.send(`✅ Account Created! Use !balance to check your balance.`)
        
        fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
            if (err) console.error(err)

      return;
    })

    if(userData[sender.id + message.guild.id]) {
        message.channel.send(`You already have a account! <:ree:538562884909662223>`)
        return
    }
}

}

module.exports.help = {
    name: "open-account"
}