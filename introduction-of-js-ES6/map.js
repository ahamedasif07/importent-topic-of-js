// map ==> loops through each element of the array  and do the ioperation that you passed in the call back function and hold the result from each oporation in an array and finally retruns you the array ...

const numbers = [4,5,3,6,7,8];

// const dubuled = [];

// for(const num of numbers){
//     const duble = num * 2;
//     dubuled.push(duble);
// }

// console.log(dubuled)

// map is an powerfull things of es6 for looping


const result = numbers.map(n =>n*2)
console.log(result)