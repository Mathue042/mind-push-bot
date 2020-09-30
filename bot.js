/* eslint-disable prefer-destructuring */
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
// import { d1} from './package.json';
const fs = require('fs');

const { data } = JSON.parse(fs.readFileSync('../store.json', 'utf8'));

require('dotenv').config();
const { Telegraf } = require('telegraf');
const translate = require('translate-google');
const Markup = require('telegraf/markup');

const bot = new Telegraf(process.env.token);

console.log(data);
//node --experimental-json-modules

var d1 = ['appple', 'goat', 'horse'];
var d2 = ['яблоко', 'коза', 'лошадь'];
var msgArr = [' ', ' '];

bot.start((ctx) =>
  ctx.reply(
    'Привет! Это бот учитель, скажи ему чему тебя обучить, и он задаст тебе вопрос! Для того, чтобы вписать новое слово нажми ВВЕСТИ СЛОВО, после напиши слово, после чего жми на ВВЕДИ ПЕРЕВОД и бот подберет перевод слова!',
    Markup.keyboard([['ВВЕСТИ СЛОВО'], ['УДАЛИТЬ'], ['НАЧАТЬ']]).extra()
  )
);

bot.hears('ВВЕСТИ СЛОВО', (ctx) =>
  ctx.reply('Напиши слово', Markup.keyboard([['ПЕРЕВЕСТИ']]).extra())
);

bot.command('a', (ctx) => console.log(d1, d2));

bot.hears('ПЕРЕВЕСТИ', (ctx) => {
  let el = 0;
  i = msgArr[1];
  console.log(msgArr);
  d1.push(i);
  while (el < d1.length - 1) {
    if (i == d1[el]) d1.pop();
    el++;
  }
  if (d1.length > d2.length) {
    translate(d1[d1.length - 1], { from: 'en', to: 'ru' }).then((res) => {
      d2.push(res);
      ctx.reply(`твое слово - ${d1[d1.length - 1]}, а его перевод - ${d2[d2.length - 1]}`);
    });
  }
});

bot.on('text', (ctx) => {
  msg = ctx.message.text;
  msgArr.shift();
  msgArr.push(msg);
  console.log(msgArr);
});

bot.launch();
