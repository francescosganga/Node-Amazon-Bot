var consoleLog = require('./app/consoleLog');
var amazonStuffs = require('./app/amazonStuffs');

consoleLog.send("starting");

var minutes = 15, the_interval = minutes * 60 * 1000;
setInterval(function() {
	amazonStuffs.updateBestSellers();
	amazonStuffs.bestSellersToTelegram();
}, the_interval);
