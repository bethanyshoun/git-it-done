var getUserRepos = function(user) {
  //format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
  //make a request to the url
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
 
};

//variables to store a reference to the <form> element
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

//function to be executed upon form submission browser event
var formSubmitHandler = function(event) {
  event.preventDefault();
  //get value from input element
  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);
    nameInputEl.value = "";
  } else {
    alert ("PLease enter a GitHub username");
  }
  console.log(event);
};

//add submit event listener to the userFormEl
userFormEl.addEventListener("submit", formSubmitHandler);
