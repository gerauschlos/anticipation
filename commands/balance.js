//Eco Command
const Discord = require('discord.js')
const fs = require('fs')

module.exports.run = async (bot, message, args) => {

    let userData = JSON.parse(fs.readFileSync('./Storage/userData.json', 'utf-8'));
    let sender = message.author

    message.channel.send({embed:{
        title: "Bank",
        color: 0xF1C40F, 
        fields:[{
            name:"Account Holder",
            value:message.author.username,
            inline:true
        },
        {
            name:"Account Balance",
            value:userData[sender.id + message.guild.id].money,
            inline:true
        }]
    }})

}

module.exports.help = {
    name: 'balance',
    aliases: 'bal'
}