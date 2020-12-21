'use strict';
require('dotenv').config();
const {Client,TextChannel, Guild, } = require('discord.js');
var dcBot = {
  token: process.env.TOKEN,
  server: process.env.SERVERNAME,
  channelName: process.env.CHANNEL,
  bot: new Client(),
  interFace: null,
  channel: null,
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
  bindUI: function () {
    this.bot.on('message', (message) => {
        if(message.content.substring(0,4) == '!msg'){
          dcBot.Response(message.content.substring(5));
        }
    });
  },
  getInterFace: async function () {

    var channels = await this.bot.channels.array();
    for (let i = 0; i < channels.length; i++) {
      var channel = channels[i];
      if(channel.guild.name == dcBot.server && channel.name == dcBot.channelName){
        dcBot.channel = channel;
        await channel.fetchMessages({ limit: 1 }).then(messages => {
          dcBot.interFace = messages.first();
        }).catch(console.error);
      }
    }
  },
  Response: function (msg) {
    if(dcBot.interFace == undefined){
        this.channel.send('Nincs üzenet.').then(message => dcBot.interFace = message)
            .catch(console.error);
    }else {
      dcBot.interFace.edit(msg);
      dcBot.interFace.reply();
      var channels = this.bot.channels.array();
      for (let i = 0; i < channels.length; i++) {
        var channel = channels[i];
        if (channel.guild.name == dcBot.server && channel.name == dcBot.channelName) {
          channel.fetchMessages({limit: 1}).then(messages => {
            messages.first().delete(0).then(function () {

            }).catch(console.error);
          }).catch(console.error);
        }
      }
    }
  }
};

dcBot.login();
dcBot.init();
