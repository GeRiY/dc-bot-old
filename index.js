'use strict';
require('dotenv').config();
const FFMPEG = require('ffmpeg');

const {Client,TextChannel, Guild} = require('discord.js');
var dcBot = {
  token: process.env.TOKEN,
  serverId: process.env.SERVERID,
  channelId: process.env.CHANNELID,
  bot: new Client(),
  interFace: null,
  channel: null,
  voiceChannel: null,
  login: function () {
    this.bot.login(this.token);
  },
  init: function(){
    this.bot.on('ready', () => {
      //console.info(`Logged in as ${bot.user.tag}!`);
      this.getInterFace().then(function () {
        dcBot.bindUI();
      });

    })
  },
  bindUI:async function () {
    const channel = this.bot.channels.get("863459722916134928"); //AFK szoba
    if (!channel) return console.error("Ez a csatorna nem létezik.");
    /*channel.join().then(connection => {
      // Yay, it worked!
      console.log("Sikeres csatlakozás.");
    }).catch(e => {
      // Oh no, it errored! Let's log it to console :)
      console.error(e);
    });*/

   //channel.join();
    this.bot.on('message', (message) => {
      console.log(message.content.substring(0,6))
        if(message.content.substring(0,6) == '!Hello'){
          dcBot.Respone('hello');
        }
    });
  },
  getInterFace: async function () {
    var channels = await this.bot.channels.array();
    for (let i = 0; i < channels.length; i++) {
      var channel = channels[i];
      if(channel.guild.id == dcBot.serverId && channel.id == dcBot.channelId){
        console.log('Szerver és szoba megtalálva.')
        console.log('Szerver: '+channel.guild.name+'\nSzoba: '+channel.name)
        dcBot.channel = channel;
        await channel.fetchMessages({ limit: 1 }).then(messages => {
          dcBot.interFace = messages.first();
        }).catch(console.error);
      }
    }
  },
  Respone: function (msg) {
    if(dcBot.interFace == undefined){
        this.channel.send('Nincs üzenet.').then(message => dcBot.interFace = message)
            .catch(console.error);
    }else {
      if(msg == 'hello'){
        dcBot.interFace.reply('Csáobelló :D');
      }
      //var channels = this.bot.channels.array();
      /*for (let i = 0; i < channels.length; i++) {
        var channel = channels[i];
        if (channel.guild.name == dcBot.server && channel.name == dcBot.channelName) {
          channel.fetchMessages({limit: 1}).then(messages => {
            messages.first().delete(0).then(function () {

            }).catch(console.error);
          }).catch(console.error);
        }
      }*/
    }
  }
};

dcBot.login();
dcBot.init();
