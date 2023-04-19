var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];


function logDairy(){
    for(item of Object.keys(dairy)){
        console.log(`${dairy[item]}`);
    }
}


// logDairy();

const animal = {

    canJump: true
    
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
    

function birdCan(){
    for(ability of Object.keys(bird)){
        console.log(`${ability}: ${bird[ability]}`);
    }
}

// birdCan();


function animalCan() {
    for(ability in bird){
        console.log(`${ability}: ${bird[ability]}`);
    }
}

animalCan();

