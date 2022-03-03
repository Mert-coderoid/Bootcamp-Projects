import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((json) => {
    for (let i of json){
        console.log(i.name)
    }

});


