	//Original Base Hisoka-Morou
/**
	* Modded by Zerenity.
	* Contact Me on wa.me/6282337245566
	* Follow https://github.com/clicknetcafe
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { wallpaper, pinterest, ringtone, styletext, wikimedia, quotesAnime } = require('./lib/scraper')
const { genMath, modes } = require('./src/math')
const { han } = require('./handler')
const FormData = require('form-data')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
fakeimg = fs.readFileSync('./media/zero.jpg')
fakethumb = fs.readFileSync('./media/thumbnail.jpg')
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakjenaka = db.data.game.tebakjenaka = []
let tebakchara = db.data.game.tebakchara = []
let siapaaku = db.data.game.siapaaku = []
let asahotak = db.data.game.asahotak = []
let susunkata = db.data.game.susunkata = []
let vote = db.data.others.vote = []


//━━━━━━━━━━━━━━━━━[ MY NEW VAR ]━━━━━━━━━━━━━━━━━//

var lol = global.LolApiKey
var imgbbkey = global.Imgbb

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
	try {
		var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		var budy = (typeof m.text == 'string' ? m.text : '')
		var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
		var tescuk2 = ["6282337245566@s.whatsapp.net","6285820420446@s.whatsapp.net","6281255199140@s.whatsapp.net"]
		const isCmd = body.startsWith(prefix)
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const pushname = m.pushName || "No Name"
		const botNumber = await hisoka.decodeJid(hisoka.user.id)
		const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const itsMe = m.sender == botNumber ? true : false
		const text = q = args.join(" ")
		const quoted = m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
	
		// Group
		const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
		const groupOwner = m.isGroup ? groupMetadata.owner : ''
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.afkTime)) user.afkTime = -1
				if (!('afkReason' in user)) user.afkReason = ''
				if (!isNumber(user.limit)) user.limit = limitUser
			} else global.db.data.users[m.sender] = {
				afkTime: -1,
				afkReason: '',
				limit: limitUser,
			}
	
			let chats = global.db.data.chats[m.chat]
			if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
			if (chats) {
				if (!('mute' in chats)) chats.mute = false
				if (!('antilink' in chats)) chats.antilink = false
				if (!('nsfw' in chats)) chats.nsfw = false
			} else global.db.data.chats[m.chat] = {
				mute: false,
				antilink: false,
				nsfw: false,
			}
		
			let setting = global.db.data.settings[botNumber]
			if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
			if (setting) {
				if (!isNumber(setting.status)) setting.status = 0
				if (!('autobio' in setting)) setting.autobio = false
			} else global.db.data.settings[botNumber] = {
				status: 0,
				autobio: false,
			}
		
		} catch (err) {
			console.error(err)
		}

		var sendStickerFromUrl = async(to, url) => {
			var names = Date.now() / 10000;
			var download = function (uri, filename, callback) {
				request.head(uri, function (err, res, body) {
					request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
				});
			};
			download(url, './stik' + names + '.png', async function () {
				console.log('selesai');
				let filess = './stik' + names + '.png'
				let asw = './stik' + names + '.webp'
				exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					let media = fs.readFileSync(asw)
					//zero.sendMessage(to, media, MessageType.sticker,{quoted:zer})
					hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
					fs.unlinkSync(filess)
					fs.unlinkSync(asw)
				});
			});
		}
		
		// Public & Self
		if (!hisoka.public) {
			if (!m.key.fromMe) return
		}

		// Push Message To Console && Auto Read
		if (m.message) {
			hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
			console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
		}
	
		// write database every 1 minute
		setInterval(() => {
			fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
		}, 60 * 1000)

		// reset limit every 12 hours
		let cron = require('node-cron')
		cron.schedule('00 12 * * *', () => {
			hisoka.sendMessage(m.chat,{ text: `Limit Reseted _(every 12 hours)_` })
			let user = Object.keys(global.db.data.users)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			for (let jid of user) global.db.data.users[jid].limit = limitUser
			console.log('Reseted Limit')
		}, {
			scheduled: true,
			timezone: "Asia/Jakarta"
		})
		
		// auto set bio
		if (db.data.settings[botNumber].autobio) {
			let setting = global.db.data.settings[botNumber]
			if (new Date() * 1 - setting.status > 1000) {
			let uptime = await runtime(process.uptime())
			await hisoka.setStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
			setting.status = new Date() * 1
			}
		}
		
		// Anti Link
		if (isBotAdmins && !isAdmins && db.data.chats[m.chat].antilink) {
			if (budy.match(`chat.whatsapp.com`)) {
				m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
				let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
				let isLinkThisGc = new RegExp(gclink, 'i')
				let isgclink = isLinkThisGc.test(m.text)
				if (isgclink) return m.reply(`Ehh gajadi bre, link grup disini ternyata :v`)
				if (isCreator) return m.reply(`Canda bang`)
				hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			}
		}
		
		// Mute Chat
		if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
			return
		}

		var namebot = `${hisoka.user.name}`

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

		var ftrol = {
			key : {
				participant : '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount : 169,
					status: 1,
					surface : 1,
					message: hisoka.user.name, 
					orderTitle: hisoka.user.name,
					thumbnail: fakethumb,
					sellerJid: '0@s.whatsapp.net' 
				}
			}
		}

		// Respon Cmd with media
		if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
			let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
			let { text, mentionedJid } = hash
			let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
				userJid: hisoka.user.id,
				quoted: m.quoted && m.quoted.fakeObj
			})
			messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
			messages.key.id = m.key.id
			messages.pushName = m.pushName
			if (m.isGroup) messages.participant = m.sender
			let msg = {
				...chatUpdate,
				messages: [proto.WebMessageInfo.fromObject(messages)],
				type: 'append'
			}
			hisoka.ev.emit('messages.upsert', msg)
		}
		
		if (('family100'+m.chat in _family100) && !isCmd) {
			kuis = true
			let room = _family100['family100'+m.chat]
			let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
			let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
			if (!isSurender) {
				let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
				if (room.terjawab[index]) return !0
				room.terjawab[index] = m.sender
			}
			let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
			let caption = `\nJawablah Pertanyaan Berikut :\n${room.soal}\n\nTerdapat ${room.jawaban.length} Jawaban :\n${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? '\n*Menyerah!*' : ''}\n${Array.from(room.jawaban, (jawaban, index) => {
					return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
				}).filter(v => v).join('\n')}`.trim()
			hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
			if (isWin || isSurender) delete _family100['family100'+m.chat]
		}

		if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaklagu[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebaklagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete tebaklagu[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}

		if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = kuismath[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await m.reply(`🎮 Kuis Matematika 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? ketik *${prefix}math mode*`)
				delete kuismath[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}

		if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakgambar[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete tebakgambar[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}

		if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakkata[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete tebakkata[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}

		if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakbendera[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete tebakbendera[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}

		if (tebakjenaka.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakjenaka[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebakjenaka', buttonText: { displayText: 'Tebak Jenaka' }, type: 1 }], `🎮 Tebak Jenaka 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete tebakjenaka[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}

		if (tebakchara.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakchara[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebakchara', buttonText: { displayText: 'Tebak Chara' }, type: 1 }], `🎮 Tebak Chara 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete tebakchara[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}

		if (siapaaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = siapaaku[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'siapaaku', buttonText: { displayText: 'Siapa Aku' }, type: 1 }], `🎮 Siapa Aku 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete siapaaku[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}

		if (asahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = asahotak[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'asahotak', buttonText: { displayText: 'Asah Otak' }, type: 1 }], `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete asahotak[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}
		
		if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = susunkata[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: 'Susun Kata' }, type: 1 }], `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete susunkata[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}

		if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = caklontong[m.sender.split('@')[0]]
			deskripsi = caklontong_desk[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: 'Cak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete caklontong[m.sender.split('@')[0]]
				delete caklontong_desk[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}

		if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakkalimat[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete tebakkalimat[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}

		if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaklirik[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete tebaklirik[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}
		
		if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaktebakan[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebaktebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
				delete tebaktebakan[m.sender.split('@')[0]]
				db.data.users[m.sender].limit -= 1 // -1 limit
			} else console.log('*Jawaban Salah!*')
		}
		
		//TicTacToe
		this.game = this.game ? this.game : {}
		let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
		let ok
		let isWin = !1
		let isTie = !1
		let isSurrender = !1
		// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
		if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
		isSurrender = !/^[1-9]$/.test(m.text)
		if (m.sender !== room.game.currentTurn) { // nek wayahku
		if (!isSurrender) return !0
		}
		if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
		m.reply({
		'-3': 'Game telah berakhir',
		'-2': 'Invalid',
		'-1': 'Posisi Invalid',
		0: 'Posisi Invalid',
		}[ok])
		return !0
		}
		if (m.sender === room.game.winner) isWin = true
		else if (room.game.board === 511) isTie = true
		let arr = room.game.render().map(v => {
		return {
		X: '❌',
		O: '⭕',
		1: '1️⃣',
		2: '2️⃣',
		3: '3️⃣',
		4: '4️⃣',
		5: '5️⃣',
		6: '6️⃣',
		7: '7️⃣',
		8: '8️⃣',
		9: '9️⃣',
		}[v]
		})
		if (isSurrender) {
		room.game._currentTurn = m.sender === room.game.playerX
		isWin = true
		}
		let winner = isSurrender ? room.game.currentTurn : room.game.winner
		let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
		if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
		room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
		if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
		await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
		if (isTie || isWin) {
		delete this.game[room.id]
		}
		}

		//Suit PvP
		this.suit = this.suit ? this.suit : {}
		let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
		let win = ''
		let tie = false
		if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
		if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
		hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
		delete this.suit[roof.id]
		return !0
		}
		roof.status = 'play'
		roof.asal = m.chat
		clearTimeout(roof.waktu)
		//delete roof[roof.id].waktu
		hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
		if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
		if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
		roof.waktu_milih = setTimeout(() => {
		if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
		else if (!roof.pilih || !roof.pilih2) {
		win = !roof.pilih ? roof.p2 : roof.p
		hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
		}
		delete this.suit[roof.id]
		return !0
		}, roof.timeout)
		}
		let jwb = m.sender == roof.p
		let jwb2 = m.sender == roof.p2
		let g = /gunting/i
		let b = /batu/i
		let k = /kertas/i
		let reg = /^(gunting|batu|kertas)/i
		if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
		roof.pilih = reg.exec(m.text.toLowerCase())[0]
		roof.text = m.text
		m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
		if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
		}
		if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
		roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
		roof.text2 = m.text
		m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
		if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
		}
		let stage = roof.pilih
		let stage2 = roof.pilih2
		if (roof.pilih && roof.pilih2) {
		clearTimeout(roof.waktu_milih)
		if (b.test(stage) && g.test(stage2)) win = roof.p
		else if (b.test(stage) && k.test(stage2)) win = roof.p2
		else if (g.test(stage) && k.test(stage2)) win = roof.p
		else if (g.test(stage) && b.test(stage2)) win = roof.p2
		else if (k.test(stage) && b.test(stage2)) win = roof.p
		else if (k.test(stage) && g.test(stage2)) win = roof.p2
		else if (stage == stage2) tie = true
		hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
		delete this.suit[roof.id]
		}
		}
		
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = global.db.data.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
		}

		if (db.data.users[m.sender].afkTime > -1) {
			let user = global.db.data.users[m.sender]
			m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
			user.afkTime = -1
			user.afkReason = ''
		}

		var premi = 'Basic User'
		if (isPremium) {
			premi = 'Premiun User'
		}
		if (isCreator) {
			premi = 'This Is Owner'
		}

		function ranNumb(min, max = null) {
			if (max !== null) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min;
			} else {
				return Math.floor(Math.random() * min) + 1
			}
		}

		function padLead(num, size) {
			var s = num+"";
			while (s.length < size) s = "0" + s;
			return s;
		}
		
		switch(command) {
			// FIRST MENU
			case 'list':
			case 'menu':
			case 'help': {
				meh = padLead(ranNumb(43), 3)
				nais = fs.readFileSync(`./media/picbot/menus/menus_${meh}.jpg`)
				let timestamp = speed()
				let latensi = speed() - timestamp
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let anug = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let anuw = Math.floor(anu.length + anug.length)
				menu =` Hello *${pushname}*

⦿ Status User : ${premi}
⦿ Limit User : ${db.data.users[m.sender].limit}\n
━ ━ ━ ━ *「 BOT INFO 」* ━ ━ ━ ━
⦿ *WhatsApp Library : Baileys-MD*
⦿ Group Total : ${anug.length} Group Chat
⦿ Private Chat : ${anu.length} Chat
⦿ Total Chat : *${anuw}*
⦿ Ping Speed : ${latensi.toFixed(4)} _Second_
⦿ Runtime Bot : ${runtime(process.uptime())}

Jika button tidak muncul, ketik *${prefix}allmenu*`
				let btn = [{
					urlButton: {
						displayText: 'Source Code',
						url: 'https://github.com/clicknetcafe/zerenbot-md'
						}
					}, {}, {
						quickReplyButton: {
							displayText: 'Donate',
							id: 'donasi'
						}
					}, {
						quickReplyButton: {
							displayText: 'Contact',
							id: 'owner'
						}
					}, {
					quickReplyButton: {
						displayText: '⦿ ALL MENU ⦿',
						id: 'allmenu'
					}
				}]
				hisoka.send5ButImg(m.chat, menu, hisoka.user.name, nais, btn)
			}
			break
			case 'listall': case 'allmenu': case 'allhelp': {
				meh = padLead(ranNumb(43), 3)
				nais = fs.readFileSync(`./media/picbot/menus/menus_${meh}.jpg`)
				let timestamp = speed()
				let latensi = speed() - timestamp
				anu = `╔═══ *「 ${namebot} 」* 
║
║⧐ ⸨ *${prefix}owner* ⸩
║⧐ ⸨ *${prefix}info* ⸩
║⧐ ⸨ *${prefix}rules* ⸩
╠═════════════════❍
║⧐ Ping : ${latensi.toFixed(4)} _Second_
╚═════════════════════

╭───「 *PROFILMU* 」
├ • Nama	: ${pushname}
├ • Status : ${premi}
├ • Limit	: ${db.data.users[m.sender].limit}
│
`
				//gambar = await getBuffer(get_result.thumbnail)
				let buttons = [
					{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
					{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
				]
				let buttonMessage = {
					location: { jpegThumbnail: nais },
					caption: anu + han.menus(prefix, namebot),
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'genshinmenu':
			case 'menugenshin': {
				meh = padLead(ranNumb(39), 3)
				nais = fs.readFileSync(`./media/picbot/genshin/genshin_${meh}.jpg`)
				let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
				let buttonMessage = {
					location: { jpegThumbnail: nais },
					caption: han.menugenshin(prefix, namebot),
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'menunsfw':
			case 'nsfwmenu': {
				meh = padLead(ranNumb(20), 3)
				nais = fs.readFileSync(`./media/picbot/nsfw/nsfw_${meh}.jpg`)
				if (!m.isGroup) {
					let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
					let buttonMessage = {
						location: { jpegThumbnail: nais },
						caption: han.menunsfw(prefix, namebot),
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
					m.reply(`The only command work for private chat is *${prefix}nekonsfw*`)
				} else {
					if (!db.data.chats[m.chat].nsfw) return m.reply(`*NSFW GAK AKTIF*\n\nAktifkan lewat *${prefix}nsfw*`)
					let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
					let buttonMessage = {
						location: { jpegThumbnail: nais },
						caption: han.menunsfw(prefix, namebot),
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
				}
			}
			break
			case 'menuanime':
			case 'animemenu': {
				if (!m.isGroup) {
					let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
					let buttonMessage = {
						location: { jpegThumbnail: global.thumb },
						caption: han.menuanime(prefix, namebot),
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
					m.reply(`The only command work for private chat is *${prefix}neko2*`)
				} else {
					let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
					let buttonMessage = {
						location: { jpegThumbnail: global.thumb },
						caption: han.menuanime(prefix, namebot),
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
				}
			}
			break
			case 'menuoxy':
			case 'oxymenu': {
				nais = fs.readFileSync(`./media/oxy.jpg`)
				let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
				let buttonMessage = {
					location: { jpegThumbnail: nais },
					caption: han.menuoxy(prefix, namebot),
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'menuephoto':
			case 'ephotomenu': {
				nais = fs.readFileSync(`./media/ephoto.jpg`)
				let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
				let buttonMessage = {
					location: { jpegThumbnail: nais },
					caption: han.menuephoto(prefix, namebot),
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'menueditor':
			case 'editormenu': {
				nais = fs.readFileSync(`./media/editor.jpg`)
				let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
				let buttonMessage = {
					location: { jpegThumbnail: nais },
					caption: han.menueditor(prefix, namebot),
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'menutextpro':
			case 'textpromenu': {
				nais = fs.readFileSync(`./media/textpro.jpg`)
				let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
				let buttonMessage = {
					location: { jpegThumbnail: nais },
					caption: han.menutextpro(prefix, namebot),
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'menudownload':
			case 'downloadmenu': {
				let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
				let buttonMessage = {
					location: { jpegThumbnail: global.thumb },
					caption: han.menudownloader(prefix, namebot),
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'menufun':
			case 'funmenu': {
				let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
				let buttonMessage = {
					location: { jpegThumbnail: global.thumb },
					caption: han.menufun(prefix, namebot),
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'menugrup':
			case 'grupmenu':
			case 'menugroup':
			case 'groupmenu': {
				let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
				let buttonMessage = {
					location: { jpegThumbnail: global.thumb },
					caption: han.menugroup(prefix, namebot),
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'menuowner':
			case 'ownermenu': {
				let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
				let buttonMessage = {
					location: { jpegThumbnail: global.thumb },
					caption: han.menuowner(prefix, namebot),
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'changelog': {
				let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
				let buttonMessage = {
					location: { jpegThumbnail: global.thumb },
					caption: han.changelog(prefix, namebot),
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'privatcmd':
			case 'privatecmd': {
				if (!m.isGroup && !isPremium) {
					m.reply(han.privcmd(prefix))
				} else if (isPremium) {
					m.reply('*Premium User* : All features unlocked')
				} else {
					m.reply(`All features should be work, contact the Owner if there's any error.`)
				}
			}
			break
			case 'rules': {
				let buttons = [
						{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
						{buttonId: `donasi`, buttonText: {displayText: 'SUPPORT'}, type: 1}
					]
				let buttonMessage = {
					location: { jpegThumbnail: global.thumb },
					caption: han.rules(prefix, namebot),
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break

			// GROUP MENU //
			case 'sewabot':
			case 'jadibot': {
				m.reply(`*15K / Bln*\n\n- Whatsapp Multi Device\n- Run via RDP (Always ON)\nRequest Fitur?\n\nSilahkan Chat Owner.`).then(() => {
					hisoka.sendContact(m.chat, global.owner)
				})
			}
			break
			case 'ping':
			case 'test':
			case 'tes':
			case 'runtime': {
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
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime :\n*${runtime(process.uptime())}*\n\n💻 *Server Info*\n_${cpus[0].model.trim()} (${cpu.speed} MHZ)_\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`
				m.reply(respon)
			}
			break
			case 'info':
			case 'ingfo':
			case 'status':
			case 'botstatus':
			case 'statusbot': {
				timestamp = speed()
				latensi = speed() - timestamp
				teks =
				`┏━➤ *INFO BOT*\n*┃┃* Modded by : Z E R E N I T Y\n*┃┃* Nama Bot : ${hisoka.user.name}\n*┃┃* Prefix : Multi Prefix\n*┃┃* Library : Baileys Multi Device\n*┃┃* Speed : ${latensi.toFixed(4)} second\n*┃┃* Language : Javascript\n*┃┗━━━━━━━━*\n*┃*\n*┃◗ Runtime : ${runtime(process.uptime())}*\n*┗━━━━━━━ •*`
				let buttons = [
					{buttonId: `owner`, buttonText: {displayText: '👥 OWNER'}, type: 1},
					{buttonId: `donasi`, buttonText: {displayText: '🙏 SUPPORT'}, type: 1}
				]
				let buttonMessage = {
					location: { jpegThumbnail: global.thumb },
					caption: teks,
					footer: hisoka.user.name,
					buttons: buttons,
					headerType: 4
				}
				hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'owner': case 'creator': {
				hisoka.sendContact(m.chat, global.owner, m)
			}
			break
			case 'donasi':
			case 'donate':
			case 'support': {
				m.reply(`╭─「 *DONASI* 」\n│\n├ PULSA / OVO / DANA :\n├ • *082337245566*\n│\n├ SAWERIA\n├ _https://saweria.co/clicknetcafe_\n│\n╰───「 BunnyWalker 」`)
			}
			break
			case 'sc': {
				m.reply(`*「 SCRIPT BY ZERENITY 」*\n\n*Owner Script :*\nhttps://github.com/clicknetcafe/zerenbot-md\n*Original Hisoka Base :*\nhttps://github.com/DikaArdnt/Hisoka-Morou`)
			}
			break
			case 'kick': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isBotAdmins) return m.reply(han.badmin())
				if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('*Tag Target yang ingin di Tendang!*')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				var kiklah = `${m.sender.split("@")[0]}@s.whatsapp.net`
				if (!isAdmins && (users == tescuk2[0] || users == tescuk2[1] || users == tescuk2[2])) {
					m.reply(`Mengresahkan... 🤹‍♂️`)
					await sleep(3000)
					await hisoka.groupParticipantsUpdate(m.chat, [kiklah], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (!isAdmins) {
					m.reply(han.admin())
				} else if (isAdmins && (users == tescuk2[0] || users == tescuk2[1] || users == tescuk2[2])) {
					m.reply('*Jan gitu pak :v*')
				} else {
					await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
			}
			break
			case 'add': {
				if (!m.isGroup) throw mess.group
				if (!isBotAdmins) throw mess.botAdmin
				if (!isAdmins) throw mess.admin
				query = args.join(" ")
				if (query.startsWith('08') || query.startsWith('+') || isNaN(query)) return m.reply(`Gunakan Kode Negara Gan\n\nContoh : ${prefix + command} 6282xxxxxxxxx`)
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'promote': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('*Tag yang ingin di promote!*')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'demote': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('*Tag yang ingin di demote!*')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'setname': case 'setsubject': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				if (args.length == 0) return m.reply(`Teks nya mana?`)
				query = args.join(" ")
				await hisoka.groupUpdateSubject(m.chat, query).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'setdesc': case 'setdesk': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				if (args.length == 0) return m.reply(`Deskripsinya apa?`)
				query = args.join(" ")
				await hisoka.groupUpdateDescription(m.chat, query).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'setppgroup': case 'setppgrup': case 'setppgc': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				if (args.length != 0) return m.reply(han.noneed())
				if (/image/.test(mime)) {
					let media = await hisoka.downloadAndSaveMediaMessage(quoted)
					await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
					m.reply(mess.success)
				} else {
					m.reply(`Reply / tag Gambar.`)
				}
			}
			break
			case 'tagall': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				ht = args.join(" ")
				if (args.length == 0) return m.reply(`Contoh : ${prefix + command} pesan untuk semua member`)
				if (ht.length <= 11) return reply(`Kependekan oi, kalo ngetag gak penting mending gausah`)
				let teks = `══✪〘 *👥 Tag All* 〙✪══\n\n➲ *Pesan :*\n${q ? q : 'kosong'}\n\n`
				for (let mem of participants) {
					teks += `⭔ @${mem.id.split('@')[0]}\n`
				}
				hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
			}
			break
			case 'hidetag': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				ht = args.join(" ")
				if (args.length == 0) return m.reply(`Contoh : ${prefix + command} pesan untuk klean semua`)
				if (ht.length <= 11) return reply(`Kependekan oi, kalo hidetag gak penting mending gausah`)
				hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
			}
			break
			case 'vote': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
				if (!text) throw `Masukkan Alasan Melakukan Vote\n\nContoh: *${prefix + command} Pelantikan Admin Baru*`
				m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
				vote[m.chat] = [q, [], []]
				await sleep(1000)
				upvote = vote[m.chat][1]
				devote = vote[m.chat][2]
				teks_vote = `*「 VOTE 」*

*${vote[m.chat][0]}*

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
			let buttonsVote = [{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}]
			let buttonMessageVote = {
					text: teks_vote,
					footer: hisoka.user.name,
					buttons: buttonsVote,
					headerType: 1
				}
				hisoka.sendMessage(m.chat, buttonMessageVote)
			}
			break
			case 'upvote': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
				isVote = vote[m.chat][1].concat(vote[m.chat][2])
				wasVote = isVote.includes(m.sender)
				if (wasVote) throw 'Kamu Sudah Vote'
				vote[m.chat][1].push(m.sender)
				menvote = vote[m.chat][1].concat(vote[m.chat][2])
				teks_vote = `*「 VOTE 」*

*${vote[m.chat][0]}*

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
				let buttonsUpvote = [{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}]
				let buttonMessageUpvote = {
					text: teks_vote,
					footer: hisoka.user.name,
					buttons: buttonsUpvote,
					headerType: 1,
					mentions: menvote
				}
				hisoka.sendMessage(m.chat, buttonMessageUpvote)
			}
			break
			case 'devote': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
				isVote = vote[m.chat][1].concat(vote[m.chat][2])
				wasVote = isVote.includes(m.sender)
				if (wasVote) throw 'Kamu Sudah Vote'
				vote[m.chat][2].push(m.sender)
				menvote = vote[m.chat][1].concat(vote[m.chat][2])
				teks_vote = `*「 VOTE 」*

*${vote[m.chat][0]}*

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
				let buttonsDevote = [{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}]
				let buttonMessageDevote = {
					text: teks_vote,
					footer: hisoka.user.name,
					buttons: buttonsDevote,
					headerType: 1,
					mentions: menvote
				}
				hisoka.sendMessage(m.chat, buttonMessageDevote)
			}
			break		 
			case 'cekvote': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
				teks_vote = `*「 VOTE 」*

*${vote[m.chat][0]}*

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}`
				hisoka.sendTextWithMentions(m.chat, teks_vote, m)
			}
			break
			case 'deletevote': case'delvote': case 'hapusvote': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(`*「 HANYA ADMIN YANG BISA MENGHAPUS VOTE 」*`)
				if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
				delete vote[m.chat]
				m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
			}
			break
			case 'group': case 'grup': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				if (args[0] === 'close'){
					await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'open'){
					await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
				} else {
					let buttons = [{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }]
					await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)
				 }
			}
			break
			case 'antilink': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				if (args[0] === "on") {
					if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
					db.data.chats[m.chat].antilink = true
					hisoka.sendMessage(m.chat, { text: `SUKSES MENGAKTIFKAN ANTILINK GROUP` }, { quoted: m }).then(() => {
						hisoka.sendMessage(m.chat,{ text: `*ALLERT!!!*\n\nJika bukan admin, akan di kick apabila mengirim link grup` })
					})
				} else if (args[0] === "off") {
					if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
					db.data.chats[m.chat].antilink = false
					m.reply(`SUKSES MEMATIKAN ANTILINK GROUP`)
				} else {
					let buttons = [{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }]
					await hisoka.sendButtonText(m.chat, buttons, `*「ANTILINK GROUP」*\n\nKetik *${prefix}antilink on* apabila tombol tidak muncul/berfungsi.\n`, hisoka.user.name, m)
				}
			}
			break
			case 'nsfw': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				if (args[0] === "on") {
					if (db.data.chats[m.chat].nsfw) return m.reply(`Sudah Aktif Sebelumnya`)
					db.data.chats[m.chat].nsfw = true
					hisoka.sendMessage(m.chat, { text: `SUKSES MENGAKTIFKAN NSFW GROUP` }, { quoted: m }).then(() => {
						hisoka.sendMessage(m.chat,{ text: `*LEWD TIME!!!*` })
					})
				} else if (args[0] === "off") {
					if (!db.data.chats[m.chat].nsfw) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
					db.data.chats[m.chat].nsfw = false
					m.reply(`SUKSES MEMATIKAN NSFW GROUP`)
				} else {
					let buttons = [{ buttonId: 'nsfw on', buttonText: { displayText: 'On' }, type: 1 },{ buttonId: 'nsfw off', buttonText: { displayText: 'Off' }, type: 1 }]
					await hisoka.sendButtonText(m.chat, buttons, `*「MODE NSFW」*\n\nKetik *${prefix}nsfw on* apabila tombol tidak muncul/berfungsi.\n`, hisoka.user.name, m)
				}
			}
			break
			case 'mute': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				if (args[0] === "on") {
				if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
					db.data.chats[m.chat].mute = true
					m.reply(`${hisoka.user.name} telah di mute di group ini !`)
				} else if (args[0] === "off") {
					if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
					db.data.chats[m.chat].mute = false
					m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
				} else {
					let buttons = [{ buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },{ buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }]
					await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, m)
				}
			}
			break
			case 'editinfo': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				if (args[0] === 'open'){
				await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'close'){
					await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
				} else {
					let buttons = [{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }]
					await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)
				}
			}
			break
			case 'linkgroup':
			case 'linkgc': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				let response = await hisoka.groupInviteCode(m.chat)
				hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n*Link Group ${groupMetadata.subject}*`, m, { detectLink: true })
			}
			break
			case 'ephemeral': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (!isAdmins) return m.reply(han.admin())
				if (!isBotAdmins) return m.reply(han.badmin())
				if (args[0] === "enable") {
					return m.reply('')
					await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === "disable") {
					await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else {
					let buttons = [{ buttonId: 'ephemeral enable', buttonText: { displayText: 'Enable' }, type: 1 },{ buttonId: 'ephemeral disable', buttonText: { displayText: 'Disable' }, type: 1 }]
					await hisoka.sendButtonText(m.chat, buttons, `*「 EPHEMERAL MESSAGE 」*\nEnable this setting will make new messages automatic dissapear from this chat after few days, you can check in group setting\n`, `ephemeral [enable/disable]`, m)
				}
			}
			break
			case 'delete': case 'del': case 'd': {
				if (!m.quoted) throw false
				let { chat, fromMe, id, isBaileys } = m.quoted
				if (!isBaileys) throw 'Pesan bukan dikirim oleh bot ini!'
				hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
			}
			break
			case 'infochat': {
				if (m.quoted) {
					try {
						let msg = await m.getQuotedObj()
						if (!m.quoted.isBaileys) throw 'Pesan bukan dikirim oleh bot ini!'
						let teks = ''
						for (let i of msg.userReceipt) {
							let read = i.readTimestamp
							let unread = i.receiptTimestamp
							let waktu = read ? read : unread
							teks += `⭔ @${i.userJid.split('@')[0]}\n`
							teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
						}
						hisoka.sendTextWithMentions(m.chat, teks, m)
					} catch (e) {
						console.log(e)
						m.reply('Message is deleted')
					}
				} else {
					m.reply('Tag / Reply Pesan')
				}
			}
			break
			case 'listpc': {
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				for (let i of anu) {
					 let nama = store.messages[i].array[0].pushName
					 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
				}
				hisoka.sendTextWithMentions(m.chat, teks, m)
			}
			break
			case 'listgc': {
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				for (let i of anu) {
					let metadata = await hisoka.groupMetadata(i)
					teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
				}
				hisoka.sendTextWithMentions(m.chat, teks, m)
			}
			break
			case 'listonline': case 'liston': {
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				let online = [...Object.keys(store.presences[id]), botNumber]
				hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
			}
			break

			// SEARCHING MENU //
			case 'google': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} cara bikin bot`)
				query = args.join(" ")
				try {
					let google = require('google-it')
					google({'query': text}).then(res => {
						let teks = `Google Search From : ${text}`
						for (let g of res) {
							teks += `\n\n⭔ *Title* : ${g.title}\n`
							teks += `⭔ *Description* : ${g.snippet}\n`
							teks += `⭔ *Link* : ${g.link}\n\───────────────────`
						} 
						m.reply(teks)
					})
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'gimage':
			case 'pixiv': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} loli kawaii`)
				query = args.join(" ")
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command} ${query}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/${command}?apikey=${lol}&query=${query}` },
						caption: `_© Google <> Pixiv_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.errp())
				}
			}
			break
			case 'konachan': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (body.slice(10).includes(' ')) return m.reply(`_(query pake underscore sob)_\n\nContoh: *${prefix + command} azur_lane*`)
				if (args.length == 0) return m.reply(`Contoh: *${prefix + command} azur_lane*\n_(pake underscore, jangan spasi)_`)
				query = args.join(" ")
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command} ${query}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/${command}?apikey=${lol}&query=${query}` },
						caption: `_© Konachan Image_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.errp())
				}
			}
			break
			case 'wallpaper':
			case 'pinterest': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} loli kawaii`)
				query = args.join(" ")
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${lol}&query=${query}`)
				if (get_result.status == '200') {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					let buttons = [{buttonId: `${prefix + command} ${query}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					get_buffer = await getBuffer(get_result.result)
					let buttonMessage = {
						image: get_buffer,
						caption: `_© by Wallpaper Finder and Pinterest_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
				} else {
					m.reply(`Fitur error, coba gunakan *${prefix + command}2*`)
				}
			}
			break
			case 'wallpaper2': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} loli kawaii`)
				query = args.join(" ")
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				anu = await wallpaper(query)
				if (anu.length != 0) {
					result = anu[Math.floor(Math.random() * anu.length)]
					let buttons = [{buttonId: `${prefix + command} ${query}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: result.image[0] },
						caption: `⭔ *Title :* ${result.title}\n⭔ *Category :* ${result.type}`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
				} else {
					m.reply('Image not found.')
				}
			}
			break
			case 'pinterest2': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} loli kawaii`)
				query = args.join(" ")
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				anu = await pinterest(query)
				if (anu.length != 0) {
					result = anu[Math.floor(Math.random() * anu.length)]
					let buttons = [{buttonId: `${prefix + command} ${query}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: result },
						caption: `⭔ Pinterest Image`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
				} else {
					m.reply('Image not found.')
				}
			}
			break
			case 'wikimedia': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} bahaya rokok`)
				query = args.join(" ")
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				anu = await wikimedia(query)
				if (anu.length != 0) {
					result = anu[Math.floor(Math.random() * anu.length)]
					let buttons = [{buttonId: `${prefix + command} ${query}`, buttonText: {displayText: 'Next Result'}, type: 1}]
					let buttonMessage = {
						image: { url: result.image },
						caption: `⭔ *Title :* ${result.title}\n⭔ *Source :* ${result.source}`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
				} else {
					m.reply(`Result : *0*`)
				}
			}
			break
			case 'stickerwa':
			case 'stikerwa': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Koceng Imot`)
				ztick = fs.readFileSync(`./media/sticker/notfound.webp`)
				query = args.join(" ")
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lol}&query=${query}`)
				if (get_result.status == '200') {
					try {
						get_result = get_result.result[Math.floor(Math.random() * get_result.result.length)].stickers
						//━━━━━[ random array but not repeat ]━━━━━━
						ranNums = []
						i = get_result.length
						j = 0
						while (i--) {
							j = Math.floor(Math.random() * (i+1))
							ranNums.push(get_result[j])
							get_result.splice(j,1)
						}
						//━━━━━[ random array but not repeat ]━━━━━━
						get_nums = ranNums.slice(0, 6)
						for (var x of get_nums) {
							await hisoka.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=${x}` } })
						}
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch (e) {
						console.log(e)
						hisoka.sendMessage(m.chat, { sticker: ztick }, { quoted: m } )
					}
				} else {
					m.reply(han.err())
				}
			}
			break
			case 'stikerpatrick':
			case 'stickerpatrick':
			case 'stikerpatrik':
			case 'stickerpatrik':
			case 'patrick':
			case 'patrik':
			case 'spatrick':
			case 'spatrik': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lol}`)
					await hisoka.sendImageAsSticker(m.chat, ini_buffer, m, { packname: global.packname, author: global.author })
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					hisoka.sendMessage(m.chat, { sticker: ztick }, { quoted: m } )
				}
			}
			break
			case 'stikergawgura':
			case 'stickergawgura':
			case 'gawgura':
			case 'sgawgura':
			case 'stikergawrgura':
			case 'stickergawrgura':
			case 'gawrgura':
			case 'sgawrgura': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lol}`)
					await hisoka.sendImageAsSticker(m.chat, ini_buffer, m, { packname: global.packname, author: global.author })
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					hisoka.sendMessage(m.chat, { sticker: ztick }, { quoted: m } )
				}
			}
			break
			case 'stikeranjing':
			case 'stickeranjing':
			case 'sanjing':
			case 'anjing': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=https://api.lolhuman.xyz/api/sticker/anjing?apikey=${lol}`)
					await hisoka.sendImageAsSticker(m.chat, ini_buffer, m, { packname: global.packname, author: global.author })
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					hisoka.sendMessage(m.chat, { sticker: ztick }, { quoted: m } )
				}
			}
			break
			case 'stikerbucin':
			case 'stickerbucin':
			case 'sbucin': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lol}`)
					await hisoka.sendImageAsSticker(m.chat, ini_buffer, m, { packname: global.packname, author: global.author })
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					hisoka.sendMessage(m.chat, { sticker: ztick }, { quoted: m } )
				}
			}
			break
			case 'ppcouple':
			case 'couple': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lol}`)
				if (get_result.status == '200') {
					try {
						ini_male = await getBuffer(get_result.result.male)
						ini_female = await getBuffer(get_result.result.female)
						await hisoka.sendMessage(m.chat, { image: ini_male })
						await hisoka.sendMessage(m.chat, { image: ini_female })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch (e) {
						console.log(e)
						m.reply('Gagal memuat gambar.')
					}
				} else {
					m.reply(han.err())
				}
			}
			break

			// RANDOM TEXT //
			case 'quotes':
			case 'quote': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lol}`)
					if (quotes.status == '200') {
						quotes = quotes.result
						author = quotes.by
						quotes = quotes.quote
						let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `✧ ${command} ✧`}, type: 1}]
						let buttonMessage = {
							text: `_${quotes}_\n\n*― ${author}*`,
							footer: `⭔ Random Quote ⭔`,
							buttons: buttons,
							headerType: 2
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'quotesanime2':
			case 'quotesnime2':
			case 'quotenime2':
			case 'quoteanime2': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lol}`)
					if (quotes.status == '200') {
						quotes = quotes.result
						quote = quotes.quote
						char = quotes.character
						anime = quotes.anime
						episode = quotes.episode
						let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `✧ ${command} ✧`}, type: 1}]
						let buttonMessage = {
							text: `_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`,
							footer: `⭔ Random Anime Quote ⭔`,
							buttons: buttons,
							headerType: 2
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'quotesanime':
			case 'quotesnime':
			case 'quotenime':
			case 'quoteanime': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				anu = await quotesAnime()
				if (anu.length != 0) {
					result = anu[Math.floor(Math.random() * anu.length)]
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `✧ ${command} ✧`}, type: 1}]
					let buttonMessage = {
						text: `_${result.quotes}_\n\n*― ${result.karakter}*\n*― ${result.anime}*`,
						footer: `⭔ Anime Quotes, ${result.up_at} ⭔`,
						buttons: buttons,
						headerType: 2
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(`Fitur error, coba gunakan *${prefix + command}2*`)
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} else {
					m.reply(`Server gangguan, coba gunakan *${prefix + command}2*`)
				}
			}
			break
			case 'quotesdilan':
			case 'quotedilan':
			case 'dilan': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lol}`)
					if (quotedilan.status == '200') {
						let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `✧ ${command} ✧`}, type: 1}]
						let buttonMessage = {
							text: quotedilan.result,
							footer: `⭔ Dilan Quotes ⭔`,
							buttons: buttons,
							headerType: 2
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'quotesimage':
			case 'quoteimage':
			case 'quoteimg': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `✧ ${command} ✧`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lol}` },
						caption: `_© Quote untuk Anda_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'faktaunik':
			case 'katabijak':
			case 'pantun':
			case 'bucin':
			case 'puisi': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lol}`)
					if (get_result.status == '200') {
						let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `✧ ${command} ✧`}, type: 1}]
						let buttonMessage = {
							text: get_result.result,
							footer: hisoka.user.name,
							buttons: buttons,
							headerType: 2
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'randomnama': {
				if (args.length != 0) return m.reply(han.noneed())
				try {
					anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lol}`)
					if (anu.status == '200') {
						m.reply(anu.result)
					} else {
						m.reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'randomorang':
			case 'ranorg':
			case 'ranorang':
			case 'randompeople':
			case 'ranppl':
			case 'ranpeople': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					anu = await fetchJson(`https://api.lolhuman.xyz/api/random/people?apikey=${lol}`)
					if (anu.status == '200') {
						get_result = anu.result
						ini_txt = `*Name : ${get_result.name.title} ${get_result.name.first} ${get_result.name.last}*\n`
						ini_txt += `Gender : ${get_result.gender}\n\n`
						ini_txt += `*「 ADDRESS 」*\n`
						ini_txt += `Street Name : ${get_result.location.street.name}\n`
						ini_txt += `Street Number : ${get_result.location.street.number}\n`
						ini_txt += `City : ${get_result.location.city}\n`
						ini_txt += `State : ${get_result.location.state}\n`
						ini_txt += `Country : ${get_result.location.country}\n`
						ini_txt += `Postcode : ${get_result.location.postcode}\n\n`
						ini_txt += `*TIMEZONE*\n`
						ini_txt += `Offset : ${get_result.location.timezone.offset}\n`
						ini_txt += `Desc : ${get_result.location.timezone.description}`
						await hisoka.sendMessage(m.chat, { location: { degreesLatitude: get_result.location.coordinates.latitude, degreesLongitude: get_result.location.coordinates.longitude } }	, { quoted: m })
						m.reply(ini_txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break

			// INFORMATION //
			case 'heroml': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Fanny`)
				hero = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `*Name : ${get_result.hero_name}*\n`
						ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n\n`
						ini_txt += `*Role : ${get_result.detail.role}*\n\n`
						ini_txt += `Specialty : ${get_result.detail.specialty}\n`
						ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
						ini_txt += `Release : ${get_result.detail.release_date}\n\n`
						ini_txt += `*Details :*\n`
						ini_txt += `Movement Speed : ${get_result.attr.movement_spd}\n`
						ini_txt += `Physical Attack : ${get_result.attr.physical_attack}\n`
						ini_txt += `Magic Power : ${get_result.attr.magic_power}\n`
						ini_txt += `Attack Speed : ${get_result.attr.attack_speed}\n`
						ini_txt += `Physical Defense : ${get_result.attr.physical_defense}\n`
						ini_txt += `Magic Defense : ${get_result.attr.magic_defense}\n`
						ini_txt += `Critical Rate : ${get_result.attr.basic_atk_crit_rate}\n`
						ini_txt += `Hp : ${get_result.attr.hp}\n`
						if (get_result.attr.mana != null) {
							ini_txt += `Mana : ${get_result.attr.mana}\n`
							ini_txt += `Mana Regen : ${get_result.attr.mana__regen}\n`
						} else {
							ini_txt += `Energy : ${get_result.attr.energy}\n`
							ini_txt += `Energy Regen : ${get_result.attr.energy_regen}\n`
						}
						ini_txt += `Ability Crit. Rate : ${get_result.attr.ability_crit_rate}\n`
						ini_txt += `HP Regen : ${get_result.attr.hp_regen}\n`
						ini_icon = await getBuffer(get_result.icon)
						await hisoka.sendMessage(m.chat, {image: ini_icon, caption: ini_txt}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else if (get_result.status == '404') {
						m.reply(get_result.message)
					} else {
						m.reply(`Unfortunately, character's details cannot be shown.`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'mlstalk': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0 || !q.includes('|')) return m.reply(`Usage : ${prefix + command} ID|Server\n\nExample: *${prefix + command} 84830127|2169*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (isNaN(txt1) || txt1.length == 0) return m.reply('Invalid ID')
				if (isNaN(txt2) || txt2.length == 0) return m.reply('Invalid Server')
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${txt1}/${txt2}?apikey=${lol}`)
					if (get_result.status == '200') {
						m.reply(`Nickname :\n*${get_result.result}*`)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(`Player not found.`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'superhero': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} batman`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/superhero?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						txt = `*Full Name : ${get_result.biography["full-name"]}* - ${get_result.biography["alter-egos"]}\n\n`
						txt += `*Series :* ${get_result.biography.aliases[0]}, ${get_result.biography.aliases[1]}, ,${get_result.biography.aliases[2]}, ${get_result.biography.aliases[3]}, ${get_result.biography.aliases[4]}\n\n`
						txt += `Place of Birth : ${get_result.biography["place-of-birth"]}\n`
						txt += `First Appearance : ${get_result.biography["first-appearance"]}\n`
						txt += `publisher : ${get_result.biography.publisher}\n`
						txt += `Rating : ${get_result.biography.alignment}\n`
						txt += `Gender : ${get_result.appearance.gender}\n`
						txt += `Race : ${get_result.appearance.race}\n\n`
						txt += `Height : ${get_result.appearance.height}\n`
						txt += `Eye Color : ${get_result.appearance["eye-color"]}\n`
						txt += `Hair Color : ${get_result.appearance["hair-color"]}\n`
						txt += `*Work :*\n- ${get_result.work.occupation}\n- ${get_result.work.base}\n\n*Connections :*\n*Affiliation :* ${get_result.connections["group-affiliation"]}\n*Relatives :* ${get_result.connections.relatives}`
						buffer = await getBuffer(get_result.image.url)
						hisoka.sendMessage(m.chat, {image: buffer, caption: txt}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(`Superhero not found.`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'osuplayer': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Usage : ${prefix + command} username\n\nExample: *${prefix + command} xxhonorxx*`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/osuname/${query}?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						txt = `User ID : ${get_result.user_id} - ${get_result.country}\n`
						txt += `Username : *${get_result.username}*\n`
						txt += `Join Date : ${get_result.join_date}\n\n`
						txt += `count300 : ${get_result.count300}\n`
						txt += `count100 : ${get_result.count100}\n`
						txt += `count50 : ${get_result.count50}\n\n`
						txt += `playcount : ${get_result.playcount}\n`
						txt += `Ranked Score : ${get_result.ranked_score}\n\n`
						txt += `Total Score : ${get_result.total_score}\n`
						txt += `PP Rank : ${get_result.pp_rank}\n`
						txt += `Level : *${get_result.level}*\n`
						txt += `PP Raw : *${get_result.pp_raw}*\n`
						txt += `Accuracy : *${get_result.accuracy} %*\n\n`
						txt += `count_rank_ss : *${get_result.count_rank_ss}*\n`
						txt += `count_rank_ssh : *${get_result.count_rank_ssh}*\n`
						txt += `count_rank_s : *${get_result.count_rank_s}*\n`
						txt += `count_rank_sh : *${get_result.count_rank_sh}*\n`
						txt += `count_rank_a : *${get_result.count_rank_a}*\n`
						txt += `total_sec_played : *${get_result.total_seconds_played}*\n`
						txt += `pp_country_rank : *${get_result.pp_country_rank}*\n`
						m.reply(txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Username not found.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'readqr': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if (/image/.test(mime)) {
					owgi = await hisoka.downloadAndSaveMediaMessage(quoted)
					anu = await imgbb(`${imgbbkey}`, owgi)
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=${lol}&img=${anu.display_url}`)
						if (get_result.status == '200') {
							m.reply("*Result :* " + get_result.result)
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
			}
			break
			case 'createqr': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} zerenity bot`)
				query = args.join(" ")
				thumbnail = fs.readFileSync(`./media/gagal.jpg`)
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/qrcode?apikey=${lol}&text=${query}`)
					try {
						await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch {
						await hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted : m })
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'readbarcode': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if (/image/.test(mime)) {
					owgi = await hisoka.downloadAndSaveMediaMessage(quoted)
					anu = await imgbb(`${imgbbkey}`, owgi)
					try {
						hehe = await fetchJson(`https://docs-jojo.herokuapp.com/api/barcode_read?image_url=${anu.display_url}`)
						ini_txt = `*TEXT :*\n${hehe.result.raw_text}\n\n`
						ini_txt += `*raw bytes :*\n${hehe.result.raw_bytes}`
						m.reply(ini_txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch (e) {
						m.reply(han.err())
						console.log(e)
					}
				} else {
					m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
			}
			break
			case 'createbarcode': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} zerenity bot`)
				query = args.join(" ")
				thumbnail = fs.readFileSync(`./media/gagal.jpg`)
				try {
					ini_buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${query}`)
					try {
						await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch {
						await hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted : m })
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'wikipedia': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Tahu`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						m.reply(get_result)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Tidak ditemukan / fitur error.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'translate': {
				if (args.length == 0 || !q.includes('|')) return m.reply(`Penggunaan: ${prefix + command} kode_negara|teks\n\nContoh: *${prefix + command} en|Tahu Bacem*`)
				ini_nama = args.join(" ").split("|")
				kode_negara = ini_nama[0].trim()
				ini_txt = ini_nama[1].trim()
				if (kode_negara.length == 0) return m.reply('masukkan kode negara')
				if (ini_txt.length == 0) return m.reply('teks yang pengen ditranslate mana cuy')
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lol}&text=${ini_txt}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						init_txt = `From *${get_result.from}* >> to *${get_result.to}*\n\n`
						init_txt += `*Original :* ${get_result.original}\n`
						init_txt += `*Translated :* ${get_result.translated}\n\n`
						init_txt += `Pronunciation : ${get_result.pronunciation}\n`
						m.reply(init_txt)
					} else {
						m.reply(`Kode bahasa salah / fitur error.\nUntuk melihat list kode bahasa, gunakan *${prefix}kodebahasa*`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'kodebahasa':
			case 'listbahasa': {
				m.reply(han.bahasa())
			}
			break
			case 'brainly': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Soekarno adalah`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = "*Result :*"
						for (var x of get_result) {
							ini_txt += `\n\n*Question :*\n${x.question.content}\n`
							ini_txt += `*Answer :*\n${x.answer[0].content}\n`
							ini_txt += `───────────────────`
						}
						m.reply(ini_txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Tidak ditemukan / fitur error.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'jadwaltv': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} RCTI`)
				channel = args[0]
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `*Jadwal TV ${channel.toUpperCase()}*\n\n`
						for (var x in get_result) {
							ini_txt += `${x} - ${get_result[x]}\n`
						}
						m.reply(ini_txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Jadwal tidak tersedia / fitur error.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'jadwaltvnow': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `*Jadwal TV Now :*`
						for (var x in get_result) {
							ini_txt += `\n\n${x.toUpperCase()}${get_result[x]}\n───────────────────`
						}
						m.reply(ini_txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Jadwal tidak tersedia / fitur error.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'infogempa':
			case 'gempa': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `*${get_result.lokasi}*\n\n`
						ini_txt += `Waktu : ${get_result.waktu}\n`
						ini_txt += `Potensi : *${get_result.potensi}*\n\n`
						ini_txt += `Magnitude : ${get_result.magnitude}\n`
						ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
						ini_txt += `Koordinat : ${get_result.koordinat}`
						get_buffer = await getBuffer(get_result.map)
						await hisoka.sendMessage(m.chat, {image: get_buffer, caption: ini_txt}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Info tidak tersedia / fitur error.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'lirik': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						m.reply(get_result.result)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Lirik tidak ditemukan.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'chord': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis senja`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `\n*${get_result.title.replace("&#8211;", "-")}*\n\n`
						ini_txt += `*Chord :*\n${get_result.chord}`
						m.reply(ini_txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Chord tidak ditemukan.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'cuaca': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Samarinda`)
				daerah = args[0]
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lol}`)
					if (get_result.status == '200' && get_result.result.tempat != "") {
						get_result = get_result.result
						ini_txt = `*Tempat : ${get_result.tempat}*\n\n`
						ini_txt += `Cuaca : ${get_result.cuaca}\n`
						ini_txt += `Angin : ${get_result.angin}\n`
						ini_txt += `Description : ${get_result.description}\n`
						ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
						ini_txt += `Suhu : ${get_result.suhu}\n`
						ini_txt += `Udara : ${get_result.udara}\n`
						ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
						await hisoka.sendMessage(m.chat, { location: { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude } }	, { quoted: m })
						m.reply(ini_txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(`Cuaca ${daerah} tidak tersedia / fitur error.`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'kodepos': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Samarinda or ${prefix + command} 66154`)
				daerah = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${lol}&query=${daerah}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = "*Result :*"
						for (var x of get_result) {
							ini_txt += `\n\nProvinsi : ${x.province}\n`
							ini_txt += `Kabupaten : ${x.city}\n`
							ini_txt += `Kecamatan : ${x.subdistrict}\n`
							ini_txt += `Kelurahan : ${x.urban}\n\n`
							ini_txt += `*Kode Pos : ${x.postalcode}*\n`
							ini_txt += `───────────────────`
						}
						m.reply(ini_txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Kodepos tidak ditemukan / fitur error.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'jadwalbola': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = "*Jadwal Bola :*"
						for (var x of get_result) {
							ini_txt += `\n\nHari : ${x.hari}\n`
							ini_txt += `Jam : ${x.jam}\n`
							ini_txt += `Event : ${x.event}\n`
							ini_txt += `Match : *${x.match}*\n`
							ini_txt += `TV : ${x.tv}\n`
							ini_txt += `───────────────────`
						}
						m.reply(ini_txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Jadwal tidak tersedia / fitur error.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'indbeasiswa': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = '*Info Beasiswa :*'
						for (var x of get_result) {
							ini_txt += `\n\nTitle : ${x.title}\n`
							ini_txt += `Link : ${x.link}\n`
							ini_txt += `───────────────────`
						}
						m.reply(ini_txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Info beasiswa tidak tersedia / fitur error.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'hoax': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = '*Info Hoax :*'
						for (var x of get_result) {
							ini_txt += `\n\nTitle : *${x.title}*\n`
							ini_txt += `Link : ${x.link}\n`
							ini_txt += `Posted : ${x.posted}\n`
							ini_txt += `Description : ${x.desc}\n`
							ini_txt += `───────────────────`
						}
						m.reply(ini_txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Informasi tidak tersedia / fitur error.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'nsfwcheck':
			case 'nsfwcek':
			case 'ceknsfw': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if (/image/.test(mime)) {
					owgi = await hisoka.downloadAndSaveMediaMessage(quoted)
					anu = await imgbb(`${imgbbkey}`, owgi)
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${lol}&img=${anu.display_url}`, {method: 'get'})
						if (get_result.status == '200') {
							get_result = get_result.result
							is_nsfw = "No"
							if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
							m.reply(`Is NSFW? *${is_nsfw}*\n\nNSFW Score : *${get_result}*`)
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply('Gagal mendeteksi / fitur error.')
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
			}
			break
			case 'cekusia':
			case 'usiacek': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if (/image/.test(mime)) {
					owgi = await hisoka.downloadAndSaveMediaMessage(quoted)
					anu = await imgbb(`${imgbbkey}`, owgi)
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/agedetect?apikey=${lol}&img=${anu.display_url}`, {method: 'get'})
					try {
						if (get_result.status == '200') {
							get_result = get_result.result
							m.reply(`*Usia :*\n\n${get_result} Tahun.`)
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply('Usahakan wajah terlihat jelas, dan hindari penggunaan gambar animasi.')
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
			}
			break
			case 'ocr': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if (/image/.test(mime)) {
					owgi = await hisoka.downloadAndSaveMediaMessage(quoted)
					anu = await imgbb(`${imgbbkey}`, owgi)
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ocr?apikey=${lol}&img=${anu.display_url}`, {method: 'get'})
						if (get_result.status == '200') {
							get_result = get_result.result
							m.reply(`*Result :*\n${get_result}`)
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply('Gagal mendeteksi / fitur error.')
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
			}
			break

			// ENTERTAINTMENT //
			case 'asupan': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					anu = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lol}`)
					if (anu.status == '200') {
						let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
						buffer = await getBuffer (anu.result)
						let buttonMessage = {
							video: buffer,
							caption: `_dahlah males_`,
							footer: hisoka.user.name,
							buttons: buttons,
							headerType: 4
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
							console.log(e)
							m.reply(han.errs())
						})
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case '1cak':
			case 'wancak': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/onecak?apikey=${lol}` },
						caption: `_© 1cak_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'meme2':
			case 'memeindo': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lol}` },
						caption: `_© meme cringe_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'meme': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random/meme?apikey=${lol}` },
						caption: `_© meme english_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'changemymind': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} loli legal`)
				query = args.join(" ")
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/changemymind?apikey=${lol}&text=${query}`)
					await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'darkjoke':
			case 'darkjokes': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lol}` },
						caption: `_© drakjoke fekj_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break

			// CREATOR MENU //
			case 'takestick':
			case 'take':
			case 'takestik':
			case 'colong': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				var imgbb = require('imgbb-uploader')
				if (/webp/.test(mime)) {
					ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
					if (args.length == 0) return m.reply(`Example: ${prefix + command} BunnyWalker|Bot`)
					var ini_txt = args.join(" ").split("|")
					if (ini_txt[0].length == 0) return m.reply('nama package tidak boleh kosong')
					if (ini_txt[1].length == 0) return m.reply('nama author tidak boleh kosong')
					owgi = await hisoka.downloadAndSaveMediaMessage(quoted)
					anu = await imgbb(`${imgbbkey}`, owgi)
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					try {
						nice = anu.display_url
						hisoka.sendImageAsSticker(m.chat, nice, m, { packname: ini_txt[0], author: ini_txt[1] })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch (e) {
						console.log(e)
						hisoka.sendMessage(m.chat, { sticker: ztick }, { quoted: m } )
					}
				} else {
					m.reply(`Tag sticker yang sudah dikirim!`)
				}
			}
			break
			case 'ttp':
			case 'ttp2':
			case 'ttp3':
			case 'ttp4':
			case 'ttp5':
			case 'ttp6':
			case 'attp':
			case 'attp2': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Ram Rem`)
				ini_txt = args.join(" ")
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lol}&text=${ini_txt}`)
					await hisoka.sendMessage(m.chat, { sticker: ini_buffer }, { quoted: m } )
				} catch (e) {
					console.log(e)
					hisoka.sendMessage(m.chat, { sticker: ztick }, { quoted: m } )
				}
			}
			break
			case 'quotemaker':
			case 'quotemaker2': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Males Boong Mulu`)
				ini_txt = args.join(" ")
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lol}&text=${ini_txt}`)
					await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'phcomment': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0 || !q.includes('|')) return m.reply(`Usage : ${prefix + command} username|comment\n\nExample: *${prefix + command} kribo|hmm.., menarik*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (txt1.length == 0) return m.reply('Username tidak boleh kosong')
				if (txt2.length == 0) return m.reply('Masukkan teks komentar')
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/phcomment?apikey=${lol}&img=https://i.ibb.co/DkWHn5Y/86543b228071.png&text=${txt2}&username=${txt1}`)
					await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'ssweb2':
			case 'sswebfull': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Usage : ${prefix + command} _url_web_\n\nExample: ${prefix + command} https://www.google.com`)
				if (!q.includes('http')) return m.reply('please input a valid url.\nTry with add http:// or https://')
				ini_txt = args.join(" ")
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lol}&url=${ini_txt}`)
					//await hisoka.sendMessage(m.chat, ini_buffer, image, { quoted: m, caption: `${q}` })
					await hisoka.sendMessage(m.chat, {image: ini_buffer, caption: ini_txt}, { quoted : m })
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					await hisoka.sendMessage(m.chat, {image: thumbnail, caption: `Atau coba gunakan *${prefix}ssweb2*`}, { quoted : m })
				}
			}
			break
			case 'ssweb': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Usage : ${prefix + command} _url_web_\n\nExample: ${prefix + command} https://www.google.com`)
				if (!q.includes('http')) return m.reply('please input a valid url.\nTry with add http:// or https://')
				ini_txt = args.join(" ")
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=${lol}&url=${ini_txt}`)
					//await hisoka.sendMessage(m.chat, ini_buffer, image, { quoted: m, caption: `${q}` })
					await hisoka.sendMessage(m.chat, {image: ini_buffer, caption: ini_txt}, { quoted : m })
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					await hisoka.sendMessage(m.chat, {image: thumbnail, caption: `Atau coba gunakan *${prefix}ssweb2*`}, { quoted : m })
				}
			}
			break
			case 'sticker':
			case 'stiker':
			case 's': {
				if (args.length != 0) return m.reply(han.noneed())
				if (!quoted) throw `Reply / tag sticker.`
				ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
				if (/image/.test(mime)) {
					try {
					let media = await quoted.download()
					let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
					await fs.unlinkSync(encmedia)
					} catch (e) {
						console.log(e)
						hisoka.sendMessage(m.chat, { sticker: ztick }, { quoted: m } )
					}
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 9 detik!')
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					try {
					let media = await quoted.download()
					let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
					await fs.unlinkSync(encmedia)
					} catch (e) {
						console.log(e)
						hisoka.sendMessage(m.chat, { sticker: ztick }, { quoted: m } )
					}
				} else {
					throw `Kirim Gambar/Video Dengan Caption *${prefix + command}*\nDurasi Video 1-9 Detik`
				}
			}
			break
			case 'fakedonald': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Ram Rem`)
				ini_txt = args.join(" ")
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${lol}&text=${ini_txt}`)
					await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break

			// PRIMBON
			case 'artinama': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Tiara Ayu`)
				ini_nama = args.join(" ")
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lol}&nama=${ini_nama}`)
				if (get_result.status == '200') {
					m.reply(get_result.result)
					db.data.users[m.sender].limit -= 1 // -1 limit
				} else {
					m.reply(han.err())
				}
			}
			break
			case 'jodoh': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0 || !q.includes('|')) return m.reply(`Usage : ${prefix + command} name1|name2\n\nExample: *${prefix + command} Tahu|Bacem*`)
				ini_nama = args.join(" ").split("|")
				nama1 = ini_nama[0].trim()
				nama2 = ini_nama[1].trim()
				if (nama1.length == 0) return m.reply('input name1')
				if (nama2.length == 0) return m.reply('input name2')
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					ini_txt = `*Positif :* ${get_result.positif}\n`
					ini_txt += `*Negatif :* ${get_result.negatif}\n\n`
					ini_txt += `*Deskripsi :*\n${get_result.deskripsi}`
					m.reply(ini_txt)
					db.data.users[m.sender].limit -= 1 // -1 limit
				} else {
					m.reply(han.err())
				}
			}
			break
			case 'weton': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0 || !q.includes('|')) return m.reply(`Usage : ${prefix + command} tgl|bln|tahun\n\nExample: *${prefix + command} 26|12|2020*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				txt3 = ini_nama[2].trim()
				if (isNaN(txt1) || txt1.length == 0) return m.reply('Isi tanggal sesuai format')
				if (isNaN(txt2) || txt2.length == 0) return m.reply('Isi bulan sesuai format')
				if (isNaN(txt3) || txt3.length == 0) return m.reply('Isi tahun sesuai format')
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${txt1}/${txt2}/${txt3}?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					ini_txt = `*${get_result.weton}*\n\n`
					ini_txt += `*Pekerjaan :* ${get_result.pekerjaan}\n\n`
					ini_txt += `*Rejeki :* ${get_result.rejeki}\n\n`
					ini_txt += `*Jodoh :* ${get_result.jodoh}`
					m.reply(ini_txt)
					db.data.users[m.sender].limit -= 1 // -1 limit
				} else {
					m.reply(han.err())
				}
			}
			break
			case 'jadian': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0 || !q.includes('|')) return m.reply(`Usage : ${prefix + command} tgl|bln|tahun\n\nExample: *${prefix + command} 26|12|2020*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				txt3 = ini_nama[2].trim()
				if (isNaN(txt1) || txt1.length == 0) return m.reply('Isi tanggal sesuai format')
				if (isNaN(txt2) || txt2.length == 0) return m.reply('Isi bulan sesuai format')
				if (isNaN(txt3) || txt3.length == 0) return m.reply('Isi tahun sesuai format')
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${txt1}/${txt2}/${txt3}?apikey=${lol}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					ini_txt = `*Karakteristik :* ${get_result.karakteristik}\n\n`
					ini_txt += `*Deskripsi :* ${get_result.deskripsi}`
					m.reply(ini_txt)
					db.data.users[m.sender].limit -= 1 // -1 limit
				} else {
					m.reply(han.err())
				}
			}
			break
			case 'tebakumur': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Radit`)
				ini_name = args.join(" ")
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Ram Rem`)
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${lol}&name=${ini_name}`)
				if (get_result.status == '200') {
					get_result = get_result.result
					ini_txt = `Nama : ${get_result.name}\n`
					ini_txt += `Umur : ${get_result.age}`
					m.reply(ini_txt)
					db.data.users[m.sender].limit -= 1 // -1 limit
				} else {
					m.reply(han.err())
				}
			}
			break

			// GENSHIN DEV API //
			case 'gichara':
			case 'genshin':
			case 'gi': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} ganyu`)
				query = args.join(" ")
				get_result = await fetchJson(`https://api.genshin.dev/characters/${query}`)
				get_list = await fetchJson(`https://api.genshin.dev/characters`)
				try {
					thumbnail = fs.readFileSync(`./genshin/${query}.jpg`)
				} catch {
					thumbnail = fs.readFileSync(`./genshin/paimon.jpg`)
				}
				if (get_result.name != undefined) {
					ini_txt = `_‟${get_result.description}”_\n\n`
					ini_txt += `*Name : ${get_result.name}*\n`
					if (get_result.title != undefined) {
						ini_txt += `*Title :* ${get_result.title}\n`
					} else {
						ini_txt += `*Title : -*\n`
					}
					ini_txt += `*Vision :* ${get_result.vision}\n`
					ini_txt += `*Weapon :* ${get_result.weapon}\n\n`
					if (get_result.gender != undefined) {
						ini_txt += `*Gender :* ${get_result.gender}\n`
					} else {
						ini_txt += `*Gender :*\n`
					}
					ini_txt += `*Nation :* ${get_result.nation}\n`
					ini_txt += `*Affiliation : ${get_result.affiliation}*\n\n`
					if (get_result.specialDish != undefined) {
						ini_txt += `*Special Dish :* ${get_result.specialDish}\n`
					} else {
						ini_txt += `*Special Dish : -*\n`
					}
					ini_txt += `*Rarity : ${get_result.rarity}*\n`
					ini_txt += `*Constellation : ${get_result.constellation}*\n`
					ini_txt += `*Birthday :* ${get_result.birthday}`
					//await m.reply(ini_txt)
					await hisoka.sendMessage(m.chat, {image: thumbnail, caption: ini_txt}, { quoted : m })
					try {
						get_voice = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${query}?apikey=${lol}`)
						ini_voice = await getBuffer(get_voice.result.cv[0].audio[0])
						await hisoka.sendMessage(m.chat, {audio: ini_voice, mimetype: 'audio/mpeg'}, { quoted : m })
					} catch (e) {
						console.log(e)
						hisoka.sendMessage(m.chat,{ text: `*Audio not available.*` })
					}
				} else {
					try {
						ini_txt = `*Not Found*\n\n*Available characters is :*\n${get_list.join(", ")}`
						await m.reply(ini_txt)
					} catch (e) {
						m.reply(han.err())
						console.log(e)
					}
				}
			}
			break
			case 'giartifact': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} berserker`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/artifacts/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/artifacts`)
					if (get_result.name != undefined) {
						ini_txt = `*Name : ${get_result.name}*\n\n`
						ini_txt += `*Max Rarity :* ${get_result.max_rarity}\n\n`
						ini_txt += `*2-pcs bonus :*\n${get_result["2-piece_bonus"]}\n`
						ini_txt += `*4-pcs bonus :*\n${get_result["4-piece_bonus"]}\n`
						await m.reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available artifacts is :*\n${get_list.join(", ")}`
							await m.reply(ini_txt)
						} catch (e) {
							m.reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			/*case 'giconsumable': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} food`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/consumables/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/consumables`)
					if (get_result.name != undefined) {
						ini_txt = `‟${get_result.description}”\n\n`
						ini_txt += `*Name : ${get_result.name}*\n`
						await m.reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available items is :*\n${get_list.join(", ")}`
							await m.reply(ini_txt)
						} catch (e) {
							m.reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break*/
			case 'gidomain': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} cecilia-garden`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/domains/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/domains`)
					if (get_result.name != undefined) {
						ini_txt = `_${get_result.description}_\n\n`
						ini_txt += `*Name : ${get_result.name}*\n`
						ini_txt += `*Type :* ${get_result.type}\n`
						ini_txt += `*Location:* ${get_result.location}\n`
						ini_txt += `*Nation :* ${get_result.nation}\n`
						await m.reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available domains :*\n${get_list.join(", ")}`
							await m.reply(ini_txt)
						} catch (e) {
							m.reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'gielement': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} anemo`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/elements/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/elements`)
					if (get_result.name != undefined) {
						ini_txt = `*Name : ${get_result.name}*\n`
						ini_txt += `*Key :* ${get_result.key}`
						for (var x in get_result.reactions) {
							ini_txt += `\n\n*Reaction Name : ${get_result.reactions[x].name}*\n`
							ini_txt += `*Elements* : `
							for (var y in get_result.reactions[x].elements) {
								ini_txt += ` ${get_result.reactions[x].elements[y]}, `
							}
							ini_txt += `\n*Description :*\n${get_result.reactions[x].description}\n`
							ini_txt += `───────────────────`
						}
						await m.reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available elements :*\n${get_list.join(", ")}`
							await m.reply(ini_txt)
						} catch (e) {
							m.reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'gienemy': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} hilichurl`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/enemies/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/enemies`)
					if (get_result.name != undefined) {
						ini_txt = `_${get_result.description}_\n\n`
						ini_txt += `*Name : ${get_result.name}*\n`
						ini_txt += `*Region :* ${get_result.region}\n`
						ini_txt += `*Type :* ${get_result.type}\n`
						ini_txt += `*Family :* ${get_result.family}`
						await m.reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available enemies :*\n${get_list.join(", ")}`
							await m.reply(ini_txt)
						} catch (e) {
							m.reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			/*case 'gimaterial': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} talent-book`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/materials/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/materials`)
					if (get_result.freedom != undefined) {
						ini_txt = `*Characters :*\n${get_result.freedom.characters.join(", ")}\n\n`
						ini_txt += `*Availability :*\n${get_result.freedom.availability.join(", ")}\n\n`
						ini_txt += `*Source :*\n${get_result.freedom.source}`
						await m.reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available materials :*\n${get_list.join(", ")}`
							await m.reply(ini_txt)
						} catch (e) {
							m.reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break*/
			case 'gination': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} liyue`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/nations/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/nations`)
					if (get_result.name != undefined) {
						ini_txt = `*Name : ${get_result.name}*\n\n`
						ini_txt += `*Element :* ${get_result.element}\n`
						ini_txt += `*Archon :* ${get_result.element}\n`
						ini_txt += `*ControllingEntity : ${get_result.controllingEntity}*`
						await m.reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available nations :*\n${get_list.join(", ")}`
							await m.reply(ini_txt)
						} catch (e) {
							m.reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'giweapon': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} amos-bow`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.genshin.dev/weapons/${query}`)
					get_list = await fetchJson(`https://api.genshin.dev/weapons`)
					if (get_result.name != undefined) {
						ini_txt = `*${get_result.name}*\n`
						ini_txt += `*Obtained From :* ${get_result.location}\n\n`
						ini_txt += `*Type :* ${get_result.type}\n`
						ini_txt += `*Rarity :* ${get_result.rarity}\n`
						ini_txt += `*Base ATK* : ${get_result.baseAttack}\n`
						ini_txt += `*SubStat : ${get_result.subStat}*\n\n`
						ini_txt += `*Passive : ${get_result.passiveName}*\n`
						ini_txt += `${get_result.passiveDesc}`
						await m.reply(ini_txt)
					} else {
						try {
							ini_txt = `*Not Found*\n\n*Available weapons :*\n${get_list.join(", ")}`
							await m.reply(ini_txt)
						} catch (e) {
							m.reply(han.err())
							console.log(e)
						}
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break

			// MENU ANIME //
			case 'wait':
			case 'whatnime':
			case 'whatanime': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if (/image/.test(mime)) {
					owgi = await hisoka.downloadAndSaveMediaMessage(quoted)
					anu = await imgbb(`${imgbbkey}`, owgi)
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${lol}&img=${anu.display_url}`, {method: 'get'})
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_video = await getBuffer(get_result.video)
							ini_txt = `Anilist id : ${get_result.anilist_id}\n`
							ini_txt += `MAL id : ${get_result.mal_id}\n\n`
							ini_txt += `Title : *${get_result.title_romaji}*\n`
							ini_txt += `Native : *${get_result.title_native}*\n`
							ini_txt += `English : *${get_result.title_english}*\n\n`
							ini_txt += `at : ${get_result.at}\n`
							ini_txt += `Episode : ${get_result.episode}\n`
							ini_txt += `*Similarity : ${get_result.similarity}%*`
							await hisoka.sendMessage(m.chat, { video: ini_video, caption: ini_txt }, { quoted: m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply('Anime not found.')
						}
					} catch (e) {
						m.reply(han.err())
						console.log(e)
					}
				} else {
					m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
			}
			break
			case 'wmit':
			case 'whatmanga': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if (/image/.test(mime)) {
					owgi = await hisoka.downloadAndSaveMediaMessage(quoted)
					anu = await imgbb(`${imgbbkey}`, owgi)
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/wmit?apikey=${lol}&img=${anu.display_url}`, {method: 'get'})
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*RESULT :*`
							for (var x in get_result) {
								ini_txt += `\n\n*Title : ${get_result[x].title}*\n`
								ini_txt += `*Part :* ${get_result[x].part}\n`
								ini_txt += `*Url :*\n`
								for (var y in get_result[x].urls) {
									ini_txt += `*-* ${get_result[x].urls[y]}\n`
								}
								ini_txt += `*Similarity : ${get_result[x].similarity}%*\n`
								ini_txt += `───────────────────`
							}
							m.reply(ini_txt)
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply('Manga not Found.')
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
			}
			break
			case 'manga': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `Id : ${get_result.id}\n`
						ini_txt += `Id MAL : ${get_result.idMal}\n\n`
						ini_txt += `Title : *${get_result.title.romaji}*\n`
						ini_txt += `English : *${get_result.title.english}*\n`
						ini_txt += `Native : *${get_result.title.native}*\n\n`
						ini_txt += `Format : ${get_result.format}\n`
						ini_txt += `Chapters : ${get_result.chapters}\n`
						ini_txt += `Volume : ${get_result.volumes}\n`
						ini_txt += `Status : ${get_result.status}\n`
						ini_txt += `Source : ${get_result.source}\n`
						ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
						ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
						ini_txt += `*Genre : ${get_result.genres.join(", ")}*\n\n`
						ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
						ini_txt += `*Score : ${get_result.averageScore}%*\n\n`
						ini_txt += `*Characters :*\n`
						ini_character = get_result.characters.nodes
						for (var x of ini_character) {
							ini_txt += `- ${x.name.full} (${x.name.native})\n`
						}
						ini_txt += `\n*Description :*\n${get_result.description}`
						thumbnail = await getBuffer(get_result.coverImage.large)
						await hisoka.sendMessage(m.chat, {image: thumbnail, caption: ini_txt}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Manga not found.')		
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'anime': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `Title : *${get_result.title.romaji}*\n`
						ini_txt += `English : *${get_result.title.english}*\n`
						ini_txt += `Native : *${get_result.title.native}*\n\n`
						ini_txt += `Format : ${get_result.format}\n`
						ini_txt += `Episodes : ${get_result.episodes}\n`
						ini_txt += `Duration : ${get_result.duration} mins.\n`
						ini_txt += `Status : ${get_result.status}\n`
						ini_txt += `Season : ${get_result.season}\n`
						ini_txt += `Season Year : ${get_result.seasonYear}\n`
						ini_txt += `Source : ${get_result.source}\n`
						ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
						ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
						ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
						ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
						ini_txt += `*Score : ${get_result.averageScore}%*\n\n`
						ini_txt += `*Characters :*\n`
						ini_character = get_result.characters.nodes
						for (var x of ini_character) {
							ini_txt += `- ${x.name.full} (${x.name.native})\n`
						}
						ini_txt += `\n*Description :*\n${get_result.description}`
						thumbnail = await getBuffer(get_result.coverImage.large)
						await hisoka.sendMessage(m.chat, {image: thumbnail, caption: ini_txt}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Anime not found.')		
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'character':
			case 'chara': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Miku Nakano`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `Id : ${get_result.id}\n\n`
						ini_txt += `Name : *${get_result.name.full}*\n`
						ini_txt += `Native : *${get_result.name.native}*\n`
						ini_txt += `Favorites : ${get_result.favourites}\n\n`
						ini_txt += `*Media :*\n`
						ini_media = get_result.media.nodes
						for (var x of ini_media) {
							ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
						}
						ini_txt += `\n*Description :*\n${get_result.description.replace(/__/g, "_")}`
						thumbnail = await getBuffer(get_result.image.large)
						await hisoka.sendMessage(m.chat, {image: thumbnail, caption: ini_txt}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Character not found.')		
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'kusonime':
			case 'kusonimeweb': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length < 1) return m.reply(`For searching anime / batch :\nUsage : *${prefix + command} query*\n\nFor show info / download link :\nUsage : *${prefix + command} kusonime_url*`)
				ini_url = args[0]
				if (q.includes('http://') || q.includes('https://')) {
					if (!q.includes('kusonime')) return m.reply('Bukan web kusonime itu bre')
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${lol}&url=${ini_url}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Japanese : *${get_result.japanese}*\n`
							ini_txt += `Genre : ${get_result.genre}\n`
							ini_txt += `Seasons : ${get_result.seasons}\n`
							ini_txt += `Producers : ${get_result.producers}\n\n`
							ini_txt += `*Type :* ${get_result.type}\n`
							ini_txt += `Status : ${get_result.status}\n`
							ini_txt += `Total Episode : ${get_result.total_episode}\n`
							ini_txt += `*Score : ${get_result.score}*\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Released On : ${get_result.released_on}\n\n`
							ini_txt += `*Desc :* ${get_result.desc}\n`
							link_dl = get_result.link_dl
							for (var x in link_dl) {
								ini_txt += `\n${x}\n`
								for (var y in link_dl[x]) {
							ini_txt += `${y} - ${link_dl[x][y]}\n───────────────────\n`
								}
							}
							ini_buffer = await getBuffer(get_result.thumbnail)
							await hisoka.sendMessage(m.chat, {image: ini_buffer, caption: ini_txt}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply('Anime not found.')		
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Japanese : *${get_result.japanese}*\n`
							ini_txt += `Genre : ${get_result.genre}\n`
							ini_txt += `Seasons : ${get_result.seasons}\n`
							ini_txt += `Producers : ${get_result.producers}\n`
							ini_txt += `Type : ${get_result.type}\n`
							ini_txt += `Status : ${get_result.status}\n`
							ini_txt += `Total Episode : ${get_result.total_episode}\n`
							ini_txt += `*Score : ${get_result.score}*\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Released On : ${get_result.released_on}\n`
							ini_txt += `Desc : ${get_result.desc}\n`
							link_dl = get_result.link_dl
							for (var x in link_dl) {
								ini_txt += `\n${x}\n`
								for (var y in link_dl[x]) {
							ini_txt += `${y} - ${link_dl[x][y]}\n───────────────────\n`
								}
							}
							ini_buffer = await getBuffer(get_result.thumbnail)
							await hisoka.sendMessage(m.chat, {image: ini_buffer, caption: ini_txt}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply('Details not found.')		
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'otakudesu':
			case 'otakudesuweb': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length < 1) return m.reply(`For searching info anime :\nUsage : *${prefix + command} query*\n\nFor show info / download link :\nUsage : *${prefix + command} otakudesu_link*`)
				if (q.includes('http://') || q.includes('https://')) {
					if (!q.includes('otakudesu')) return m.reply('Itu web otakudesu bukan?')
					ini_url = args[0]
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${lol}&url=${ini_url}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Japanese : *${get_result.japanese}*\n`
							ini_txt += `Judul : ${get_result.judul}\n`
							ini_txt += `Type : ${get_result.type}\n`
							ini_txt += `Episode : ${get_result.episodes}\n`
							ini_txt += `Aired : ${get_result.aired}\n`
							ini_txt += `Producers : ${get_result.producers}\n`
							ini_txt += `Genre : ${get_result.genres}\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Studios : ${get_result.status}\n`
							ini_txt += `*Rating : ${get_result.rating}*\n`
							ini_txt += `Credit : ${get_result.credit}\n`
							get_link = get_result.link_dl
							for (var x in get_link) {
								ini_txt += `\n\n*${get_link[x].title}*\n`
								for (var y in get_link[x].link_dl) {
							ini_info = get_link[x].link_dl[y]
							ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
							ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
							ini_txt += `\`\`\`Link : \`\`\`\n`
							down_link = ini_info.link_dl
							for (var z in down_link) {
								ini_txt += `${z} - ${down_link[z]}\n───────────────────\n`
							}
								}
							}
							m.reply(ini_txt)
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply('Details not found.')		
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Japanese : *${get_result.japanese}*\n`
							ini_txt += `Judul : ${get_result.judul}\n`
							ini_txt += `Type : ${get_result.type}\n`
							ini_txt += `Episode : ${get_result.episodes}\n`
							ini_txt += `Aired : ${get_result.aired}\n`
							ini_txt += `Producers : ${get_result.producers}\n`
							ini_txt += `Genre : ${get_result.genres}\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Studios : ${get_result.status}\n`
							ini_txt += `*Rating : ${get_result.rating}*\n`
							ini_txt += `Credit : ${get_result.credit}\n`
							get_link = get_result.link_dl
							for (var x in get_link) {
								ini_txt += `\n\n*${get_link[x].title}*\n`
								for (var y in get_link[x].link_dl) {
							ini_info = get_link[x].link_dl[y]
							ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
							ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
							ini_txt += `\`\`\`Link : \`\`\`\n`
							down_link = ini_info.link_dl
							for (var z in down_link) {
								ini_txt += `${z} - ${down_link[z]}\n───────────────────\n`
							}
								}
							}
							m.reply(ini_txt)
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply('Details not found.')		
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'bts':
			case 'exo':
			case 'cecan':
			case 'cogan':
			case 'blackpink':
			case 'elf':
			case 'neko':
			case 'waifu':
			case 'shota':
			case 'husbu':
			case 'sagiri':
			case 'elaina':
			case 'shinobu':
			case 'kanna':
			case 'megumin':
			case 'wallnime': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${lol}` },
						caption: `_Random pic: ${command}_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'waifu2': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					waifupic = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
					buffer = await getBuffer(waifupic.url)
					let buttonMessage = {
						image: buffer,
						caption: `_Random pic: ${command}_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'neko2': {
				if (!m.isGroup) {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					try {
						let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
						let buttonMessage = {
							image: { url: `https://api.lolhuman.xyz/api/random2/neko?apikey=${lol}` },
							caption: `_© Random Neko nyaa~~_`,
							footer: hisoka.user.name,
							buttons: buttons,
							headerType: 4
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
							console.log(e)
							m.reply(han.errs())
						})
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
					if (args.length != 0) return m.reply(han.noneed())
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					try {
						let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
						let buttonMessage = {
							image: { url: `https://api.lolhuman.xyz/api/random2/neko?apikey=${lol}` },
							caption: `_© Random Neko nyaa~~_`,
							footer: hisoka.user.name,
							buttons: buttons,
							headerType: 4
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
							console.log(e)
							m.reply(han.errs())
						})
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'holo':
			case 'kemonomimi':
			case 'fox_girl': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}` },
						caption: `_Random pic: ${command}_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'feed':
			case 'baka':
			case 'tickle': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${lol}&img=https://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}`)
					if (get_result.status == '200') {
						buffer = await getBuffer(get_result.result)
						let buttonMessage = {
							video: buffer,
							caption: `━ ━ ━ ━ [ *${command}* ] ━ ━ ━ ━`,
							footer: hisoka.user.name,
							buttons: buttons,
							headerType: 4
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'poke':
			case 'kiss':
			case 'smug':
			case 'cuddle':
			case 'cry':
			case 'hug':
			case 'lick':
			case 'pat':
			case 'bonk':
			case 'blush':
			case 'handhold':
			case 'bite':
			case 'dance':
			case 'yeet':
			case 'smile':
			case 'wave':
			case 'highfive':
			case 'wave':
			case 'nom':
			case 'glomp':
			case 'slap':
			case 'kill':
			case 'happy':
			case 'wink':
			case 'cringe': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					waifupic = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
					waifupic2 = await fetchJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${lol}&img=${waifupic.url}`)
					if (waifupic2.status == '200') {
						buffer = await getBuffer(waifupic2.result)
						let buttonMessage = {
							video: buffer,
							caption: `━ ━ ━ ━ [ *${command}* ] ━ ━ ━ ━`,
							footer: hisoka.user.name,
							buttons: buttons,
							headerType: 4
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break

			// NSFW MENU //
			case 'bokep': case 'memek': case 'lesbi': case 'gay': case 'gey': case 'geh': case 'kontol': {
				hisoka.sendMessage(m.chat,{ text: `Nyari bahan ?\n*${prefix}menunsfw* solusinya` })
			}
			break
			case 'cersex': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`, {method: 'get'})
				try {
					get_result = get_result.result
					ini_txt = `*Title : ${get_result.judul}*\n\n`
					ini_txt += `*Story :*\n${get_result.cersex}\n`
					thumbnail = await getBuffer(get_result.img)
					await hisoka.sendMessage(m.chat, {image: thumbnail, caption: ini_txt}, { quoted : m })
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'nhentai':
			case 'nhentaiweb':
			case 'nhentaisearch': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length < 1) return m.reply(`Show info based code :\nUsage : *${prefix + command} 344253*\n\nFor finding sauce :\nUsage : *${prefix + command} title / query*`)
				if (isNaN(args[0]) || q.includes('-') || q.includes('+')) {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200' && get_result.result != "") {
							get_result = get_result.result
							ini_txt = "*Result :*"
							for (var x of get_result) {
						ini_txt += `\n\nKode Nuklir : *${x.id}*\n`
						ini_txt += `English : *${x.title_english}*\n`
						ini_txt += `Japanese : *${x.title_japanese}*\n`
						ini_txt += `Native : *${x.title_native}*\n`
						ini_txt += `Upload : ${x.date_upload}\n`
						ini_txt += `Page : ${x.page}\n`
						ini_txt += `Favourite : ${x.favourite}\n`
						ini_txt += `───────────────────`
							}
							m.reply(ini_txt)
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else if (get_result.status == '200' && get_result.result == "") {
							m.reply('0 Result.')
						} else {
							m.reply('doujin not found.')
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					henid = args[0]
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lol}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							thumbnail = await getBuffer(get_result.image[0])
							ini_txt = `Romaji : *${get_result.title_romaji}*\n`
							ini_txt += `Native : *${get_result.title_native}*\n`
							get_info = get_result.info
							ini_txt += `Parodies : *${get_info.parodies}*\n\n`
							try {
								ini_txt += `*Character :* ${get_info.characters.join(", ")}\n`
							} catch {
								ini_txt += `*Character :* ${get_info.characters}\n`
							}
							try {
								ini_txt += `*Tags :* ${get_info.tags.join(", ")}\n\n`
							} catch {
								ini_txt += `*Tags :* ${get_info.tags}\n\n`
							}
							ini_txt += `Artist : *${get_info.artists}*\n`
							ini_txt += `Group : *${get_info.groups}*\n`
							try {
								ini_txt += `Languages : *${get_info.languages.join(", ")}*\n`
							} catch {
								ini_txt += `Languages : *${get_info.languages}*\n`
							}
							ini_txt += `Categories : *${get_info.categories}*\n`
							ini_txt += `*Pages : ${get_info.pages}*\n`
							ini_txt += `*Uploaded : ${get_info.uploaded}*\n`
							let buttons = [{buttonId: `${prefix}nhentaipdf ${henid}`, buttonText: {displayText: 'Nhentai PDF'}, type: 1}]
							let buttonMessage = {
								image: thumbnail,
								caption: ini_txt,
								footer: hisoka.user.name,
								buttons: buttons,
								headerType: 4
							}
							hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply('Doujin not found.')		
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'nhentaipdf': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length == 0) return m.reply(`Example: ${prefix + command} 344253`)
				if (isNaN(args[0]) || q.includes('-') || q.includes('+')) return m.reply('Yang bener gan masukin kode nuklirnya')
				henid = args[0]
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lol}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_buffer = await getBuffer(get_result)
						try {
							hisoka.sendMessage(m.chat, {document: ini_buffer, mimetype: 'application/pdf', fileName: `Nhentai - ${henid}.pdf`}, {quoted:m})
							db.data.users[m.sender].limit -= 1 // -1 limit
						} catch (e) {
							m.reply('[!] Failed to load PDF Document')
							console.log(e)
						}
					} else {
						m.reply('doujin not found')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'nekopoi':
			case 'nekopoiweb': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length < 1) return m.reply(`For searching in kucingpoi :\nUsage : *${prefix + command} isekai harem*\n\nFor show info / download link :\nUsage : *${prefix + command} nekopoi_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					if (!q.includes('nekopoi')) return m.reply('Web kucing apa bukan itu oi..')
					ini_url = args[0]
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lol}&url=${ini_url}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.anime}*\n\n`
							ini_txt += `Porducers : *${get_result.producers}*\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Size : ${get_result.size}\n\n`
							ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
							link = get_result.link
							for (var x in link) {
								ini_txt += `\n${link[x].name}\n`
								link_dl = link[x].link
									for (var y in link_dl) {
									ini_txt += `${y} - ${link_dl[y]}\n`
								}
							}
							ini_buffer = await getBuffer(get_result.thumb)
							await hisoka.sendMessage(m.chat, {image: ini_buffer, caption: ini_txt}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply('0 Result.\nCobain pakai link episode nya gan.')
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `Found : *${query}*`
							for (var x of get_result) {
								ini_txt += `\n\n*Title :* ${x.title}\n`
								ini_txt += `*Link :* ${x.link}\n`
								ini_txt += `*Thumbnail :* ${x.thumbnail}\n`
								ini_txt += `───────────────────`
							}
							ini_buffer = await getBuffer(get_result[0].thumbnail)
							await hisoka.sendMessage(m.chat, {image: ini_buffer, caption: ini_txt}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply('Anime not found.')
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'xhamster':
			case 'xhamsterweb': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length < 1) return m.reply(`Just type query what u need :\nUsage : *${prefix + command} japanese*\n\nFor show info / download link :\nUsage : *${prefix + command} xhamster_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					if (!q.includes('xhwide2')) return m.reply('Bukan website xhamster itu tod')
					query = args.join(" ")
					try {
						get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${lol}&url=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Uploader : ${get_result.author}\n`
							ini_txt += `Upload : ${get_result.upload}\n`
							ini_txt += `View : ${get_result.views}\n`
							ini_txt += `*Rating : ${get_result.rating}*\n\n`
							ini_txt += `Like : ${get_result.likes}\n`
							ini_txt += `Dislike : ${get_result.dislikes}\n`
							ini_txt += `Comment : ${get_result.comments}\n\n`
							ini_txt += "*Link :* \n"
							link = get_result.link
							for (var x of link) {
								ini_txt += `${x.type} - ${x.link}\n\n`
							}
							thumbnail = await getBuffer(get_result.thumbnail)
							await hisoka.sendMessage(m.chat, {image: thumbnail, caption: ini_txt}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `Found : *${query}*`
							for (var x of get_result) {
								ini_txt += `\n\nTitle : ${x.title}\n`
								ini_txt += `Views : ${x.views}\n`
								ini_txt += `Duration : ${x.duration}\n`
								ini_txt += `Link : ${x.link}\n`
								ini_txt += `───────────────────`
							}
							m.reply(ini_txt)
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'xnxx':
			case 'xnxxweb': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length < 1) return m.reply(`Just type query what u need :\nUsage : *${prefix + command} step mother*\n\nFor show info / download link :\nUsage : *${prefix + command} xnxx_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					if (!q.includes('xnxx')) return m.reply('Url salah, gapernah main ke xnxx ya?')
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lol}&url=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `View : ${get_result.view}\n`
							ini_txt += `*Rating : ${get_result.rating}*\n\n`
							ini_txt += `Like : ${get_result.like}\n`
							ini_txt += `Dislike : ${get_result.dislike}\n`
							ini_txt += `Comment : ${get_result.comment}\n\n`
							try {
								ini_txt += `*Tags :* ${get_result.tag.join(", ")}\n\n`
							} catch {
								ini_txt += `*Tags :* ${get_result.tag}\n\n`
							}
							ini_txt += `*Description :*\n${get_result.description}\n\n`
							ini_txt += "*Link :* \n"
							link = get_result.link
							for (var x of link) {
								ini_txt += `${x.type} - ${x.link}\n\n`
							}
							thumbnail = await getBuffer(get_result.thumbnail)
							await hisoka.sendMessage(m.chat, {image: thumbnail, caption: ini_txt}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `Found : *${query}*`
							for (var x of get_result) {
								ini_txt += `\n\nTitle : *${x.title}*\n`
								ini_txt += `Views : ${x.views}\n`
								ini_txt += `Duration : ${x.duration}\n`
								ini_txt += `Uploader : ${x.uploader}\n`
								ini_txt += `Link : ${x.link}\n`
								ini_txt += `Thumbnail : ${x.thumbnail}\n`
								ini_txt += `───────────────────`
							}
							m.reply(ini_txt)
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'pornhub':
			case 'pornhubweb': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length < 1) return m.reply(`Just type query what u need :\nUsage : *${prefix + command} step sister*\n\nFor show info / download link :\nUsage : *${prefix + command} pornhub_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					if (!q.includes('pornhub')) return m.reply('Situs pornhub atau apa itu ngab?')
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/pornhub?apikey=${lol}&url=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							get_media = get_result.media
							ini_txt = `*${get_result.title}*\n\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `View : ${get_result.views}\n`
							ini_txt += `Geo : *${get_result.geo}*\n\n`
							ini_txt += `Like : ${get_result.like}\n`
							ini_txt += `Dislike : ${get_result.dislike}\n`
							ini_txt += `Upload : ${get_result.upload}\n\n`
							ini_txt += `*Link :* \n\n`
							for (var x of get_media) {
								ini_txt += `*Default Quality :* ${x.defaultQuality}\n`
								ini_txt += `*${x.quality} - ${x.format}*\n`
								ini_txt += `*Link :* ${x.videoUrl}\n`
								ini_txt += `───────────────────\n\n`
							}
							thumbnail = await getBuffer(get_result.thumb)
							await hisoka.sendMessage(m.chat, {image: thumbnail, caption: ini_txt}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					query = args.join(" ")
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/pornhubsearch?apikey=${lol}&query=${query}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `Found : *${query}*`
							for (var x of get_result) {
								ini_txt += `\n\nTitle : *${x.title}*\n`
								ini_txt += `Views : ${x.views}\n`
								ini_txt += `Duration : ${x.duration}\n`
								ini_txt += `Uploader : ${x.uploader}\n`
								ini_txt += `Views : ${x.views}\n`
								ini_txt += `Rating : ${x.rating}\n`
								ini_txt += `Link : ${x.link}\n`
								ini_txt += `Thumbnail : ${x.thumbnail}\n`
								ini_txt += `───────────────────`
							}
							m.reply(ini_txt)
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(han.errs())
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'loli': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${lol}` },
						caption: `_© Loli Ni~_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'loli2': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random/nsfw/chiisaihentai?apikey=${lol}` },
						caption: `_© Loli Nii~_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'waifunsfw': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${lol}` },
						caption: `_© Waifu Yummy <>_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'waifunsfw2': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					waifupic = await fetchJson(`https://api.waifu.pics/nsfw/waifu`)
					buffer = await getBuffer(waifupic.url)
					let buttonMessage = {
						image: buffer,
						caption: `_© Waifu Yummy <>_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'nekonsfw': {
				if (!m.isGroup) {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					try {
						let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
						let buttonMessage = {
							image: { url: `https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${lol}` },
							caption: `_© Neko + +_`,
							footer: hisoka.user.name,
							buttons: buttons,
							headerType: 4
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
							console.log(e)
							m.reply(han.errs())
						})
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
					if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
					if (args.length != 0) return m.reply(han.noneed())
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					try {
						let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
						let buttonMessage = {
							image: { url: `https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${lol}` },
							caption: `_© Neko + +_`,
							footer: hisoka.user.name,
							buttons: buttons,
							headerType: 4
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
							console.log(e)
							m.reply(han.errs())
						})
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'trap':
			case 'blowjob':
			case 'yaoi':
			case 'ecchi':
			case 'milf':
			case 'hentai':
			case 'ahegao':
			case 'hololewd':
			case 'sideoppai':
			case 'hentaiparadise':
			case 'hentaifemdom':
			case 'hentai4everyone': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lol}` },
						caption: `_Random pic: ${command}_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'bigtiddies': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=${lol}` },
						caption: `_Random pic: ${command}_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'feets':
			case 'booty':
			case 'thighss':
			case 'armpits': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random/nsfw/anime${command}?apikey=${lol}` },
						caption: `_Random pic: ${command}_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'trap2': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random2/trap?apikey=${lol}` },
						caption: `_© Trap mu Mazz_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'blowjob2': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random2/blowjob?apikey=${lol}` },
						caption: `_Random pic: ${command}_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'hentai2': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random2/hentai?apikey=${lol}` },
						caption: `_Random pic: ${command}_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'hololewd2': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random2/hololewd?apikey=${lol}` },
						caption: `_Random pic: ${command}_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'bj':
			case 'ero':
			case 'cum':
			case 'les':
			case 'feet':
			case 'yuri':
			case 'lewd':
			case 'eron':
			case 'solo':
			case 'anal':
			case 'keta':
			case 'tits':
			case 'kuni':
			case 'erok':
			case 'solog':
			case 'feetg':
			case 'lewdk':
			case 'pussy':
			case 'femdom':
			case 'eroyuri':
			case 'erofeet':
			case 'holoero':
			case 'classic':
			case 'erokemo':
			case 'futanari':
			case 'lewdkemo': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (!db.data.chats[m.chat].nsfw) return m.reply(han.nsfwoff())
				if (args.length != 0) return m.reply(han.noneed())
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				try {
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					let buttonMessage = {
						image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}` },
						caption: `_Random pic: ${command}_`,
						footer: hisoka.user.name,
						buttons: buttons,
						headerType: 4
					}
					hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
						console.log(e)
						m.reply(han.errs())
					})
					db.data.users[m.sender].limit -= 1 // -1 limit
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'nsfw_neko_gif':
			case 'random_hentai_gif': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: `⧑ next ${command} ⧒`}, type: 1}]
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${lol}&img=https://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}`)
					if (get_result.status == '200') {
						buffer = await getBuffer(get_result.result)
						let buttonMessage = {
							video: buffer,
							caption: `━ ━ ━ ━ [ *${command}* ] ━ ━ ━ ━`,
							footer: hisoka.user.name,
							buttons: buttons,
							headerType: 4
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break

				// Textprome //
			case 'neon':
			case 'greenneon':
			case 'futureneon':
			case 'sandwriting':
			case 'sandsummer':
			case 'sandengraved':
			case 'metaldark':
			case 'neonlight':
			case 'holographic':
			case 'text1917':
			case 'minion':
			case 'deluxesilver':
			case 'newyearcard':
			case 'bloodfrosted':
			case 'halloween':
			case 'jokerlogo':
			case 'fireworksparkle':
			case 'natureleaves':
			case 'bokeh':
			case 'toxic':
			case 'strawberry':
			case 'box3d':
			case 'roadwarning':
			case 'breakwall':
			case 'icecold':
			case 'luxury':
			case 'cloud':
			case 'summersand':
			case 'horrorblood':
			case 'thunder':
			case 'magma':
			case 'impressiveglitch':
			case 'harrypotter':
			case 'watercolor':
			case 'wonderfulgraffiti': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Shiro Neko`)
				ini_txt = args.join(" ")
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lol}&text=${ini_txt}`)
					try {
						await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch {
						await hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted : m })
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'glitch':
			case 'avenger':
			case 'space':
			case 'ninjalogo':
			case 'marvelstudio':
			case 'lionlogo':
			case 'wolflogo':
			case 'steel3d':
			case 'wallgravity':
			case 'coolgravity': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0 || !q.includes('|')) return m.reply(`Usage : ${prefix + command} text1|text2\n\nExample: *${prefix + command} Shiro|Neko*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (txt1.length == 0) return m.reply('text1 cannot be empty')
				if (txt2.length == 0) return m.reply('text2 cannot be empty')
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
					try {
						await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch {
						await hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted : m })
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'phub': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0 || !q.includes('|')) return m.reply(`Usage : ${prefix + command} text1|text2\n\nExample: *${prefix + command} Shiro|Neko*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (txt1.length == 0) return m.reply('text1 cannot be empty')
				if (txt2.length == 0) return m.reply('text2 cannot be empty')
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/pornhub?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
					try {
						await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch {
						await hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted : m })
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'bpink': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Shiro Neko`)
				ini_txt = args.join(" ")
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/blackpink?apikey=${lol}&text=${ini_txt}`)
					try {
						await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch {
						await hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted : m })
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break

				// Photo Oxy //
			case 'shadow':
			case 'cup':
			case 'cup1':
			case 'romance':
			case 'smoke':
			case 'burnpaper':
			case 'lovemessage':
			case 'undergrass':
			case 'love':
			case 'coffe':
			case 'woodheart':
			case 'woodenboard':
			case 'summer3d':
			case 'wolfmetal':
			case 'nature3d':
			case 'underwater':
			case 'golderrose':
			case 'summernature':
			case 'fallleaves':
			case 'flamming':
			case 'harrypotter':
			case 'carvedwood': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Shiro Neko`)
				ini_txt = args.join(" ")
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lol}&text=${ini_txt}`)
					try {
						await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch {
						await hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted : m })
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'arcade8bit':
			case 'battlefield4':
			case 'pubg': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0 || !q.includes('|')) return m.reply(`Usage : ${prefix + command} text1|text2\n\nExample: *${prefix + command} Shiro|Neko*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (txt1.length == 0) return m.reply('text1 cannot be empty')
				if (txt2.length == 0) return m.reply('text2 cannot be empty')
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
					try {
						await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch {
						await hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted : m })
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'tiktok':
			case 'tiktokwm': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`For making text from PhotoOxy :\nUsage : *${prefix + command} text1|text2*\n\nFor download tiktok video :\nUsage : *${prefix + command} tiktok_url*`)
				if (q.includes('http') && !q.includes('|')) {
					try {
						hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
						get_buffer = await getBuffer(`https://api.lolhuman.xyz/api/tiktokwm?apikey=${lol}&url=${q}`)
						await hisoka.sendMessage(m.chat, {video: get_buffer, caption: `TIKTOK WITH WATERMARK`}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch (e) {
						console.log(e)
						m.reply(`Invalid tiktok url / fitur error.\nAtau coba gunakan *${prefix}tiktoknowm*`)
					}
				} else if (q.includes('|')) {
					ini_nama = args.join(" ").split("|")
					txt1 = ini_nama[0].trim()
					txt2 = ini_nama[1].trim()
					if (txt1.length == 0) return m.reply('Teks pertama tidak boleh kosong')
					if (txt2.length == 0) return m.reply('Teks kedua tidak boleh kosong')
					thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
					try {
						hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
						ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
						try {
							await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} catch {
							await hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted : m })
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}	
				} else {
					return m.reply(`For making text from PhotoOxy :\nUsage : *${prefix + command} text1|text2*\n\nFor download tiktok video :\nUsage : *${prefix + command} tiktok_url*`)
				}
			}
			break

				// Ephoto 360 //
			case 'wetglass':
			case 'multicolor3d':
			case 'watercolor':
			case 'luxurygold':
			case 'galaxywallpaper':
			case 'lighttext':
			case 'beautifulflower':
			case 'puppycute':
			case 'royaltext':
			case 'heartshaped':
			case 'birthdaycake':
			case 'galaxystyle':
			case 'hologram3d':
			case 'greenneon':
			case 'glossychrome':
			case 'greenbush':
			case 'metallogo':
			case 'noeltext':
			case 'glittergold':
			case 'textcake':
			case 'starsnight':
			case 'wooden3d':
			case 'textbyname':
			case 'writegalacy':
			case 'galaxybat':
			case 'snow3d':
			case 'birthdayday':
			case 'goldplaybutton':
			case 'silverplaybutton':
			case 'freefire':
			case 'cartoongravity':
			case 'anonymhacker':
			case 'mlwall':
			case 'pubgmaskot':
			case 'aovwall':
			case 'logogaming':
			case 'fpslogo':
			case 'avatarlolnew':
			case 'lolbanner':
			case 'avatardota': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Shiro Neko`)
				ini_txt = args.join(" ")
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lol}&text=${ini_txt}`)
					try {
						await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch {
						await hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted : m })
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'juventusshirt':
			case 'cutegravity':
			case 'realvintage':
			case 'codwarzone': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0 || !q.includes('|')) return m.reply(`Usage : ${prefix + command} text1|text2\n\nExample: *${prefix + command} Shiro|Neko*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (txt1.length == 0) return m.reply('text1 cannot be empty')
				if (txt2.length == 0) return m.reply('text2 cannot be empty')
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/${command}?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
					try {
						await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch {
						await hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted : m })
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'valorantbanner': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0 || !q.includes('|')) return m.reply(`Usage : ${prefix + command} text1|text2|text3\n\nExample: *${prefix + command} Shiro|Neko|Kuro*`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				txt3 = ini_nama[2].trim()
				if (txt1.length == 0) return m.reply('text1 cannot be empty')
				if (txt2.length == 0) return m.reply('text2 cannot be empty')
				if (txt3.length == 0) return m.reply('text3 cannot be empty')
				thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto3/${command}?apikey=${lol}&text1=${txt1}&text2=${txt2}&text3=${txt3}`)
					try {
						await hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch {
						await hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted : m })
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break


			// EDITOR MENU //
			case 'triggered':
			case 'trigger': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if (/image/.test(mime)) {
					owgi = await hisoka.downloadAndSaveMediaMessage(quoted)
					anu = await imgbb(`${imgbbkey}`, owgi)
					try {
						ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator1/trigger?apikey=${lol}&img=${anu.display_url}`)
						hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
						let encmedia = await hisoka.sendVideoAsSticker(m.chat, ini_buffer, m, { packname: global.packname, author: global.author })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
			}
			break
			case 'tosmile':
			case 'pencil':
			case 'wasted':
			case 'fisheye':
			case 'skullmask':
			case 'cartoon':
			case 'alien':
			case 'invert':
			case 'pixelate':
			case 'deepfry':
			case 'imagecolor':
			case 'rotate':
			case 'flip':
			case 'grayscale':
			case 'roundimage': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: m
					owgi = await hisoka.downloadAndSaveMediaMessage(ted)
					anu = await imgbb(`${imgbbkey}`, owgi)
					try {
						hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
						hehe = await getBuffer(`https://api.lolhuman.xyz/api/editor/${command}?apikey=${lol}&img=${anu.display_url}`)
						await hisoka.sendMessage(m.chat, { image: hehe }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch (e) {
						m.reply(han.err())
						console.log(e)
					}
				} else {
					m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
			}
			break
			case 'affect':
			case 'beautiful':
			case 'facepalm':
			case 'hitler':
			case 'jail':
			case 'rainbow':
			case 'rip':
			case 'sepia':
			case 'trash':
			case 'wanted': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: m
					owgi = await hisoka.downloadAndSaveMediaMessage(ted)
					anu = await imgbb(`${imgbbkey}`, owgi)
					try {
						hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
						hehe = await getBuffer(`https://api.lolhuman.xyz/api/creator1/${command}?apikey=${lol}&img=${anu.display_url}`)
						await hisoka.sendMessage(m.chat, { image: hehe }, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} catch (e) {
						m.reply(han.err())
						console.log(e)
					}
				} else {
					m.reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
				}
			}
			break

			// DOWNLOADER MENU //
			case 'play':
			case 'ytplay':
			case 'ytdl':
			case 'yt': {
				if (args.length < 1) return m.reply(`Usage :\n*${prefix + command} query*\nor\n*${prefix + command} youtube_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lol}&url=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `id : ${get_result.id}\n\n`
							ini_txt += `⭔ *Title : ${get_result.title}*\n`
							ini_txt += `⭔ Uploader : ${get_result.uploader}\n`
							ini_txt += `⭔ Channel : ${get_result.channel}\n`
							ini_txt += `⭔ Duration : ${get_result.duration}\n\n`
							ini_txt += `⭔ View : *${get_result.view}*\n`
							ini_txt += `⭔ Like : *${get_result.like}*   Dislike : *${get_result.dislike}*\n\n`
							ini_txt += `⭔ *SILAHKAN PILIH TIPE DOWNLOAD*\n_(${prefix}ytaudio atau ${prefix}ytvideo bila tombol tidak berfungsi.)_`
							gambar = await getBuffer(get_result.thumbnail)
							let buttons = [
								{buttonId: `ytaudio ${q}`, buttonText: {displayText: '♫ Audio'}, type: 1},
								{buttonId: `ytvideo ${q}`, buttonText: {displayText: '► Video'}, type: 1}
							]
							let buttonMessage = {
								location: { jpegThumbnail: gambar },
								caption: ini_txt,
								footer: hisoka.user.name,
								buttons: buttons,
								headerType: 4
							}
							hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
						} else {
							m.reply(`Invalid youtube url / fitur error.\nCoba gunakan *${prefix + command}2*`)
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${lol}&query=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `id : ${get_result.info.id}\n\n`
							ini_txt += `*Title : ${get_result.info.title}*\n`
							ini_txt += `Uploader : ${get_result.info.uploader}\n`
							ini_txt += `Channel : ${get_result.info.channel}\n`
							ini_txt += `Duration : ${get_result.info.duration}\n\n`
							ini_txt += `View : *${get_result.info.view}*\n`
							ini_txt += `Like : *${get_result.info.like}*   Dislike : *${get_result.info.dislike}*\n\n`
							ini_txt += `*SILAHKAN PILIH TIPE DOWNLOAD*\n_(${prefix}playaudio atau ${prefix}playvideo bila tombol tidak berfungsi.)_`
							gambar = await getBuffer(get_result.info.thumbnail)
							let buttons = [
								{buttonId: `ytaudio ${q}`, buttonText: {displayText: '♫ Audio'}, type: 1},
								{buttonId: `ytvideo ${q}`, buttonText: {displayText: '► Video'}, type: 1}
							]
							let buttonMessage = {
								location: { jpegThumbnail: gambar },
								caption: ini_txt,
								footer: hisoka.user.name,
								buttons: buttons,
								headerType: 4
							}
							hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
						} else {
							m.reply(`Tidak ada hasil / fitur error.\nCoba gunakan *${prefix + command}2*`)
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'play2':
			case 'ytplay2':
			case 'ytdl2':
			case 'yt2': {
				if (args.length < 1) return m.reply(`Usage :\n*${prefix + command} query*\nor\n*${prefix + command} youtube_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lol}&url=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*Title : ${get_result.title}*\n\n`
							ini_txt += `Size : ${get_result.size}\n\n`
							ini_txt += `*SILAHKAN PILIH TIPE DOWNLOAD*\n_(${prefix}ytaudio2 atau ${prefix}ytvideo2 bila tombol tidak berfungsi.)_`
							gambar = await getBuffer(get_result.thumbnail)
							let buttons = [
								{buttonId: `ytaudio2 ${q}`, buttonText: {displayText: '♫ Audio'}, type: 1},
								{buttonId: `ytvideo2 ${q}`, buttonText: {displayText: '► Video'}, type: 1}
							]
							let buttonMessage = {
								location: { jpegThumbnail: gambar },
								caption: ini_txt,
								footer: hisoka.user.name,
								buttons: buttons,
								headerType: 4
							}
							hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
						} else {
							m.reply(`Invalid youtube url / fitur error.\nCoba gunakan *${prefix + command.replace("2", "")}*`)
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lol}&query=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_txt = `*Title : ${get_result.title}*\n\n`
							ini_txt += `*SILAHKAN PILIH TIPE DOWNLOAD*\n_(${prefix}playaudio2 atau ${prefix}playvideo2 bila tombol tidak berfungsi.)_`
							gambar = await getBuffer(get_result.thumbnail)
							let buttons = [
								{buttonId: `playaudio2 ${q}`, buttonText: {displayText: '♫ Audio'}, type: 1},
								{buttonId: `playvideo2 ${q}`, buttonText: {displayText: '► Video'}, type: 1}
							]
							let buttonMessage = {
								location: { jpegThumbnail: gambar },
								caption: ini_txt,
								footer: hisoka.user.name,
								buttons: buttons,
								headerType: 4
							}
							hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
						} else {
							m.reply(`Tidak ada hasil / fitur error.\nCoba gunakan *${prefix + command.replace("2", "")}*`)
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'ytsearch':
			case 'searchyt': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Sia Unstopable`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `Found : *${query}*`
						for (var x of get_result) {
							ini_txt += `\n\n*Title :* ${x.title}\n`
							ini_txt += `*Link :* https://www.youtube.com/watch?v=${x.videoId}\n`
							ini_txt += `*Published :* ${x.published}\n`
							ini_txt += `*Views :* ${x.views}\n`
							ini_txt += `───────────────────`
						}
						ini_buffer = await getBuffer(get_result[0].thumbnail)
						await hisoka.sendMessage(m.chat, {image: ini_buffer, caption: ini_txt}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply('Tidak ada hasil / fitur error.')
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'ytaudio':
			case 'ytmp3':
			case 'playaudio':
			case 'playmp3': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`Usage :\n*${prefix + command} query*\nor\n*${prefix + command} youtube_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${lol}&url=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_size = get_result.link.size
							hisoka.sendMessage(m.chat,{ text: `*「 ${prefix + command} 」* DON'T SPAM\n\n_sending file :_ *${ini_size}*` })
							ini_voice = await getBuffer(get_result.link.link)
							await hisoka.sendMessage(m.chat, {audio: ini_voice, mimetype: 'audio/mpeg'}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(`Invalid youtube url / fitur error.\nCoba gunakan *${prefix + command}2*`)
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${lol}&query=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_size = get_result.audio.size
							ini_bitrate = get_result.audio.bitrate
							hisoka.sendMessage(m.chat,{ text: `*「 ${prefix + command} 」* DON'T SPAM\n\n_sending file :_ *${ini_size} ${ini_bitrate} kbps*` })
							ini_voice = await getBuffer(get_result.audio.link)
							await hisoka.sendMessage(m.chat, {audio: ini_voice, mimetype: 'audio/mpeg'}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(`Tidak ada hasil / fitur error.\nCoba gunakan *${prefix + command}2*`)
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'ytaudio2':
			case 'ytmp32':
			case 'playaudio2':
			case 'playmp32': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`Usage :\n*${prefix + command} query*\nor\n*${prefix + command} youtube_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lol}&url=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							ini_size = get_result.size
							hisoka.sendMessage(m.chat,{ text: `*「 ${prefix + command} 」* DON'T SPAM\n\n_sending file :_ *${ini_size}*` })
							ini_voice = await getBuffer(get_result.link)
							await hisoka.sendMessage(m.chat, {audio: ini_voice, mimetype: 'audio/mpeg'}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(`Invalid youtube url / fitur error.\nCoba gunakan *${prefix + command.replace("2", "")}*`)
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				} else {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lol}&query=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							hisoka.sendMessage(m.chat,{ text: `*「 ${prefix + command} 」* DON'T SPAM` })
							ini_voice = await getBuffer(get_result.audio)
							await hisoka.sendMessage(m.chat, {audio: ini_voice, mimetype: 'audio/mpeg'}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(`Tidak ada hasil / fitur error.\nCoba gunakan *${prefix + command.replace("2", "")}*`)
						}
					} catch (e) {
						console.log(e)
						m.reply(han.err())
					}
				}
			}
			break
			case 'ytvideo':
			case 'ytmp4':
			case 'playvideo':
			case 'playmp4': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`Usage :\n*${prefix + command} query*\nor\n*${prefix + command} youtube_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lol}&url=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							hisoka.sendMessage(m.chat,{ text: `*「 ${prefix + command} 」* DON'T SPAM\n\n_sending file :_ *${get_result.link.size}*` })
							ini_video = await getBuffer(get_result.link.link)
							ini_txt = `*Title : ${get_result.title}*\n\n`
							ini_txt += `Duration : ${get_result.duration}\n`
							ini_txt += `Resolution : ${get_result.link.resolution}\n`
							ini_txt += `Size : ${get_result.link.size}`
							await hisoka.sendMessage(m.chat, {video: ini_video, caption: ini_txt}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(`Invalid youtube url / fitur error.\nCoba gunakan *${prefix + command}2*`)
						}
					} catch (e) {
						console.log(e)
						m.reply(`*「 marked video / size too big 」*\nSometimes '*' marked videos might not be downloadable.\nOr try use *${prefix + command}2*`)
					}
				} else {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${lol}&query=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							hisoka.sendMessage(m.chat,{ text: `*「 ${prefix + command} 」* DON'T SPAM\n\n_sending file :_ *${get_result.video.size}*` })
							ini_video = await getBuffer(get_result.video.link)
							ini_txt = `*Title : ${get_result.info.title}*\n\n`
							ini_txt += `Duration : ${get_result.info.duration}\n`
							ini_txt += `Resolution : ${get_result.video.resolution}\n`
							ini_txt += `Size : ${get_result.video.size}`
							await hisoka.sendMessage(m.chat, {video: ini_video, caption: ini_txt}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(`Tidak ada hasil / fitur error.\nCoba gunakan *${prefix + command}2*`)
						}
					} catch (e) {
						console.log(e)
						m.reply(`*「 marked video / size too big 」*\nSometimes '*' marked videos might not be downloadable.\nOr try use *${prefix + command}2*`)
					}
				}
			}
			break
			case 'ytvideo2':
			case 'ytmp42':
			case 'playvideo2':
			case 'playmp42': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`Usage :\n*${prefix + command} query*\nor\n*${prefix + command} youtube_url*`)
				if (q.includes('http://') || q.includes('https://')) {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lol}&url=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							hisoka.sendMessage(m.chat,{ text: `*「 ${prefix + command} 」* DON'T SPAM\n\n_sending file :_ *${get_result.size}*` })
							ini_txt = `*Title : ${get_result.title}*\n\n`
							ini_txt += `Size : ${get_result.size}`
							ini_video = await getBuffer(get_result.link)
							await hisoka.sendMessage(m.chat, {video: ini_video, caption: ini_txt}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(`Invalid youtube url / fitur error.\nCoba gunakan *${prefix + command.replace("2", "")}*`)
						}
					} catch (e) {
						console.log(e)
						m.reply(`*「 marked video / size too big 」*\nSometimes '*' marked videos might not be downloadable.\nOr try use *${prefix + command.replace("2", "")}*`)
					}
				} else {
					try {
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lol}&query=${q}`)
						if (get_result.status == '200') {
							get_result = get_result.result
							hisoka.sendMessage(m.chat,{ text: `*「 ${prefix + command} 」* DON'T SPAM` })
							ini_video = await getBuffer(get_result.video)
							ini_txt = `\n*Title : ${get_result.title}*`
							await hisoka.sendMessage(m.chat, {video: ini_video, caption: ini_txt}, { quoted : m })
							db.data.users[m.sender].limit -= 1 // -1 limit
						} else {
							m.reply(`Tidak ada hasil / fitur error.\nCoba gunakan *${prefix + command.replace("2", "")}*`)
						}
					} catch (e) {
						console.log(e)
						m.reply(`*「 marked video / size too big 」*\nSometimes '*' marked videos might not be downloadable.\nOr try use *${prefix + command.replace("2", "")}*`)
					}
				}
			}
			break
			case 'fbdl':
			case 'fb': {
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`*Usage : ${prefix + command} fb_url_video*\n\nExample :\n${prefix + command} https://web.facebook.com/watch/?v=892725951575913`)
				if (!q.includes('http')) return m.reply('please input a valid url.\nTry with add http:// or https://')
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						ini_txt = `*SILAHKAN PILIH SERVER DOWNLOAD*\n\nKetik *${prefix}fbvideo* atau *${prefix}fbvideo2* apabila tombol tidak muncul/berfungsi.\n`
						let buttons = [
							{buttonId: `fbvideo ${q}`, buttonText: {displayText: '► SERVER 1'}, type: 1},
							{buttonId: `fbvideo2 ${q}`, buttonText: {displayText: '► SERVER 2'}, type: 1}
						]
						await hisoka.sendButtonText(m.chat, buttons, ini_txt, `Silahkan Pilih Salah Satu`, m)
					} else {
						m.reply(`Invalid facebook url / fitur error.\nCoba gunakan *${prefix}fbvideo2*`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'fbvideo': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`*Usage : ${prefix + command} fb_url_video*\n\nExample :\n${prefix + command} https://web.facebook.com/watch/?v=892725951575913`)
				if (!q.includes('http')) return m.reply('please input a valid url.\nTry with add http:// or https://')
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 ${prefix + command} 」* DON'T SPAM` })
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						ini_video = await getBuffer(get_result.result)
						await hisoka.sendMessage(m.chat, {video: ini_video, caption: `Nih Bang`}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(`Invalid facebook url / fitur error.\nCoba gunakan *${prefix}fbvideo2*`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'fbvideo2': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`*Usage : ${prefix + command} fb_url_video*\n\nExample :\n${prefix + command} https://web.facebook.com/watch/?v=892725951575913`)
				if (!q.includes('http')) return m.reply('please input a valid url.\nTry with add http:// or https://')
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 ${prefix + command} 」* DON'T SPAM` })
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/facebook2?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						ini_video = await getBuffer(get_result.result)
						await hisoka.sendMessage(m.chat, {video: ini_video, caption: `Nih Bang`}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(`Invalid facebook url / fitur error.\nCoba gunakan *${prefix}fbvideo*`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'igdl':
			case 'ig': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`*Usage : ${prefix + command} url*\n\nExample :\n${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/`)
				if (!q.includes('http')) return m.reply('please input a valid url.\nTry with add http:// or https://')
				try {
					hisoka.sendMessage(m.chat,{ text: `*「 ${prefix + command} 」* DON'T SPAM` })
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						ini_video = await getBuffer(get_result.result[0])
						await hisoka.sendMessage(m.chat, {video: ini_video, caption: `*Downloader igtv, post, video, reel, etc*`}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(`Invalid instagram url / fitur error.`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'joox':
			case 'jooxplay': {
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`*Usage : ${prefix + command} query*\n\nExample :\n${prefix + command} paramore - ignorance`)
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lol}&query=${q}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = `Found : *${q}*\n\n`
						ini_txt += `Singer : ${get_result.info.singer}\n`
						ini_txt += `Song : ${get_result.info.song}\n`
						ini_txt += `Album : ${get_result.info.album}\n`
						ini_txt += `Date : ${get_result.info.duration}\n\n`
						ini_txt += `*PILIH KUALITAS AUDIO*\n(gunakan command manual apabila tombol tidak berfungsi.)`
						gambar = await getBuffer(get_result.image)
						let buttons = [
							{buttonId: `joox128 ${q}`, buttonText: {displayText: '♫ 128 kbps'}, type: 1},
							{buttonId: `joox192 ${q}`, buttonText: {displayText: '♫ 192 kbps'}, type: 1},
							{buttonId: `joox320 ${q}`, buttonText: {displayText: '♫ 320 kbps'}, type: 1}
						]
						let buttonMessage = {
							location: { jpegThumbnail: gambar },
							caption: ini_txt,
							footer: hisoka.user.name,
							buttons: buttons,
							headerType: 4
						}
						hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
					} else {
						m.reply(`Maaf, query tidak ditemukan / fitur error.`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'joox128': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`*Usage : ${prefix + command} query*\n\nExample :\n${prefix + command} paramore - ignorance`)
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lol}&query=${q}`)
					if (get_result.status == '200') {
						hisoka.sendMessage(m.chat,{ text: `*「 128 kbps 」* DON'T SPAM\n\n_sending file :_ *${get_result.result.audio[0].size} Bytes*` })
						ini_voice = await getBuffer(get_result.result.audio[0].link)
						await hisoka.sendMessage(m.chat, {audio: ini_voice, mimetype: 'audio/mpeg'}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.err())
					}
				} catch (e) {
					console.log(e)
					m.reply('Maaf, kualitas 128 kbps tidak tersedia.')
				}
			}
			break
			case 'joox192': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`*Usage : ${prefix + command} query*\n\nExample :\n${prefix + command} paramore - ignorance`)
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lol}&query=${q}`)
					if (get_result.status == '200') {
						hisoka.sendMessage(m.chat,{ text: `*「 192 kbps 」* \n\n_sending file :_ *${get_result.result.audio[1].size} Bytes*` })
						ini_voice = await getBuffer(get_result.result.audio[1].link)
						await hisoka.sendMessage(m.chat, {audio: ini_voice, mimetype: 'audio/mpeg'}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.err())
					}
				} catch (e) {
					console.log(e)
					m.reply('Maaf, kualitas 192 kbps tidak tersedia.')
				}
			}
			break
			case 'joox320': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`*Usage : ${prefix + command} query*\n\nExample :\n${prefix + command} paramore - ignorance`)
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lol}&query=${q}`)
					if (get_result.status == '200') {
						hisoka.sendMessage(m.chat,{ text: `*「 320 kbps 」* DON'T SPAM\n\n_sending file :_ *${get_result.result.audio[2].size} Bytes*` })
						ini_voice = await getBuffer(get_result.result.audio[2].link)
						await hisoka.sendMessage(m.chat, {audio: ini_voice, mimetype: 'audio/mpeg'}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.err())
					}
				} catch (e) {
					console.log(e)
					m.reply('Maaf, kualitas 320 kbps tidak tersedia.')
				}
			}
			break
			case 'twitvideo': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`*Usage : ${prefix + command} urlnya*\n\nExample :\n${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
				if (!q.includes('http')) return m.reply('please input a valid url.\nTry with add http:// or https://')
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter2?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
						ini_txt = `Name : ${get_result.user.name}\n`
						ini_txt += `Username : ${get_result.user.username}\n\n`
						ini_txt += `${get_result.title}\n\n`
						ini_txt += `*Published :* ${get_result.publish}`
						ini_video = await getBuffer(get_result.link[0].url)
						await hisoka.sendMessage(m.chat, {video: ini_video, caption: ini_txt}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(`Invalid twitter url / fitur error.\nCoba gunakan *${prefix}twitvideo2*`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'twitvideo2': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`*Usage : ${prefix + command} urlnya*\n\nExample :\n${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
				if (!q.includes('http')) return m.reply('please input a valid url.\nTry with add http:// or https://')
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
						ini_txt = `*Title :*\n${get_result.title}\n\n`
						ini_txt += `Resolusi : ${get_result.link[0].resolution}`
						ini_video = await getBuffer(get_result.link[0].link)
						await hisoka.sendMessage(m.chat, {video: ini_video, caption: ini_txt}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(`Invalid twitter url / fitur error.\nCoba gunakan *${prefix}twitvideo*`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'tiktoknowm': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length < 1) return m.reply(`*Usage : ${prefix + command} urlnya*\n\nExample :\n${prefix + command} https://www.tiktok.com/@_motivation_foru/video/7049899115379084591`)
				if (!q.includes('http')) return m.reply('please input a valid url.\nTry with add http:// or https://')
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/tiktok3?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
						ini_video = await getBuffer(get_result.result)
						await hisoka.sendMessage(m.chat, {video: ini_video, caption: `TIKTOK NO WATERMARK`}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(`Invalid tiktok url / fitur error.\nCoba gunakan *${prefix}tiktokwm*`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'tiktokmusic':
			case 'tiktokaudio': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length == 0) return m.reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
				if (!q.includes('http')) return m.reply('please input a valid url.\nTry with add http:// or https://')
				try {
					ini_link = args[0]
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lol}&url=${ini_link}`)
					db.data.users[m.sender].limit -= 1 // -1 limit
					await hisoka.sendMessage(m.chat, {audio: get_audio, mimetype: 'audio/mpeg'}, { quoted : m })
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'spotify': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length == 0) return m.reply(`*Usage : ${prefix + command} url*\n\nExample: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA\n\n*Tips :* Untuk mencari link spotify, bisa juga dengan command *${prefix}spotsearch*`)
				if (!q.includes('http')) return m.reply('please input a valid url.\nTry with add http:// or https://')
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lol}&url=${q}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						gambar = await getBuffer(get_result.thumbnail)
						get_audio = await getBuffer(get_result.link)
						ini_txt = `Found : ${q}\n\n`
						ini_txt += `Title : *${get_result.title}*\n`
						ini_txt += `Artists : ${get_result.artists}\n`
						ini_txt += `Duration : ${get_result.duration}\n`
						ini_txt += `Popularity : ${get_result.popularity}\n`
						ini_txt += `Preview : ${get_result.preview_url}`
						await hisoka.sendMessage(m.chat, {image: gambar, caption: ini_txt}, { quoted : m })
						await hisoka.sendMessage(m.chat, {audio: get_audio, mimetype: 'audio/mpeg'}, { quoted : m })
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(`Invalid spotify url / fitur error.\n\nTips : *${prefix}spotsearch untuk mencari link spotify.`)
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break
			case 'spotsearch':
			case 'spotifysearch': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				//if (!isPremium) return m.reply(han.pre())
				if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
				query = args.join(" ")
				try {
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lol}&query=${query}`)
					if (get_result.status == '200') {
						get_result = get_result.result
						ini_txt = ""
						for (var x of get_result) {
							ini_txt += `\n\n*Title : ${x.title}*\n`
							ini_txt += `Artists : ${x.artists}\n`
							ini_txt += `Duration : ${x.duration}\n`
							ini_txt += `Link : ${x.link}\n`
							ini_txt += `Preview : ${x.preview_url}\n`
							ini_txt += `───────────────────`
						}
						m.reply(ini_txt)
						db.data.users[m.sender].limit -= 1 // -1 limit
					} else {
						m.reply(han.errs())
					}
				} catch (e) {
					console.log(e)
					m.reply(han.err())
				}
			}
			break

			// OWNER MENU //
			case 'chat': {
				if (!isCreator) return m.reply(han.ownerb())
				if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
				if (args[0] === 'mute') {
					hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'unmute') {
					hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'archive') {
					hisoka.chatModify({ archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'unarchive') {
					hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'read') {
					hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'unread') {
					hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'delete') {
					hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
			}
			break
			case 'setppbot': {
				if (!isCreator) return m.reply(han.ownerb())
				if (/image/.test(mime)) {
					let media = await hisoka.downloadAndSaveMediaMessage(quoted)
					await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
					m.reply(mess.success)
				} else {
					m.reply(`Reply / tag Gambar.`)
				}
			}
			break
			case 'join': {
				if (!isCreator) return m.reply(han.ownerb())
				if (!text) throw 'Masukkan Link Group!'
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
				hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
				let result = args[0].split('https://chat.whatsapp.com/')[1]
				await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
			}
			break
			/*case 'leave': {
				if (!isCreator) return m.reply(han.ownerb())
				await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
			}
			break*/
			case 'setexif': {
				if (!isCreator) return m.reply(han.ownerb())
				if (!text) throw `Example : ${prefix + command} packname|author`
				global.packname = text.split("|")[0]
				global.author = text.split("|")[1]
				m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
			}
			break
			case 'bcgc': case 'bcgroup': {
				if (!isCreator) return m.reply(han.ownerb())
				if (args.length == 0) throw `Text mana?\n\nExample : ${prefix + command} zeren-bot`
				if ((/image/.test(mime) || /video/.test(mime)) && !/webp/.test(mime)) {
					nais2 = await hisoka.downloadAndSaveMediaMessage(quoted)
					buffer = fs.readFileSync(nais2)
					let getGroups = await hisoka.groupFetchAllParticipating()
					let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
					let anu = groups.map(v => v.id)
					query = args.join(" ")
					m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1} detik`)
					txt = `_*「 BroadCast-Bot 」*_\n\n${query}`
					let btn = [{
							urlButton: {
								displayText: 'Source Code',
								url: 'https://github.com/clicknetcafe/zerenbot-md'
							}
						}, {}, {
								quickReplyButton: {
									displayText: 'Donate',
									id: 'donasi'
								}
						}, {
								quickReplyButton: {
									displayText: 'Contact',
									id: 'owner'
								}
						}, {
							quickReplyButton: {
								displayText: 'ALL MENU',
								id: 'allmenu'
							}
						}]
					for (let i of anu) {
						await sleep(1000)
						if (/image/.test(mime)) {
							hisoka.send5ButImg(i, txt, hisoka.user.name, buffer, btn)
						} if (/video/.test(mime)) {
							hisoka.send6ButImg(i, txt, hisoka.user.name, buffer, btn)
						}
					}
					m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
				} else {
					m.reply(`Pakai Gambar / Video Cuy`)
				}
			}
			break
			case 'bc':
			case 'broadcast':
			case 'bcall': {
				if (!isCreator) return m.reply(han.ownerb())
				if (args.length == 0) throw `Text mana?\n\nExample : ${prefix + command} zeren-bot`
				if ((/image/.test(mime) || /video/.test(mime)) && !/webp/.test(mime)) {
					nais2 = await hisoka.downloadAndSaveMediaMessage(quoted)
					buffer = fs.readFileSync(nais2)
					let anu = await store.chats.all().map(v => v.id)
					query = args.join(" ")
					m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 1} detik`)
					txt = `_*「 BroadCast-Bot 」*_\n\n${query}`
					let btn = [{
							urlButton: {
								displayText: 'Source Code',
								url: 'https://github.com/clicknetcafe/zerenbot-md'
							}
						}, {}, {
								quickReplyButton: {
									displayText: 'Donate',
									id: 'donasi'
								}
						}, {
								quickReplyButton: {
									displayText: 'Contact',
									id: 'owner'
								}
						}, {
							quickReplyButton: {
								displayText: 'ALL MENU',
								id: 'allmenu'
							}
						}]
					for (let i of anu) {
						await sleep(1000)
						if (/image/.test(mime)) {
							hisoka.send5ButImg(i, txt, hisoka.user.name, buffer, btn)
						} if (/video/.test(mime)) {
							hisoka.send6ButImg(i, txt, hisoka.user.name, buffer, btn)
						}
					}
					m.reply(`Sukses Mengirim Broadcast`)
				} else {
					m.reply(`Pakai Gambar / Video Cuy`)
				}
			}
			break
			case 'bcmeme': {
				if (!isCreator) return m.reply(han.ownerb())
				if (args.length == 0) throw `Text mana?\n\nExample : ${prefix + command} zeren-bot`
				if ((/image/.test(mime) || /video/.test(mime)) && !/webp/.test(mime)) {
					nais2 = await hisoka.downloadAndSaveMediaMessage(quoted)
					buffer = fs.readFileSync(nais2)
					let anu = await store.chats.all().map(v => v.id)
					query = args.join(" ")
					m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 1} detik`)
					txt = `${query}\n\n_*「 Just BC-Bot 」*_`
					for (let i of anu) {
						await sleep(1000)
						if (/image/.test(mime)) {
							hisoka.sendMessage(i, { image: buffer, caption: txt })
						} if (/video/.test(mime)) {
							hisoka.sendMessage(i, { video: buffer, caption: txt })
						}
					}
					m.reply(`Sukses Mengirim Broadcast`)
				} else {
					m.reply(`Pakai Gambar / Video Cuy`)
				}
			}
			break
			case 'public': {
				if (!isCreator) return m.reply(han.ownerb())
				hisoka.public = true
				m.reply('Sukse Change To Public Usage')
			}
			break
			case 'self': {
				if (!isCreator) return m.reply(han.ownerb())
				hisoka.public = false
				m.reply('Sukses Change To Self Usage')
			}
			break
			case 'block': {
				if (!isCreator) return m.reply(han.ownerb())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'unblock': {
				if (!isCreator) return m.reply(han.ownerb())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
			}
			break

			// TOOLS MENU //
			case 'style': case 'styletext': case 'textstyle': {
				if (args.length == 0) throw `Text mana?\n\nExample : ${prefix + command} zeren-bot`
				query = args.join(" ")
				anu = await styletext(query)
				teks = `Style Text From ${query}\n\n`
				for (let i of anu) {
					teks += `⭔ *${i.name}* : ${i.result}\n\n`
				}
				m.reply(teks)
			}
			break
			case 'toimage':
			case 'toimg': {
				if (args.length != 0) return m.reply(han.noneed())
				if (/webp/.test(mime)) {
					thumbnail = fs.readFileSync(`./genshin/gagal.jpg`)
					media = await hisoka.downloadAndSaveMediaMessage(quoted)
					ran = await getRandom('.png')
					try {
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return m.reply(`yah gagal\nCoba gunakan *${prefix}tomp4* untuk stiker bergerak`)
							buffer = fs.readFileSync(ran)
							hisoka.sendMessage(m.chat, { image: buffer, caption: `tuh dh jadi` }, { quoted: m })
							fs.unlinkSync(ran)
						})
					} catch (e) {
						console.log(e)
						hisoka.sendMessage(m.chat, { image: thumbnail }, { quoted: m })
					}
				} else {
					throw `Reply / tag Sticker`
				}
			}
			break
			case 'toaudio':
			case 'toaud':
			case 'toaudio':
			case 'tomp3': {
				if (args.length != 0) return m.reply(han.noneed())
				if (/video/.test(mime) || /audio/.test(mime)) {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					let media = await quoted.download()
					let { toAudio } = require('./lib/converter')
					let audio = await toAudio(media, 'mp4')
					hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
			 	} else {
			 		throw `Reply / tag Video`
			 	}
			}
			break
			case 'tomp4':
			case 'tovideo':
			case 'tovid': {
				if (args.length != 0) return m.reply(han.noneed())
				if (/webp/.test(mime)) {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					let { webp2mp4File } = require('./lib/uploader')
					let media = await hisoka.downloadAndSaveMediaMessage(quoted)
					let webpToMp4 = await webp2mp4File(media)
					await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result }, caption: 'noh dh jadi' }, { quoted: m })
					await fs.unlinkSync(media)
				} else {
					throw `Reply / tag Sticker`
				}
			}
			break
			case 'ebinary': {
				if (!/video/.test(mime) && !/audio/.test(mime) && !/image/.test(mime) && !/webp/.test(mime)) {
					query = args.join(" ")
					let { eBinary } = require('./lib/binary')
					let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
					try {
						eb = await eBinary(teks)
					} catch {
						eb = await eBinary(query)
					} 
					m.reply(eb)
				} else {
			 		throw `Reply / tag Text Message`
				}
			}
			break
			case 'dbinary': {
				if (!/video/.test(mime) && !/audio/.test(mime) && !/image/.test(mime) && !/webp/.test(mime)) {
					query = args.join(" ")
					let { dBinary } = require('./lib/binary')
					let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
					try {
						eb = await dBinary(teks)
					} catch {
						eb = await dBinary(query)
					} 
					m.reply(eb)
				} else {
			 		throw `Reply / tag Text Message`
				}
			}
			break
			case 'emojimix': {
				if (args.length == 0 || !q.includes('|')) return m.reply(`Usage : ${prefix + command} emoji1|emoji2\n\nExample: *${prefix + command} 😅|🤔*`)
				ztick = fs.readFileSync(`./media/sticker/notfound.webp`)
				var ini_txt = args.join(" ").split("|")
				if (ini_txt[0].length == 0) return m.reply('emoji1 tidak boleh kosong')
				if (ini_txt[1].length == 0) return m.reply('emoji2 tidak boleh kosong')
				anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(ini_txt[0])}_${encodeURIComponent(ini_txt[1])}`)
				if (anu.locale != "") {
					for (let res of anu.results) {
						await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
					}
				} else {
					hisoka.sendMessage(m.chat, { sticker: ztick }, { quoted: m } )
				}
			}
			break
			case 'tovn': case 'toptt': {
				if (/video/.test(mime) || /audio/.test(mime)) {
					let media = await quoted.download()
					let { toPTT } = require('./lib/converter')
					let audio = await toPTT(media, 'mp4')
					hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
				} else {
					throw 'Reply / Tag Audio or Video'
				}
			}
			break
			case 'togif': {
				if (/webp/.test(mime)) {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					let { webp2mp4File } = require('./lib/uploader')
					let media = await hisoka.downloadAndSaveMediaMessage(quoted)
					let webpToMp4 = await webp2mp4File(media)
					await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
					await fs.unlinkSync(media)	
				} else {
					throw 'Reply / Tag Sticker'
				}
			}
			break
			case 'tourl':
			case 'tolink': {
				if (/image/.test(mime)) {
					hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
					let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
					let media = await hisoka.downloadAndSaveMediaMessage(quoted)
					let anu = await TelegraPh(media)
					m.reply(util.format(anu))
					await fs.unlinkSync(media)
				} else {
					throw 'Reply / Tag Image'
				}
			}
			break
			case 'ringtone': {
				if (args.length == 0) return m.reply(`Example: ${prefix + command} black rover`)
				query = args.join(" ")
				try {
					anu = await ringtone(query)
					result = anu[Math.floor(Math.random() * anu.length)]
					hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
				} catch (e) {
					console.log(e)
					throw `Ringtone not found`
				}
			}
			break
			case 'readmore':
			case 'more': {
				if (args.length == 0 || !q.includes('|')) return m.reply(`Example: ${prefix + command} Hai beb|an keluarga`)
				ini_nama = args.join(" ").split("|")
				txt1 = ini_nama[0].trim()
				txt2 = ini_nama[1].trim()
				if (txt1.length == 0) return m.reply('Teks pertama tidak boleh kosong')
				if (txt2.length == 0) return m.reply('input teks yang ingin di hidden')
				const more = String.fromCharCode(8206)
				const readmore = more.repeat(4001)
				m.reply( txt1 + readmore + txt2)
			}
			break
			case 'tools':
			case 'moretools':
			case 'moretool':
			case 'tool': {
				throw `*「 AUDIO TOOLS 」*\n\nYou can reply audio message with this command :\n⭔ ${prefix}bass\n⭔ ${prefix}blown\n⭔ ${prefix}deep\n⭔ ${prefix}earrape\n⭔ ${prefix}fast\n⭔ ${prefix}fat\n⭔ ${prefix}nightcore\n⭔ ${prefix}reverse\n⭔ ${prefix}robot\n⭔ ${prefix}slow\n⭔ ${prefix}smooth\n⭔ ${prefix}tupai\n`
			}
			break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
				try {
					let set
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,alate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						hisoka.sendMessage(m.chat,{ text: `*「 WAIT 」 DON'T SPAM*` })
						let media = await hisoka.downloadAndSaveMediaMessage(quoted)
						let ran = getRandom('.mp3')
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return m.reply(err)
						let buff = fs.readFileSync(ran)
						hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
						fs.unlinkSync(ran)
						})
					} else {
						m.reply(`Reply / Tag Audio`)
					}
				} catch (e) {
					m.reply(e)
				}
			break

			// FUN MENU //
			case 'tebaklagu': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
				result = anu[Math.floor(Math.random() * anu.length)]
				msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
				hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\n⭔ Waktu : *60s*`, msg).then(() => {
					tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					hisoka.sendButtonText(m.chat, [{ buttonId: 'tebaklagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
					delete tebaklagu[m.sender.split('@')[0]]
					db.data.users[m.sender].limit -= 1 // -1 limit
				}
			}
			break
			case 'tebakgambar': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
				result = anu[Math.floor(Math.random() * anu.length)]
				hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\n⭔ Waktu : *60s*`, m).then(() => {
					tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					hisoka.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
					delete tebakgambar[m.sender.split('@')[0]]
					db.data.users[m.sender].limit -= 1 // -1 limit
				}
			}
			break
			case 'tebakkata': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
				result = anu[Math.floor(Math.random() * anu.length)]
				hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n⭔ Waktu : *60s*`, m).then(() => {
					tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
					if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					hisoka.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
					delete tebakkata[m.sender.split('@')[0]]
					db.data.users[m.sender].limit -= 1 // -1 limit
				}
			}
			break
			case 'tebakkalimat': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
				result = anu[Math.floor(Math.random() * anu.length)]
				hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n⭔ Waktu : *60s*`, m).then(() => {
					tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
					if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					hisoka.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
					delete tebakkalimat[m.sender.split('@')[0]]
					db.data.users[m.sender].limit -= 1 // -1 limit
				}
			}
			break
			case 'tebaklirik': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
				result = anu[Math.floor(Math.random() * anu.length)]
				hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\n⭔ Waktu : *60s*`, m).then(() => {
					tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					hisoka.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
					delete tebaklirik[m.sender.split('@')[0]]
					db.data.users[m.sender].limit -= 1 // -1 limit
				}
			}
			break
			case 'tebakbendera': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lol}`)
				if (anu.status == '200') {
					result = anu.result
					hisoka.sendText(m.chat, `*Bendera negara manakah ${result.flag} ?* \n\n⭔ Waktu : *60s*`, m).then(() => {
						tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
					})
					await sleep(60000)
					if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
						console.log("Jawaban: " + result.name)
						hisoka.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `Waktu Habis\nJawaban:  *${tebakbendera[m.sender.split('@')[0]]}*\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
						delete tebakbendera[m.sender.split('@')[0]]
						db.data.users[m.sender].limit -= 1 // -1 limit
					}
				} else {
					m.reply('Fitur sedang error.')
				}
			}
			break
			case 'tebakjenaka': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				if (tebakjenaka.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${lol}`)
				if (anu.status == '200') {
					result = anu.result
					hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.question}\nWaktu : *60s*`, m).then(() => {
						tebakjenaka[m.sender.split('@')[0]] = result.answer.toLowerCase()
					})
					await sleep(60000)
					if (tebakjenaka.hasOwnProperty(m.sender.split('@')[0])) {
						console.log("Jawaban: " + result.answer)
						hisoka.sendButtonText(m.chat, [{ buttonId: 'tebakjenaka', buttonText: { displayText: 'Tebak Jenaka' }, type: 1 }], `Waktu Habis\nJawaban:  *${tebakjenaka[m.sender.split('@')[0]]}*\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
						delete tebakjenaka[m.sender.split('@')[0]]
						db.data.users[m.sender].limit -= 1 // -1 limit
					}
				} else {
					m.reply('Fitur sedang error.')
				}
			}
			break
			case 'tebakchara': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				if (tebakchara.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				anu = await fetchJson(`https://api.lolhuman.xyz/api/tebakchara?apikey=${lol}`)
				if (anu.status == '200') {
					result = anu.result
					hisoka.sendImage(m.chat, result.image, `Siapakah nama karakter di atas ?\n⭔ Waktu : *60s*`, m).then(() => {
						tebakchara[m.sender.split('@')[0]] = result.name.toLowerCase()
					})
					await sleep(60000)
					if (tebakchara.hasOwnProperty(m.sender.split('@')[0])) {
						console.log("Jawaban: " + result.name)
						hisoka.sendButtonText(m.chat, [{ buttonId: 'tebakchara', buttonText: { displayText: 'Tebak Chara' }, type: 1 }], `Waktu Habis\nJawaban:  *${tebakchara[m.sender.split('@')[0]]}*\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
						delete tebakchara[m.sender.split('@')[0]]
						db.data.users[m.sender].limit -= 1 // -1 limit
					}
				} else {
					m.reply('Fitur sedang error.')
				}
			}
			break
			case 'siapaaku': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lol}`)
				if (anu.status == '200') {
					result = anu.result
					hisoka.sendText(m.chat, `${result.question}\n\nWaktu : *60s*`, m).then(() => {
						siapaaku[m.sender.split('@')[0]] = result.answer.toLowerCase()
					})
					await sleep(60000)
					if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) {
						console.log("Jawaban: " + result.answer)
						hisoka.sendButtonText(m.chat, [{ buttonId: 'siapaaku', buttonText: { displayText: 'Siapa Aku' }, type: 1 }], `Waktu Habis\nJawaban:  *${siapaaku[m.sender.split('@')[0]]}*\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
						delete siapaaku[m.sender.split('@')[0]]
						db.data.users[m.sender].limit -= 1 // -1 limit
					}
				} else {
					m.reply('Fitur sedang error.')
				}
			}
			break
			case 'asahotak': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				if (asahotak.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${lol}`)
				if (anu.status == '200') {
					result = anu.result
					hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.pertanyaan}\nWaktu : *60s*`, m).then(() => {
						asahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
					})
					await sleep(60000)
					if (asahotak.hasOwnProperty(m.sender.split('@')[0])) {
						console.log("Jawaban: " + result.jawaban)
						hisoka.sendButtonText(m.chat, [{ buttonId: 'asahotak', buttonText: { displayText: 'Asah Otak' }, type: 1 }], `Waktu Habis\nJawaban:  *${asahotak[m.sender.split('@')[0]]}*\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
						delete asahotak[m.sender.split('@')[0]]
						db.data.users[m.sender].limit -= 1 // -1 limit
					}
				} else {
					m.reply('Fitur sedang error.')
				}
			}
			break
			case 'susunkata': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				if (susunkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lol}`)
				if (anu.status == '200') {
					result = anu.result
					hisoka.sendText(m.chat, `Susunlah kata dibawah ini\n\n${result.pertanyaan}\nWaktu : *60s*`, m).then(() => {
						susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
					})
					await sleep(60000)
					if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
						console.log("Jawaban: " + result.jawaban)
						hisoka.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: 'Susun Kata' }, type: 1 }], `Waktu Habis\nJawaban:  *${susunkata[m.sender.split('@')[0]]}*\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
						delete susunkata[m.sender.split('@')[0]]
						db.data.users[m.sender].limit -= 1 // -1 limit
					}
				} else {
					m.reply('Fitur sedang error.')
				}
			}
			break
			case 'caklontong': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length != 0) return m.reply(han.noneed())
				if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
				result = anu[Math.floor(Math.random() * anu.length)]
				hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\n⭔ Waktu : *60s*`, m).then(() => {
					caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
					caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
				})
				await sleep(60000)
				if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					hisoka.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: 'Cak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
					delete caklontong[m.sender.split('@')[0]]
					delete caklontong_desk[m.sender.split('@')[0]]
					db.data.users[m.sender].limit -= 1 // -1 limit
				}
			}
			break
			case 'kuismath': case 'math': case 'mathkuis': {
				if (!m.isGroup) return m.reply(han.groupo())
				if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
				if (args.length == 0) return m.reply(`Mode tersedia :\n${Object.keys(modes).join(' | ')}\n\nContoh penggunaan: *${prefix + command} medium*`)
				query = args.join(" ")
				if (query == 'noob' || query == 'easy' || query == 'medium' || query == 'hard' || query == 'extreme' || query == 'impossible' || query == 'impossible2') {
					if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
					result = await genMath(text.toLowerCase())
					hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
						kuismath[m.sender.split('@')[0]] = result.jawaban
					})
					await sleep(result.waktu)
					if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
						console.log("Jawaban: " + result.jawaban)
						m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
						delete kuismath[m.sender.split('@')[0]]
						db.data.users[m.sender].limit -= 1 // -1 limit
					}
				} else {
					m.reply(`Mode tersedia :\n${Object.keys(modes).join(' | ')}\n\nContoh penggunaan: *${prefix + command} medium*`)
				}
			}
			break

			case 'anonim':
			case 'anonymous': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
					{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
				]
				hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)
			}
			break
			case 'keluar': case 'leave': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let room = Object.values(this.anonymous).find(room => room.check(m.sender))
				if (!room) {
					let buttons = [
						{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
					]
					await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
					throw false
				}
				m.reply('Ok')
				let other = room.other(m.sender)
				if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
				delete this.anonymous[room.id]
				if (command === 'leave') break
			}
			case 'mulai': case 'start': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
					let buttons = [
						{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
					]
					await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hisoka.user.name, m)
					throw false
				}
				let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
				if (room) {
					let buttons = [
						{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
						{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
					]
					await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
					room.b = m.sender
					room.state = 'CHATTING'
					await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
				} else {
					let id = + new Date
					this.anonymous[id] = {
						id,
						a: m.sender,
						b: '',
						state: 'WAITING',
						check: function (who = '') {
							return [this.a, this.b].includes(who)
						},
						other: function (who = '') {
							return who === this.a ? this.b : who === this.b ? this.a : ''
						},
					}
					let buttons = [
						{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
					]
					await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
				}
				break
			}
			case 'next': case 'lanjut': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
				if (!romeo) {
					let buttons = [
						{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
					]
					await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
					throw false
				}
				let other = romeo.other(m.sender)
				if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
				delete this.anonymous[romeo.id]
				let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
				if (room) {
					let buttons = [
						{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
						{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
					]
					await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
					room.b = m.sender
					room.state = 'CHATTING'
					await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
				} else {
					let id = + new Date
					this.anonymous[id] = {
						id,
						a: m.sender,
						b: '',
						state: 'WAITING',
						check: function (who = '') {
							return [this.a, this.b].includes(who)
						},
						other: function (who = '') {
							return who === this.a ? this.b : who === this.b ? this.a : ''
						},
					}
					let buttons = [
						{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
					]
					await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
				}
				break
			}
			case 'bisakah': {
				if (!m.isGroup) return m.reply(han.groupo())
				bisakah = args.join(" ")
				const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				hisoka.sendMessage(m.chat,{ text: 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh }, { quoted: m })
			}
			break
			case 'kapankah':
			case 'kapan': {
				if (!m.isGroup) return m.reply(han.groupo())
				kapankah = args.join(" ")
				const kapan =["Besok","Lusa","Tadi","4 Hari Lagi","5 Hari Lagi","6 Hari Lagi","1 Minggu Lagi","2 Minggu Lagi","3 Minggu Lagi","1 Bulan Lagi","2 Bulan Lagi","3 Bulan Lagi","4 Bulan Lagi","5 Bulan Lagi","6 Bulan Lagi","1 Tahun Lagi","2 Tahun Lagi","3 Tahun Lagi","4 Tahun Lagi","5 Tahun Lagi","6 Tahun Lagi","1 Abad lagi","3 Hari Lagi","Tidak Akan Pernah"]
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				hisoka.sendMessage(m.chat,{ text: 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh }, { quoted: m })
			}
			break
			case 'apakah':
			case 'apa': {
				if (!m.isGroup) return m.reply(han.groupo())
				apakah = args.join(" ")
				const apa =["Iya","Tidak","Bisa Jadi","Gatau","Ga mungkin","Coba Ulangi"]
				const kah = apa[Math.floor(Math.random() * apa.length)]
				hisoka.sendMessage(m.chat,{ text: 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah }, { quoted: m })
			}
			break


		default:
			if (budy.startsWith('=>')) {
				if (!isCreator) return m.reply(mess.owner)
				function Return(sul) {
					sat = JSON.stringify(sul, null, 2)
					bang = util.format(sat)
						if (sat == undefined) {
							bang = util.format(sul)
						}
						return m.reply(bang)
				}
				try {
					m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
				} catch (e) {
					m.reply(String(e))
				}
			}
			if (budy.startsWith('>')) {
				if (!isCreator) return m.reply(mess.owner)
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!isCreator) return m.reply(mess.owner)
				exec(budy.slice(2), (err, stdout) => {
					if(err) return m.reply(err)
					if (stdout) return m.reply(stdout)
				})
			}
			if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
				this.anonymous = this.anonymous ? this.anonymous : {}
				let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
				if (room) {
					if (/^.*(next|leave|start)/.test(m.text)) return
					if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
					let other = [room.a, room.b].find(user => user !== m.sender)
					m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
						contextInfo: {
							...m.msg.contextInfo,
							forwardingScore: 0,
							isForwarded: true,
							participant: other
						}
					} : {})
				}
				return !0
			}
			if (isCmd && budy.toLowerCase() != undefined) {
				if (m.chat.endsWith('broadcast')) return
				if (m.isBaileys) return
				let msgs = global.db.data.database
				if (!(budy.toLowerCase() in msgs)) return
				hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
			}
		}
	} catch (err) {
		m.reply(util.format(err))
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
