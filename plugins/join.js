let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link yanlışdır'
    let res = await conn.acceptInvite(code)
    m.reply(`Uğurla qrupa qoşuldu ${res.gid}`)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^join$/i

handler.premium = true

module.exports = handler
