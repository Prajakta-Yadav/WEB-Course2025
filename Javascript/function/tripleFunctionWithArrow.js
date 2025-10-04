function wakeUp(next){
    console.log("In function wake up");
    next();
}

function breakFast(TeaCoffee){
    console.log("IN function Breakfast");
    TeaCoffee();
}

function goToCollege(Bike){
    console.log("In function Go to Collage");
    Bike();
}

function lunchBreak(){
    console.log("In college Lunch Break");
}

wakeUp(()=> breakFast(()=>goToCollege(()=>lunchBreak())));