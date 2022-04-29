const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const arr = [];
  const addition = options.hasOwnProperty("addition")
    ? String(options.addition)
    : "";
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes;
  const separator = options.separator || "+";
  const additionSeparator = options.additionSeparator || "|";

  for (let i = 0; i < repeatTimes; i++) {
    const innerArr = [];

    for (let j = 0; j < additionRepeatTimes; j++) {
      innerArr.push(addition);
    }

    arr.push(
      str + (additionRepeatTimes ? innerArr.join(additionSeparator) : addition)
    );
  }

  return arr.join(separator);
}

module.exports = {
  repeater,
};
