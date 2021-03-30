const config = require('../config.json');
module.exports = async (client, message) => {

    if (message.author.id !== config.Ignore) return;
   
    if(config.Words.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
    message.channel.send(`<a:BlobTriggered:808651813498650644> <@${message.author.id}> Hey mind your language, respect others !!`)
    .then(msg => {
    msg.delete({ timeout: 10000 })
    })
    } else if(config.RacistSlurs.some(word => message.content.toLowerCase().includes(word))){
        message.delete()
    
        message.channel.send(`<a:BlobTriggered:808651813498650644> <@${message.author.id}> Don't be a racist, don't you know this is a anti racist server ?`)
        .then(msg => {
        msg.delete({ timeout: 10000 })

    })} else if(config.Links.some(word => message.content.toLowerCase().includes(word))){
        message.delete()
    
        message.channel.send(`<:blobno:793324426518069288> <@${message.author.id}> Do not post invite links here if you wanna promote your server then post it on <#789382994950619176>`)
        .then(msg => {
        msg.delete({ timeout: 10000 })
    })

}}