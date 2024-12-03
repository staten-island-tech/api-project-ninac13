import "../CSS/style.css";
import { DOMSelectors } from "./domselectors";

const URL = "https://hp-api.onrender.com/api/characters"; //insert an api (harry potter students api)

//function to first show all cards of characters when website loads
async function getData(URL){
    try {
        const response = await fetch(URL);
        if (response.status!=200){
            throw new Error(response);
        }else{
            const data = await response.json();
            createCards(data); //function where initial cards show up
            slytherin(data);//function where slytherin cards show up IF clicked on
            gryffindor(data);//function where gryffindor cards show up IF clicked on
            hufflepuff(data);//function where hufflepuff cards show up IF clicked on
            ravenclaw(data); //function where ravenclaw cards show up IF clicked on
            //this is unique to this harry potter API
        }
    } catch (error) {
        alert ("There is no agent found");
        console.log(error);
    }
}
getData(URL);

//function to create cards
function createCards(data){
    data.forEach((character)=>
        //add in card attributes
        DOMSelectors.container.insertAdjacentHTML(
            'beforeend',
            `<div class = "card">
                    <h2 class = "character-name">${character.name}</h2>
                    <img src = "${character.image}" alt = "" class="card-img"></img>
                    <h3 class = "character-house">House: ${character.house}</h3>
                    <h3 class = "character-actor">Actor: ${character.actor}</h3>
                    <h3 class = "character-patronus">Patronus: ${character.patronus}</h3>
            </div>`
        )
    )
}

createCards(data);

//slytherin characters!!
function slytherin(data){
    DOMSelectors.slytherinButton.addEventListener ("click", function(){
        DOMSelectors.container.innerHTML = ""; // initially clear the html
        createCards(data.filter((character)=>character.house.includes("Slytherin")));
    })
}
slytherin();

function gryffindor(data){
    DOMSelectors.gryffindorButton.addEventListener ("click", function(){
        DOMSelectors.container.innerHTML = ""; // initially clear the html
        createCards(data.filter((character)=>character.house.includes("Gryffindor")));
    })
}
gryffindor(data);


function hufflepuff(data){
    DOMSelectors.hufflepuffButton.addEventListener ("click", function(){
        DOMSelectors.container.innerHTML = ""; // initially clear the html
        createCards(data.filter((character)=> character.house.includes("Hufflepuff")));
    })
}
hufflepuff(data);

function ravenclaw(data){
    DOMSelectors.ravenclawButton.addEventListener ("click", function(){
        DOMSelectors.container.innerHTML = ""; // initially clear the html
        createCards(data.filter((character)=>character.house.includes("Ravenclaw")));
    })
}
ravenclaw(data);

//SOME CARDS HAVE BLANK ATTRIBUTES --> fix this!! either add image or disregard the card as a whole 