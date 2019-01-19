const Discord = require("discord.js");
var lowerCase = require('lower-case');

module.exports.run = async (bot, message, args) => {
    let args_ = lowerCase(args[1]);


    if(args_!=="trickster"||args_!=="houndmaster"||args_!=="cleric"||args_!=="ninja"||args_!== "officer"||args_!=="shapeshifter" ){
        message.channel.send("Check your spelling or visit http://town-of-salem.wikia.com/wiki/Roles for town of salem original roles");
    }else{
        if(args_==="trickster"){
       
        }
        if(args_==="houndmaster"){

        }
        if(args_==="cleric"){

        }
        if(args_==="ninja"){

        }
        if(args_==="officer"){

        }
        if(args_==="shapeshifter"){
            
        }
    }
    

}

module.exports.help = {
    name: "info"
}