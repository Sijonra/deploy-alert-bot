const { Client, Events, GatewayIntentBits } = require("discord.js");
const { config } = require("../creds");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(config.BOT_TOKEN);
