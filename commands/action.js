const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
        let message_sent = args[1];
        let logs = "533777407354601472"; //UPDATED
        let general_chat = "523693033825501190"; //UPDATED
        let location = message.channel.parent.name;
        let player = `${message.author.username}`;
        var role = new Map();

        role.set("1", "Your target speaks with the dead. They must be a Medium.")
        role.set("2", "Your target is skilled in the art of tracking. They must be a Tracker.")
        role.set("3", "Your target is a paranoid war hero. They must be a Veteran.")
        role.set("4", "Your target is the leader of a massive corporation! They must be the CEO!")
        role.set("5", "Your target wants to kill everyone. They must be a Serial Killer.")
        role.set("6", "Your target has trained a bloodhound to assist in criminal justice. They must be the Houndmaster!")
        role.set("7", "Your target detains people at night. They must be a Jailor.")
        role.set("8", "Your target simply wants to live. They must be a Survivor.")
        role.set("9", "Your target keeps a watchful eye on their employer, they must be Security!")
        role.set("10", "Your target is able to pardon one of their fellow workers. They must be the Corrupter.")
        role.set("11", "Your target has the sight. They must be a Psychic.")
        role.set("12", "Your target casts spells on people. They must be a Witch.")
        role.set("13", "Your target wants to be lynched. They must be a Jester.")
        role.set("14", "Your target has a mystical ability to swap two players' skills! They must be a Swapper!")
        role.set("15", "Your target is a divine protector. They must be a Crusader.")
        role.set("16", "Your target watches the deeds of those who it shadows. They must be an Officer!")
        role.set("17", "Your target is the leader of the Town. They must be the Mayor.")
        role.set("18", "Your target is a divine protector. They must be a Crusader.")
        role.set("19", "Your target is a harbringer of destruction and an ill-omen to the town! They must be the Dracolich!")
        role.set("20", "Your target influences those around them to steal their abilities! They must be an Executive!")


        if(location !== "Player Chats") return;
      //console.log(args[1]);
      //if(args[1] !== " kill" || args[1] !== " protect" || args[1] !== " invest") return;

        /*for(let i=0; i<args.length; i++ ){
            message_sent += args[i];
        }  */
        //if()
        let roles = ["Admin"]
        if(message.mentions.roles()){
        if(message_sent.startsWith(" invest")){
            player = message.mentions.roles.first().name;
            message.channel.send("Your target's is"+role.get(player)); 
        }
        }else{
            message.channel.send("You have to tag a **role** for this command");
        }
        

        

        //bot.channels.get(logs).send("```"+player+":"+message_sent+"```")  ;
}

module.exports.help = {
    name: "action"
}