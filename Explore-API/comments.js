function loadComments(){
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res => res.json())
 .then(data => console.log(data))
 .catch(error => console.log('data not found ', error))
}


const loadComments2 = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = res.json()
    console.log(data)
}