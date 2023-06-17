let myName = 'alexander', myFamily = 'Vasin';

// charAt(): Returns the character at the specified index in a string.
// console.log(myName.charAt(myName[0]).toUpperCase() + myName.slice(1, myName.length));
let myOficcialName = myName.charAt(myName[0]).toUpperCase() + myName.slice(1, myName.length);

// concat(): Joins two or more strings together.
// console.log(myOficcialName.concat(' ' + myFamily));
let myFamilyName = myOficcialName.concat(' ' + myFamily);

// endsWith(): Returns true if a string ends with the specified characters.
// console.log(myFamilyName.endsWith('Vasin')); //true

// includes(): Returns true if a string contains the specified characters.
// console.log(myFamilyName.includes('Alexander')); //true

// indexOf(): Returns the position of the first occurrence of a specified value in a string.
// if (myFamilyName.indexOf("Vasinn") !== -1) {
//     console.log("world is present");
// }

// lastIndexOf(): Returns the position of the last occurrence of a specified value in a string.
// length: Returns the length of a string.
// match(): Searches a string for a match against a regular expression, and returns the matches.
// replace(): Replaces a specified value with another value in a string.


// slice(): Extracts a part of a string and returns the extracted part in a new string.
// console.log(myFamilyName.slice(6, 9)); //der

// split(): Splits a string into an array of substrings.
// console.log(myFamily.split());

// startsWith(): Returns true if a string starts with the specified characters.


// substring(): Extracts the characters from a string, between two specified indices.
// console.log(myFamily.substring(0, 5).toUpperCase());

// toLowerCase(): Converts a string to lowercase.
// toUpperCase(): Converts a string to uppercase.
// trim(): Removes whitespace from both sides of a string.
