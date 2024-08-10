const max =Math.max(3,57,86,2,4,6);

let numbers = [ 12, 13, 14 ,15,16,17];

console.log(Math.max(...numbers))
console.log(max);

// use sprade oporator to copy somthing;

const friends = [1,2,3,4,5];

const bondo = friends;
const dosto = [...friends]; // copy only
// dosto.push(222)
// friends.push(111)
// console.log(dosto)
// console.log(friends)

const shonk = [...friends,9999]; // copy and add element 
console.log(shonk)

