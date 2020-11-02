require('dotenv').config();
const { commands } = require('./commands');

const { Client } = require('discord.js');
const client = new Client();

client.on('ready',()=>{
    console.log('The bot is ready');
});

client.on('message', commands);
client.login(process.env.DISCORD_JS_BOT_TOKEN)
    .catch(error=>{
        console.log(error);
    })
