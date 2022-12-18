let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} الإشارة إلى شخص ما @TAG او اكتب الاسم ` 

if (command == 'جميل') {
let juego = `معدل جمال السيد(ة): ${text.toUpperCase()} بنسبا 100/100\nهيا : ${(500).getRandom()}%`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

 // ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'ذكاء') {
let juego = `_*${text.toUpperCase()} ذكي بنسبا ${(500).getRandom()}%*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  

 // ------------------------------------------------------------------------------------------------------------------------------------------------   
 
  // ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'غباء') {
let juego = `_*${text.toUpperCase()} غبي بنسبا ${(500).getRandom()}%*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  

 // ------------------------------------------------------------------------------------------------------------------------------------------------   
 
if (command == 'حب') {
let juego = `*نسبه حب ${text.toUpperCase()} لك هي ${(500).getRandom()}%*`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
//conn.sendHydrated(m.chat, juego, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
//['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
//['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🤭', `${usedPrefix + command} ${text.toUpperCase()}`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
//], m, m.mentionedJid ? {
//mentions: m.mentionedJid
//} : {})} 
}
handler.help = ['حب', 'جميل', 'lesbiana', 'غباء', 'pajera', 'puto', 'puta', 'ذكاء', 'manca', 'rata', 'prostituta', 'prostituto'].map(v => v + ' @tag | nombre')
handler.tags = ['calculator']
handler.command = /^حب|جميل|lesbiana|pajero|pajera|puto|puta|ذكاء|manca|rata|prostituta|prostituto/i
handler.exp = 100
export default handler
