import { config } from "../.creds.mjs";
import { sendMessage } from "./bot.js";

const test = async () => {
  await sendMessage("super klass", config.DISCORD_CHANNEL_ID, config.BOT_TOKEN);
  console.log("after all");
};

test();

export { sendMessage };
