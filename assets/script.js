// make variables for the API search results we want and parse them into an array
// ?q=dogs&format=
const drinkList = [];
const drinkId = "";

var genreChoice = document.getElementById('#genres');

//var drinkChoice = document.getElementById('alcoholic-beverages');

//var drinkChoice = document.querySelectorAll('#alcoholic-beverages')

//var drinkValue = drinkChoice.value
var cuisineChoice = document.getElementById('#cuisines');

// look up ingredients by name
// Search by ing link: www.thecocktaildb.com/api/json/v1/1/filter.php?i=
// get drinkID
// Drink ID link: www.thecocktaildb.com/api/json/v1/1/lookup.php?i=
// look up cocktails by drinkID (#####)
// append instructions into HTML (e.g. instructions/image/measurements)
var drinkChoice = document.getElementById("drinkChoice");

var selectedDrink = drinkChoice.options[drinkChoice.selectedIndex].text;


console.log(drinkChoice);
console.log(drinkValue);