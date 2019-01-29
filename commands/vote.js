const Discord = require("discord.js");
const important = require("../important.js");

module.exports.run = async (bot, message, args) => {
        var player = new Map();

        player.set("1", "Etiketi")
        player.set("2", "Gangster")
        player.set("3", "steve")
        player.set("4", "Your target is the leader of a massive corporation! They must be the CEO!")
        player.set("5", "Your target wants to kill everyone. They must be a Serial Killer.")
        player.set("6", "Your target has trained a bloodhound to assist in criminal justice. They must be the Houndmaster!")
        player.set("7", "Your target detains people at night. They must be a Jailor.")
        player.set("8", "Your target simply wants to live. They must be a Survivor.")
        player.set("9", "Your target keeps a watchful eye on their employer, they must be Security!")
        player.set("10", "Your target is able to pardon one of their fellow workers. They must be the Corrupter.")
        player.set("11", "Your target has the sight. They must be a Psychic.")
        player.set("12", "Your target casts spells on people. They must be a Witch.")
        player.set("13", "Your target wants to be lynched. They must be a Jester.")
        player.set("14", "Your target has a mystical ability to swap two players' skills! They must be a Swapper!")
        player.set("15", "Your target is a divine protector. They must be a Crusader.")
        player.set("16", "Your target watches the deeds of those who it shadows. They must be an Officer!")
        player.set("17", "Your target is the leader of the Town. They must be the Mayor.")
        player.set("18", "Your target is a divine protector. They must be a Crusader.")
        player.set("19", "Your target is a harbringer of destruction and an ill-omen to the town! They must be the Dracolich!")
        player.set("20", "Your target influences those around them to steal their abilities! They must be an Executive!")

        if(location !== "Player Chats"){ 
                
            return message.channel.send("This command only works in your player chat");
            
        }

        if(imporant.gettrial() === "noone"){

            let playername = message.mentions.roles().name;
            bot.channels.find(channel => channel.name === "mainmatch").send(`**${message.author.username} has voted against `+playername+"**");
            

        }else{
            
            message.channel.send("Confirm (Y/N)?");
            const filter = msg => msg.content.split("Confirm (Y/N)?");
            let response = await message.channel.awaitMessages(filter, {time: 5000,max:2 ,errors: ["time"]});
            let reply = response.map(msg => msg.content.split("Confirm (Y/N)?")).join(" ");
            if(lowerCase(reply) === ", Guilty" || lowerCase(reply) === ", Inno"){

            }else{
                message.channel.send("**Command has been cancelled**");
            }
        }
       
    

}

module.exports.help = {
    name : "vote"
}
  
