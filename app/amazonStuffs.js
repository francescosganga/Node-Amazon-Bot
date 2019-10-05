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
		files.forEach(function(i) {
			i = 'products/' + i;
			if(path.extname(i) == ".json") {
				product = fs.readFileSync(i);
				product = JSON.parse(product);
				if(product.status == 'new') {
					bot.telegram.sendPhoto(config.telegram.chatId, product.image, {caption: "\n" + product.title + "\n\n 💵 " + product.price + "\n\n" + product.url});
					console.log(product.asin + " - product sent to Telegram!");
				}
			}
		});
	});
}

exports.updateBestSellers = function() {
	request(config.server.url, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			console.log("starting updating bestSellers");
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
					console.log("saved: " + result.asin);
				} else {
					file = fs.readFileSync('products/' + i.ASIN + '.json');
					var result = JSON.parse(file);
					if(result.status != 'old') {
						result.status = "old";
						fs.writeFileSync('products/' + i.ASIN + '.json', JSON.stringify(result));
						console.log(result.asin + " already exists, set status to old");
					}
				}
			});
		} else {
			console.log("Error while fetching best sellers...");
			console.log(response.statusCode);
		}
	})
}