var CoinCheck = require('./src/coin_check.js');

const ACCESS_KEY = 'Your ACCESS_KEY';
const API_SECRET = 'Your API_SECRET';



var coinCheck = new CoinCheck.CoinCheck(ACCESS_KEY, API_SECRET);
// console.log(coinCheck)
var params = {
    options: {

        success: function(data, response, params) {

          var data = JSON.parse(data);

          // console.log(data);
          // console.log(typeof(data));
          console.log(data.last);

          // console.log(params);
            // console.log(response);
            // console.log('success', data);
        },
        error: function(error, response, params) {
          // console.log('error', response);
            console.log('error', error);
        }
    }
};


params['data'] = {
  // pair: 'btc_jpy'
  pair: 'eth_jpy'
  //coinCheck只有btc_jpy和eth_jpy,即比特币和以太坊
};


/** Public API */
coinCheck.ticker.all(params);
// coinCheck.trade.all(params);
// coinCheck.orderBook.all(params);
