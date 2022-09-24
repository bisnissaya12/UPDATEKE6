let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `「 TheBotz-Official 」

    ╭━━━━「 SEWA 」
    ┊⫹⫺ Hemat: 10k/grup (1 minggu)
    ┊⫹⫺ Normal: 30k/grup (1 bulan)
    ┊⫹⫺ Standar: 50k/grup (2 bulan)
    ┊⫹⫺ Pro: 75k/grup (4 bulan)                                                      
    ┊⫹⫺ Vip: = 100k/grup (12 bulan)
    ╰═┅═━––––––๑
    
    ╭━━━━「 PREMIUM 」
    ┊⫹⫺ Hemat: 5k (1 minggu)
    ┊⫹⫺ Normal: 20k (1 bulan)
    ┊⫹⫺ Standar: 40k (2 bulan)
    ┊⫹⫺ Pro: 70k (4 bulan)
    ┊⫹⫺ Vip: 90k (8 bulan)
    ╰═┅═━––––––๑
    
    ⫹⫺ PAYMENT:
    • Pulsa XL AXIATA: [087848115476]
    • Dana: [087848115476]
    • Gopay: [087848115476]
    • Ovo: [087848115476]
    • MotionPay: [087848115476]
    
    Nomor Owner :
    wa.me/6283816446896
    
    ▌│█║▌║▌║║▌║▌║█│▌
    
    #BY Mimim-Official`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
