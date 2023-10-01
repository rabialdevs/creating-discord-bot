require("dotenv").config();
const {Client,GatewayIntentBits}=require('discord.js')
const token = process.env.TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})
client.on('messageCreate', message => {
  if (message.author.bot) return null;
  message.reply({
    content: 'Hi From Bot'
  })
  console.log(message.content);
})
client.on('interactionCreated', () => { 
  Interaction.reply('Pong !')
})
client.login(token);



