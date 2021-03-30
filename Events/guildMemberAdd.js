const config = require('../config.json');
module.exports = async (client, member) => {
    const channel = client.channels.cache.get(config.LogsChannel);
    channel.send(`<@${member.user.id}> (\`${member.user.tag}\`) Hey welcome to this cool server pls read the rules ${message.guild.rulesChannel} and enjoy your stay ;D`)
}