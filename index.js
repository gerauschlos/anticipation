const discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const bot = new discord.Client({
  // Create discord client, disable the @everyone tag from being abused.
  disableEveryone: true,
});

bot.commands = new discord.Collection();

// Load the commands from the commands subdirectory.
fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let cmdfile = files.filter((f) => f.split(".").pop() === "js");

  if (cmdfile.length <= 0) {
    console.log(`No commands found, loading bot with no commands!`);
  }

  cmdfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    bot.commands.set(props.help.name, props);
    exports.help;
  });
});

// Ran on receiving a message
bot.on("message", async (message) => {
  let prefix = config.prefix;

  // If the message is from the bot, doesn't start with the prefix, or
  // is a DM to the bot, then we can safely ignore it
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  // Split the messasge into the command and the arguments
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = message.content.slice(prefix.length + cmd.length).split(" ");

  // Run the command. Is there any way to edit variables in this particular scope while in the command scope?
  // If not, we should look for a different approach - that's gonna be important when it comes to voting
  if (message.content.startsWith(prefix)) {
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
  }
});

bot.on("ready", async () => {
  console.log(`something creative here`);
  // sets the prefix in the status
  bot.user
    .setPresence({
      game: {
        name: "myself being developed.",
        type: "WATCHING",
      },
      status: "online",
      afk: false,
    })
    .catch((err) => console.log(err));
});

bot.on("error", async () => {
  console.log(error);
});

bot.login(config.token);
