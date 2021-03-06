// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

// Callback Function
function callback(param) {
    console.log(param);
}

// Problem 1: Getting Length of an Array
function getLength(arr, cb) {
    return cb(arr.length);
}

getLength(items, callback);


// Problem 2: Getting Last Item of an Array
function last(arr, cb) {
    return cb(arr[arr.length - 1]);
}

last(items, callback);

// Problem 3: Adding Numbers Together
function sumNums(x, y, cb) {
    return cb(x + y);
}

sumNums(4, 7, callback);

// Problem 4: Multiply numbers and pass result
function multiplyNums(x, y, cb) {
    return (cb(x * y));
}

multiplyNums(4, 7, callback);


// Problem 5: return True or false if the item is in the array
function contains(item, list, cb) {
    return cb(list.includes(item) ? true : false);
}

contains("Gum", items, callback);
contains("Lunch", items, callback);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.
}