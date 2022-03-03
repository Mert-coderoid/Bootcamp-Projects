
const apiURL = "https://jsonplaceholder.typicode.com/users";

const xhr = new XMLHttpRequest();

xhr.open("GET", apiURL, true);

xhr.onreadystatechange = function () {

    let info = JSON.parse(this.responseText);
    let html = "";

    if(this.readyState == 4 && this.status == 200) {
        info.forEach(item => 
            console.log(item.name)
        )
    }
}

xhr.send()