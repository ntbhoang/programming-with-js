/* 
    By the end of this reading, you'll be able to:

        1- Explain that arrays are objects, with their own built-in properties and methods

        2- Outline the common way to extend arrays using the push() method

        3- and explain how to trim the last member of an array using the pop() metho
*/

// 1- Arrays are obj
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}