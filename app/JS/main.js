import "../CSS/style.css";
import { DOMSelectors } from "./domselectors";
//import { DOMSelectors } from "./domselectors";

const URL = "https://hp-api.onrender.com/api/characters"; //insert an api (harry potter students api)

async function getData(URL){
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}

getData(URL);

//function to first show all cards of characters when website loads
function allCards(characters){
    characters.forEach(character => {
        DOMSelectors.container.insertAdjacentHTML(
            'beforeend',
            `<div class = "card">
                    <h2 class = "card-header">${character.name}</h2>
                    <img src = "${image.url}" alt = "" class="card-img"></img>
                    <h3 class = "product-color">${product.color}</h3>
                    <h3 class = "product-price">$${product.price}</h3>
                    <h3 class = "product-taste">${product.taste}</h3>
            </div>`
        )
    });
}
allCards(data);

//function to show only the student cards when the show student button is clicked
function showStudents(response){
    DOMSelectors.studentsButton.addEventListener("click", function(){
//when it is clicked what should happen
    })
}

showStudents();

function showTeachers(response){
    DOMSelectors.teachersButton.addEventListener("click", function(){
//when it is clicked what should happen
    })
}

showTeachers();

function showGryffindors(response){
    DOMSelectors.gryffindorButton.addEventListener("click", function(){
//when it is clicked what should happen
    })
}

showGryffindors();

function showSlytherins(response){
    DOMSelectors.slytherinButton.addEventListener("click", function(){
//when it is clicked what should happen
    })
}

showSlytherins();

function showHufflepuffs(response){
    DOMSelectors.hufflepuffButton.addEventListener("click", function(){
//when it is clicked what should happen
    })
}

showHufflepuffs();

function showRavenclaws(response){
    DOMSelectors.ravenclawButton.addEventListener("click", function(){
//when it is clicked what should happen
    })
}

showRavenclaws();

//MAKE AN ALL CHARACTERS BUTTON