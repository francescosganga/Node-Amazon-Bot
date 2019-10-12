var consoleLog = require('./app/consoleLog');
var amazonStuffs = require('./app/amazonStuffs');
var cron = require('node-cron');

consoleLog.send("starting");
 
cron.schedule('*/15 * * * *', () => {
	amazonStuffs.updateBestSellers();
	amazonStuffs.bestSellersToTelegram();
});