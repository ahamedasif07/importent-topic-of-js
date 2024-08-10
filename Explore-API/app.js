function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    const userName = document.getElementById('user-list');
   for(const user of data){
    console.log(user)
    const li = document.createElement('li');
    const li2 = document.createElement('li');
    li.innerText=user.name;
    li2.innerText=user.email;

    userName.appendChild(li)
    userName.appendChild(li2)
   }

}
