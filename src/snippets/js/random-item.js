/* ==========================================================================
  RANDOM ITEM
========================================================================== */

/**
 * Get random integer
 *
 * @param {Integer} min - Min value
 * @param {Integer} max - Max value
 * @return {Integer} an integer random value between min and max
 *
 * @example
 *
 *     getRandomInt(1, 10)
 *     > 2
 */

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Get random boolean
 * @return {Integer} a boolean random value
 *
 * @example
 *
 *     getRandomBool()
 *     > true
 */

const getRandomBool = () => {
  return Math.random() >= 0.5
}

/**
 * Get random item from array
 *
 * @param {Array} arr - Input array with value to choose from
 * @return {Item} random item choosen from the input array, it could be a String, Integer, Object...
 *
 * @example
 *
 *     getRandomItem([1, 2, 3, 'a','b','c'])
 *     > b
 */

const getRandomItem = (arr) => {
  return arr[getRandomInt(0, arr.length - 1)]
}

/**
 * Create an array with random length and random items choosen from an input array
 */

const arr = [1, 2, 3, 'a','b','c']
const min = 3
const max = 6
const items = Array.from({length: getRandomInt(min, max)}, () => getRandomItem(arr));
// const items = Array(getRandomInt(min, max)).fill(0).map(() => getRandomItem(arr))

console.log(items)
// > [ 3, 3, 1, 'c', 'c', 3 ] 
