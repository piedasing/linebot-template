const { log, msgbox } = require("./helpers");

async function onReceiveText(bot, userId, text) {
    const res = await bot.push(userId, msgbox.text(text)).catch(error => { log(error); });
    log("文字訊息已回覆\n", text);
};

async function onReceiveSticker(bot, userId, packageId, stickerId) {
    const res = await bot.push(userId, msgbox.sticker(packageId, stickerId)).catch(error => { log(error); });
    log("貼圖訊息已回覆\n", packageId, stickerId);
};

async function onReceiveImage(bot, userId, originalContentUrl, previewImageUrl) {
    const res = await bot.push(userId, msgbox.image(originalContentUrl, previewImageUrl)).catch(error => { log(error); });
    log("圖片訊息已回覆");
};

async function onReceiveVideo(bot, userId, originalContentUrl, previewImageUrl) {
    const res = await bot.push(userId, msgbox.video(originalContentUrl, previewImageUrl)).catch(error => { log(error); });
    log("影片訊息已回覆");
};

async function onReceiveAudio(bot, userId, originalContentUrl, duration) {
    const res = await bot.push(userId, msgbox.audio(originalContentUrl, duration)).catch(error => { log(error); });
    log("音樂訊息已回覆");
};

module.exports = {
    onReceiveText,
    onReceiveSticker,
    onReceiveImage,
    onReceiveVideo,
    onReceiveAudio
}
