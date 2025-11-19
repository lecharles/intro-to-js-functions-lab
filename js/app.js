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

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

// Function to check if a character is a vowel
const isCharacterAVowel = (character) => {
    // Convert character to lowercase to handle both upper and lowercase
    const lowerCharacter = character.toLowerCase();

    // Check if the character is a vowel (a, e, i, o, u)
    if (lowerCharacter === 'a' || lowerCharacter === 'e' || lowerCharacter === 'i' || lowerCharacter === 'o' || lowerCharacter === 'u') {
        return true;
    } else {
        return false;
    }
}

console.log('Exercise 3 Result:', isCharacterAVowel("c"));
console.log('Exercise 3 Result:', isCharacterAVowel("a"));
console.log('Exercise 3 Result:', isCharacterAVowel("A"));
console.log('Exercise 3 Result:', isCharacterAVowel("r"));
console.log('Exercise 3 Result:', isCharacterAVowel("l"));
console.log('Exercise 3 Result:', isCharacterAVowel("O"));
console.log('Exercise 3 Result:', isCharacterAVowel("s"));
console.log('Exercise 3 Result:', isCharacterAVowel("3"));
console.log('Exercise 3 Result:', isCharacterAVowel("&"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

// Function to create an email address
const generateEmail = (userName, emailDomain) => {
    // Combine userName and emailDomain with the @ symbol
    return userName + '@' + emailDomain;
}

console.log('Exercise 4 Result:', generateEmail("charleslozano", "gmail.com")); 
console.log('Exercise 4 Result:', generateEmail("janedoe", "yahoo.com"));
console.log('Exercise 4 Result:', generateEmail("user123", "example.org"));
console.log('Exercise 4 Result:', generateEmail("testuser", "testdomain.net"));

