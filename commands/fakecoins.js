const Discord = require('discord.js');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/money", {
    useNewUrlParser: true
});
const Money = require('../models/money.js');

module.exports.run = async (bot, message, args) => {
    //Code
    await message.delete();
    
}

module.exports.help = {
    name: "fakecoins"
}