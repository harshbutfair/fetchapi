document.getElementById('button1').addEventListener('click', getText)


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