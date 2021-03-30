const config = require('../config.json');
module.exports = async (client, member) => {
    const channel = client.channels.cache.get(config.LogsChannel);
    channel.send(`<@${member.user.id}> (\`${member.user.tag}\`) Bye Bye you loser now that makes sense why you are still a virgin !!`)
}