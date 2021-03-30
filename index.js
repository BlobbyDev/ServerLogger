const Discord = require('discord.js');
const client = new Discord.Client( { disableMentions: "everyone", ws: { properties: { $browser: "Discord iOS" }} } );
require('dotenv').config();
const { readdir } = require('fs');
readdir("./Events/", (err, files) => {
    if(err) console.log(err)
    let jsfiles = files.filter(t => t.split(".").pop() === "js")
    jsfiles.forEach(file => {
        let eventN = file.split(".")[0]
        let event = require(`./Events/${eventN}`)
        client.on(eventN, event.bind(null, client)) 
    });
});
client.login(process.env.TOKEN)