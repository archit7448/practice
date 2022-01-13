/**
 * Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
 */

const sumArray = [10,4,5,2,5,6,9].reduce((x,y) => x+y)
console.log(sumArray)
/**
 * Find average of an array and display the output.
 */

const averageArray = array => (array.reduce((x,y) => x+y))/array.length

console.log(averageArray([10,2,34,5,6]))

/**
 * Find maximum and minimum of an array.
 */

const maxAndMinArray = array => `max: ${Math.max(...array)} , min: ${Math.min(...array)}`
console.log(maxAndMinArray([10,20,30,40,5]))

/**
 * 
 */