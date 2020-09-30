const translate = require('translate-google');
translate('i fuck your mam', { from: 'en', to: 'zh-cn' })
  .then((res) => {
    console.log(res);
  })
);
