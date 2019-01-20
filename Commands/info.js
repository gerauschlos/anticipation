const Discord = require("discord.js");
var lowerCase = require('lower-case');

module.exports.run = async (bot, message, args) => {
    let args_ = lowerCase(args[1]);


    if(args_!=="trickster"||args_!=="houndmaster"||args_!=="cleric"||args_!=="ninja"||args_!== "officer"||args_!=="shapeshifter" ){
        message.channel.send(`Visit http://town-of-salem.wikia.com/wiki/Roles for the original roles.`);
    }else{
        if(args_==="trickster"){
            message.channel.send(`**Trickster:** Attack: None | Defense: None | Mafia Support | 
            Can select a dead person and use their ability on anyone at night. Works for every role except unique town roles. can only select the same person once.`)
        }
        if(args_==="houndmaster"){
            message.channel.send(`**Houndmaster:**  Attack: None | Defense: None | Town Investigative | Unique
            Gets a single use to select a dead player from the graveyard that had been killed, and sees two people who might be the killer. Will reveal janitor if cleaned. If multiple people killed the player, they will still see three names so if two people attack then it will show two of the killers and an innocent.`)
        }
        if(args_==="cleric"){
            message.channel.send(`**Cleric:** Attack: None | Defense: None | Town Protective | Unique
             At night, can select any member of the town. Anyone who visits that target is healed, but the target is not.  Can only target themselves once.`)
        }
        if(args_==="ninja"){
            message.channel.send(`**Ninja:** Attack: Powerful | Defense: None | Neutral Killing |  
            Can silently kill someone each night. The attack will be astral. If there is TP on the target, the target will be ignored and the TP will be attacked.`)
        }
        if(args_==="officer"){
            message.channel.send(`**Officer:** Attack: Powerful | Defense: None | Town Killing | 
            Every night can choose to Patrol at a player's house. If the player goes out to KILL or CONTROL another player, the officer attacks the player with a Powerful attack and will be shown a message about whether or not they attacked their target. The target's action, even if they are attacked, will still happen.`)
        }
        if(args_==="shapeshifter"){
            message.channel.send(`**Shapeshifter:** Attack: None | Defense: Basic | Neutral Evil | 
            Odd Nights: You can harvest someones ability.
            Even Nights: Use that ability on even nights.
            You can use that persons ability every even night or harvest someone elses ability.
            They will get the same result as a witch/consig when they harvest someone. 
            When using another player's ability, the Shapeshifter takes on the attributes of that role.`)
        }
    }
    

}

module.exports.help = {
    name: "info"
}