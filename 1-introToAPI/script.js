/*
-API stands for Application Programming Interface

-in basic terms, API's allow applications to communicate with one another 
-the API is not the database or the server, it is the code that allows us access points to the server
  -those access points come in the form of an endpoint, which direct us to different sets of data that we can access

  ASSYNCRONOUS PROGRAMMIG
  -generally code is read and implemented line-by-line, which is known as synchronous programing
  -asynchronous programming allows code to continue to run while we're waiting for response from an API

  -fetch() method is built into the brwoswer window
  -the fetch() method is asynchronous
  -the fetch() method starts the process of fetching a resource from a netwrok, and will return a promise
    -a promise represents a value that is initally unkown when the promise is created
        -a promise is always one of 3 states:
          1. Pending: initial state, neither fulfilled nor rejected
          2. fulfilled: meaning the operation completed successfully 
          3. rejected: meaning the operation failed 'error'
  -in the case of a fetch request, a promise will resolve into a Response object that represents the response of the request made
*/
const baseURL = "https://api.spacexdata.com/v3";

const searchForm = document.querySelector("form");
const spaceShips = document.querySelector("ul");
const locationShips = document.getElementById("location");
searchForm.addEventListener("submit", fetchSpace);

function fetchSpace(event) {
  event.preventDefault();

  fetch(`${baseURL}/rockets`)
    .then(response => response.json())
    .then(json => {
      displayRockets(json);
      displayLocation(json);
    });
}

function displayRockets(data) {
  console.log("this is in our displayRockets function:", data);
  data.forEach(rocket => {
    console.log(rocket);
    let rocketName = document.createElement("li");
    rocketName.innerText = rocket.rocket_name;
    spaceShips.appendChild(rocketName);
  });
}
//dig in to objects with rocket.rocket_name  append to doc.createElement
function displayLocation(data) {
  data.forEach(country => {
    console.log(country);
    let countryContainer = document.createElement("ul");
    let rocketCountry = document.createElement("li");
    rocketCountry.innerText = country.country;
    countryContainer.appendChild(rocketCountry);
    locationShips.appendChild(countryContainer);
  });
}
