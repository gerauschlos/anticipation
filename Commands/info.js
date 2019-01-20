const Discord = require("discord.js");
var lowerCase = require('lower-case');

module.exports.run = async (bot, message, args) => {
    let args_ = lowerCase(args[1]);

    const embed1 = new Discord.RichEmbed()
    .setAuthor("Hound Master")
    .setTitle("Town Investigative")
    .setColor(0xff0000)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "Yes", true)
    .addField("Info","Gets a single use to select a dead player from the graveyard that had been killed, and sees two people who might be the killer. Will reveal janitor if cleaned. If multiple people killed the player, they will still see three names so if two people attack then it will show two of the killers and an innocent.")
    .setFooter("Custom Role: Hound Master")

    const embed2 = new Discord.RichEmbed()
    .setAuthor("Cleric")
    .setTitle("Town Protective")
    .setColor(0xff0000)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","At night, can select any target. Anyone who visits that target is healed, but the target is not.  Can only target themselves once.")
    .setFooter("Custom Role: Cleric")

    const embed3 = new Discord.RichEmbed()
    .setAuthor("Ninja")
    .setTitle("Neutral Killing")
    .setColor(0xff0000)
    .addField("Attack", "Powerful", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","Can silently kill someone each night. The attack will be astral. If there is TP on the target, the target will be ignored and the TP will be attacked.")
    .setFooter("Custom Role: Ninja")

    const embed4 = new Discord.RichEmbed()
    .setAuthor("Officer")
    .setTitle("Town Killing")
    .setColor(0xff0000)
    .addField("Attack", "Powerful", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","Every night can choose to Patrol at a player's house. If the player goes out to KILL or CONTROL another player, the officer attacks the player with a Powerful attack and will be shown a message about whether or not they attacked their target. The target's action, even if they are attacked, will still happen.")
    .setFooter("Custom Role: Officer")

    const embed5 = new Discord.RichEmbed()
    .setAuthor("Shapeshifter")
    .setTitle("Neutral Evil")
    .setColor(0xff0000)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","Odd Nights: You can harvest someones ability. Even Nights: Use that ability on even nights. You can use that persons ability every even night or harvest someone elses ability. They will get the same result as a witch/consig when they harvest someone. When using another player's ability, the Shapeshifter takes on the attributes of that role.")
    .setFooter("Custom Role: Shapeshifter")

    if(args_!==" trickster" && args_!==" houndmaster" && args_!==" cleric" && args_!==" ninja" && args_!== " officer" && args_!==" shapeshifter" ) {
        message.channel.send(`Visit http://town-of-salem.wikia.com/wiki/Roles for the original roles.`);
    } else {
        if(args_===" trickster") {
            message.channel.send(`(node:696969) DeprecationWarning: This role is deprecated!`)
        }
        if(args_===" houndmaster") {
            message.channel.send(embed1)
        }
        if(args_===" cleric") {
            message.channel.send(embed2)
        }
        if(args_===" ninja") {
            message.channel.send(embed3)
        }
        if(args_===" officer") {
            message.channel.send(embed4)
        }
        if(args_===" shapeshifter") {
            message.channel.send(embed5)
        }
    }
    

}

module.exports.help = {
    name: "info"
}