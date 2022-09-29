import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://instagram.com/sampun_penak*

Pengen mentahan nya ?
Nih ada santai bro....
https://chat.whatsapp.com/J7VtphVsCUXCMTnbLsRurn

https://github.com/bisnissaya12
wa.me/6281807254833`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/sampun_penak",
    mediaType: "VIDEO",
    description: "https://chat.whatsapp.com/J7VtphVsCUXCMTnbLsRurn", 
    title: 'IBNU OFFICIAL 🅥⁩ MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
