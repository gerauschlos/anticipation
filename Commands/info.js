const Discord = require("discord.js");
var lowerCase = require('lower-case');

module.exports.run = async (bot, message, args) => {
    let args_ = lowerCase(args[1]);


    if(args_!=="trickster"||args_!=="houndmaster"||args_!=="cleric"||args_!=="ninja"||args_!== "officer"||args_!=="shapeshifter" ){
        message.channel.send(args_);
    }
    

}

module.exports.help = {
    name: "info"
}