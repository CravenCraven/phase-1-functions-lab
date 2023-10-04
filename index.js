// Code your solution in this file!

const hqLocation = 42;
function distanceFromHqInBlocks (customerLocation){
return Math.abs(customerLocation - hqLocation);
}

console.log(distanceFromHqInBlocks(43))

//const hqLocation = 42;
function distanceFromHqInFeet(customerLocation){
    return Math.abs( customerLocation - hqLocation) * 264;
}

//function distanceTravelledInFeet(block, feet){
    //return Math.abs(block *feet);
//}



function distanceTravelledInFeet(start, destination){
return Math.abs(start - destination) * 264;
}
console.log(distanceTravelledInFeet(8, 10))


function calculatesFarePrice(start, destination){
   let feet = Math.abs(start - destination) * 264;
     if (feet <= 400){
        return 0
    }
    if (feet > 400 && feet <=2000){
    const price = (feet - 400)*.02;
    return price

    }
    if (feet >= 2000){
        return 25
    }
    if (feet <= 2500){
     return "Cannot travel that far";
        
    }



}
console.log(calculatesFarePrice(34,43))






