const { REST, Routes } = require('discord.js');
require("dotenv").config();
const token = process.env.TOKEN;
const CLIENT_ID=process.env.CLIENT_ID;
const commands = [
  {
    name: 'ping',
    description:'Replies With Pong'
  },
]
const rest = new REST({ version: '10' }).setToken(token)
  (async () => {
    try {
      await rest.put(Routes.applicationCommand(CLIENT_ID), {
        body: commands
      })
    } catch (error) {
      console.log(error);
    
    }
  })();