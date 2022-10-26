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




