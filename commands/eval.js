const Discord = require("discord.js");
const fs = require ("fs");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let owner = config.Gangster
    if(message.author.id !== owner) {
        message.channel.send(`**Error:** 404 Not Found`)
    } else {

        const clean = text => {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
          }

          try {
            const code = args.join(" ");
            let evaled = await eval(code);
       
            if (typeof evaled !== "string")
              evaled = await require("util").inspect(evaled);
       
            message.channel.send(clean(evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
    }

}

module.exports.help = {
    name: "eval"

}