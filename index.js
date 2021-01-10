import './token' 
import token from './token';

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;

const bot = new ViberBot({
    authToken: token
})

bot.on(BotEvents.MESSAGE_RECEIVED, (msg,response) =>{
    response.send('TATA');
});

if (process.env.NOW_URL || process.env.HEROKU_URL) {
    const http = require('http');
    const port = process.env.PORT || 8080;

    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(process.env.NOW_URL || process.env.HEROKU_URL));
} else {
    console.log('Could not find the now.sh/Heroku environment variables. Please make sure you followed readme guide.');
}