function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))

}

function displayPost(posts){

    const postContainer=document.getElementById("post-container");

    for(const post of posts){
        console.log(post)
        const div =document.createElement('div');

        div.classList='post';
        div.innerHTML=
        ` <h3>name :${post.title}</h3>
        <p>title :${post.body} </p>
        <p>id :${post.id} </p>`
        postContainer.appendChild(div);
    }

}

