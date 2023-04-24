const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log('The Bot is ready!'));

client.on('message', async (message) => {
if (message.author.bot) return; // Ignore messages from other bots
//const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'cricket');
//const emoji = message.guild.emojis.cache.find(1099886899662946364);
if (message.author.id === '225077758508662794') {
    await message.react('🦗'); // Add reaction to message
}
});