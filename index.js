var amazonStuffs = require('./app/amazonStuffs');
var cron = require('node-cron');

console.log("[Node Amazon Bot]$: started");
 
cron.schedule('*/15 * * * *', () => {
	amazonStuffs.updateBestSellers();
	amazonStuffs.bestSellersToTelegram();
});