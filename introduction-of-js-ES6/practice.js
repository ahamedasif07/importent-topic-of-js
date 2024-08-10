const friends = ['asif', 'arif','siyam','zion','nobita'];

const evenName = (friends) =>{
    let evenNames = [];
    for(const frind of friends){
        console.log(frind.length);
        if(frind.length % 2 === 0){
          evenNames.push(frind)
          
        }
    }
    return evenNames
       
    
}
const evenNames = evenName(friends);
console.log(evenNames)
