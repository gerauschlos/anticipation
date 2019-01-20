const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let owner = config.Gangster
    if(message.author.id !== owner) {
        message.channel.send(`**Error:** 404 Not Found`)
    } else {

        const clean = text => {
            if (typeof(text) === "string" ) {
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            } else if (evaled.length > 2000) {
                message.channel.send(`The eval must be less than 2000 characters!`)
            } else {
                return text;
            }

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