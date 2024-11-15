import "./style.css";

const URL = ""; //insert an api

async function getData(URL){
    //returns a promise
    try {
        //returns a promise
        const response = await fetch('https://valorant-api.com/v1/agents')
        //guard clause
        if (response.status!=200){
            throw new Error(response);
        }else{
                //convert promise to json
    const data = await response.json();
    console.log(data.data);
    //this is unique to this API
    data.data.forEach((agent)=>
        document
            .querySelector("div")
            .insertAdjacentHTML("afterbegin")
        }
    } catch (error) {
        alert("hey I could not find that agent");
        
    }
}

getData();