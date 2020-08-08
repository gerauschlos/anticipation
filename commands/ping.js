const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let loadingpingEmbed = new Discord.MessageEmbed()
    .setTitle("Latency :bar_chart:")
    .setDescription("Ping is being calculated!")
    .setColor("#3498DB");

  let loadmessage = await message.channel.send(loadingpingEmbed);

  let totalping = Math.round(
    loadmessage.createdTimestamp - message.createdTimestamp
  );
  let apiping = Math.round(bot.ws.ping);
  let clientping = "gangster broke something";
  if (totalping < apiping) {
    clientping = Math.round(apiping - totalping);
  } else {
    clientping = Math.round(totalping - apiping);
  }

  let loadedpingEmbed = new Discord.MessageEmbed()
    .setTitle("Latency :bar_chart:")
    .addField("Bot Response", totalping)
    .addField("API", apiping)
    .addField("Client", clientping)
    .setColor("#3498DB");

  if (totalping < 0 || apiping < 0 || clientping < 0) {
    let loadedpingEmbed = new Discord.MessageEmbed()
      .setTitle("Latency 📉")
      .setDescription("Ping could not be calculated!\nBlame discord's api.")
      .setColor("#3498DB");
    loadmessage.edit(loadedpingEmbed);
  } else {
    loadmessage.edit(loadedpingEmbed);
  }
};

module.exports.help = {
  name: "ping",
};
