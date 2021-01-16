import {info} from './env.js'; 
const body = document.querySelector('body'); 
const button = document.querySelector('button'); 
const word = document.createElement('h1'); 
body.appendChild(word); 
const definition = document.createElement('p'); 
body.appendChild(definition); 

console.log(process.env); 

const randomWord = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
    .then(response => {
        return response.json(); 
    })
    .then(response => {
        word.textContent = response
        randomDefinition(word);
    })
    .catch(err => {
        console.log(err); 
        return "No Word Available"
    }); 
}

const randomDefinition = (word) => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word.textContent}?key=${info.key}`)
    .then(response => {
        return response.json(); 
    })
    .then(response => {
        console.log(response[0].shortdef[0]); 
        definition.textContent = "Definition: " + response[0].shortdef[0]; 
    })
    .catch(err => {
       console.log(err); 
       return "No Definition Available"; 
    });

}

button.addEventListener('click', function(){
    randomWord(); 
})

