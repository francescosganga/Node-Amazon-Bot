var consoleLog = require('./app/consoleLog');
var amazonStuffs = require('./app/amazonStuffs');
var cron = require('node-cron');

consoleLog.send("starting");
 
cron.schedule('*/15 * * * *', () => {
	amazonStuffs.updateBestSellers();
});

cron.schedule('*/20 * * * *', () => {
	amazonStuffs.bestSellersToTelegram();
});