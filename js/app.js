console.log("Everything is working XYZ");

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

// Arrow function that compares two numbers
const maxOfTwoNumbers = (x, y) => {
    // If x is greater than or equal to y
    if (x >= y) {
        return x;  // Return x (the larger or equal number)
    } else {
        return y;  // Otherwise, return y (the larger number)
    }
}

// Test the function
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
console.log('Exercise 1 Result:', maxOfTwoNumbers(10, 7));
console.log('Exercise 1 Result:', maxOfTwoNumbers(5, 5));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

// Arrow function that checks if age is 18 or over
const isAdult = (age) => {
    // If age is 18 or older
    if (age >= 18) {
        return 'Adult';  // Return 'Adult'
    }   else {
        return 'Minor';  // Otherwise return 'Minor'
    }
}   
// Test the function
console.log('Exercise 2 Result:', isAdult(20.9));
console.log('Exercise 2 Result:', isAdult(18.5));
console.log('Exercise 2 Result:', isAdult(17.99));