// Function to calculate the distance in blocks from Scuber's headquarters
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}

// Function to calculate the distance in feet from Scuber's headquarters
function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264;
}

// Function to calculate the distance traveled in feet between start and destination blocks
function distanceTravelledInFeet(start, destination) {
  const blocks = Math.abs(destination - start);
  return blocks * 264;
}

// Function to calculate the fare for the customer based on the distance traveled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// Example usage:
console.log(distanceFromHqInBlocks(50)); // Should return 8
console.log(distanceFromHqInFeet(50));   // Should return 2112
console.log(distanceTravelledInFeet(34, 38)); // Should return 1056
console.log(calculatesFarePrice(34, 38));     // Should return 11.52
