var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle = Object.create(bird);
console.log("Eagle:", eagle);

// Penguin is flyless bird
var penguin = Object.create(bird);
penguin.canFly = false;  // Now penguin has it own property
console.log(penguin)
console.log(penguin.hasFeathers); // Also has the bird properties as it prototype

// Better to use class, not Object.create


class Train{
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}


var myTrain = new Train("Green", "yes");
console.log(myTrain.color);
myTrain.getPrototype();


var myTrain1 = new Train("Red", false);
var pro = myTrain1.getPrototype();

