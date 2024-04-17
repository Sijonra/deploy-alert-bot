const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(config.BOT_TOKEN);
