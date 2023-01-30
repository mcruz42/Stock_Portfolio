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

