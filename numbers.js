/**
 * Write a program to input 2 numbers and display the sum of the numbers to the console.

Input Number 1: 20
Input Number 2: 40
Sum : 60
 */

let num1 = 20 , num2 = 40 

const sum = (num1,num2) => console.log(num1+num2) 

sum(num1,num2)


/**
 * Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

Input: P=100, R=6%, T=2
Output: 12
 */

let principal =100 , rate = 6 , time =2

const simpleInterset = (p,t,r) => p*t*r*0.01
console.log(simpleInterset(principal,rate,time))

/**
 * Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

Formula : 0.5 * m * v * v
 */

const kineticEnergy = (mass,velocity) => mass*velocity*velocity*0.5

console.log(kineticEnergy(10,10))


/**
 * Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

Input: 56
Output: 13.33333
 */

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * (5/9)


console.log(fahrenheitToCelsius(56))

/**
 *Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

Formula :

Area: a*a

Perimeter: 4*a

Surface Area: 6*a*a

Volume: a*a*a
 */


const formula = a => `Area: ${a*a} \ Perimeter: ${4*a} \ Surface Area: ${6*a*a} \ Volume: ${a*a*a}`

console.log(formula(2))


/**
 * Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

Input: CP = 1500, SP = 2000
Output: 500 Profit

Input: CP = 3125, SP = 1125
Output: 2000 Loss
 */


const profitOrLoss = (costPrice,sellingPrice) => sellingPrice>costPrice ? `${sellingPrice-costPrice} Profit` : `${costPrice-sellingPrice} Loss`


console.log(profitOrLoss(1500,2000))
console.log(profitOrLoss(3125,1125))


/**
 * Write a program to calculate sum of N natural digits, as input by the users?

Enter a positive integer: 100
Sum = 5050
 */


const Sum = n => new Array(n+1).fill(0).reduce((x,y,i) => x+i,0)


console.log(Sum(100))



/**
 * Write a Program to Print N Odd Number in Descending Order.

Input : 4
Output : 7
5
3
1 
*/

const oddDescending = (n) => {
    for(let i = n*2; i>0 ; i--){
         i%2 != 0 ? console.log(i) : null 
    }
}

oddDescending(4)

/**
 *Write a JavaScript program to compute the sum of all digits that occur in a given string.

Input: 1234
Output: 1+2+3+4 = 10 
 */

const sumOfString = number => String(number).split("").reduce((x,y) => Number(x)+Number(y),0)

console.log(sumOfString(1234))

/**
 * Write a JavaScript program that reverses a number.

Example:

Input:  32243;
Output:  34223
 */


const reverseNumber = number => Number(String(number).split("").reverse().join(""))


console.log(reverseNumber(32243))


/**
 * Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

Example-

Enter a Number : 1234
Enter the Number of Rotations : 2
Output : 3412
 */

const rotatedNumber = (number,rot) =>{
    let x = String(number).split("")
    return Number(x.slice(-(rot%x.length)).concat(x.slice(0,x.length-(rot%x.length))).join(""))
}

console.log(rotatedNumber(123456,1000))

/**
 *Write a Program to convert Decimal to Binary.

Enter the number to convert: 5
Binary of Given Number is=101
Follow up Question : Write a Program to Convert Octal to Decimal.

Enter an octal number: 116
Octal of Given Number = 78 in decimal 
 */


const decimalToBinary = n => console.log(Number(n.toString(2)))

decimalToBinary(5)

const octalToDecimal =octal => console.log(parseInt(octal,8))

octalToDecimal(116)

