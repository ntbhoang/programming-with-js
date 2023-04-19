const car = {
    speed: 200,
    color: "red"
}

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

const clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}


for(key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}


function testBracketDynamicAccess() {
    let dynamicKey;
    let randomNumber = Math.random();

    if(randomNumber > 0.5){
        console.log("Random number= ", randomNumber)
        dynamicKey = "speed";
    }else{
        console.log("Random number= ", randomNumber)
        dynamicKey = "color";
    }

    let drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}

testBracketDynamicAccess();