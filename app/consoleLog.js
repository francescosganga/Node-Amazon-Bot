exports.send = function(string) {
	currentDate = new Date().toISOString();
	console.log("Node Amazon Bot [" + currentDate + "]$: " + string);
}