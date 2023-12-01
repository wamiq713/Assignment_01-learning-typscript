                                    // ` Assingment 1` ||

     // " Task #2" 
     // "Scenario 1: Sum numbers"
// To write a function named `add` that takes two numbers as arguments and returns their sum.
function add(num1:number, num2:number) {
    return num1 + num2;
}

// example 
const resultof1 = add(11, 5);
console.log(resultof1); // Output: 16
        // End of Scenario#1 ||


// Scenario 2: Check Even or Odd
//  TO develop a function `checkEvenOrOdd` that checks if a given number is even or odd.
//The function should take an integer as a parameter and return a string indicating whether the number is even or odd.

function checkEvenOrOdd(givenNumber:number) {
    if (givenNumber % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

// example 
const result1 = checkEvenOrOdd(4);
console.log(result1); // Output: Even

const result2 = checkEvenOrOdd(7);
console.log(result2); // Output: Odd
        // End of Scenario#2 ||

// Scenario 3: Calculate Area:
// To create a function `calculateArea` that calculates the area of a rectangle.
//  The function should take width and height as parameters and return the calculated area.

function calculateArea (width: number, height:number ) {
       return width *height;   
}

// example  
const resultof3 =calculateArea(13,12)
console.log(resultof3);// output =156 
        // End of Scenario#3 ||

// Scenario 4: String Reversal
// To implement a function `reverseString` that reverses a given string.
// The function should take a string as a parameter and return the reversed string.


function reverseString(word:string):string{
    // split the `word` into an array
    // reverse the array 
    // join the reversed array to become a string again
    return word.split('').reverse().join('')
}
// example 
const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: '!dlroW ,olleH'
        // End of Scenario#4 ||

/*Scenario 5: Temperature Conversion
To create a function `convertCelsiusToFahrenheit` that converts temperature from Celsius to Fahrenheit.
 The function should take a temperature value in Celsius as a parameter and return the equivalent temperature in Fahrenheit.*/
 
 function convertCelsiusToFahrenheit(Celsius:number){
    // formula = (Celsius * 9/5) + 32 = Fahrenheit
    return (Celsius * 9/5) + 32;

 }
 // example
 const celsiusTemperature = 22  
 const fahrenheitTemperature = convertCelsiusToFahrenheit(celsiusTemperature);
 console.log(fahrenheitTemperature); // output = 71.6
//                     || End of Task# 2 ||



            //     || ***Task # 3 *** ||
  // Scenario 1 - Modify Array with Methods
   let myArray = [1,2,3,4,5]        // Initailizing the array 
        // Demonstrating the Usage of Array Methods 
    // #1 `Push`:Adds new elements to the end of the array 
    myArray.push(6,7)
    console.log("After Push:",myArray)

    // #2 `pop`:Removes the last element from the array
    const poppedElement = myArray.pop()
    console.log("Popped Element:", poppedElement)
    console.log("After pop:", myArray)

    // #3 shift :Removes the first element from the array
    const shiftedElement = myArray.shift();
    console.log("Shifted Element:", shiftedElement);
    console.log("After shift:", myArray);

    // #4 unshift: Add new elements to the beginning of the array
    myArray.unshift(-2, -1, 0);
    console.log("After unshift:", myArray);
            // End of Scenario #1 ||

            //Scenario 2 - Subarray Creation:
            
            // Usage of Splice ;
         let originalArray1 = ["A","B","C","D","E"]           // Initializing the Array

         const removedElements = originalArray1.splice(1, 2,"Y","Z")  
         // Removes 2 elements starting from index 1 and replaces "B"and "C" with "Y"and "X"

         console.log("Removed Elements=",removedElements)
         console.log("After Splice=", originalArray1)

        //     // Usage of slice ; 
         let originalArray2 = [20,22,24,26,28,30]          //Initializing the Array
 
         const Subarray = originalArray2.slice(0,3)
         console.log("Subarray using slice =",Subarray)
         console.log("Orignial Array After Slice =",originalArray2) // original Array wont be modified 

                        // End of Task #3 || 