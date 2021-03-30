const config = require('../config.json');
module.exports = async (client, channel, user) => {
    const Channel = client.channels.cache.get(config.LogsChannel);
    Channel.send(`**\`${user.tag}\`** has started typing at <#${channel.id}>`)
}