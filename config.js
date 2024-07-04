//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBHNVNNMzkxOTdwbkdxcUhuRkN5NHNNR2xUMXFJZmFxMCtjdjBkNVltWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVE9ERWNMR0JjNHhtMFVQeER3dEpwRjVJRkhYTUNHdzR3MXp1aDFOeUd5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHT3FiRmF6VkFZOWdNNjRoclErUCtHQzh4ZzBLeE84azZaT2RMaFNMcGtrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5SWdxUm9CL3RMdGlZa1VOQ21TblBGL3NNUy9WckxOdlhMMnFLQ2hSUEdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9EQWxNeVNxTXM3Rk4wY0dRTjA5QXpWOGNhTzY0K2t2ZXZTUkJGWllIR289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZGMzlRMFBjaDJ1V3NLSUVEL0hrVmVleEdTdXZIdGxya3BtZ1JlRkJ0VDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9Da0FJK3NDZWhBRkIySTZuVGZiT1ZGYmJ4c3hhVER2OEE3TkVsWVRGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2hyZndES2h3Mk5kaWxSR2tvdy8ranZyOHBrb1o2K21rdzRqK3NWRzVHYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBS1phRlFxTTh2eEc4Q1k3eHJkb295MERCVmRKOGRybzkwZkpBNUQwRzN6dTdIeHluUkpmdzcwS2x3VUFrYUV2T3pKWmxFcmhnQUtqbzJsMkM0d0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiJKVzFpMG1NR1NORWZITm1mWWZsUmszNkJTZzErYXdNWll3V2NCTnhVNHZBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwNzY3NjEzN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1RTBGNUY5OUY2MzE5OUU0OTcyOEFFMEU2MzA3MUVGRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMDkwNjgzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlc29KdXNFQlNQYUI5ZF8yRzBacDdnIiwicGhvbmVJZCI6IjE4M2U0NDllLTVmZWQtNDViZi1iYzczLTQ4OTZjYTM3MzIxNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSWY3NnoxbE04dVlYVm9EL3JMdzRHdGk1aVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVNLWUU2OEt3UzQ2ZVRqYVdXZnVjdXdqT2JBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko5Q1BSNUFIIiwibWUiOnsiaWQiOiI5MjMzMDc2NzYxMzc6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3VHN1N3UXFvQ2F0QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNy9mY1Rrb2d5YzltRjFFeUM2TlVjSitVVWhxWDZBWEJqaFNONHdOU0UxVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN0JEajZ3U2ZMbUhYblBQTFcyNG90VHFpOVpKSEVQODhmWUpXQXV4OWg0NVEyU0Iyb25UYjRNLy83VHVOLzdwVHJUejFwYXhlQU5wUm52cVlVZXgrQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InZSOFluUC91ZytPYUdmTnhZSCtXMjMvcENiaDRDN2hYaFZieWhOZFRRR0owNEluakJlS1FsczVtbzQ3MllrdHNSWUN2Y25Iam9UZWlUODNlOHFWaENRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzA3Njc2MTM3OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZS8zM0U1S0lNblBaaGRSTWd1alZIQ2ZsRklhbCtnRndZNFVqZU1EVWhOViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDA5MDY4MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJL1cifQ==jp7ImRldGFpbHMiOiJDS3VHN1N3UXFvQ2F0QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNy9mY1Rrb2d5YzltRjFFeUM2TlVjSitVVWhxWDZBWEJqaFNONHdOU0UxVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN0JEajZ3U2ZMbUhYblBQTFcyNG90VHFpOVpKSEVQODhmWUpXQXV4OWg0NVEyU0Iyb25UYjRNLy83VHVOLzdwVHJUejFwYXhlQU5wUm52cVlVZXgrQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InZSOFluUC91ZytPYUdmTnhZSCtXMjMvcENiaDRDN2hYaFZieWhOZFRRR0owNEluakJlS1FsczVtbzQ3MllrdHNSWUN2Y25Iam9UZWlUODNlOHFWaENRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzA3Njc2MTM3OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZS8zM0U1S0lNblBaaGRSTWd1alZIQ2ZsRklhbCtnRndZNFVqZU1EVWhOViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDA5MDY4MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJL1cifQ==VNpZ25hdHVyZSI6IkVlQ2dRV1dUdzZMeHhVdVZTc043MUQ0TmY5eFFkOEZWZWVWUlRYUy9HSmo4SDdRV3FSVXZGSjVzaXZPUGIzN3ZEUDRkWEtzcFhsNkNabERxTnVGMUFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDE1OTQ0MDA0OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFdsOWxscngrYlM4eUVXdzlNRGxsODNmWkZlZmpTMVZ3OGlKTUc4cnhzZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDA3Mzg1MX0=hMMVNlc0pNYW5ZdEJnTXZTdzkzN2pNWmYxVDZTU0l0OE51cFVjPSIsImFjY291bnRTaWduYXR1cmUiOiJpZUlKd0JEbXhSZjdhMU5YRHBIaGpDNkFqbHc1MWI0dVF3MUl4VDBnZmJEbndHNzR4ZjFLL015eG1jUWRobkU3NjVoWFFNMjJlK2FvUTV5cVJZc2pCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMXpvWTdka0hNUXZVVS8wbDdaTEp0bmtIeUVZdWd2YnFnR1ZpQTErZkk3SW1JWGtkVnd5STBvaHBMYzhuLzZGQUtuU2FLZFdjMEt0cnZ0K3RvMzMyaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyMDgwMTk0NzQ6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaUlQMGZDOVVuckNUR3AyTFFZREwwc1BkKzR6R1g5VStra2lMZkRicVZIIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMDcwNzg0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUM0VSJ95zM0gwTTkvL3kvamxHaHV2MFlBbGtWM3RCeUxhRU5wbTJzV29MbDhTZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibjV2QkxkWk5ncE1iK1ZIL1dKT1dZdkxIcG0xRTFCWnptTHJiZXNaV2Uyc0Y5S2ZIdHhHNEYreThRYjVmUE9uWnpxOU5UaTczbkxUN3JUSllmSHV4QlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImEzOHJFZGhYbkZOSFV2blpPa0tkNFM3SlVDcTAwV2lLckJLelN2U2VYUjFjWUp1aU8ySkxGVnh2a0ZGdXNLTlZSdVQ1Nm5SQTdBTFFQK2tiaHdlRmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDAzMDM1NTE2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWpiTng5RFBmLzh2NDVSb2JyOUdBSlpGZDdRY2kyaERhWnRyRnFDNWZFbyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDAxMzM1OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBZU4ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
