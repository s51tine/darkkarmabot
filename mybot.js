const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDg5NDU3NTY5NDcyMTg0MzMw.DnrCbg.q7sEevto-yryOgNACZDr89hmBkY");