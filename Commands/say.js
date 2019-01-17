const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(message.member.roles.some(r=>["Developer", "Owner"].includes(r.name))) {
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage).catch(console.error);

      } else {
        message.channel.send(`**Error:** 403 Forbidden`)
      }
}

module.exports.help = {
  name: "say"
}