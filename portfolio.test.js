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
    console.log(portfo);
    console.log(target);
    expect(target).toBeTruthy();
  });   // prof debruhl said try hard coding it; he had this same prob. prob must be in my func