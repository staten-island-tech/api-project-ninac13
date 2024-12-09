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
            allCharacters(data);
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
    data.forEach((character)=> {
        let status = character.alive;
        if (status === "false"){
            status = "Dead";
        }
        else{
            status = "Alive";
        }

        let image = character.image;
        if (image === ""){
            image = "img/no_image.jpg";
        }

        let ancestry = character.ancestry;
        if (ancestry === ""){
            ancestry = "N/A";
        }

        let house = character.house;
        if (house === ""){
            house = "N/A";
        }

        let actor = character.actor;
        if (actor === ""){
            actor = "N/A";
        }

        let patronus = character.patronus;
        if (patronus === ""){
            patronus = "N/A";
        }
        //add in card attributes
        DOMSelectors.cards.insertAdjacentHTML(
            'beforeend',
            `<div class = "w-1/5 border-4 border-base-100 rounded-lg border-double mx-5 my-5 min-w-64 shadow-md bg-base-content hover:bg-primary active:bg-warning focus:outline-none focus:ring focus:ring-base-content">
                    <p class= "text-xl character-name text-center font-serif text-neutral">${character.name}</p>
                    <div class="flex justify-center text-neutral">
                        <img src = "${image}" alt = "" class="w-1/2 h-2/3 rounded-lg hover:w-2/3 hover:l-3/4 duration-500 border-double border-4 border-base-100"></img>
                    </div>
                    <p class= "text-center font-serif text-neutral">House: ${house}</p>
                    <p class= "text-center font-serif text-neutral">Actor: ${actor}</p>
                    <p class= "text-center font-serif text-neutral">Ancestry: ${ancestry}</p>
                    <p class= "text-center font-serif text-neutral">Patronus: ${patronus}</p>
                    <p class= "text-center font-serif text-neutral">Status: ${status}</p>

            </div>`
        )
    })
}

createCards(data);

function allCharacters(data){
    DOMSelectors.allCharactersButton.addEventListener("click", function(){
        DOMSelectors.cards.innerHTML = ""; //clear
        createCards(data);
    })
}
allCharacters(data);

//slytherin characters!!
function slytherin(data){
    DOMSelectors.slytherinButton.addEventListener ("click", function(){
        DOMSelectors.cards.innerHTML = ""; // initially clear the html
        createCards(data.filter((character)=>character.house.includes("Slytherin")));
    })
}
slytherin();

//gryffindor characters!!
function gryffindor(data){
    DOMSelectors.gryffindorButton.addEventListener ("click", function(){
        DOMSelectors.cards.innerHTML = ""; // initially clear the html
        createCards(data.filter((character)=>character.house.includes("Gryffindor")));
    })
}
gryffindor(data);


function hufflepuff(data){
    DOMSelectors.hufflepuffButton.addEventListener ("click", function(){
        DOMSelectors.cards.innerHTML = ""; // initially clear the html
        createCards(data.filter((character)=> character.house.includes("Hufflepuff")));
    })
}
hufflepuff(data);

function ravenclaw(data){
    DOMSelectors.ravenclawButton.addEventListener ("click", function(){
        DOMSelectors.cards.innerHTML = ""; // initially clear the html
        createCards(data.filter((character)=>character.house.includes("Ravenclaw")));
    })
}
ravenclaw(data);