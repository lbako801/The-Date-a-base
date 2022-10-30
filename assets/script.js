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

var randomDrinkName;

var randomDrinkInst;

// Cuisine variables
var cuisineData;

var randomCuisineOption

var randomCuisineData

var randomCuisineId

var randomCuisineRecipe

//Movie variables
var randomMoviePage;

var randomMovieOption;

var randomMovieTitle

var randomMovieDesc;

var randomMoviePoster;

// This function below console logs the user's dropdown choices.

choicesEl.addEventListener("submit", function (event) {
    event.preventDefault();

    function randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
    const randomMoviePage = randomIntFromInterval(1, 50);
    console.log(randomMoviePage);

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
                randomDrinkName = drinkDetailsData.drinks[0].strDrink;
                randomDrinkInst = drinkDetailsData.drinks[0].strInstructions;
                randomDrinkPic = drinkDetailsData.drinks[0].strDrinkThumb;
                document.getElementById('drink-pic').src = randomDrinkPic;
                console.log(randomDrinkName);
                console.log(drinkDetailsData);
                document.getElementById('drink-name').textContent = randomDrinkName;
                document.getElementById('drink-inst').textContent = randomDrinkInst;
            })
            
        console.log(randomDrinkOption);
        console.log(randomDrinkId);
        return data
        
    })

    //Below fetch commands request data arrays from meal API.

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
                randomCuisineName = randomCuisineRecipe.meals[0].strMeal;
                randomCuisineInst = randomCuisineRecipe.meals[0].strInstructions;
                randomCuisinePic = randomCuisineRecipe.meals[0].strMealThumb;
                document.getElementById('cuisine-pic').src = randomCuisinePic
                document.getElementById('cuisine-name').textContent = randomCuisineName;
                document.getElementById('cuisine-inst').textContent = randomCuisineInst;
                
                console.log(cuisineDetailsData);
            })
        
        console.log(randomCuisineOption);
        console.log(randomCuisineId);
        return data
    })
    
    const movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=a8164da2d4dbbd6d30b05bf46b5d46b2&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=" + randomMoviePage + "&with_genres=" + genreChoiceEl.value;

    console.log(movieUrl);

    fetch(movieUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            movieData = data;
            randomMovieOption = data.results[Math.floor(Math.random() * data.results.length)]
            console.log(randomMovieOption);
            randomMovieTitle = randomMovieOption.original_title;
            console.log(randomMovieTitle)
            randomMovieDesc = randomMovieOption.overview;
            console.log(randomMovieDesc);
            randomMoviePoster = "https://image.tmdb.org/t/p/original//" + randomMovieOption.poster_path;
            console.log(randomMoviePoster);
        })
       
});

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

