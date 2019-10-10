var amazonStuffs = require('./app/amazonStuffs');
var cron = require('node-cron');
 
cron.schedule('*/10 * * * *', () => {
	amazonStuffs.updateBestSellers();
});

cron.schedule('*/15 * * * *', () => {
	amazonStuffs.bestSellersToTelegram();
});