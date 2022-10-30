// These variables grab the form element from the HTML
const drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='

const drinkRecipeUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const mealUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a='

const mealRecipeUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

var genreChoiceEl = document.getElementById('genre-list');

var drinkChoiceEl = document.getElementById('drinks');

var cuisineChoiceEl = document.getElementById('cuisines');

var choicesEl = document.getElementById('choices');
// Drink variables
var drinkData;

var randomDrinkOption;

var randomDrinkId;

var randomDrinkRecipe;
// Cuisine variables
var cuisineData;

var randomCuisineOption

var randomCuisineData

var randomCuisineId

var randomCuisineRecipe

// This function below console logs the user's dropdown choices.

choicesEl.addEventListener("submit", function (event) {
    event.preventDefault();
    //Below window commands set the user choices to local storage.
    window.localStorage.setItem('User Genre', genreChoiceEl.value)
    window.localStorage.setItem('User Drink', drinkChoiceEl.value)
    window.localStorage.setItem('User Cuisine', cuisineChoiceEl.value)
    
    //Below fetch commands request data arrays from cocktail API.
    fetch(drinkUrl + drinkChoiceEl.value)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        drinkData = data;
        console.log(drinkData)
        randomDrinkOption = data.drinks[Math.floor(Math.random() * data.drinks.length)]
        randomDrinkId = randomDrinkOption.idDrink;
        fetch(drinkRecipeUrl + randomDrinkId)
            .then(function (drinkDetails) {
                console.log(drinkDetails);
                return drinkDetails.json()
            })
            .then(function (drinkDetailsData) {
                randomDrinkRecipe = drinkDetailsData;

                console.log(drinkDetailsData);
            })
        console.log(randomDrinkOption);
        console.log(randomDrinkId);
        return data
    })

    fetch(mealUrl + cuisineChoiceEl.value)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
        cuisineData = data;
        console.log(cuisineData);
        randomCuisineOption = data.meals[Math.floor(Math.random() * data.meals.length)]
        randomCuisineId = randomCuisineOption.idMeal;
        fetch(mealRecipeUrl + randomCuisineId)
            .then(function (cuisineDetails) {
                console.log(cuisineDetails);
                return cuisineDetails.json()
            })
            .then(function (cuisineDetailsData) {
                randomCuisineRecipe = cuisineDetailsData;

                console.log(cuisineDetailsData);
            })
        console.log(randomCuisineOption);
        console.log(randomCuisineId);
        return data
        })

});

//console.log(randomDrinkRecipe);

// Below variable attaches HTML randomize button to js variable.

var randomButton = document.getElementById('randomize-button')

//Below function makes the randomize button initiate randomization of values in dropdown lists.

randomButton.addEventListener('click', function (event) {

    var genreOptions = document.querySelectorAll("option.genreOption");

    var randomGenreNumber = Math.floor(Math.random() * genreOptions.length);

    var randomGenre = genreOptions[randomGenreNumber].innerText;
    console.log(randomGenre);

    for (let i = 0; i < genreOptions.length; i++) { }

    var drinkOptions = document.querySelectorAll("option.drinkOption");

    var randomDrinkNumber = Math.floor(Math.random() * drinkOptions.length);
    var randomDrink = drinkOptions[randomDrinkNumber].innerText;
    console.log(randomDrink);

    for (let i = 0; i < drinkOptions.length; i++) { }

    var cuisineOptions = document.querySelectorAll("option.cuisineOption");

    var randomCuisineNumber = Math.floor(Math.random() * cuisineOptions.length);
    var randomCuisine = cuisineOptions[randomCuisineNumber].innerText;
    console.log(randomCuisine);

    for (let i = 0; i < cuisineOptions.length; i++) { }
    //Below window commands set selected random values to local storage
    window.localStorage.setItem('Random Cuisine', randomCuisine)
    window.localStorage.setItem('Random Drink', randomDrink)
    window.localStorage.setItem('Random Movie Genre', randomGenre)
})


