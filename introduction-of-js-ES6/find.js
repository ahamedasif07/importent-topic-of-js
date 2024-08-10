// find select only the frist one  element besed on a condition and retrun the elements fullfilled the conditions.if anythin not  passed the condition give undefind;

const players = [75,37,86,56,70,77,80];
const selected = players.find(p => p > 80 )
console.log(selected)