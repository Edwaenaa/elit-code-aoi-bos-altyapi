const aoijs = require("aoi.js");
const ayarlar = require("./ayarlar.json")
 const bot = new aoijs.Bot({
   token: ayarlar.token,
   prefix: ayarlar.prefix,
   intents: "all"
 });
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./komutlar/")
  
bot.onMessage() 
bot.command({
  name: "ping",
  code: `Pingim \`$ping ms\` ` 
})

bot.status({
  text: "By E!it Code",
  type: "PLAYING",
})

bot.variables({
ElitCode: "<3",
aoijs:"<3"
})
