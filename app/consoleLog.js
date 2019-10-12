exports.send = function(string) {
	currentDate = new Date().toISOString();
	console.log("[" + currentDate + "] Node Amazon Bot$: " + string);
}