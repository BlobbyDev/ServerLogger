const config = require('../config.json');
const Discord = require('discord.js');
module.exports = async (client, oldMessage, newMessage) => {
    const channel = client.channels.cache.get(config.LogsChannel);
    const embed = new Discord.MessageEmbed()
    .setAuthor(oldMessage.member.user.tag)
    .setTitle('Has Edited a message')
    .addField('Old Message', oldMessage)
    .addField('New Message', newMessage)
    .addField('At', `${oldMessage.channel} (\`${oldMessage.channel.id}\`)`)
    .setTimestamp()
    channel.send(embed)
}