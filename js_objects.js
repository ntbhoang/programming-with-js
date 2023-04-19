// One of the most common ways of building an object in JavaScript is using the object literal syntax: {}.

var user = {}; 

/*
    Sometimes, an entire object can be immediately built, using the object literal syntax, by specifying the object's properties, 
    delimited as key-value pairs, using syntax that was already covered in an earlier lesson item in this lesson.
*/

var qaManager = {
    socialSkills: 3,
    rangeTitlePerTurn: 3,
    greeting: "Hello Max"
};

console.log(qaManager.socialSkills);


/*
    - There is an alternative syntax to the dot notation I used up until this point.
    - This alternative syntax is known as the brackets notation.
*/

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}
console.log(house2.priceUSD);

/*
    - Note that using the brackets notation, I essentially just wrap each property's key as a string, 
        inside either the single or double quotes - just like with regular strings. 

    - I can both access and update properties on objects using either the dot notation, or the brackets notation, 
        or a combination of both, like in the following example:
*/

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

/*
    - Before I discuss the topic of arrays and objects, let me just give you another important piece of information about the brackets notation. 
        With the brackets notation, I can add space characters inside property names, like this:  
    - However, doing this is discouraged, 
    due to obvious reasons of having a property key as a number string not really conveying a lot of useful information.
*/

car["number of doors"] = 4;
console.log(car["number of doors"]); // {color: 'green', speed: 100, number of doors: 5}

/* 
    - Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions.
*/
var arrOfKeys = ["speed", "altitude", "color"];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for(var i = 0; i < arrOfKeys.length; i++)
    console.log(drone[arrOfKeys[i]]);