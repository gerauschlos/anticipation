const Discord = require("discord.js");
var lowerCase = require('lower-case');

module.exports.run = async (bot, message, args) => {
    let args_ = lowerCase(args[1]);

    const embed1 = new Discord.RichEmbed()
    .setAuthor("Hound Master")
    .setTitle("Town Investigative")
    .setColor(0x28F125)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "Yes", true)
    .addField("Info","Gets a single use to select a dead player from the graveyard that had been killed, and sees two people who might be the killer. Will reveal janitor if cleaned. If multiple people killed the player, they will still see three names so if two people attack then it will show two of the killers and an innocent.")
    .setFooter("Custom Role: Hound Master")

    const embed2 = new Discord.RichEmbed()
    .setAuthor("Cleric")
    .setTitle("Town Protective")
    .setColor(0x28F125)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","At night, can select any target. Anyone who visits that target is healed, but the target is not.  Can only target themselves once.")
    .setFooter("Custom Role: Cleric")

    const embed3 = new Discord.RichEmbed()
    .setAuthor("Ninja")
    .setTitle("Neutral Killing")
    .setColor(0x28F125)
    .addField("Attack", "Powerful", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","Can silently kill someone each night. The attack will be astral. If there is TP on the target, the target will be ignored and the TP will be attacked.")
    .setFooter("Custom Role: Ninja")

    const embed4 = new Discord.RichEmbed()
    .setAuthor("Officer")
    .setTitle("Town Killing")
    .setColor(0x28F125)
    .addField("Attack", "Powerful", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","Every night can choose to Patrol at a player's house. If the player goes out to KILL or CONTROL another player, the officer attacks the player with a Powerful attack and will be shown a message about whether or not they attacked their target. The target's action, even if they are attacked, will still happen.")
    .setFooter("Custom Role: Officer")

    const embed5 = new Discord.RichEmbed()
    .setAuthor("Shapeshifter")
    .setTitle("Neutral Evil")
    .setColor(0x28F125)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","Odd Nights: You can harvest someones ability. Even Nights: Use that ability on even nights. You can use that persons ability every even night or harvest someone elses ability. They will get the same result as a witch/consig when they harvest someone. When using another player's ability, the Shapeshifter takes on the attributes of that role.")
    .setFooter("Custom Role: Shapeshifter")

    const embed6 = new Discord.RichEmbed()
    .setAuthor("CEO")
    .setTitle("Corporate Leader")
    .setColor(0x28F125)
    .addField("Attack", "None", true)
    .addField("Defense", "Powerful", true)
    .addField("Unique?", "Yes", true)
    .addField("Info","At night, can increase the value of the underground corporation by selecting themselves every two nights, starting on night 2. Everytime they increase the value of the corporation, ALL members of the Corporate receive +1 level of defense except the CEO. Can only do this 3 times.")
    .setFooter("Custom Role: CEO")    

    const embed7 = new Discord.RichEmbed()
    .setAuthor("Administrator")
    .setTitle("Corporate Panic")
    .setColor(0x28F125)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "Yes", true)
    .addField("Info","Has access to a one-time use ability that, when activated, halves the number of votes needed to put a player on trial. This ability also doubles the value of Guilty votes. Can only be used when there are more “evil” roles than “good” roles.")
    .setFooter("Custom Role: Administrator")

    const embed8 = new Discord.RichEmbed()
    .setAuthor("Executive")
    .setTitle("Corporate Support")
    .setColor(0x28F125)
    .addField("Attack", "None", true)
    .addField("Defense", "Basic", true)
    .addField("Unique?", "No", true)
    .addField("Info","At night, can select any player (including Corporates) and use their ability on a random non-Corporate member. You will be told the role of the player you use the ability of. This role does not visit the randomly selected target but does visit the initial target.")
    .setFooter("Custom Role: Executive")

    const embed9 = new Discord.RichEmbed()
    .setAuthor("Security")
    .setTitle("Corporate Killing")
    .setColor(0x28F125)
    .addField("Attack", "Powerful", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","At night, can select a Corporate member and attack all visitors that visit that member with a Powerful attack on a single night. This will cause the Security to die as well. If the target is attacked, the Security is attacked instead (similar to how Bodyguard functions).")
    .setFooter("Custom Role: Security")

    const embed10 = new Discord.RichEmbed()
    .setAuthor("Mercenary")
    .setTitle("Corporate Killing")
    .setColor(0x28F125)
    .addField("Attack", "Basic", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","At night, may select a non-Corporate player. If that player is neutral or Corporate, the selected player receives Basic defense for the night. If the selected player is any other faction or alignment, the Mercenary attacks the player with a Basic attack.")
    .setFooter("Custom Role: Mercenary")

    const embed11 = new Discord.RichEmbed()
    .setAuthor("Interrogator")
    .setTitle("Corporate Support")
    .setColor(0x28F125)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","At night, can select to visit a player. If that player is visited by any other player (besides the Interrogator), one random visitor is selected and has their role revealed to the Interrogator. The player that is interrogated also is blackmailed the day afterward.")
    .setFooter("Custom Role: Interrogator")

    const embed12 = new Discord.RichEmbed()
    .setAuthor("Recruiter")
    .setTitle("Corporate Support")
    .setColor(0x28F125)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "Yes", true)
    .addField("Info","Has access to a single time ability that has a 50% chance to convert a player to Security for the Corporate. Can only be used once the Corporate loses a member. Will have a 0% chance of success if the player is part of the Mafia, part of the Coven, part of the Vampires, or has Basic or higher defense.")
    .setFooter("Custom Role: Recruiter")

    const embed13 = new Discord.RichEmbed()
    .setAuthor("Frauder")
    .setTitle("Corporate Support")
    .setColor(0x28F125)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","At night, can select a non-Corporate player. That player is roleblocked for the night and has their Guilty and Innocent votes reversed for the day afterward. Target will not know their votes are reversed but will be notified of a roleblock.")
    .setFooter("Custom Role: Frauder")

    const embed14 = new Discord.RichEmbed()
    .setAuthor("Corrupter")
    .setTitle("Corporate Panic")
    .setColor(0x28F125)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "Yes", true)
    .addField("Info","Granted a one-time ability that can be activated during the day while a Corporate member is on trial. When used, day instantly ends and the Corporate member is pardoned off the stand.")
    .setFooter("Custom Role: Corrupter")

    const embed15 = new Discord.RichEmbed()
    .setAuthor("Saboteur")
    .setTitle("Mafia Support")
    .setColor(0xff0000)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "No", true)
    .addField("Info","At night, can select a player at night to “weaken” them. Cannot select the same player two nights in a row. Weakening: Doctor’s heal can’t cure poison, Killing roles are roleblocked and Investigative roles receive more roles to choose from.")
    .setFooter("Custom Role: Saboteur")

    const embed16 = new Discord.RichEmbed()
    .setAuthor("Swapper")
    .setTitle("Neutral Chaos")
    .setColor(0xa7587f)
    .addField("Attack", "None", true)
    .addField("Defense", "None", true)
    .addField("Unique?", "Yes", true)
    .addField("Info","Each night can choose to swap the abilities of two players for one night. Players are notified if they had an ability swap.")
    .setFooter("Custom Role: Swapper")

    const embed17 = new Discord.RichEmbed()
    .setAuthor("Dracolich")
    .setTitle("Neutral Killing")
    .setColor(0x855523)
    .addField("Attack", "Unstoppable", true)
    .addField("Defense", "Invincible", true)
    .addField("Unique?", "Yes", true)
    .addField("Info","Can visit two players a night and “Mark” them for rapture. Once all currently alive players have been “Marked”, the town will receive a message saying “The day of judgment approaches! The town will die in 2 days!” Once this happens, the town has a 2 days timer before all “Marked” players die. This time stops if the Dracolich is killed. The Dracolich loses its Invincible defense once it has successfully “Marked” all players. Players who are “Unmarked” that visit a “Marked” player are “Marked”.")
    .setFooter("Custom Role: Dracolich")

    if(args_!==" trickster" && args_!==" houndmaster" && args_!==" cleric" && args_!==" ninja" && args_!== " officer" && args_!==" shapeshifter" && args_!==" ceo" && args_!==" administrator" && args_!==" executive" && args_!== " security" && args_!==" mercenary" && args_!==" interrogator" && args_!==" recruiter" && args_!==" frauder" && args_!==" corrupter" && args_!==" saboteur"  && args_!==" swapper" && args_!==" dracolich") {
        message.channel.send(`Visit http://town-of-salem.wikia.com/wiki/Roles for the original roles.`);
    } else {
        if(args_===" trickster") {
            message.channel.send(`(node:6969) DeprecationWarning: This role is deprecated!`)
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
        if(args_===" ceo") {
            message.channel.send(embed6)
        }
        if(args_===" administrator") {
            message.channel.send(embed7)
        }
        if(args_===" executive") {
            message.channel.send(embed8)
        }
        if(args_===" security") {
            message.channel.send(embed9)
        }
        if(args_===" mercenary") {
            message.channel.send(embed10)
        }
        if(args_===" interrogator") {
            message.channel.send(embed11)
        }
        if(args_===" recruiter") {
            message.channel.send(embed12)
        }
        if(args_===" frauder") {
            message.channel.send(embed13)
        }
        if(args_===" corrupter") {
            message.channel.send(embed14)
        }
        if(args_===" saboteur") {
            message.channel.send(embed15)
        }
        if(args_===" swapper") {
            message.channel.send(embed16)
        }
        if(args_===" dracolich") {
            message.channel.send(embed17)
        }
        
    }
    

}

module.exports.help = {
    name: "info"
}