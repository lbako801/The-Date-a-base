// These variables grab the form element from the HTML

var genreChoiceEl = document.getElementById('genre-list');

var drinkChoiceEl = document.getElementById('drinks');

var cuisineChoiceEl = document.getElementById('cuisines');

var choicesEl = document.getElementById('choices');

var drinkData;

var randomDrinkOption;

var randomDrinkId;

var randomDrinkRecipe;

// This function below console logs the user's dropdown choices.

choicesEl.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(genreChoiceEl.value);
    console.log(drinkChoiceEl.value);
    console.log(cuisineChoiceEl.value);
    //Below window commands set the user choices to local storage.
    window.localStorage.setItem('User Genre', genreChoiceEl.value)
    window.localStorage.setItem('User Drink', drinkChoiceEl.value)
    window.localStorage.setItem('User Cuisine', cuisineChoiceEl.value)
    
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
});

console.log(randomDrinkRecipe);
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

const drinkUrl = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
const drinkRecipeUrl = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
