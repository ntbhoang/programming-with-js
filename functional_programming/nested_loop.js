for(var i = 1; i < 3; i++){
    for(var j = 1; j < 6; j++){
        console.log("Week ", i, " - Day ", j);
    }
}

/* 
    1- The j loop represents the rows. 
    2- The i loop represents the cols.
*/


for(var year = 2023; year < 2025; year++){
    console.log(year);
    for(var month = 6; month < 9; month++){
        console.log("-----------------------", month);
    }
}


function letterFinder(word, match){
    for(var i = 0; i <= word.length; i++){
        if(word[i] === match)
            console.log("Found the ", match, " at ", i);
        else
            console.log("Not found the match at: ", i);
    }
}

console.log(letterFinder("adsgawe", "g"));

