const { throws } = require('assert');
const Discord = require('discord.js');
const fs = require('fs');
const git = require('git');

module.exports = {
  name: 'password',
  description: 'Generates a password',
  execute(message, args) {
    /* var klein = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var groß = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var zeichen = [".", ";", ",", "$", "!"];
    
    //26 Buchstaben, klein & groß
    //5 Zeichen
    //57
    
    
    var rand1 = Math.floor(Math.random() * 26);
    var rand2 = Math.floor(Math.random() * 26);
    var rand3 = Math.floor(Math.random() * 5);
    
    var GenerierterPasswortTeil1 = klein[rand1] + groß[rand2] + zeichen[rand3];
    console.log("Teil 1: " + GenerierterPasswortTeil1)
    
    
    var rand4 = Math.floor(Math.random() * 26);
    var rand5 = Math.floor(Math.random() * 26);
    var rand6 = Math.floor(Math.random() * 5);
    
    var GenerierterPasswortTeil2 = klein[rand4] + groß[rand5] + zeichen[rand6];
    console.log("Teil 2: " + GenerierterPasswortTeil2);
    
    
    var rand7 = Math.floor(Math.random() * 26);
    var rand8 = Math.floor(Math.random() * 26);
    var rand9 = Math.floor(Math.random() * 5);
    
    var GenerierterPasswortTeil3 = klein[rand7] + groß[rand8] + zeichen[rand9];
    console.log("Teil 3: " + GenerierterPasswortTeil3);
    
    
    var rand10 = Math.floor(Math.random() * 26);
    var rand11 = Math.floor(Math.random() * 26);
    var rand12 = Math.floor(Math.random() * 5);
    
    var GenerierterPasswortTeil4 = klein[rand10] + groß[rand11] + zeichen[rand12];
    console.log("Teil 4: " + GenerierterPasswortTeil4);
    
    var FinalesPasswort = GenerierterPasswortTeil1 + GenerierterPasswortTeil2 + GenerierterPasswortTeil3 + GenerierterPasswortTeil4;
    
    
    
    var words = {
      one: GenerierterPasswortTeil1,
      two: GenerierterPasswortTeil2,
      three: GenerierterPasswortTeil3,
      four: GenerierterPasswortTeil4
    };
    let string = JSON.stringify(words, null, 2);
    console.log(string); */
    const passwordLength = 15;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.;,$!';
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    let passEmbed = new Discord.MessageEmbed()
    .setTitle("**Your personal generated password:**")
    .addField("There you go: ", result)
    .setFooter(`There are ${charactersLength**15}  different passwords this bot can generate :p`)
    .setTimestamp();
    
    message.author.send(passEmbed);
  }
}
