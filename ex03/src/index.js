var myFood = {
  vegetable: "carrot",
  fruit: "orange",
  drink: "water",
};
function myFunction(myObj) {
  var vegetableValue = myFood["vegetable"];
  var fruitValue = myFood["fruit"];
  var drinkValue = myFood["drink"];
  return { vegetableValue, fruitValue, drinkValue }; // {} ili []
}
console.log(myFunction(myFood)); // change this
module.exports = myFunction(myFood);
