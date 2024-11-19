import "../CSS/style.css";
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