document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const location = event.target.location.value;
  console.log(location);
  const url = `https://wttr.in/${location}?format=j1`;
  fetch(url)
    .then((response) => response.json())
    .then((weatherObj) => {
      console.log(weatherObj);

      let results = document.querySelector(".results");
      let area = weatherObj.nearest_area[0].areaName[0].value;
      let region = weatherObj.nearest_area[0].region[0].value;
      let country = weatherObj.nearest_area[0].country[0].value;
      let currentTemp = weatherObj.current_condition[0].FeelsLikeF;

      results.innerHTML = `
          <h2>${area}</h2>
          <p>Area:${area}</p>
          <p>Region:${region}</p>
          <p>Country:${country}</p>
          <p>Currently: Feels Like ${currentTemp}°F</p>
          `;
      const history = document.querySelector(".history ul");
      const li = document.createElement("li");
      li.innerHTML = `<a href="${url}">${location} - ${currentTemp}°F</a>`;
      history.append(li);
      console.log(history);
    })
    .catch(console.log);
  event.target.reset();

  //  console.log(weatherObj.weather);
});
