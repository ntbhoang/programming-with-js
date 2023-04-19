


function handleClick(){
    switch(h1.innerText){
        case arr[0]:
            h1.innerText = arr[1];
            break;
        
        case arr[1]:
            h1.innerText = arr[2];
            break;
        
        case arr[2]:
            h1.innerText = arr[3];
            break;
        
        default:
            h1.innerText = arr[0];
            break;  
    }
}


function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();

class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());


class Animal {
    constructor(){}

}

class Dog extends Animal {
    constructor() {
        super();
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise());


const  [a, b]  =  [1,2,3,4]
console.log(b)