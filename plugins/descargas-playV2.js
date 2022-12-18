
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, usedPrefix, conn, text}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} اكتب الاسم أو العنوان\nمثل\n*${usedPrefix + command} ما تيسر من سورة التغابن*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}انتظر لحظة للحصول على الصوت من فضلك`, m)  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
let json = await res.json()
conn.sendMessage(m.chat, json.result.dlmp3, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} انتظر لحظة من فضلك `, m)
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
let json = await res.json()
conn.sendMessage(m.chat, json.result.dlmp4, 'error.mp4', `${wm}`, m)}
} catch (e) {
m.reply(`${lenguajeGB['smsAvisoFG']()} حاول مرة أخرى `)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
handler.level = 2
handler.money = 100
//handler.limit = 1
export default handler
