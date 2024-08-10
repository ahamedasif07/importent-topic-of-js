// defult --> if any kind of value is not provide ,take a dufult value;
function add(num1=0,num2 = 0){
    const result = num1 + num2;
    console.log(num1,num2,result)
    return result;
}
const sum = add(8,5)
// const sum = add(8)
// const sum = add(5)
