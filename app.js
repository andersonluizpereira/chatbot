const Telegram = require('telegram-node-bot')
var request = require('request');
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('357005364:AAHkiEwtHHRXjF8rYvLsTvyo-R8LMC74lZY')
class CasaDoCodigoController extends TelegramBaseController {
    //http://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=c1c39a0722cb44d4ad56266eea6cb9c4  
    sendNovidades(scope) {
        request('https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=c1c39a0722cb44d4ad56266eea6cb9c4', function(error, response, body) {
            // console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            // var parsedAlert = JSON.parse(body);
            //console.log(parsedAlert)
            //scope.sendMessage('As novidades são ' + JSON.parse(body));
        });
        request.end();
    }
    sendTemperaturas(scope) {
        request('http://api.openweathermap.org/data/2.5/weather?q=Sao%20PAULO&APPID=22addef068318d53f14f6b2e5891fe37', function(error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            var parsedWeather = JSON.parse(body);
            scope.sendMessage('A temperatura atual em São Paulo é ' + parseInt((((parsedWeather['main']['temp'] - 32) / 1800) * 100)) + 'º');
        });
        request.end();
    }

    get routes() {
        return {
            'sendNovidades': 'sendNovidades',
            'sendTemperaturas': 'sendTemperaturas'
        }
    }
}
chatbot.router
    .when(
        new TextCommand('/temperaturas', 'sendTemperaturas'), new CasaDoCodigoController(),
        new TextCommand('/novidades', 'sendNovidades'), new CasaDoCodigoController()
    )