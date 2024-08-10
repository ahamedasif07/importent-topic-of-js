const actor = {
    name :  'ananta',
    age : 30,
    phone : '01729149634',
    money : 34235235

}
// if right side is an object left side of destucturing will be ;
const {phone,age,money} = actor
// const phone = actor.phone;
// const name = actor.name;
console.log(phone,age,money)