// // Exercise #1:

// Do the NASA countdown through the console. That is, the console should say:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!

// for (var i = 0; i < 11; i++) {
//   console.log(i);
// }
// console.log("BLASTOFF!");

// Hint: Use a for loop!

// // Exercise #2:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// Write some code that prints all the numbers in the 'numbers' array to the console.

// Hint: Use a for loop!

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }


// // Exercise #3:

// Write code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum = numbers[i] + sum;
// }
// console.log(sum);
// console.log(sum / numbers.length);

// // Exercise #4:

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

// Hint: See other hints!

// for (var i = 1; i < 101; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


// // Exercise #5:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// For example:
// var guess = prompt("Guess a number");


var randomNumber = Math.floor((Math.random() * 100) + 1);
var guess = parseInt(prompt("Guess a number between 1 and 100"));

var times = 10;
for(var i = 0; i < times; i++) {
  if(guess === randomNumber) {
    alert("You guessed it! It was " + randomNumber + ".");
    break;
  } else if(guess < randomNumber) {
    guess = parseInt(prompt("Guess Higher"));
  } else if(guess > randomNumber) {
    guess = parseInt(prompt("Guess Lower"));
  }
}



// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their sum.


// function addTwoNumbers(numberOne, numberTwo) {
//   return numberOne + numberTwo;
// }
// console.log(addTwoNumbers(4,5));

// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)

// function average(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum = array[i] + sum;
//   }
//   return (sum / array.length);
// }

// console.log((average([5, 23, 98, 234, 1, 0, 3, 177])));



// // Exercise #8:

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.


// function Book(title, author, isbn, pages, yearOfPublication) {
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
//   this.pages = pages;
//   this.yearOfPublication = yearOfPublication;
//   this.printMessage = function() {
//     return this.title + ", " + this.author + ", " + this.isbn + ", " + this.pages + ", " + this.yearOfPublication + ".";
//   };
// }
  
// var book = new Book("The Little Rabbit", "Peter Wanker", "83762837499", 387, "1982");

// console.log(book);
// console.log(book["author"]);
// console.log(book.author);
// console.log(book.printMessage());



// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information

// see above


// // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html

// function max(numberOne,numberTwo) {
//   if (numberOne > numberTwo) {
//     return numberOne;
//   } else {
//     return numberTwo;
//   }
// }

// console.log(max(9,5));
