// server 監聽 port
const port = process.env.PORT;

const mysql = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_.DB
}

// linebot 設定
const linebot = {
  channelId: process.env.LINEBOT_CHANNEL_ID,
  channelSecret: process.env.LINEBOT_CHANNEL_SECRET,
  channelAccessToken: process.env.LINEBOT_CHANNEL_ACCESSTOKEN
};

module.exports = {
    port,
    mysql,
    linebot
}
