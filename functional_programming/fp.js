var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate){
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo)


// Ctr + Opt + N to run


// Recursive
let counter = 3;
function example(){
    console.log(counter);
    counter -= 1;
    if(counter === 0) return;
    example();
}

example();