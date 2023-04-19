

console.log(typeof(3))



function addTwoNums(a, b){
    try{
        if(typeof(a) != "number")
            throw ReferenceError("The first argument is not a number");
        else if(typeof(b) != "number")
            throw ReferenceError("The second argument is not a number");
        else
            console.log(a + b);
    }catch(err){
        console.log("Err! ", err);
    }
    console.log("It still works")
    
}

addTwoNums(5, "5");