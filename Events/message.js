const config = require('../config.json');
module.exports = async (client, message) => {

    if (message.author.id !== config.Ignore) return;
   
    if(config.Words.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
    message.channel.send(`<@${message.author.id}> Hey mind your language, respect others !!`)
    .then(msg => {
    msg.delete({ timeout: 10000 })
    })
    } else if(config.RacistSlurs.some(word => message.content.toLowerCase().includes(word))){
        message.delete()
    
        message.channel.send(`<@${message.author.id}> Don't be a racist, don't you know this is a anti racist server ?`)
        .then(msg => {
        msg.delete({ timeout: 10000 })

    })} else if(config.Links.some(word => message.content.toLowerCase().includes(word))){
        message.delete()
    
        message.channel.send(`<@${message.author.id}> Do not post invite links here if you wanna promote your server or anything here !!`)
        .then(msg => {
        msg.delete({ timeout: 10000 })
    })

}}