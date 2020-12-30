import * as fetch from 'node-fetch';
function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
     });

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
    return inputText;
}

export { checkForName }
