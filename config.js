/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	lol: 'https://api.lolhuman.xyz',
}

// Apikey jangan diisi, isi dibawah
global.APIKeys = {
	'https://api.lolhuman.xyz': 'apikey',
}

// Other (apikey isi disini)
global.LolApiKey = '260153ea4dfab79e14a9c7ae'
global.Imgbb = '7b2fde1f55b9a594d5db403f0a0c2712'
global.owner = ['6282337245566']
global.premium = ['6282337245566']
global.packname = 'BunnyWalker'
global.author = 'Bot'
global.sessionName = 'hisoka'
global.prefa = ['!','.']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 60
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
