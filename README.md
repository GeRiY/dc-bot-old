# Nodejs Bot

## package.json
```javascript
{
"discord.js": "^11.5.1",
"dotenv": "^8.2.0",
"request": "^2.88.2",
"sync-request": "^6.1.0"
}
```
## Dokumentációk amiket használtam
- [Discord.js.org](https://discord.js.org/#/docs/main/stable/general/welcome)

## Telepítés lépések
Regisztáld és hozd létre a botod a szerverre ezen a linken: https://discord.com/developers/applications

1. Klónozd a repot: https://github.com/GeRiY/dc-bot.git
2. Futtasd meg: `npm install`
3. Töltsd ki a `.env` fájlban a kért adatokat.
4. Az oldalon https://discord.com/developers/applications a kiválasztott `BOT`-nál az `OAuth2` oldalsó menüpontban
   a `Scops`-nál ki kell jelölni a `Bot`-ot és a kapott `Link`-et meg kell hívni majd ott be kell állítani hogy
   melyik szerverre regisztrálja be a `Bot`-ot.
5. Futtasd a programot: `npm start`
6. Használd a Bot-ot a `.env`-ben megadott szerveren.

## Kért adatok beszerzése
### `.env` fájlban a 
- `TOKEN` értékét az oldalon https://discord.com/developers/applications 
  bejelentkezés után a kiválasztott vagy létrehozott Aplikációt megnyitva a `Bot` nevű oldalsó menüpontban találod meg.
  Ott tudsz neki generálni majd `Copy`-val kimásolni.
- `SERVERNAME` a szerver neve amire regisztrálod a BOT-odat.
- `CHANNELNAME` a szoba neve amit megadsz neki alapértelmezett válasz helynek.
  Ezt létre is kell hoznod mint szöveges csatornát a szervereden.
 __Fontos hogy nem szabad ebbe a csatornába írni hanem csak másik csatornából kell kiadni a parancsokat.__

## Parancsok:
- `!msg üzenet`

## Kérdés, megjegyzés esetén
- mgeri1993@gmail.com
