const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

function sendMessageProcces(message, channelId) {
  const channel = client.channels.cache.get(channelId);
  if (channel) {
    channel
      .send(message)
      .then(() => console.log("Deployment message sent"))
      .catch((error) =>
        console.error("Error sending deployment message:", error)
      );
  } else {
    console.error("Unable to find discord channel.");
  }
}

function sendMessage(message, channelId, BOT_TOKEN) {
  client.login(BOT_TOKEN);

  client.once("ready", () => {
    console.log("Bot is ready");

    sendMessageProcces(message, channelId);
  });
}

module.exports = { sendMessage };
