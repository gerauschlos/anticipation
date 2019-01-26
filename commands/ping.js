const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
//    let location = message.channel.name;
//    console.log(`Location: ${location}`);
    message.channel.send(`Pong! | API Latency is ${Math.round(bot.ping)}ms`)

// Using Map.prototype.set(k, v) 
// creating an empty map 
var map1 = new Map(); 
  
// adding some elements to the map  
map1.set("first name", "sumit"); 
map1.set("last name", "ghosh"); 
map1.set("website", "geeksforgeeks") 
    .set("friend 1","gourav") 
    .set("friend 2","sourav"); 
  
// map1 contains  
// "first name" => "sumit" 
// "last name" => "ghosh" 
// "website" => "geeksforgeeks" 
// "friend 1" => "gourav" 
// "friend 2" => "sourav" 
console.log(map1.get("last name")); 
}
module.exports.help = {
    name: "ping"
}