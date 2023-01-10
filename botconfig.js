module.exports = {
  Admins: ["583989204350926861"], // Admins of the bot, I don't know what this do. -Darren.
  ExpressServer: true, // If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "s.", // Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/YkpXD2pm9S", // Сервер поддержки Link
  Token: process.env.Token || "MTAyMjUzOTI1MDY2NDc0Mjk4Ng.GdQE2e.lGrj6iBsqrzJHOIzN0-ARGkMOyvwg2BZV-UDvY", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1022539250664742986", // Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "vMMEEnXsbkswA1s15AOgLFypVIo3HLr0", // Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], // Discord OAuth2 Scopes
  ServerDeafen: true, // If you want bot to stay deafened
  DefaultVolume: 100, // Sets the default volume of the bot, You can change this number anywhere from 1 to 9007199254740991 (JS Integer limit. If you do set it to that, you're a monster.)
  CallbackURL: "/api/callback", // Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": false, // Make the bot stays in VC 24/7 (when you reboot the bot will **not** automatically rejoin.)
  CookieSecret: "FOREST", // A cookie for you, cookie for me. make sure you change this value!
  IconURL:
    "https://cdn.discordapp.com/attachments/1009582318836527125/1062137532332126278/74ce5be8a5f28ee8.gif", // URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", // Color of most embeds | Custom Hex value are supported. I.e: "#36393F"
  Permissions: 2205281600, // Bot Inviting Permissions
  Website: process.env.Website || "0.0.0.0", // Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  // If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.

  Presence: {
    status: "idle", // You can show online, idle, and dnd
    name: "как твою мать еблищем пиздят по столу", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  // You need a lavalink server for this bot to work!!!!
  // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "ssl.freelavalink.ga", //- The host name or IP of the lavalink server.
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "www.freelavalink.ga", //- The password of the lavalink server.
    secure: true, // Set this to true if the lavalink uses SSL. if not set it to false.
    retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
    retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
  },
  // Spotify Integration, allows you to enter a spotify link.
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "f2f6ed1e9d6e497f99f8d23a2f259eee", // Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "63eed822b6dc4fbba745ba5ff739f011", // Spotify Client Secret
  },
};
