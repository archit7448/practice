/*Given a and b, your function should return the value of ab
Example:
Input: power(2,3) ––> Output: 8 */

const power= (number,pow) =>  Math.pow(number,pow)

/** 
 * Given length of a regular hexagon, your function should return area of the hexagon.
Example:
Input: areaOfHexagon(10) ––> Output: 259.80
*/
const areaOfHexagon = length => (1.5*1.73)*length*length

console.log(areaOfHexagon(10))

/**
 * Given a sentence, your functions should return the number of words in the sentence.
Example:
Input: noOfWords(We are neoGrammers) ––> Output: 3
 */

const noOfWords = string => string.split(" ").length;

console.log(noOfWords("We are neogrammers"))

/**Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1 */

const  findMin = arguments =>Math.min(arguments)


console.log(findMin(3,5))
console.log(findMin(3,5,9,1))



/**
 * Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
 */

const typeOfTriangle = (len1,len2,len3) => len1+len2+len3 !== 180 ? "not a triangle" : len1==len2 && len2==len3? "equilateral triangle": len1 == len2||len2==len3||len3==len1? "isoceles triangle":"scalene triangle";

console.log(typeOfTriangle(45,45,90))


/**
 * Given an array, your function should return the length of the array.
Example:
Input: arrayLength([1,5,3,7,8]) ––> Output: 5
 * 
 */


const arrayLength = array => array.length ;

console.log(arrayLength([2,3,4,5,6,7]))

/**Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2 */

const indexOf = (array,num) => array.indexOf(num)

console.log(indexOf([0,9,8,6,2,1],2))


/**
 * Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
Example:
Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
 */


const replace = (array,numberInArray,numberReplace) => {array[array.indexOf(numberInArray)] = numberReplace 
    return array
}
console.log( replace([1,2,3,5,6,8], 5, 10))

/**
 * Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
 */

const mergeArray= (array1,array2) => array1.concat(array2)

console.log(mergeArray([1,2,3],[4,5,6]))


/**
 * Given a string and an index, your function should return the character present at that index in the string.
Example:
Input: charAt("neoGcamp", 4) ––> Output: c
 */


const charAt = (string, number) =>  string.charAt(number)

console.log(charAt("neoGcamp", 4))

/**
 * Given two dates, your function should return which one comes before the other.
Example:
Input:  minDate('02/05/2021', '24/01/2020') ––> Output: 24/01/2021
 */

const minDate = (dateOne,dateTwo) => {
    let arrayOne = dateOne.split("/") 
     let arrayTwo = dateTwo.split("/")
     let logicDate = arrayOne[0] > arrayTwo[0]? dateTwo: dateOne ;
     let logicMonth = arrayOne[1]== arrayTwo[1]?logicDate : arrayOne[1]>arrayTwo[1]? dateTwo: dateOne
     return arrayOne[2] == arrayTwo[2]? logicMonth : arrayOne[2]>arrayTwo[2]? dateTwo: dateOne;
}

console.log(minDate('02/05/2021', '24/01/2021'))


//Advanced 
/**
 * Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
 */
let alphaArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const encodeString = (string,step) =>  string.split("").map(x=> {
    let indexOf = alphaArray.indexOf(x)+(step % 26)
    return indexOf>25? (indexOf-26) :indexOf
}).map(x => alphaArray[x]).join("")

console.log(encodeString("neogcamp",2))

/**
 * Given a sentence, return a sentence with first letter of all words as capital.
Example:
Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers
 */

const toSentenceCase = (string) => string.split(" ").map(x => x.charAt(0).toUpperCase()+x.slice(1)).join(" ")

console.log(toSentenceCase("we are neoGrammers"))

/**
 * Given an array of numbers, your function should return an array in the ascending order.
Example:
Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
*/

const sortArray = array => array.sort((a,b) => a -b )

console.log(sortArray([100,83,32,9,45,61]))


/**
 * Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
 */

const reverseCharactersOfWord = string => string.split(" ").map(x => x.split("").reverse().join("")).join(" ")

console.log(reverseCharactersOfWord("we are neoGrammers"))



