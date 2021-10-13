const search = (weatherObj) => {
  //Declare variables for current search section
  const area = weatherObj.nearest_area[0].areaName[0].value;
  const region = weatherObj.nearest_area[0].region[0].value;
  const country = weatherObj.nearest_area[0].country[0].value;
  const currently = weatherObj.current_condition[0].FeelsLikeF;
  //Declare variables for Todays weather
  const avgTemp1 = weatherObj.weather[0].avgtempF;
  const maxTemp1 = weatherObj.weather[0].maxtempF;
  const minTemp1 = weatherObj.weather[0].mintempF;
  //Declare variables for Tomorrows  weather
  const avgTemp2 = weatherObj.weather[1].avgtempF;
  const maxTemp2 = weatherObj.weather[1].maxtempF;
  const minTemp2 = weatherObj.weather[1].mintempF;
  //Declare variables for After Tomorrows section
  const avgTemp3 = weatherObj.weather[2].avgtempF;
  const maxTemp3 = weatherObj.weather[2].maxtempF;
  const minTemp3 = weatherObj.weather[2].mintempF;

  //current search section
  document.querySelector("#curr_search").innerHTML = `<h2>${area}</h2>
          <p><strong>Area:</strong> ${area}</p>
          <p><strong>Region:</strong> ${region}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Currently:</strong> Feels Like ${currently} °F</p>`;
  //3-day forecast Todays section
  document.querySelector("#today").innerHTML = `<h3>Today</h3>
        <p><strong>Average Temperature:</strong> ${avgTemp1} °F</p>
        <p><strong>Max Temperature:</strong> ${maxTemp1} °F</p>
        <p><strong>Min Temperature:</strong> ${minTemp1} °F</p>`;
  //3-day forecast tomorrows section
  document.querySelector("#tomorrow").innerHTML = `<h3>Tomorrow</h3>
        <p><strong>Average Temperature:</strong> ${avgTemp2} °F</p>
        <p><strong>Max Temperature:</strong> ${maxTemp2} °F</p>
        <p><strong>Min Temperature:</strong> ${minTemp2} °F</p>`;
  //3-day forecast after tomorrows section
  document.querySelector("#future").innerHTML = `<h3>Day After Tomorrow</h3>
        <p><strong>Average Temperature:</strong> ${avgTemp3} °F</p>
        <p><strong>Max Temperature:</strong> ${maxTemp3} °F</p>
        <p><strong>Min Temperature:</strong> ${minTemp3} °F</p>`;
};
if (typeof search === "undefined") {
  search = undefined;
}

if (typeof module !== "undefined") {
  module.exports = search;
}
