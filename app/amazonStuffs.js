var config = require('../config');

var Telegraf = require('telegraf');
var bot = new Telegraf(config.telegram.apiKey);
var axios = require('axios');

var { BitlyClient } = require('bitly');
var bitly = new BitlyClient(config.bitly.token, {});
var fs = require('fs');
var request = require('request');
var path = require('path');

exports.bestSellersToTelegram = function() {
	fs.readdir('products/', function(err, files) {
		found = false;
		files.forEach(function(i) {
			if(found !== true) {
				i = 'products/' + i;
				if(path.extname(i) == ".json") {
					product = fs.readFileSync(i);
					product = JSON.parse(product);
					if(product.status == 'new') {
						if(product.title !== "" && product.price !== "€ " && product.url !== "") {
							product.status = 'old';
							fs.writeFileSync('products/' + product.asin + '.json', JSON.stringify(product));

							bot.telegram.sendPhoto(config.telegram.chatId, product.image, {caption: "\n" + product.title + "\n\n 💵 " + product.price + "\n\n" + product.url});
							console.log("[Node Amazon Bot]$: [" + product.asin + "] - product sent to Telegram!");
							fs.unlink('products/' + product.asin + '.json');
							found = true;
						} else {
							console.log("[Node Amazon Bot]$: [" + product.asin + "] - error (some fields are empty)");
						}
					}
				}
			}
		});
	});
}

exports.updateBestSellers = function() {
	request(config.server.url, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			console.log("[Node Amazon Bot]$: starting updating bestSellers");
			body = JSON.parse(body);
			body.forEach(function(i) {
				if(!fs.existsSync('products/' + i.ASIN + '.json')) {
					var result = {};
					result.asin = i.ASIN;
					result.title = i.Title;
					result.price = i.price;
					result.image = i.image;
					result.status = "new";

					url = "https://www.amazon." + config.amazon.country + "/dp/" + i.ASIN + "/&tag=" + config.amazon.tag;
					bitly.shorten(url).then(function(shorten_url) {
						result.url = shorten_url.url;
						fs.writeFileSync('products/' + i.ASIN + '.json', JSON.stringify(result));
					});
					console.log("[Node Amazon Bot]$: [" + result.asin + "] - Saved to products/ directory");
				}
			});
		} else {
			console.log("[Node Amazon Bot]$: Error while fetching best sellers...");
			console.log("[Node Amazon Bot]$: " + error);
		}
	})
}