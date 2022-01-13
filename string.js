//Write a program that converts the string into uppercase
 const upperCase = str => str.toUppercase()

 console.log("hello")

 /**
  * Write a program that reads two strings and append first string to the second. 
  * So if first string is Good second string is Morning , the program should print MorningGood
  */

 const appendString = (str1,str2) => str2+str1

 console.log(appendString("Good","Morning"))

 /**
  * Program that reads string and count number of characters present in the string
  */

 const charactersInString = str => str.length 
 console.log(charactersInString("hello"))
 /**
  * Write a program that converts string like "124" to 124
  */

 const stringToNumber = str => Number(str) 

 console.log("124")
 /**
  * Write a program to delete all vowels from a string. Assume string is not more than 80 characters long
  */
let vowels = ["a","e","i","o","u"]

 const deleteVowels = str => str.split("").filter(x => vowels.indexOf(x) == -1).join("")

 console.log(deleteVowels("hello"))
 /**
  * Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45
  */

 const alphanumericOrNot = str => /^[a-z]/i.test(str) == true || /\d$/.test(str) == true

 console.log(alphanumericOrNot("Batman@"))

 /**
  * A program that reads three strings and prints the longest and smallest one
  */



  const longestSmallest = (str1,str2,str3) => [str1,str2,str3].filter(x => x.length == Math.min(str1.length,str2.length,str3.length) || x.length == Math.max(str1.length,str2.length,str3.length))
  console.log(longestSmallest("archit","architsingh","my"))

  /**
   * Write a program which receives a string str that 
   * calculates the length of a string and return true if the length is greater than 7 without using strlen()
   */

  const lengthSevenOrNot = str => str.length>7 ? true: false 

  /**
   * Write a program that takes two strings and copies smaller string into bigger string
   */

  const twoStringCopy = (str1,str2) =>  str1.length>str2.length? str1+str2 : str2+str1 

  console.log(twoStringCopy("neogcamp","student"))

  /**
   * Given a string, determine if it is a palindrome, considering only alphanumeric characters
   */

const alphanumericPalindrome = str => !/[^a-zA-Z0-9]/.test(str)  ?  str == (str).split("").reverse().join("") : "not alphanumeric"
console.log(alphanumericPalindrome("1111"))

/**
 * For a given input string(str), write a function to print all the possible substrings.Without using substr method
 */

const printAllSubString = str => str.split("").map((_,i) => str.slice(i)).join(" , ")

console.log(printAllSubString("hello"))

/**
 * Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.
 */
const dateStr = str => str.split(",")[0]

console.log(dateStr("Wed April 15, 7pm"))

/**
 * Write a program that masks all but last four characters of the string "5565534276455423" to '#'
 */

const fourCharacters = str => str.split("").map((_,i,x) => i >= x.length-1-4 ? "#":_  ).join("")

console.log(fourCharacters("5565534276455423"))

/**
 * Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case
 */

const firstSixCharacters = str => str.split(" ").map((x,i) => i>5? x : x.toUpperCase()).join(" ")

console.log(firstSixCharacters("tic tac toe is a fun game"))

/**
 * Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string
 */

const replaceString = (str,c1,c2) => {
  const regex = new RegExp(c1,"g")
  return str.replace(regex,c2)
}

console.log(replaceString("hellol","l","#"))

/**
 * Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. 
 * There can be multiple spaces present after any word 
 */
const replaceWhitespace = str => str.replace(/\s/g,"#")

console.log(replaceWhitespace("NEOGcamp is amazing"))

/**
 *Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on.
  Individual words should remain as it is. 
  example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome
 */

const reverseWords = str => str.split(" ").reverse().join(" ")

console.log(reverseWords("Welcome to Neog Camp"))

/**
 * A program that counts the value of each character and prints the most repeated character?
 */

const mostRepeatedCharacters = str => {
  let  count = str.split("").reduce((arr,x) => {arr[x]? arr[x]++:arr[x] =1;return arr;} ,{})
  let max = Math.max(...str.split("").map(x => count[x]))
  return Object.entries(count).filter(x=> x[1] == max)[0].join(":")
}

console.log(mostRepeatedCharacters("hellollllll"))

/**
 * Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )
 */

const toggleCase = str => str.split("").map((x,i) => i%2!==0? x.toUpperCase():x).join("")

console.log(toggleCase("neogcamp"))

/**
 * Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence.
 *  ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")
 */

const program = (str,char) => str.replace(new RegExp(char,"g"),"")

console.log(program("how was your day?","how"))




