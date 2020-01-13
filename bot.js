const linebot = require("linebot");
const { config, log } = require("./helpers");

const bot = linebot({
    ...config.linebot
});
// -------------------------------------------------------------
// 當有人傳送訊息給 Bot 時
bot.on("message", function(event) {
    log("message: ", event);
    replyMessage({ event });
});
// 當有人加入 Bot 好友時
bot.on("follow", function(event) {
    log("follow: ", event);
    // broadcastMessage({ event });
});
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
async function replyMessage(param) {
  const { event } = param;
  try {
    const replyMsg = event.message.text;
    const res = await event.reply(replyMsg);
    if (res) {
      log("訊息已回覆\n", replyMsg);
    }
  } catch (error) {
    throw error;
  }
}
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
module.exports = bot;
