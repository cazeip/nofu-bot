const { error } = require("console");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

module.exports = {
  name: 'delete',
  description: 'Deletes messages',
  execute(message, args) {

    if (message.guild === null) return;

    var msgArgs = message.content.slice(6).split(" ");

    const löschAnzahl = msgArgs[1];
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      // MANAGE_MESSAGES is actually the permission that allows
      // clients to delete other people's messages

      //if (client.hasPermission('MANAGE_MESSAGES') == false) {
      //  message.channel.send("I don't have the permissions to to that!")
      //  return;
      //}

      if (!löschAnzahl || löschAnzahl == 0 || löschAnzahl > 100) {

        message.reply("Please provide a number between 2 and 100!");

      } else {

        message.delete;

        return message.channel.bulkDelete(löschAnzahl);

      }

    } else {
      message.reply("Youre not allowed to use this command! \n`Missing Permissions`");

      console.log("User " + message.author.id + " hat versucht den command `delete` zu benutzen");
    }
  }
}