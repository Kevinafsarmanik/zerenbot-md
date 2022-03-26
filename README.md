# BunnyWalker-Bot
Script WhatsApp Bot Multi Device

## NOTE
This Script is for everyone

<p align="center">
	<img src="https://i.ibb.co/tmQVScZ/zero.jpg" width="35%" style="margin-left: auto;margin-right: auto;display: block;">
</p>
<h1 align="center">Zerenity Multi Device</h1>

This is Script of WhatsApp multi device, working with [`@adiwajshing/baileys`](https://github.com/adiwajshing/baileys)

## My Project
WhatsApp Bot by Zerenity [`clicknetcafe/zerenbot-md`](https://github.com/clicknetcafe/zerenbot-md)

Original Base by Hisoka Multi Device [`DikaArdnt/Hisoka-Morou`](https://github.com/DikaArdnt/Hisoka-Morou)


## UNTUK PENGGUNA WINDOWS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* (**Plus ada step step tambahan gan, perhatikan detail cara install di bawah**)


```bash
git clone https://github.com/clicknetcafe/zerenbot-md
cd zerenbot-md
npm install
npm install jimp
```

## HOW TO CONNECT TO MONGODB WHEN RUN IN HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `web: node . -- db 'Your Mongo URI'`



## FOR TERMUX/UBUNTU/SSH USER

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
git clone https://github.com/clicknetcafe/zerenbot-md
cd zerenbot-md
npm install
npm install imgbb-uploader
npm install jimp
npm install libwebp
```

## IF ERROR INSTALL MODULE FOR TERMUX

```bash
pkg install yarn
yarn
```

## Installing
```bash
$ node .
```

## SETTINGS and NOTE

All case using lol api, if seems not working, change the key

Commands that use imggb key : readqr, readbarcode, ceknsfw, cekusia, ocr, wait, wmit, trigger, and all command in editormenu

- Change apikey and imgbb key [IN HERE](https://github.com/clicknetcafe/zerenbot-md/blob/master/config.js#L21)
- Owner number [Here](https://github.com/clicknetcafe/zerenbot-md/blob/master/config.js#L23)


## HOW TO CONNECT TO MONGODB WHEN RUN IN HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `web: node . -- db 'Your Mongo URI'`


## ❗ Warning
WhatsApp bot is still in the development stage, so there are a few bugs
WhatsApp Connection (BETA, not working perfectly)

Editing Number Owner & session name in [`config.js`](https://github.com/clicknetcafe/zerenbot-md/blob/master/config.js)
Get Apikey LolHuman on [`lolhuman`](https://api.lolhuman.xyz/pricing)


## Thanks To
* [`@adiwajshing/baileys`](https://github.com/adiwajshing/baileys)
* [`Nurutomo`](https://github.com/Nurutomo)
* [`Mhankbarbar`](https://github.com/MhankBarBar)
* [`DikaArdnt`](https://github.com/DikaArdnt)

License: [MIT](https://en.wikipedia.org/wiki/MIT_License)

Support Me
* 082337245566 (Pulsa / OVO / Dana)
* [`Saweria`](https://saweria.co/clicknetcafe)

## Contact Me
* [`WhatsApp`](https://wa.me/6282337245566)
* [`Facebook`](https://www.facebook.com/dikzsaga)

