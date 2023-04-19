let top3 = [
    "PlaceA", 
    "PlaceB", 
    "PlaceC"
]

function travelTo(place1, place2, place3){
    console.log("Visit: " + place1);
    console.log("Visit: " + place2);
    console.log("Visit: " + place3);
}


travelTo(...top3);