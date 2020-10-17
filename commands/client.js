const Discord = require("discord.js");
const client = new Discord.Client();

const owner = '568729687291985930';

module.exports = {
  name: "client",
  description: "will destroy the client",
  execute(message, args) {
    let prefix = "%";

    let msgArgs = message.content.slice(prefix.length).trim().split(/ +/);

    if (msgArgs[1] == "restart") {

      let embed = new Discord.MessageEmbed()
        .setTitle("__***Restarting client***__")
        .setDescription("\nBooting up automically\n")
        .setColor('#8b0000')

      message.channel.send(embed)
        .then(msg => client.destroy())
        .then(() => client.login(process.env.token))

    } else if (msgArgs[1] == "shutdown") {

      let embed = new Discord.MessageEmbed()
        .setTitle("__***Destroying client***__")
        .setDescription("\nWill boot up again on `node main.js`\n")
        .setColor('#8b0000')

      message.channel.send(embed);
      //test


      client.destroy()

    }
  }
}
