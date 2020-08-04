// Code your solution in this file!

function distanceFromHqInBlocks(location) {
        return Math.abs(42 - location);
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, finish) {
    return Math.abs(distanceFromHqInFeet(finish) - distanceFromHqInFeet(start));
}

function calculatesFarePrice(start, finish) {
    let totalDistance = distanceTravelledInFeet(start, finish);
    if (totalDistance <= 400) {
        return 0.0;
    }
    else if (totalDistance <= 2000) {
        return (totalDistance - 400) * .02;
    }
    else if (totalDistance <= 2500) {
        return 25
    }
    else {
        return 'cannot travel that far';
    }
}

