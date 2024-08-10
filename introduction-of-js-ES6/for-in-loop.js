const numbers = [1,2,3,4,5,6,];

for(const num of numbers){
    console.log(num)
}

const nobab = 'asif ahamed';
for(const letter of nobab){
    console.log(letter)
}

// for of loop is not work in objects..for of for array and strings;
// for(const kye of actor){
//     console.log(kye)
// }


const actor = {
    name :  'ananta',
    age : 30,
    phone : '01729149634',
    money : 34235235

}

// in looping in a objects use for in loop

for(const keys in actor){
    const values = actor[keys];
    // console.log(keys, values)
}