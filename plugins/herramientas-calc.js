let handler = async (m, { conn, text }) => {
let id = m.chat
conn.math = conn.math ? conn.math : {}
if (id in conn.math) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
m.reply('๐จ ๐๐ ๐๐ผ๐๐ผ๐ ๐๐๐ผ๐๐๐ผ!!\n๐ฟ๐ ๐๐๐ ๐พ๐๐๐ผ๐!!')
}
let val = text
.replace(/[^0-9\-\/+*รรทฯEe()piPI/]/g, '')
.replace(/ร/g, '*')
.replace(/รท/g, '/')
.replace(/ฯ|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'ฯ')
.replace(/Math\.E/g, 'e')
.replace(/\//g, 'รท')
.replace(/\*ร/g, 'ร')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) throw `${mg}Iุงุณุชุฎุฏู ุนูููุฉ ุฑูุงุถูุฉ ูุญุณุงุจ ุงููุชูุฌุฉ/n/
throw `${fg} ุ ูุณูุญ ููุท ุจุงูุฃุฑูุงู ูุงูุฑููุฒ -, +, * , /, ร, รท, ฯ, e, (, )*`
}}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
export default handler
