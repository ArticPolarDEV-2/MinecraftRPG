import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once("ready", () => {
  console.log("Bot is online!");
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.reply('🏓 Pong!');
  }
});

client.login(process.env.TOKEN);