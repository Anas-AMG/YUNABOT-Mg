import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}πππ πΎπππΌππΏππ πΏπ ππππΎππππ ππππΌπ πΏπππΌπΎππππΌπΏππ πππ *#on stickers* ππΌππΌ πΌπΎππππΌπ\n\nπππ ππππΎππππ πΎππππΌππΏπ πΌππ πΏπππΌπ½πππΏ πππ *#on stickers* ππ πππΌπ½ππ`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = 'YUNA BOT '
let nombre2 = '393271166550 '
 
const s = [
'https://i.gifer.com/3OO52.gif'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.customPrefix = /payaso|π€‘/i 
handler.command = new RegExp
handler.exp = 50
export default handler
