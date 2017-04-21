const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('357005364:AAHkiEwtHHRXjF8rYvLsTvyo-R8LMC74lZY')

class CasaDoCodigoController extends TelegramBaseController{
  
  sendNovidades(scope){
    scope.sendMessage('As novidades são nenhuma')
  }
  
   get routes(){
    return {
      'sendNovidades': 'sendNovidades'
      }
   }  
}

chatbot.router
        .when(
         new TextCommand('/novidades','sendNovidades'), new CasaDoCodigoController()

        )