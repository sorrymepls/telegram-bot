const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');
const myId = 333988817;
const saniaId = 396190668;

const bot = new Telegraf('1158433041:AAFW1-43U3lSVNP4-YgyNwvraNMaQRi-sCA');

// bot.use((ctx) => {
//   Telegraf.log();
// });https://1.bp.blogspot.com/-BHPWoOCBRcg/Udxd9BnTUVI/AAAAAAAABmU/KhXBwGYGG9Y/s1600/09_ok_web_thumbs.jpg

//  Старт бота, готова чи ні
bot.start((ctx) => {
  if (ctx.message.chat.id === myId || saniaId) {
    return ctx.replyWithPhoto(
      {
        url:
          'https://1.bp.blogspot.com/-BHPWoOCBRcg/Udxd9BnTUVI/AAAAAAAABmU/KhXBwGYGG9Y/s1600/09_ok_web_thumbs.jpg',
      },
      Extra.load({
        caption: `Давай жди действий`,
      })
    );
  } else {
    bot.telegram.sendMessage(saniaId, 'Настя стартанула бота'),
      bot.telegram.sendMessage(myId, 'Настя стартанула бота'),
      ctx.reply(
        'Привіт! Ти готова до цікавого вечора?',
        Extra.HTML().markup((m) =>
          m.inlineKeyboard([
            m.callbackButton('Так', 'startBot'),
            m.callbackButton('Ні', 'restartBot'),
          ])
        )
      );
  }
});

// ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------
// ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------
// ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------ЗВОНОК-------

bot.action('callMe', (ctx) => {
  bot.telegram.sendMessage(saniaId, 'Настя звонить Сані');
  bot.telegram.sendMessage(myId, 'Настя звонить Сані');
  bot.telegram.sendContact(ctx.update.callback_query.from.id, +380951500135, 'Саньок');
  ctx.reply('Тисни "Знайшла" коли знайдеш конверт!');
});

// Відповідь бота на готовність

bot.action('startBot', (ctx) => {
  return ctx.reply(
    `Тоді розпочнемо!`,
    Extra.HTML().markup((m) => m.inlineKeyboard([m.callbackButton('Ну давай уже 😂', 'warn')]))
  );
});

bot.action('restartBot', (ctx) => {
  return ctx.reply(
    `А всё уже, всё! Раньше надо было думать!)`,
    Extra.HTML().markup((m) => m.inlineKeyboard([m.callbackButton('Ох і скатіна!', 'startBot')]))
  );
});

bot.action('warn', (ctx) => {
  return ctx.reply(
    `Сьогодні тобі прийдеться трішки погуляти, тому вдягни зручне взуття😊❤️`,
    Extra.HTML().markup((m) => m.inlineKeyboard([m.callbackButton('Готово!', 'guide')]))
  );
});

bot.action('guide', (ctx) => {
  return ctx.reply(
    `Діло буде так:

📸Я надсилаю тобі фото(воно МОЖЛИВО зв'язане з тією локацією) і інструкцію локації, як її знайти,
🌄А ти згадуєш наші зустрічі і йдеш шукати конверт.

🖼 Якщо це кафе, то конверт буде прикріплений десь біля входу, на видному місці

💌Коли ти його забереш, ти натискаєш "Знайшла!" і отримуєш подальші інструкції.

😢Якщо ти не можеш згадати те місце, ти можеш взяти підказку.

😨Якщо ж перша підказка тобі таки не допоможе, 
📎То ти можеш обрати другу підказку, яка вишле тобі точну локацію)

📲Ну і на крайняк, можеш позвонити мені)

😝 Але краще пробуй без підказок, так буде цікавіше)

P.S. Трішки терпіння не завадить, не спіши натискати кнопку декілька раз, вона може трішки думати))
  `,
    Extra.HTML().markup((m) => m.inlineKeyboard([m.callbackButton('Поняу Приняу!', 'firstMes')]))
  );
});

// ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----
// ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----
// ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----ПЕРША ЛОКАЦІЯ-----

bot.action('firstMes', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться першу локацію)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться першу локацію)');
  return ctx.replyWithPhoto(
    {
      url: 'https://i.imgur.com/0E95NHN.jpg',
    },
    Extra.load({
      caption: `Ну, погнали!

🐾 Перша локація буде не з легких, фоточка не звідси(

🚦 Отако провожу я тебе додому, а воно нас зупиняє,

🥰 Ну і можна поніжитись ~40сек)`,
    })
      .HTML()
      .markup((m) =>
        m.inlineKeyboard([
          m.callbackButton('Знайшла!', 'secondMes'),
          m.callbackButton('Давай підказку!', 'firstTypeText'),
        ])
      )
  );
});

bot.action('firstTypeText', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться першу підказку для 1 локації');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться першу підказку для 1 локації');
  kissCount += 1;

  return ctx.reply(
    '🚥 Це місце неподалік моста, недалеко від тебе',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'secondMes'),
        m.callbackButton('Дивитись локейшн', 'firstTypeLoc'),
      ])
    )
  );
});

bot.action('firstTypeLoc', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться другу підказку для 1 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку для 1 локації)');
  kissCount += 2;

  console.log(ctx);

  return ctx.replyWithLocation(
    '48.289350',
    '25.950687',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'secondMes'),
        m.callbackButton('Позвонити Сані', 'callMe'),
      ])
    )
  );
});

// ДРУГА ЛОКАЦІЯ -----ДРУГА ЛОКАЦІЯ------ДРУГА ЛОКАЦІЯ------ДРУГА ЛОКАЦІЯ------ДРУГА ЛОКАЦІЯ------ДРУГА ЛОКАЦІЯ
// ДРУГА ЛОКАЦІЯ -----ДРУГА ЛОКАЦІЯ------ДРУГА ЛОКАЦІЯ------ДРУГА ЛОКАЦІЯ------ДРУГА ЛОКАЦІЯ------ДРУГА ЛОКАЦІЯ
// ДРУГА ЛОКАЦІЯ -----ДРУГА ЛОКАЦІЯ------ДРУГА ЛОКАЦІЯ------ДРУГА ЛОКАЦІЯ------ДРУГА ЛОКАЦІЯ------ДРУГА ЛОКАЦІЯ

bot.action('secondMes', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться другу локацію)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу локацію)');

  return ctx.replyWithPhoto(
    {
      url: 'https://i.imgur.com/hKmJxHN.jpg',
    },
    Extra.load({
      caption: `👑 Я не сумнівався, що ти в мене смекалиста!

🏎 Погнали далі!

🐾 Друга локація популярна в наших відносинах)

🏬 Це місце, де ми зустрілись на першому побаченні

🌝 Ну і не тільки на першому`,
    })
      .HTML()
      .markup((m) =>
        m.inlineKeyboard([
          m.callbackButton('Знайшла!', 'thirdMes'),
          m.callbackButton('Давай підказку!', 'secondTypeText'),
        ])
      )
  );
});

bot.action('secondTypeText', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться першу підказку 2 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться першу підказку 2 локації)');
  kissCount += 1;
  return ctx.reply(
    'Це - магазин, назва має шось спільне з деревом',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'thirdMes'),
        m.callbackButton('Дивитись локейшн', 'secondTypeLoc'),
      ])
    )
  );
});

bot.action('secondTypeLoc', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться другу підказку 2 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 2 локації)');
  kissCount += 2;
  return ctx.replyWithLocation(
    '48.287530',
    '25.938374',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'thirdMes'),
        m.callbackButton('Позвонити Сані', 'callMe'),
      ])
    )
  );
});

// ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----
// ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----
// ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----ТРЕТЯ ЛОКАЦІЯ-----

bot.action('thirdMes', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться 3 локацію)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться 3 локацію)');

  return ctx.replyWithPhoto(
    {
      url: 'https://i.imgur.com/f0GGjaV.jpg',
    },
    Extra.load({
      caption: `Умнічка моя!

🐾 Третя локація значуща для наших відносин
    
🍷 Це місце, з якого почалось наше лав-сторі

🐴 Це місце, де ми зустріли нашу пів-річницю, якщо можна так сказати😂`,
    })
      .HTML()
      .markup((m) =>
        m.inlineKeyboard([
          m.callbackButton('Знайшла!', 'fourthMes'),
          m.callbackButton('Давай підказку!', 'thirdTypeText'),
        ])
      )
  );
});

bot.action('thirdTypeText', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться першу підказку 3 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться першу підказку 3 локації)');

  return ctx.reply(
    'Ми попали туда з компахою після кіношки. Вскрив всі карти🙃',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'fourthMes'),
        m.callbackButton('Дивитись локейшн', 'thirdTypeLoc'),
      ])
    )
  );
});

bot.action('thirdTypeLoc', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться другу підказку 3 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 3 локації)');

  return ctx.replyWithLocation(
    '48.289921',
    '25.936267',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'fourthMes'),
        m.callbackButton('Позвонити Сані', 'callMe'),
      ])
    )
  );
});

// ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----
// ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----
// ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----ЧЕТВЕРТА ЛОКАЦІЯ-----

bot.action('fourthMes', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться 4 локацію)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться 4 локацію)');

  return ctx.replyWithPhoto(
    {
      url: 'https://i.imgur.com/0kAuXUr.jpg',
    },
    Extra.load({
      caption: `Ну, це було ізі!

🐾 Четверта локація теж не дуже важка)
    
🥐 Це місце, яке принесло круасани в наші відносини😂

☕️ Частенько ми тут зависаєм`,
    })
      .HTML()
      .markup((m) =>
        m.inlineKeyboard([
          m.callbackButton('Знайшла!', 'fifthMes'),
          m.callbackButton('Давай підказку!', 'fourthTypeText'),
        ])
      )
  );
});

bot.action('fourthTypeText', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться першу підказку 4 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 4 локації)');

  return ctx.reply(
    '💊 Після Нового Року таблеточку тут пила, ох і шалунішки😂',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'fifthMes'),
        m.callbackButton('Дивитись локейшн', 'fourthTypeLoc'),
      ])
    )
  );
});

bot.action('fourthTypeLoc', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться другу підказку 4 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 4 локації)');

  return ctx.replyWithLocation(
    '48.290671',
    '25.936181',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'fifthMes'),
        m.callbackButton('Позвонити Сані', 'callMe'),
      ])
    )
  );
});

// П'ЯТА ЛОКАЦІЯ-----П'ЯТА ЛОКАЦІЯ-----П'ЯТА ЛОКАЦІЯ-----П'ЯТА ЛОКАЦІЯ-----П'ЯТА ЛОКАЦІЯ-----
// П'ЯТА ЛОКАЦІЯ-----П'ЯТА ЛОКАЦІЯ-----П'ЯТА ЛОКАЦІЯ-----П'ЯТА ЛОКАЦІЯ-----П'ЯТА ЛОКАЦІЯ-----
// П'ЯТА ЛОКАЦІЯ-----П'ЯТА ЛОКАЦІЯ-----П'ЯТА ЛОКАЦІЯ-----П'ЯТА ЛОКАЦІЯ-----П'ЯТА ЛОКАЦІЯ-----

bot.action('fifthMes', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться 5 локацію)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться 5 локацію)');

  return ctx.replyWithPhoto(
    {
      url: 'https://i.imgur.com/pKeoufr.jpg',
    },
    Extra.load({
      caption: `Це було ізі, правда? Тоді лови наступну

🥶 Ця локація була «рятувальним кругом» для нас взимку

❄️ Тут ми грілись)
      
☕️ А ще, в тому місці я «смотрел голых баб»😂`,
    })
      .HTML()
      .markup((m) =>
        m.inlineKeyboard([
          m.callbackButton('Знайшла!', 'sixthMes'),
          m.callbackButton('Давай підказку!', 'fifthTypeText'),
        ])
      )
  );
});

bot.action('fifthTypeText', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться першу підказку 5 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 5 локації)');

  return ctx.reply(
    '😝 Цього разу без підказки, думай, легко ж)',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'sixthMes'),
        m.callbackButton('Дивитись локейшн', 'fifthTypeLoc'),
      ])
    )
  );
});

bot.action('fifthTypeLoc', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться другу підказку 5 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 5 локації)');

  return ctx.replyWithLocation(
    '48.292177',
    '25.930523',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'sixthMes'),
        m.callbackButton('Позвонити Сані', 'callMe'),
      ])
    )
  );
});

//ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====
//ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====
//ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====ШОСТА ЛОКАЦЯ=====

bot.action('sixthMes', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться 6 локацію)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться 6 локацію)');

  return ctx.replyWithPhoto(
    {
      url: 'https://i.imgur.com/ax2jDi2.jpg',
    },
    Extra.load({
      caption: `Не змучилась ще бігати? Нічого, ще трошки)

 🏛 Це та сама "нова кафешка"

🐈 Думаю фоточка зразу все спалила`,
    })
      .HTML()
      .markup((m) =>
        m.inlineKeyboard([
          m.callbackButton('Знайшла!', 'seventhMes'),
          m.callbackButton('Давай підказку!', 'sixthTypeText'),
        ])
      )
  );
});

bot.action('sixthTypeText', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться першу підказку 6 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 6 локації)');

  return ctx.reply(
    `😆 Я сам не пам'ятаю як вона називається
    
🎓 Але знаю шо вона знаходиться на університетській)`,
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'seventhMes'),
        m.callbackButton('Дивитись локейшн', 'sixthTypeLoc'),
      ])
    )
  );
});

bot.action('sixthTypeLoc', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться другу підказку 6 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 6 локації)');

  return ctx.replyWithLocation(
    '48.2927921',
    '25.9307925',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'seventhMes'),
        m.callbackButton('Позвонити Сані', 'callMe'),
      ])
    )
  );
});

// СЬОМА ЛОКАЦІЯ--------СЬОМА ЛОКАЦІЯ--------СЬОМА ЛОКАЦІЯ--------СЬОМА ЛОКАЦІЯ--------СЬОМА ЛОКАЦІЯ--------
// СЬОМА ЛОКАЦІЯ--------СЬОМА ЛОКАЦІЯ--------СЬОМА ЛОКАЦІЯ--------СЬОМА ЛОКАЦІЯ--------СЬОМА ЛОКАЦІЯ--------
// СЬОМА ЛОКАЦІЯ--------СЬОМА ЛОКАЦІЯ--------СЬОМА ЛОКАЦІЯ--------СЬОМА ЛОКАЦІЯ--------СЬОМА ЛОКАЦІЯ--------

bot.action('seventhMes', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться 7 локацію)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться 7 локацію)');

  return ctx.replyWithPhoto(
    {
      url: 'https://i.imgur.com/ehbe7F3.jpg',
    },
    Extra.load({
      caption: `Я ніяк не міг згадати назву попередньої локації😂

🏦 Це місце нашої зустрічі на півроку😍

🧐 Повинна пам'ятати, ти тоді якраз рамочку забирала і я вийшов тобі на зустріч `,
    })
      .HTML()
      .markup((m) =>
        m.inlineKeyboard([
          m.callbackButton('Знайшла!', 'eighthMes'),
          m.callbackButton('Давай підказку!', 'seventhTypeText'),
        ])
      )
  );
});

bot.action('seventhTypeText', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться першу підказку 7 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 7 локації)');

  return ctx.reply(
    '💰 В цій локації дууууже багато баблішка)',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'eighthMes'),
        m.callbackButton('Дивитись локейшн', 'seventhTypeLoc'),
      ])
    )
  );
});

bot.action('seventhTypeLoc', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться другу підказку 7 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 7 локації)');

  return ctx.replyWithLocation(
    '48.292527',
    '25.934975',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'eighthMes'),
        m.callbackButton('Позвонити Сані', 'callMe'),
      ])
    )
  );
});

//ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------
//ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------
//ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------ВОСЬМА ЛОКАЦІЯ------

bot.action('eighthMes', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться 8 локацію)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться 8 локацію)');

  return ctx.replyWithPhoto(
    {
      url: 'https://i.imgur.com/rkoFCt9.jpg',
    },
    Extra.load({
      caption: `Це вже було трішки важче, правда?

🙃 Зараз буде легше, но это не точно

🥰 Це місце де ми напевно найбільше цілувались

🌃 Переважно сюди ми йшли посидіти після всяких кафешок`,
    })
      .HTML()
      .markup((m) =>
        m.inlineKeyboard([
          m.callbackButton('Знайшла!', 'ninethMes'),
          m.callbackButton('Давай підказку!', 'eighthTypeText'),
        ])
      )
  );
});

bot.action('eighthTypeText', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться першу підказку 8 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 8 локації)');

  return ctx.reply(
    '🤷🏻‍♂️ Це навпроти місця, де бухають малолєтки',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'ninethMes'),
        m.callbackButton('Дивитись локейшн', 'eighthTypeLoc'),
      ])
    )
  );
});

bot.action('eighthTypeLoc', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться другу підказку 8 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 8 локації)');

  return ctx.replyWithLocation(
    '48.2938437',
    '25.9396880',
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'ninethMes'),
        m.callbackButton('Позвонити Сані', 'callMe'),
      ])
    )
  );
});

// ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------
// ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------
// ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------ДЕВ'ЯТА ЛОКАЦІЯ------

bot.action('ninethMes', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться 9 локацію)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться 9 локацію)');

  return ctx.replyWithPhoto(
    {
      url: 'https://i.imgur.com/likzDBr.jpg',
    },
    Extra.load({
      caption: `🏁 Ти на фінішній прямій!!

🧐 За декілька секунд тобі прийде смс від Сані

🚖 Там буде опис і номера машинки

🚀 Спускайся до фонтану, сідай в неї і тебе привезуть до мене!`,
    })
      .HTML()
      .markup((m) =>
        m.inlineKeyboard([
          m.callbackButton('Знайшла!', 'tenthMes'),
          m.callbackButton('Давай підказку!', 'ninethTypeText'),
        ])
      )
  );
});

bot.action('ninethTypeText', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя дивиться першу підказку 9 локації)');
  bot.telegram.sendMessage(saniaId, 'Настя дивиться другу підказку 9 локації)');

  return ctx.reply(
    `Та це таксішка😂😂
    
Я сам не знаю як вона виглядає,
    
Цей бот писався тиждень назад)

Так шо єслі шо, звони мені`,
    Extra.markup((m) =>
      m.inlineKeyboard([
        m.callbackButton('Знайшла!', 'tenthMes'),
        m.callbackButton('Позвонити Сані', 'callMe'),
      ])
    )
  );
});

//ДЕСЯТА ЛОКАЦІЯ---------ДЕСЯТА ЛОКАЦІЯ---------ДЕСЯТА ЛОКАЦІЯ---------ДЕСЯТА ЛОКАЦІЯ---------ДЕСЯТА ЛОКАЦІЯ---------
//ДЕСЯТА ЛОКАЦІЯ---------ДЕСЯТА ЛОКАЦІЯ---------ДЕСЯТА ЛОКАЦІЯ---------ДЕСЯТА ЛОКАЦІЯ---------ДЕСЯТА ЛОКАЦІЯ---------
//ДЕСЯТА ЛОКАЦІЯ---------ДЕСЯТА ЛОКАЦІЯ---------ДЕСЯТА ЛОКАЦІЯ---------ДЕСЯТА ЛОКАЦІЯ---------ДЕСЯТА ЛОКАЦІЯ---------

bot.action('tenthMes', (ctx) => {
  bot.telegram.sendMessage(myId, 'Настя сіла в таксі');
  bot.telegram.sendMessage(saniaId, 'Саня, всьо туц, Настя сіла в таксу, з мене півас!!!❤️❤️❤️');
  ctx.replyWithPhoto(
    {
      url: 'https://i.imgur.com/likzDBr.jpg',
    },
    Extra.load({
      caption: `😚 Ти в мене найкраща!
      
Дуже сильно сподіваюсь, що тобі сподобалось

Вибач, що змусив тебе так багато ходити

Сподіваюсь ти згадала ці найкращі моменти

Які відбувались з нами 10 місяців.

З нетерпінням чекаю тебе на фінальній локації❤️`,
    })
      .HTML()
      .markup((m) => m.inlineKeyboard([m.callbackButton('Їду!', 'loveMes')]))
  );
});

bot.action('loveMes', (ctx) => {
  ctx.reply(`На цьому я(бот) залишаю вас

Саня просив, щоб я його похвалив  

Ну хвалити я його звісно не буду,

Але чесно кажучи, він дуже сильно старався

Тому пробач його дурачка

P.S. Вітаю, ти витримуєш Саню вже 10 місяців 🥳`);
});

bot.launch();
