import "../CSS/style.css";
import { DOMSelectors } from "./domselectors";
//import { DOMSelectors } from "./domselectors";

const URL = "https://hp-api.onrender.com/api/characters"; //insert an api (harry potter students api)


async function getData(URL){
    try {
        const response = await fetch(URL);
        console.log(data);
        if (response.status!=200){
            throw new Error(response);
        }else{
            const data = await response.json();
            console.log(data.data);
            //this is unique to this harry potter API
            data.data.forEach((character)=>
                //add in card attributes
                )}
    } catch (error) {
        alert ("There is no agent found");
    }
}
getData(URL);

//function to first show all cards of characters when website loads


//function to show only the specified cards when the show ___ button is clicked
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

//MAKE AN ALL CHARACTERS BUTTON TO RESHOW ALL CARDS