const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    return arr.reduce((acc, cur) => {
      if (Array.isArray(cur)) {
        let result = 1 + this.calculateDepth(cur);
        if (acc < result) {
          acc = result;
        }
      }
      return acc;
    }, 1);
  }
}

module.exports = {
  DepthCalculator,
};
