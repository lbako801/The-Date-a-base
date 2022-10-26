
// These variables grab the form element from the HTML
var genreChoiceEl = document.getElementById('moviegenres');

var drinkChoiceEl = document.getElementById('drinks');

var cuisineChoiceEl = document.getElementById('cuisines');

var choicesEl = document.getElementById('choices');

// This function below console logs the user's dropdown choices.
choicesEl.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(genreChoiceEl.value);
    console.log(drinkChoiceEl.value);
    console.log(cuisineChoiceEl.value);
});

=======
// ======================================================================================================================
// ======================================================================================================================


// var boxes = document .querySelectorAll(".movie-genres");

// var genres_list = document.getElementById("genres")

// var genres_list = document.querySelector('#genres')

// console.log(genres_list);

// const opts = document.querySelectorAll("option"); 
// // we can use forEach on the resulting HTMLCollection 
// // but map needs to be spread to array

// const vals = [...opts]
//   .map(el => el.value); 
// console.log(vals);
// console.log(opts);


var genreOptions = document.querySelectorAll("option.genreOption");
// console.log('genreOptions ~>', genreOptions);
// var readableGenreOptions = genreOptions.innerHTML;
// console.log('readableGenreOptions ~>', readableGenreOptions);

var randomGenreNumber = Math.floor(Math.random() * genreOptions.length);
var randomGenre = genreOptions[randomGenreNumber].innerText;
console.log("randomGenre ~>", randomGenre);

for (let i = 0; i < genreOptions.length; i++) {
console.log("genreOptions ~>", [i], genreOptions[i].innerText);
// console.log(genreOptions.length);


  }


var drinkOptions = document.querySelectorAll("option.drinkOption");
console.log('drinkOptions ~>', drinkOptions);

var randomDrinkNumber = Math.floor(Math.random() * drinkOptions.length);
var randomDrink = drinkOptions[randomDrinkNumber].innerText;
console.log("randomDrink ~>", randomDrink);


for (let i = 0; i < drinkOptions.length; i++) {
    console.log("drinkOptions ~>", [i], drinkOptions[i].innerText);
    // console.log(drink-options.length);
      }

var cuisineOptions = document.querySelectorAll("option.cuisineOption");
console.log('cuisineOptions ~>', cuisineOptions);


var randomCuisineNumber = Math.floor(Math.random() * cuisineOptions.length);
var randomCuisine = cuisineOptions[randomCuisineNumber].innerText;
console.log("randomCuisine ~>", randomCuisine);

for (let i = 0; i < cuisineOptions.length; i++) {
    console.log("cuisineOptions ~>", [i], cuisineOptions[i].innerText);
    // console.log(cuisineOptions.length);
      }

// var drinkList = document.querySelectorAll("#drinkList")
// console.log('drinkList ~>', drinkList);
// var options = drinkList.querySelectorAll("option") // Uncaught TypeError: drinkList.querySelectorAll is not a function
// console.log('option ~>', option);

