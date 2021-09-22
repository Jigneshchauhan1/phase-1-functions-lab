// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    let headquarter = 42;
    if (headquarter > pickupLocation){
        return headquarter - pickupLocation
    } else (headquarter < pickupLocation);{
        return pickupLocation - headquarter
    } 

}
function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * 264;

}
function distanceTravelledInFeet(headquarter, pickupLocation){
    if (headquarter > pickupLocation){
        return (headquarter - pickupLocation) * 264
    } else (headquarter < pickupLocation);{
        return (pickupLocation - headquarter) * 264
    }

}
function calculatesFarePrice(headquarter, pickupLocation){
    if (distanceFromHqInFeet(headquarter, pickupLocation) <= 400){
        return 0;
     } else if (distanceTravelledInFeet(headquarter, pickupLocation)> 400 && distanceTravelledInFeet(headquarter, pickupLocation)<= 2000){
         return ((distanceTravelledInFeet(headquarter, pickupLocation)- 400) * 0.02 )
     } else if (distanceTravelledInFeet(headquarter, pickupLocation)> 2000 && distanceTravelledInFeet(headquarter, pickupLocation)<= 2500){
         return 25
     } else if (distanceTravelledInFeet(headquarter, pickupLocation)> 2500){
         return 'cannot travel that far'
     } 

}
    

