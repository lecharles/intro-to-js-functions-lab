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
