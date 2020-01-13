const linebot = require("linebot");
const { config, log } = require("./helpers");

const { onReceiveText, onReceiveSticker, onReceiveImage, onReceiveVideo, onReceiveAudio } = require("./handleSendMsg");

const bot = linebot({
    ...config.linebot
});
// -------------------------------------------------------------
// 當有人傳送訊息給 bot 時
bot.on("message", function(event) {
    log("message: ", event);
    replyMessage({ event });
});
// 當有人加入 bot 好友時
bot.on("follow", function(event) {
    log("follow: ", event);
});
// 當有人封鎖 bot 好友時
bot.on("unfollow", function(event) {
    log("follow: ", event);
});
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
async function replyMessage(param) {
    const { event } = param;
    const { message, source } = event;
    const { userId } = source;

    const previewUrl = "https://images.unsplash.com/photo-1578852500325-eac8ad217aca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

    log("收到訊息\n", message);

    switch (event.message.type) {
        case "text":
            const { text } = message;
            onReceiveText(bot, userId, text);
            break;
        case "sticker":
            const { packageId, stickerId } = message;
            onReceiveSticker(bot, userId, packageId, stickerId);
            break;
        case "image":
            const imageBuff = await message.content();
            const imageBase64 = imageBuff.toString("base64"); // 轉換成 base64 的圖片，可以拿來發給 API
            onReceiveImage(bot, userId, previewUrl, previewUrl);
            break;
        case "video":
            const videoBuff = await message.content();
            const videoBase64 = videoBuff.toString("base64"); // 轉換成 base64 的影片，可以拿來發給 API
            const replyVideo = "";
            onReceiveVideo(bot, userId, replyVideo, previewUrl);
            break;
        case "audio":
            const audioBuff = await message.content();
            const audioBase64 = audioBuff.toString("base64");
            const replyAudio = "";
            const duration = message.duration;
            onReceiveAudio(bot, userId, replyAudio, duration);
            break;
    }
};
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
module.exports = bot;
