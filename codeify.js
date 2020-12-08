const Discord = require('discord.js');
 const client = new Discord.Client();
// require the highlight.js library, including all languages
const hljs = require("highlight.js");  // require only the core library

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
    if (msg.author.bot) return;
language=hljs.highlightAuto(msg.content,["cpp","py","js","autohotkey","c","cs","css","go","java","json","tex","matlab","php","bash"]).language;
 if( language&&(!msg.content.startsWith(`pls`))&&((!msg.content.startsWith(`http`)))&&(!msg.content.startsWith("```"))){
 msg.reply("```"+language+'\n'+msg.content+"```");
 }
 });

client.login('');
