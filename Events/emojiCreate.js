const config = require('../config.json');
module.exports = async (client, emoji) => {
    const channel = client.channels.cache.get(config.LogsChannel);
    channel.send(`Emoji :${emoji} (\`${emoji.id}\`) is been added !!`)
}