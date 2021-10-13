let cityArr = [];
let form = document.querySelector('#weather-search');
function fetchByCity(cityName) {

    // User input validation
    fetch(`https://wttr.in/${cityName}?format=j1`)
        .then((response) => response.json())
        .then((data) => {
            
            
            let results = document.querySelector('#city-info');
            results.innerHTML = 
            `<h2>${cityName}</h2>
            <div><strong>Area:</strong> ${data.nearest_area[0].areaName[0].value}</div>
            <br/>
            <div><strong>Region:</strong> ${data.nearest_area[0].region[0].value}</div>
            <br/>
            <div><strong>Country:</strong> ${data.nearest_area[0].country[0].value}</div>
            <br/>
            <div><strong>Currently:</strong> Feels Like ${data.current_condition[0].FeelsLikeF} &deg;F</div>`
            
            let threeDay = document.querySelector('#three-days');
            threeDay.innerHTML = 
            `<div id="today">
                <h3>Today</h3>
                <div><strong>Average Temperature: </strong>${data.weather[0].avgtempF}&deg;F</div>
                <br/>
                <div><strong>Max Temperature: </strong>${data.weather[0].maxtempF}&deg;F</div>
                <br/>
                <div><strong>Min Temperature: </strong>${data.weather[0].mintempF}&deg;F</div>
            </div>
            <div id="tomorrow">
                <h3>Tomorrow</h3>
                <div><strong>Average Temperature: </strong>${data.weather[1].avgtempF}&deg;F</div>
                <br/>
                <div><strong>Max Temperature: </strong>${data.weather[1].maxtempF}&deg;F</div>
                <br/>
                <div><strong>Min Temperature: </strong>${data.weather[1].mintempF}&deg;F</div>
            </div>
            <div id="future">
                <h3>Day After Tomorrow</h3>
                <div><strong>Average Temperature: </strong>${data.weather[2].avgtempF}&deg;F</div>
                <br/>
                <div><strong>Max Temperature: </strong>${data.weather[2].maxtempF}&deg;F</div>
                <br/>
                <div><strong>Min Temperature: </strong>${data.weather[2].mintempF}&deg;F</div>
            </div>`
             // adding links to the sidebar (class of history)
             let ul = document.querySelector('#previous-city');
             let li = document.createElement('li');
             let anchor = document.createElement('a');
             let span = document.createElement('span');
             span.innerHTML = ` - ${data.current_condition[0].FeelsLikeF} &deg;F`
             anchor.setAttribute('href', `#`);
             anchor.textContent = `${cityName}`;
             anchor.addEventListener("click", (e)=> {
                 // On click reconstruct the page
                 fetchByCity(e.target.textContent);
             })
             
             let noSearches = document.querySelector('#no-searches');
 // Avoiding duplicated history links
 
 if (!cityArr.includes(cityName)) {
    cityArr.unshift(cityName);
    li.append(anchor, span);
    ul.append(li);
    if (cityArr.length === 1) noSearches.remove(); 
}

})

}

// On submit construct the page
form.addEventListener('submit', (e) => {
e.preventDefault();
let city = e.target.city.value;
let cityName=city;
cityName=cityName.split(" ").join("");
let regArr=cityName.match(/[^a-z]/gi)||[];
if(city.trim()==="" || regArr.length){
let inp=document.querySelector("#weather-search-city");
let div=document.createElement("div");
div.textContent="Please enter a valid city!";
div.setAttribute("id", "error");
form.before(div);

inp.addEventListener("focus", ()=>{
div.style.display="none";
})

}
else {
let citySplit=city.split(" ");
let splitReturn = citySplit.map(el=>el[0].toUpperCase()+el.slice(1))

city=splitReturn.join(" ");
fetchByCity(city);
}
e.target.city.value = '';
})
