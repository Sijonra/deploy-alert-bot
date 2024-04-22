import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

async function sendMessageProcess(message, channelId) {
  const channel = client.channels.cache.get(channelId);

  return new Promise((resolve, reject) => {
    if (channel) {
      channel
        .send(message)
        .then(() => {
          console.log("Deployment message sent");
          resolve();
        })
        .catch((error) => {
          console.error("Error sending deployment message:", error);
          reject(error);
        });
    } else {
      console.error("Unable to find discord channel.");
      reject(new Error("Unable to find discord channel."));
    }
  });
}

export async function sendMessage(message, channelId, BOT_TOKEN) {
  await client.login(BOT_TOKEN);

  try {
    await sendMessageProcess(message, channelId);
  } catch (error) {
    console.error("Error sending deployment message:", error);
    throw error;
  }
}
