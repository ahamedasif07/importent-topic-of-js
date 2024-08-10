const numbers = [4,5,6,7,9];
const players = [75,37,86,56,70,77,80];

//  filter selects element besed on a condition and retruns an array with the elements fullfilled the conditions.if anythin not passed the condition give an emty aray;

// const height = players.filter(high => high >= 70)
// const height = players.filter(high => high >= 90)
// const height = players.filter(high => high >= 60)
const height = players.filter(high => high % 2=== 1)
console.log(height)