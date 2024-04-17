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

client.once("ready", () => {
  console.log("Bot is ready");

  sendDeploymentMessage("Deploy Starts", "1229751423386910800");
});

function sendDeploymentMessage(startMessage, channelId) {
  const channel = client.channels.cache.get(channelId);
  if (channel) {
    channel
      .send(startMessage)
      .then(() => console.log("Deployment message sent"))
      .catch((error) =>
        console.error("Error sending deployment message:", error)
      );
  } else {
    console.error("Unable to find channel.");
  }
}
