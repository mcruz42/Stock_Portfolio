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