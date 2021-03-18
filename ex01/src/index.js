var myPet = {
  species: "Runner",
  name: "Mak",
  legs: 4,
  friends: ["Ted","Lin"],
};
function myFunction(myObj) {
  return myObj;
}

console.log(myFunction(myPet)); // change this
module.exports = { myPet, myFunction };
