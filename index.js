var amazonStuffs = require('./app/amazonStuffs');
var consoleLog = require('./app/consoleLog');
var cron = require('node-cron');

consoleLog.send("starting");
 
cron.schedule('* * * * *', () => {
	amazonStuffs.updateBestSellers();
	amazonStuffs.bestSellersToTelegram();
});