document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const location = event.target.location.value;
  const url = `https://wttr.in/${location}?format=j1`;
  fetch(url)
    .then((response) => response.json())
    .then((weatherObj) => {
      console.log(weatherObj);

      
      const currently = weatherObj.current_condition[0].FeelsLikeF;

      search(weatherObj);

      const ul = document.querySelector("#hist_ul");
      if (ul.firstElementChild.textContent === "No previous searches") {
        ul.firstElementChild.remove();
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${location}</a> - ${currently}°F`;

        li.addEventListener("click", (event) => {
          event.preventDefault();
          search(weatherObj);
        });
        ul.append(li);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${location}</a> - ${currently}°F`;
        li.addEventListener("click", (event) => {
          event.preventDefault();
          search(weatherObj);
        });
        ul.append(li);
      }
      event.target.reset();
    });
});
