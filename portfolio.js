const exp = require("constants");

function createPortfolio() {
    const portfolio = [];
    return portfolio;
  }

function isEmpty(portfolio) {
    if (portfolio.length === 0) {
        return true;
    }
}  

function count(portfolio) {
    return portfolio.length;
}

function purchase(portfolio, {ticker, shares}) {
    for (let i = 0; i < portfolio.length; i++) {
        if (portfolio[i].ticker === ticker) {
            portfolio[i].shares += shares;
            return portfolio;
        }
    }
    portfolio.push({"ticker": ticker, "shares": shares});
    return portfolio;
    
}

function sale(portfolio, {ticker, shares}) {
    for (let i = 0; i < portfolio.length; i++) {
        if (portfolio[i].ticker === ticker) {
            portfolio[i].shares -= shares;
            return portfolio;
        }
    }
}

exports.createPortfolio = createPortfolio;
exports.isEmpty = isEmpty;
exports.count = count;
exports.purchase = purchase;
exports.sale = sale;