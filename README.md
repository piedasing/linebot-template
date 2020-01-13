## LINEBOT-Template

### 啟動方式
```
  npm install
  npm run dev
```

### LINE BOT 設定檔
1. channel_id
2. channel_secret
3. access_token  
以上 3 個參數，至 LINE Developer 建立 Messaging API 後即可取得~

### 本機開發的 LINE Webhook URL 設定
1. 安裝 ngrok
[https://ngrok.com/](https://ngrok.com/)

2. 開啟 ngrok，並輸入命令
```
  ngrok http [port]
  
  ex.
    ngrok http 3000
```

### MySql 設定檔
請依本機環境設定 host、user、password、db
如果用不到，請不要載入 mysql.js
