# Node Amazon Bot

Make your own Amazon Bot running on Nodejs and sending products to Telegram Channel.

## Getting Started

Node Amazon Bot works using two functions:
* **updateBestSellers** - update the products' list (stored in products/)
* **bestSellersToTelegram** - send new best sellers products to the Telegram Channel

Sent URLs were converted to amzn.to's shorten url using bit.ly API

### Prerequisites

You need to have:
* NodeJS

### Installing

1. git clone https://github.com/francescosganga/nodetbot/
2. npm install
3. cp config.sample.js config.js
4. compile config.js file
5. node index.js
7. enjoy your new Telegram Bot!

## Authors

* **Francesco Sganga(http://www.francescosganga.it)** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Under Construction
