const config = require('../config.json');
module.exports = async (client, channel) => {
    const Channel = client.channels.cache.get(config.LogsChannel);
    Channel.send(`A channel has been deleted ${channel} (\`${channel.name}\`) (\`${channel.id}\`)`)
}