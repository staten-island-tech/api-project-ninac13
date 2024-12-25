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
            allCharacters(data);
            submitButton(data);
            //this is unique to this harry potter API
        }
    } catch (error) {
        alert ("There is no agent found");
        console.log(error);
    }
}
getData(URL);

async function getHouseData(URL){
    try {
        const gryffindorHouseResponse = await fetch(`${URL}/house/gryffindor`);
        const slytherinHouseResponse = await fetch(`${URL}/house/slytherin`);
        const hufflepuffHouseResponse = await fetch(`${URL}/house/hufflepuff`);
        const ravenclawHouseResponse = await fetch(`${URL}/house/ravenclaw`);

        if (gryffindorHouseResponse.status!=200 || slytherinHouseResponse.status != 200 || hufflepuffHouseResponse.status!=200 ||ravenclawHouseResponse.status!=200){
            throw new Error("a response or more than one response couldn't be fetched");
        }else{
            const gryffindorData = await gryffindorHouseResponse.json();
            const ravenclawData = await ravenclawHouseResponse.json();
            const hufflepuffData = await hufflepuffHouseResponse.json();
            const slytherinData = await slytherinHouseResponse.json();

            slytherin(slytherinData);//function where slytherin cards show up IF clicked on
            gryffindor(gryffindorData);//function where gryffindor cards show up IF clicked on
            hufflepuff(hufflepuffData);//function where hufflepuff cards show up IF clicked on
            ravenclaw(ravenclawData); //function where ravenclaw cards show up IF clicked on
            //this is unique to this harry potter API
        }
    } catch (error) {
        alert ("Cannot fetch filtered response");
        console.log(error);
    }
}
getHouseData(URL);

//function to create cards
function createCards(data){
    data.forEach((character)=> {

        let image = character.image;
        if (image === ""){
            image = "img/no_image.jpg";
        }
        //add in card attributes
        DOMSelectors.cards.insertAdjacentHTML(
            'beforeend',
            `<div class = "w-1/5 border-4 border-base-100 rounded-lg border-double mx-5 my-5 min-w-64 shadow-md bg-base-content hover:bg-primary active:bg-warning focus:outline-none focus:ring focus:ring-base-content">
                    <p class= "text-xl character-name text-center font-serif text-neutral">${character.name}</p>
                    <div class="flex justify-center text-neutral">
                        <img src = "${image}" alt = "" class="w-1/2 h-2/3 rounded-lg hover:w-2/3 hover:l-3/4 duration-500 border-double border-4 border-base-100"></img>
                    </div>
            </div>`
        )
    })
}

function cardsAfterSearched(data){
    data.forEach(character => {
        let image = character.image;
        if (image === ""){
            image = "img/no_image.jpg";
        }

        let status = character.alive;
        if (character.alive === true){
            status = "Alive";
        } 
        else if (character.alive === false){
            status = "Deceased";
        }

        DOMSelectors.cards.insertAdjacentHTML(
            'beforeend',
            `<div class = "w-2/6 border-4 h-auto border-base-100 rounded-lg border-double mx-5 my-5 min-w-64 shadow-md bg-base-content hover:bg-primary active:bg-warning focus:outline-none focus:ring focus:ring-base-content">
                    <p class= "text-3xl character-name text-center font-serif text-neutral my-5">${character.name}</p>
                    <div class="flex justify-center text-neutral">
                        <img src = "${image}" alt = "" class="w-1/2 h-2/3 rounded-lg hover:w-2/3 hover:l-3/4 duration-500 border-double border-4 border-base-100"></img>
                    </div>
                    <p class= "text-2xl font-bold text-center font-serif text-neutral my-8">Status: ${status}</p>
            </div>`
        )
    });
}

function moreDetailsCards(data){
    data.forEach(character => {
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
        DOMSelectors.cards.insertAdjacentHTML(
            'beforeend',
            `<div class = "w-1/5 border-4 h-auto border-base-100 rounded-lg border-double mx-5 my-5 min-w-64 shadow-md bg-base-content hover:bg-primary active:bg-warning focus:outline-none focus:ring focus:ring-base-content">
                    <p class= "text-3xl character-name text-center font-serif text-neutral my-5">${character.name}</p>
                    <div class="flex justify-center text-neutral">
                        <img src = "${image}" alt = "" class="w-1/2 h-2/3 rounded-lg hover:w-2/3 hover:l-3/4 duration-500 border-double border-4 border-base-100"></img>
                    </div>
                    <p class= "text-center font-serif text-neutral">House: ${house}</p>
                    <p class= "text-center font-serif text-neutral">Actor: ${actor}</p>
                    <p class= "text-center font-serif text-neutral">Ancestry: ${ancestry}</p>
                    <p class= "text-center font-serif text-neutral">Patronus: ${patronus}</p>
            </div>`
        )
    });
}


function allCharacters(data){
    DOMSelectors.allCharactersButton.addEventListener("click", function(){
        DOMSelectors.cards.innerHTML = ""; //clear
        createCards(data);
    })
}

//slytherin characters!!
function slytherin(data){
    DOMSelectors.slytherinButton.addEventListener ("click", function(){
        DOMSelectors.cards.innerHTML = ""; // initially clear the html
        moreDetailsCards(data.filter((character)=>character.house.includes("Slytherin")));
    })
}

//gryffindor characters!!
function gryffindor(data){
    DOMSelectors.gryffindorButton.addEventListener ("click", function(){
        DOMSelectors.cards.innerHTML = ""; // initially clear the html
        moreDetailsCards(data.filter((character)=>character.house.includes("Gryffindor")));
    })
}


function hufflepuff(data){
    DOMSelectors.hufflepuffButton.addEventListener ("click", function(){
        DOMSelectors.cards.innerHTML = ""; // initially clear the html
        moreDetailsCards(data.filter((character)=> character.house.includes("Hufflepuff")));
    })
}

function ravenclaw(data){
    DOMSelectors.ravenclawButton.addEventListener ("click", function(){
        DOMSelectors.cards.innerHTML = ""; // initially clear the html
        moreDetailsCards(data.filter((character)=>character.house.includes("Ravenclaw")));
    })
}

function submitButton(data){
    DOMSelectors.submit.addEventListener("click", function () {
        DOMSelectors.cards.innerHTML = ""; // initially clear the html
        let namesArray = [];
        data.forEach((character) => {
            namesArray.push(character.name);
        });
        if(!namesArray.includes(DOMSelectors.input.value)){
            createCards(data);
        }
        else{
            cardsAfterSearched(data.filter((character)=>character.name===(DOMSelectors.input.value)));
        }
        DOMSelectors.input.value = "";
    });
}
