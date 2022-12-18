let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^ا$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `اكتب a `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^الحمد لله$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` دوم يا رب، ايش تسوي؟ `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^يوي$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, 'ايش|شو' , m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^لا شيء و انت$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` اكلمك, `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^مم$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` منورة بوند`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^بوت زق$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` زق في عينك يا وجه البيضة`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^حرامي$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `تتهم بريء بالسرقة
من دون تحري او بحث
عن حقيقة ليست ملموسة
ارحنا واعمل شرطي 
ثم افتح فمك وثرثر
فكلامك كـ الجهل واحد 
بل جهلاً ارحم من حديثك
تتصنع دور الشرطي 
وكأنك محقق
بالله اصمت ولا تحرج نفسك 
ارحنا وارح أعصابك 
ان اكرمك الله بعقل
فبسكوتك اقتل جهلك
`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
}

if (/^¿que es un bot?|que es un bot$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*☆::¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩?::☆*
- 𝐔𝐧 𝐁𝐨𝐭 𝐞𝐬 𝐮𝐧𝐚 𝐢𝐧𝐭𝐞𝐥𝐢𝐠𝐞𝐧𝐜𝐢𝐚 𝐚𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥 𝐪𝐮𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐚 𝐭𝐚𝐫𝐞𝐚𝐬 𝐪𝐮𝐞 𝐥𝐞 𝐢𝐧𝐝𝐢𝐪𝐮𝐞 𝐜𝐨𝐧 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬, 𝐞𝐧 𝐞𝐥 𝐜𝐚𝐬𝐨 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐩𝐮𝐞𝐝𝐞𝐬 𝐜𝐫𝐞𝐚𝐫 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬, 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐦𝐮́𝐬𝐢𝐜𝐚, 𝐯𝐢𝐝𝐞𝐨𝐬, 𝐜𝐫𝐞𝐚𝐫 𝐥𝐨𝐠𝐨𝐬 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨𝐬 𝐲 𝐦𝐮𝐜𝐡𝐨 𝐦𝐚𝐬, 𝐞𝐬𝐭𝐨 𝐝𝐞 𝐟𝐨𝐫𝐦𝐚 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐳𝐚𝐝𝐚, 𝐨 𝐬𝐞𝐚 𝐪𝐮𝐞 𝐮𝐧 𝐡𝐮𝐦𝐚𝐧𝐨 𝐧𝐨 𝐢𝐧𝐭𝐞𝐫𝐟𝐢𝐞𝐫𝐞 𝐞𝐧 𝐞𝐥 𝐩𝐫𝐨𝐜𝐞𝐬𝐨 
- 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐞𝐥 𝐦𝐞𝐧𝐮́ 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 #menu
*「 𝙏͚͜͝͠𝙝͚͜͝͠𝙚͚͜͝͠ ͚͜͝͠Loli𝘽͚͜͝͠𝙤͚͜͝͠𝙩͚͜͝͠-MD͚͜͝͠  」`, m) //wm, null, [['Menu', '#menu']], m)

}


if (/^ملل$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` نعرف فا اسكت `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^السلام عليكم$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` وعليكم السلام `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^تصبح على خير/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` و انت بخير حبيبي `, m) //wm, null, [['Menu', '#menu']], m) botones :V

} 

if (/^احبيك$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` اكثر `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
   
if (/^كل زق$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` ما اكلك `, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^كيفك|كيفيك$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, ` الحمد لله و انت`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}
return !0 }
export default handler