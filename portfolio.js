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

/*function count(portfolio) {
    const total = 0;
    for(let i=0, i < portfolio)
}*/

exports.createPortfolio = createPortfolio;
exports.isEmpty = isEmpty;