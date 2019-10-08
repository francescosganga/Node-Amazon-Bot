var amazonStuffs = require('./app/amazonStuffs');
var cron = require('node-cron');
 
cron.schedule('* * * * *', () => {
	amazonStuffs.updateBestSellers();
});

cron.schedule('*/15 * * * *', () => {
	amazonStuffs.bestSellersToTelegram();
});