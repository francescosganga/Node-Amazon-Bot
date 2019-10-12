const consoleLog = require('./app/consoleLog');
var amazonStuffs = require('./app/amazonStuffs');
var cron = require('node-cron');

consoleLog.send("starting");
 
//cron.schedule('* * * * *', () => {
//	amazonStuffs.updateBestSellers();
	amazonStuffs.bestSellersToTelegram();
//});