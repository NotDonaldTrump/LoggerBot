/* V2.0.1Beta
Parton - Not to be used without permission, permission can be gained by 
visiting this link - http://www.snotrap.com/contact.php

!!WARNING!!
THIS BOT GOES AGAINST DISCORD'S TOC UNLESS YOU ASK FOR USER CONSENT
USE AT YOUR OWN RISK, I AM NOT RESPONSIBLE FOR ANY DAMAGE CAUSED */

const Discord = require('discord.js');
const log4js = require('log4js');
const { PREFIX, TOKEN, SERVER }= require('../config')
const fs = require('fs');
const client = new Discord.Client();
const bot = new Discord.Client();
const logger = log4js.getLogger('LogBot');
const prefix = '>'

log4js.configure({
levels: {
MESSAGE: { value: 20001, colour: 'green' }},
appenders: { LogBot: { type: 'dateFile', filename: './logs/all-the-logs.log' } },
categories: { default: { appenders: ['LogBot'], level: 'message' } }});
logger.message('LogBot Starting Up');

client.on('warn', console.warn);
client.on('error', console.error);
client.once('ready', () => console.log('I am ready to go!'));
client.on('disconnect', () => console.log('I just disconnected, I am attempting to reconnect now...'));
client.on('reconnecting', () => console.log('I am reconnecting now!'));
client.on('error', console.error);
client.on('message', async message => {
client.user.setActivity(SERVER, { type: 'WATCHING'});  

logger.message(`"#${message.channel.name}" ${message.author.tag} said "${message}" `)

console.log(`"#${message.channel.name}" ${message.author.tag} said "${message}" `)

//Embeds//
let logEmbed = new Discord.RichEmbed()
    .setColor(0xf53155)
    .setTitle("Check your dm's!")
    .setFooter("Developed by Parton#8122")
//End Embeds//


//Commands//
if (message.content === '>status'){
    var testEmbed = new Discord.RichEmbed()
    .setColor(0xf53155)
    .setTitle(`${message.author.tag} currently logging!`)
message.channel.send(testEmbed)}



if (message.content === '>log'){
    let userPermissions = message.channel.permissionsFor(message.author.id);
    if(userPermissions.has("ADMINISTRATOR")){
    message.author.send({files: ['/logs/log.log']});
    message.channel.send(logEmbed)
}}})
//End Commands//

client.login(TOKEN).catch(console.error);