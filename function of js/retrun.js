// 


const numbers = [22, 34, 44, 65, 23,98]
let resultOfSum = 0;

function sumOfEven(number){
    let resultOfSum = [];
    for(const num of number){
        if(num % 2 === 1){
            resultOfSum.push(num);
            
        }
       
    }
    return resultOfSum;
    

}

sum = sumOfEven(numbers)
console.log(sum)
