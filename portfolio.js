const exp = require("constants");

function createPortfolio() {
    const portfolio = []
    return portfolio;
  }

function isEmpty(portfolio) {
    if (portfolio === []) {
        return true;
    }
    else {
        return false;
    }
}  

exports.createPortfolio = createPortfolio;
exports.isEmpty = isEmpty;