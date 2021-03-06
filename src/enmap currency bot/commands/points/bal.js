 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: ['bank', 'balance'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Shows the leaderboard of Points', 
  callback: async (message, args, text, client) => {
        const target = message.mentions.users.first() || message.author
        point = await client.userProfiles.get(target.id, 'points');
        const embed = new Discord.MessageEmbed()
        .setAuthor(`points`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**${target.username}**`)
    .addField(`bank`, point)
    message.channel.send(embed)
}}