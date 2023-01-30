//const { default: test } = require('node:test');
const myFunctions = require('./portfolio.js');

test('null to check that jest works', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('Testing createPortfolio -- success', () => {
  const target = [];
  const result = myFunctions.createPortfolio();
  expect(target).toStrictEqual(result);
});

test('Testing isEmpty -- success', () => {
    const portfo = myFunctions.createPortfolio();
    const target = myFunctions.isEmpty(portfo);
    expect(target).toBeTruthy();
}); 

test('Testing isEmpty again to check -- success', () => {
    const portfo = [1, 2]
    const target = myFunctions.isEmpty(portfo);
    expect(target).toBeFalsy();
}); 

test('Testing isEmpty again to check -- success', () => {
    const portfo = [1, 2]
    const target = myFunctions.isEmpty(portfo);
    expect(target).toBeFalsy();
});   

test('Testing count zero -- success', () => {
    const portfolio = []
    const target = myFunctions.count(portfolio);
    expect(target).toStrictEqual(0);
});  

test('Testing count positive -- success', () => {
    const portfolio = [{"ticker":"GME", "shares": 5}, {"ticker":"RBLX", "shares": 10}]
    const target = myFunctions.count(portfolio);
    expect(target).toStrictEqual(2);
});  

test('Testing purchase -- success', () => {
    const portfolio = [{"ticker": "GME", "shares": 5}, {"ticker": "RBLX", "shares": 10}]
    const target = myFunctions.purchase(portfolio, {"ticker": "V", "shares": 15});
    expect(target).toStrictEqual([{"ticker": "GME", "shares": 5}, {"ticker": "RBLX", "shares": 10}, {"ticker": "V", "shares": 15}]);
});  

/* test('Testing purchase fail -- success', () => {
    const portfolio = [{"ticker": "GME", "shares": 5}, {"ticker": "RBLX", "shares": 10}]
    const target = myFunctions.purchase(portfolio, {"ticker": "V", "shares": 15});
    expect(target).toStrictEqual([{"ticker": "GME", "shares": 5}, {"ticker": "V", "shares": 15}]);
});  // fails appropriately :) idk the matcher for "notEqualTo" */

test('Testing purchase on existing ticker -- success', () => {
    const portfolio = [{"ticker": "GME", "shares": 5}, {"ticker": "RBLX", "shares": 10}]
    const target = myFunctions.purchase(portfolio, {"ticker": "GME", "shares": 15});
    expect(target).toStrictEqual([{"ticker": "GME", "shares": 20}, {"ticker": "RBLX", "shares": 10}]);
});  

test('Testing sale on existing ticker -- success', () => {
    const portfolio = [{"ticker": "GME", "shares": 5}, {"ticker": "RBLX", "shares": 10}]
    const target = myFunctions.sale(portfolio, {"ticker": "RBLX", "shares": 2});
    expect(target).toStrictEqual([{"ticker": "GME", "shares": 5}, {"ticker": "RBLX", "shares": 8}]);
});

test('Testing shares_of -- success', () => {
    const portfolio = [{"ticker": "GME", "shares": 5}, {"ticker": "RBLX", "shares": 10}]
    const target = myFunctions.shares_of(portfolio, "GME");
    expect(target).toStrictEqual(5);
});

test('Testing shares_of nonexistent ticker-- success', () => {
    const portfolio = [{"ticker": "GME", "shares": 5}, {"ticker": "RBLX", "shares": 10}]
    const target = myFunctions.shares_of(portfolio, "V");
    expect(target).toStrictEqual(0);
});

test('Testing only owned symbols exist-- success', () => {        
    const portfolio = [{"ticker": "GME", "shares": 5}, {"ticker": "RBLX", "shares": 10}]
    const target = myFunctions.sale(portfolio, {"ticker": "RBLX", "shares": 10});            // is this poor form bc it relies on another func? how can I improve this?
    expect(target).toStrictEqual([{"ticker": "GME", "shares": 5}]);
});

/*test('Testing raiseException-- success', () => {   
    const portfolio = [{"ticker": "GME", "shares": 5}, {"ticker": "RBLX", "shares": 10}]
    //const target = myFunctions.sale(portfolio, {"ticker": "RBLX", "shares": 100});            // is this poor form bc it relies on another func? how can I improve this?
    //expect( function(){ parser.parse(raw); } ).toThrow(new Error("Parsing is not possible"));
    expect(myFunctions.sale(portfolio, {"ticker": "RBLX", "shares": 100})).toThrow(ShareSaleException);
});*/

it('Testing throws an error when invalid shares', () => {
    expect(() => myFunctions(myFunctions.sale(portfolio, {"ticker": "RBLX", "shares": 100})).toThrow("You don't have that many shares to sell!"));
});
