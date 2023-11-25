require('dotenv').config()

const token = process.env.TOKEN;

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILD_MESSAGES', 'GUILD_MEMBERS'] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
}

cl