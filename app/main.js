import "./style.css";

const URL = "https://hp-api.onrender.com/api/characters"; //insert an api (harry potter students api)

async function getData(URL){
    //returns a promise
    try {
        //returns a promise
        const response = await fetch(URL)
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
            .insertAdjacentHTML("afterbegin", `<h1>${agent.displayName}</h1>`)
        );
    } 
}   catch (error) {
        alert("hey I could not find that agent");
        
    }
}

getData(URL);