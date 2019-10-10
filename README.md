# Node Amazon Bot

Make your own Amazon Bot running on Nodejs and sending products to Telegram Channel.

## Getting Started

Node Amazon Bot works using two functions:
* **updateBestSellers** - update the products' list (stored in products/ as json files - ASIN.json)
* **bestSellersToTelegram** - send new best sellers products to the Telegram Channel

Sent URLs were converted to amzn.to's shorten url using bit.ly API

### bestSellers Structure

in config.js you need to set config.server.url. You can build a node.js or PHP server for get Amazon Products. Products will be read from Node Amazon Bot as JSON Array like this:
```javascript
[
	{
		"ASIN":"B06XFSZGCC",
		"Title":"Samsung Memorie MB-MC32GA EVO Plus Scheda microSD da 32 GB, UHS-I U1, con Adattatore SD",
		"image":"https:\/\/images-eu.ssl-images-amazon.com\/images\/I\/41EGoaEy1DL._SL160_.jpg",
		"price":"3.80"
	},
	{
		"ASIN":"B07PVCVBN7",
		"Title":"Fire TV Stick con telecomando vocale Alexa | Lettore multimediale",
		"image":"https:\/\/images-eu.ssl-images-amazon.com\/images\/I\/31NqWb-sAGL._SL160_.jpg",
		"price":"39.99"
	}
]
```

### Prerequisites

You need to have:
* NodeJS
* Bit.ly Account
* Telegram Bot

### Installing

1. $ git clone https://github.com/francescosganga/nodetbot/
2. $ npm install
3. $ cp config.sample.js config.js
4. edit config.js file ($ nano config.js)
5. $ node index.js
7. enjoy your new Telegram Bot!

## Authors

* **Francesco Sganga(http://www.francescosganga.it)** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Under Construction
