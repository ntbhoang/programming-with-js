// For-of 

const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log("----------for-in is unreliable---------------");
for(prop in sportsCar){
    console.log(prop);
}
console.log(":D", "Iterating over object AND its prototypes!")
console.log();


console.log("----------for-opf is reliable---------------");
for(prop of Object.keys(sportsCar)){
    console.log( prop + ": " + sportsCar[prop]);
    console.log();
}
console.log(":D", "Iterating over object's OWN PROPERTIES only!")