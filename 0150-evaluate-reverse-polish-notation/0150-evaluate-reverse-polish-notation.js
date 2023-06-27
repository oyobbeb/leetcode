/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => parseInt(a / b, 10),
  }

  for (const item of tokens) {
    if (operators[item]) {
      const top = stack.pop();
      const second = stack.pop();

      stack.push(operators[item](second, top));
      continue;
    }

    stack.push(Number(item));
  }

  return stack.pop();
};