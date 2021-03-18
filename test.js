const Promise = require('./index.js');

const p = new Promise((resolve, reject) => {
  console.log(1111);
  reject(2333);
}).then((res) => {
  console.warn('res----', res);
}, (err) => {
  console.warn('err-----', err);
});