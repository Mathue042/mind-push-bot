/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-plusplus */
require('dotenv').config();
const { Telegraf } = require('telegraf');
const Markup = require('telegraf/markup');

const bot = new Telegraf(process.env.token);

var d1 = ['gg', 'hh', 'jj'];

// let d2 = [];

bot.start((ctx) =>
  ctx.reply(
    'Привет! Это бот учитель, скажи ему чему тебя обучить, и он задаст тебе вопрос!',
    Markup.keyboard([['ВВЕСТИ СЛОВО'], ['УДАЛИТЬ'], ['НАЧАТЬ']]).extra()
  )
);

bot.hears('ВВЕСТИ СЛОВО', (ctx) =>
  ctx.reply('Напиши слово', Markup.keyboard([['ВВЕДИ ПЕРЕВОД']]).extra())
);

bot.hears('f', (ctx) => {
  let el = 0;
  d1.push(ctx.message.text);
  while (el < d1.length - 1) {
    if (ctx.message.text == d1[el]) d1.pop();
    // let i = ctx.message.text == d1[el] ? +1 : 0;
    el++;
  }
});

// let message = (age < 3) ? 'Здравствуй, малыш!' :   'Какой необычный возраст!';

// bot.help((ctx) => ctx.reply('Send me a sticker'));

bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.hears('hi', (ctx) => ctx.reply(ctx.forwardMessage));

bot.launch();

// update: {
//   update_id: 575113499,
//   message: {
//     message_id: 396,
//     from: [Object],
//     chat: [Object],
//     date: 1600000676,
//     text: 'hi'
