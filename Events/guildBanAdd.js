const config = require('../config.json');
module.exports = async (client, guild, user) => {
    const channel = client.channels.cache.get(config.LogsChannel);
    channel.send(`<@${user.id}> (\`${user.tag}\`) is been banned !!!`)
}