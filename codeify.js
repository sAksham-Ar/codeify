const Discord = require('discord.js');
 const client = new Discord.Client();
// require the highlight.js library, including all languages
const hljs = require("highlight.js");  // require only the core library
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
    if (msg.author.bot) return;

 if(hljs.highlightAuto(msg.content,["cpp","py","js"]).language ){
 msg.reply("```"+hljs.highlightAuto(msg.content,["cpp","py","js"]).language+'\n'+msg.content+"```");
 }
 });

client.login('Nzg1NjEzODM4NjQzODg4MTI5.X86Z5w.x-Jligm65SKAgPtu9hGSuMPEWz0');