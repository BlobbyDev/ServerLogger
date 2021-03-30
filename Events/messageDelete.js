const config = require('../config.json');
const Discord = require('discord.js');
module.exports = async (client, message) => {
    const channel = client.channels.cache.get(config.LogsChannel);
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.member.user.tag)
    .setTitle('Message Deleted !!')
    .addField('Content', message)
    .addField('At', `${message.channel} (\`${message.channel.id}\`)`)
    channel.send(embed)
}