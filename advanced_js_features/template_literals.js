// ES5 String

let noMultiLines = "No mult-lines string in ES5";
console.log("Did you know? " + noMultiLines);

// ES6 mult-line template literals

let multiLine = `
    Using ES6
    back-ticks
    multi-lines string are possible
`

console.log(multiLine)


// ES6 variables interpolation

let first = `He said "Don't you know? ES6, it's got some greate features!"`;
let second = `"Woundn't you want to learn more? ", he asked!`;
console.log(`${first} - and I to curios. ${second}`);