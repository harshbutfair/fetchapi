document.getElementById('button1').addEventListener('click', getText)

document.getElementById('button2').addEventListener('click', getJson)


function getText(){
    fetch('text.txt')
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            document.getElementById('output').innerHTML = data;
        })
        .catch(function(err){
            console.log(err);
        })
}

function getJson(){
    fetch('posts.json')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let output = '';
            data.forEach(function(post){
                output += `<li>${post.title}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
}