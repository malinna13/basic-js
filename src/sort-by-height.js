const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filteredArr = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  const result = [];
  let i = 0;

  for (let item of arr) {
    if (item === -1) {
      result.push(item);
    } else {
      result.push(filteredArr[i]);
      i++;
    }
  }
  return result;
}
module.exports = {
  sortByHeight,
};
