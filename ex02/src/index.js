var myClothes = {
  hat: "Fedora",
  shirt: "Nike",
  shoes: "Converse",
};
function myFunction(myObj) {
  var hatValue = myClothes.hat;
  var shirtValue = myClothes.shirt;
  var shoesValue = myClothes.shoes;
  return { hatValue, shirtValue, shoesValue }; // {} ili []
}

console.log(myFunction(myClothes)); // change this
module.exports = myFunction(myClothes);
