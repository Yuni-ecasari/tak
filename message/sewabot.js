

exports.dada = (prefix, pushname, ucapanWaktu) => {
return `${ucapanWaktu} kak ${pushname}
Berikut adalah list harga untuk sewa bot

╭──「 *SEWABOT* 」
├  1 BULAN : IDR 10.000 (10k)
├  PERMANEN : IDR 50.000 (50K) 
╰────
╭─ [ KELEBIHAN BOT ]
├  ＯＮ 24 ＪＡＭ
├  FITUR BANYAK
├  FAST RESPOND
╰────
╭─[ KEUNTUNGAN ]
├  ANTI LINK ( AUTO KICK )
├  WELCOME ( OTOMATIS )
├  DAN RATUSAN FITUR LAINYA
╰────
╭─[ *MINAT CHAT* ]
├  🪀 wa.me/6287721317870?text=SEWABOT
╰────
╭─[ *PAYMENT* ]
├  SHOPPEPAY
├  DANA
├  PULSA
╰────


╭──「 *_JADI BOT + OWNER_* 」
├   RP : IDR 30.000 (30k)
╰────
╭─ [ FASILITAS ]
├  CUMA SCAN QR DOANG JADI BOT + OWNER                
├  RUN DI HEROKU BUKAN TERMUX + FAST RESPOND
├  FITUR BOT NYA BANYAK
├  BUKAN BOT WIBUSOFT
╰────
╭─[ KEUNTUNGAN ]
├  BISA OPEN SEWA BOT
├  NAMA BOT, NAMA OWNER, OWNER, DLL DI GANTI JADI TERSERAH LU
╰────
╭─[ *MINAT CHAT* ]
├  🪀 wa.me/6287721317870?text=JADIBOT
╰────
╭─[ *PAYMENT* ]
├  OVO
├  DANA
├  GOPAY
├  PULSA
╰────

PERHATIAN:
-KALAU BOT YANG INI CUMA
CONTOH FITUR/MENU NYA SAJA

-KECEPATAN RESPON DI BOT INI
JUGA DELAY KARNA CUMA CONTOH SAJA

-KALAU BOT YANG KALIAN SEWA
ATAU KALIAN JADI BOT
RESPON BOTNYA LEBIH CEPAT
KARNA RUN NYA BEDA SOFTWARE.
`
}

const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})




















