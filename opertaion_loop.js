//Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
let array = [5,13,7,21,48]

const sumOfArray = array.reduce((x,y) => x+y)
console.log(sumOfArray)

//Write a program to take a number input from user and determine whether the number is odd or even.

let oddOrEven = num => num%2 ==0 ? "odd" : "even"
//Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

let num1 = 129 , num2 = 251 

let maxOrMin = num1>num2?  num1 : num2 

console.log(maxOrMin)

//Write a program to find the maximum out of three given numbers. The numbers are number1=8, number2=23 and number3=17.

let number1  = 8 , number2 = 23 , number3 =17 

const minimum = Math.max(number1,number2,number3)

console.log(minimum)


//Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.


let numbers1 = 8 , numbers2 = 23 , numbers3 = 17 

const maximum = Math.min(numbers1,numbers2,numbers3)

console.log(maximum)


//Write program to take a month as an input from the user and find out whether the month has 31 days or not.

let Months = {January : 31 ,February:28,March : 31 ,April:30 ,May :31 ,  June:30,July:31 ,August:31,September:30,October:31,November:30 ,December :31 }


const Days31OrNot = (month) => Months[month]   === 31 ? "True" : "False"

console.log(Days31OrNot("January"))


//Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

//Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....


let fizzBuzz  = new Array(100).fill(0).map((_,i,x) => (i+1)%15 ==0 ? "FizzBuzz" : (i+1)%5 == 0? "Buzz" : (i+1)%3 == 0 ? "Fizz" : i+1 )
console.log(fizzBuzz)


/*Print the following star pattern :-

*
* *
* * *
* * * *
* * * * *

*/
let sum = ""
for(let i = 0 ; i <5 ; i++){
    sum += " *"
    console.log(sum)
}

//Write a program to take a number input from user and print multiplication table 12 times for that number.


const tableArray = num => new Array(12).fill(0).map((_,i) => (i+1)*num)
console.log(tableArray(11))

//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21,

let newArray = [0,1]

const fibonacciSeries = (num) =>{
    for(let i = 2 ; i < num ; i++){
        newArray.push(newArray[i-1] + newArray[i-2])
    }
    return newArray
}


console.log(fibonacciSeries(12))

//Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const factorial = num =>{
    let multiply =1 
    for(let i =0 ; i < num ; i++){
        multiply = multiply*(i+1)
    }
    return multiply
}
console.log(factorial(5))






