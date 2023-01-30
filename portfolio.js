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

exports.createPortfolio = createPortfolio;
exports.isEmpty = isEmpty;
exports.count = count;