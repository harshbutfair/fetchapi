document.getElementById('button1').addEventListener('click', getText)

document.getElementById('button2').addEventListener('click', getJson)

document.getElementById('button3').addEventListener('click', getExternal)


function getText(){
    fetch('text.txt')
        // .then(function(response){
        //     return response.text();
        // })
        .then(response => response.text())
        // .then(function(data){
        .then(data =>{
            document.getElementById('output').innerHTML = data;
        })
        // .catch(function(err){
        //     console.log(err);
        // })
        .catch(err => console.log(err));
}

function getJson(){
    fetch('posts.json')
        // .then(function(response){
        //     return response.json();
        // })
        .then(response => response.json())
        // .then(function(data){
        .then(data => {
            let output = '';
            data.forEach(function(post){
                output += `<li>${post.title}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
}

function getExternal(){
    fetch('https://api.github.com/users')
        // .then(function(response){
        //     return response.json();
        // })
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.forEach(function(post){
                output += `<li>${post.login}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        // .catch(function(err){
        //     console.log(err);
        // })
        .catch(err => console.log(err))
}