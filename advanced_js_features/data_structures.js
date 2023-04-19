/*
    1- How do you represent the given data in your app?
        
    2- How do you code the solution?
*/

// forEach()
const fruits = ['kiwi','mango','apple','pear'];


function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex); // forEach accepts a function 


// Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggies}`);
});


// filter()
/*
Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. 
Those array items that pass the test are returned.
*/
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})


/*
The map method
Finally, there's a very useful map method. 
This method is used to map each array item over to another array's item, 
based on whatever work is performed inside the function that is passed-in to the map as a parameter. 
*/


[0, 10, 20, 30, 40].map(function(num) {
    return num / 10;
})

// Working with Objects in JavaScript
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

// Working with Maps in JavaScript
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// Working with Sets in JavaScript
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
