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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJtcVRab1I5UTFvZzE4NUdrOHB1cURzc1hrVFBhQlBFTEsyc1pCa2prWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFRJZXFHSnc2K0xRblA5dWRFMzRpSThQaWltVlJ0RjU3a3pIc1RYQVR3QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SzhlOVJEczQwZjduMkR2c0RURHF3TUxtSlFJR1N1c3dldVJLR0xaVkdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrbHNHdVRyc0V4R3lBdGFCYmpCeVVaVUtFNzlJR3J1Nm1FNUQwZEluLzI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFYlV1ZXY0SWVnbXExSHEwc3JzcHV1QlFhMk9vc3FqaTJWYlA1ZFN2V289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFFUTMxc0Roa1JvWkV3dUpQVEFNVWZkaVB5bzQ1Z0tsSE8xcGJJaFIvZ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0plUEYwRER3ZE1Yc3AvUXNSdnlYOUZBUVR4OC9uWUpabDFoeVY3VnFXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzB2ZFZIY0haL2xQMTMvVDRlYXNVVHlkQmg1TmdHSUlCYlErSU9LTWFEQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQwS29EV3kxTHAyVnVackloUkJyeVVLUFI3SWpaRUhOeVJlUU02THZMRTUrWGNIbzhHdlVYdWdxSGcwNnkwQ3VYN09EbTJDQmZJbDNEbEh4WFVFd0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiJQNUp6Sk0wRFRVSTlPeGg4N0NrUjY2RWpkQjBXVHRyWGlsbVExS0NiY2VRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxU20wSDZZdlF5dVpWLWx6ZU9nNXlRIiwicGhvbmVJZCI6ImRlMmQ3NDUzLTYwODAtNDUyMS1iYmFmLTBjNzMxMWIxNmE1MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkeEd0azMxckN4eDlnZFJTOVV6UE04NHc3Wm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieE1kRndIQkxRcWF3bDdzRm01T0Q1OE1Oc0VnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilc5N0ZGUDJTIiwibWUiOnsiaWQiOiI5MjMwMTU5NDQwMDQ6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUER1Z2FVQ0VPNzhtTFFHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTmFYMldXdkg1dEx6SVJiRDB3T1dYemQ5a1Y1K05MVlhEeUlrd2J5dkd4OD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidXAxQnJ6aHE1MUYyZkVpcE1MZkNHVFJudThScGc5Nk4ydnVlZVk0KzN5bmFkL0xWbEhZL1d6WDByT0UwbUhmTFpjY3R4MGRiZEVFUmxocUQ4UnhyQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IkVlQ2dRV1dUdzZMeHhVdVZTc043MUQ0TmY5eFFkOEZWZWVWUlRYUy9HSmo4SDdRV3FSVXZGSjVzaXZPUGIzN3ZEUDRkWEtzcFhsNkNabERxTnVGMUFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDE1OTQ0MDA0OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFdsOWxscngrYlM4eUVXdzlNRGxsODNmWkZlZmpTMVZ3OGlKTUc4cnhzZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDA3Mzg1MX0=hMMVNlc0pNYW5ZdEJnTXZTdzkzN2pNWmYxVDZTU0l0OE51cFVjPSIsImFjY291bnRTaWduYXR1cmUiOiJpZUlKd0JEbXhSZjdhMU5YRHBIaGpDNkFqbHc1MWI0dVF3MUl4VDBnZmJEbndHNzR4ZjFLL015eG1jUWRobkU3NjVoWFFNMjJlK2FvUTV5cVJZc2pCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMXpvWTdka0hNUXZVVS8wbDdaTEp0bmtIeUVZdWd2YnFnR1ZpQTErZkk3SW1JWGtkVnd5STBvaHBMYzhuLzZGQUtuU2FLZFdjMEt0cnZ0K3RvMzMyaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyMDgwMTk0NzQ6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaUlQMGZDOVVuckNUR3AyTFFZREwwc1BkKzR6R1g5VStra2lMZkRicVZIIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMDcwNzg0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUM0VSJ95zM0gwTTkvL3kvamxHaHV2MFlBbGtWM3RCeUxhRU5wbTJzV29MbDhTZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibjV2QkxkWk5ncE1iK1ZIL1dKT1dZdkxIcG0xRTFCWnptTHJiZXNaV2Uyc0Y5S2ZIdHhHNEYreThRYjVmUE9uWnpxOU5UaTczbkxUN3JUSllmSHV4QlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImEzOHJFZGhYbkZOSFV2blpPa0tkNFM3SlVDcTAwV2lLckJLelN2U2VYUjFjWUp1aU8ySkxGVnh2a0ZGdXNLTlZSdVQ1Nm5SQTdBTFFQK2tiaHdlRmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDAzMDM1NTE2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWpiTng5RFBmLzh2NDVSb2JyOUdBSlpGZDdRY2kyaERhWnRyRnFDNWZFbyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDAxMzM1OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBZU4ifQ=="
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
