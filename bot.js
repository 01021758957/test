const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("567140103516979211")
setInterval(function() {
channel.send(`3amk beso yla 3amk beso`);
}, 30)
})

client.login(process.env.BOT_TOKEN);