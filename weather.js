
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

  const location = event.target.location.value;
  console.log(location);
  const url = `https://wttr.in/${location}?format=j1`;
 
  fetch(url)
    .then((response) => response.json())
    .then((weatherObj) => {
      //console.log(weatherObj);
      let results = document.querySelector(".display");
      let area = weatherObj.nearest_area[0].areaName[0].value;
      let region = weatherObj.nearest_area[0].region[0].value;
      let country = weatherObj.nearest_area[0].country[0].value;
      let currentTemp = weatherObj.current_condition[0].FeelsLikeF;
      results.innerHTML = `
          <h2><b> ${area} </b></h2>
          <p><b>Area:</b> ${area}</p>
          <p><b>Region:</b> ${region}</p>
          <p><b>Country:</b> ${country}</p>
          <p><b>Currently:</b> Feels Like ${currentTemp}°F</p>
          `;
          
          let current = document.querySelector(".current");
          let averageTemp1 = weatherObj.weather[0].avgtempF;
          let minTemp1 = weatherObj.weather[0].mintempF;
          let maxTemp1 = weatherObj.weather[0].maxtempF;
     current.innerHTML = 
            `<h3>Today</h3>
            <p><strong>Average Temp:</strong> ${averageTemp1}°F</p>
            <p><strong>Min Temp:</strong> ${minTemp1}°F</p>
            <p><strong>Max Temp:</strong> ${maxTemp1}°F</p>`;    
              
        let tomorrow = document.querySelector(".tomorrow");
          let averageTemp2 = weatherObj.weather[1].avgtempF;
          let minTemp2 = weatherObj.weather[1].mintempF;
          let maxTemp2 = weatherObj.weather[1].maxtempF;
        tomorrow.innerHTML = 
          `<h3>Tomorrow</h3>
          <p><strong>Average Temp:</strong> ${averageTemp2}°F</p>
          <p><strong>Min Temp:</strong> ${minTemp2}°F</p>
          <p><strong>Max Temp:</strong> ${maxTemp2}°F</p>`; 
      
          let future = document.querySelector(".future");
          let averageTemp3 = weatherObj.weather[2].avgtempF;
          let minTemp3 = weatherObj.weather[2].mintempF;
          let maxTemp3 = weatherObj.weather[2].maxtempF;
      future.innerHTML = 
          `<h3>Day After Tomorrow</h3>
          <p><strong>Average Temp:</strong> ${averageTemp3}°F</p>
          <p><strong>Min Temp:</strong> ${minTemp3}°F</p>
          <p><strong>Max Temp:</strong> ${maxTemp3}°F</p>`; 
    // })
    
          function previousSearch(location) {
            if (document.querySelector('.history ul').firstElementChild.textContent === 'No previous search') {
                document.querySelector('.history ul').firstElementChild.remove()
            }
            const li = document.createElement("li");
            li.innerHTML = `<a href="${url}">${location} - ${currentTemp}°F</a>`;
            document.querySelector(".history ul").appendChild(li)
        }
        previousSearch(location)
        
        let links = document.querySelectorAll("a");
        links.forEach((link) => {
                    link.addEventListener("click", (event) => {
                        event.preventDefault()
                
                    const prevLocation = event.target.textContent.split(" ")[0]
                    console.log(prevLocation, "Jose is awesome")
                    const newUrl = `https://wttr.in/${prevLocation}?format=j1`;
                    fetch(newUrl)
                    .then((response) => response.json())
                    .then((weatherObj) => {
                      //console.log(weatherObj);
                      let results = document.querySelector(".display");
                      let area = weatherObj.nearest_area[0].areaName[0].value;
                      let region = weatherObj.nearest_area[0].region[0].value;
                      let country = weatherObj.nearest_area[0].country[0].value;
                      let currentTemp = weatherObj.current_condition[0].FeelsLikeF;
                      results.innerHTML = `
                          <h2><b> ${area} </b></h2>
                          <p><b>Area:</b> ${area}</p>
                          <p><b>Region:</b> ${region}</p>
                          <p><b>Country:</b> ${country}</p>
                          <p><b>Currently:</b> Feels Like ${currentTemp}°F</p>
                          `;
                          
                          let current = document.querySelector(".current");
                          let averageTemp1 = weatherObj.weather[0].avgtempF;
                          let minTemp1 = weatherObj.weather[0].mintempF;
                          let maxTemp1 = weatherObj.weather[0].maxtempF;
                     current.innerHTML = 
                            `<h3>Today</h3>
                            <p><strong>Average Temp:</strong> ${averageTemp1}°F</p>
                            <p><strong>Min Temp:</strong> ${minTemp1}°F</p>
                            <p><strong>Max Temp:</strong> ${maxTemp1}°F</p>`;    
                              
                        let tomorrow = document.querySelector(".tomorrow");
                          let averageTemp2 = weatherObj.weather[1].avgtempF;
                          let minTemp2 = weatherObj.weather[1].mintempF;
                          let maxTemp2 = weatherObj.weather[1].maxtempF;
                        tomorrow.innerHTML = 
                          `<h3>Tomorrow</h3>
                          <p><strong>Average Temp:</strong> ${averageTemp2}°F</p>
                          <p><strong>Min Temp:</strong> ${minTemp2}°F</p>
                          <p><strong>Max Temp:</strong> ${maxTemp2}°F</p>`; 
                      
                          let future = document.querySelector(".future");
                          let averageTemp3 = weatherObj.weather[2].avgtempF;
                          let minTemp3 = weatherObj.weather[2].mintempF;
                          let maxTemp3 = weatherObj.weather[2].maxtempF;
                      future.innerHTML = 
                          `<h3>Day After Tomorrow</h3>
                          <p><strong>Average Temp:</strong> ${averageTemp3}°F</p>
                          <p><strong>Min Temp:</strong> ${minTemp3}°F</p>
                          <p><strong>Max Temp:</strong> ${maxTemp3}°F</p>`;
                    
                       
                            
                           
                                               })
                                          
                                       })
                                    })
                                    
                                

                            })
                                .catch(console.log);  
                              
                           
                                event.target.reset(); 
                    })
    







