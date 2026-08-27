const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  client.user.setPresence({
    activities: [
      {
        name: 'custom', // yeh field Custom type mein ignore hoti hai, sirf state dikhta hai
        type: ActivityType.Custom,
        state: 'Serving 2 Karan' // <-- yahan apna text daalo, yehi dikhega bina "Playing/Watching" ke
      }
    ],
    status: 'idle' // online | idle | dnd | invisible
  });
});

client.login(process.env.BOT_TOKEN);
