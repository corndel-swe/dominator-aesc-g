// TODO: https://tech-docs.corndel.com/js/functions.html

/**
 * Returns 'fizz' if the number is divisible by 3,
 * 'buzz' if divisible by 5, and 'fizzbuzz' if divisible by both.
 *
 * Returns an empty string if the number is not divisible by 3 or 5.
 *
 * @param {number} num The number to be checked.
 * @returns {string} 'fizz', 'buzz', 'fizzbuzz' or ''
 */
export function fizzBuzz(num) {
  let result = '';

  // Used Strict Equality (===): Ensures type safety.
  if (num % 3 === 0) result += 'fizz';
  if (num % 5 === 0) result += 'buzz';

  return result;
}

/*
export function fizzBuzz(num) {
  let ret = ""
  // TODO: return 'fizz' if num is divisible by 3
  if (num % 3 == 0) {
    ret += "fizz"
  }
  // TODO: return 'buzz' if num is divisible by 5
  if (num % 5 == 0) {
    ret += "buzz"
  }
  // TODO: return 'fizzbuzz' if num is divisible by both 3 and 5
  // TODO: return an empty string if num is not divisible by 3 or 5
  return ret
}
*/