const linebot = require("linebot");
const { config, log } = require("./helpers");

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
    let replyMsg = null;

    const previewUrl = "https://images.unsplash.com/photo-1578852500325-eac8ad217aca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

    log("收到訊息\n", message);

    switch (event.message.type) {
        case "text":
            const { text } = message;
            replyMsg = msgbox.text(text);
            break;
        case "sticker":
            const { packageId, stickerId } = message;
            replyMsg = msgbox.sticker(packageId, stickerId);
            break;
        case "image":
            const imageBuff = await message.content();
            const imageBase64 = imageBuff.toString("base64"); // 轉換成 base64 的圖片，可以拿來發給 API
            replyMsg = msgbox.image(previewUrl, previewUrl);
            break;
        case "video":
            const videoBuff = await message.content();
            const videoBase64 = videoBuff.toString("base64"); // 轉換成 base64 的影片，可以拿來發給 API
            const replyVideo = "";
            replyMsg = msgbox.video(replyVideo, previewUrl);
            break;
        case "audio":
            const audioBuff = await message.content();
            const audioBase64 = audioBuff.toString("base64");
            const replyAudio = "";
            const duration = message.duration;
            replyMsg = msgbox.audio(replyAudio, duration);
            break;
    }

    if (replyMsg) {
        const res = await bot.push(userId, replyMsg).catch(error => { log(error); });
        log("訊息已送出", replyMsg);
    }
};
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
module.exports = bot;
