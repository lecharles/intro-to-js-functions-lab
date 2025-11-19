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

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

// Function to create a personalized greeting
const greetUser = (name = "my friend", timeOfDay = "heavens") => {
    // Combine "Good", the time of day, name, and exclamation mark
    return `Good ${timeOfDay}, ${name}!`;
}

console.log('Exercise 5 Result:', greetUser("Carlos", "morning")); 
console.log('Exercise 5 Result:', greetUser("Avisa", "afternoon"));
console.log('Exercise 5 Result:', greetUser("Billie", "evening"));
console.log('Exercise 5 Result:', greetUser());

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

// Function to find the largest of three numbers
const maxOfThree = (n1, n2, n3) => {
    // Compare n1 with n2 and n3
    if (n1 >= n2 && n1 >= n3) {
        return n1;  // n1 is largest
    }
    // Compare n2 with n3
    else if (n2 >= n3) {
        return n2;  // n2 is largest
    }
    // Otherwise n3 must be largest
    else {
        return n3;  // n3 is largest
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
console.log('Exercise 6 Result:', maxOfThree(15, 12, 20));
console.log('Exercise 6 Result:', maxOfThree(7, 7, 7));
console.log('Exercise 6 Result:', maxOfThree(-7, -7, -7));
console.log('Exercise 6 Result:', maxOfThree(-0, 0, 1));
console.log('Exercise 6 Result:', maxOfThree(3, 9, 6));
console.log('Exercise 6 Result:', maxOfThree(-5, -2, -8));
