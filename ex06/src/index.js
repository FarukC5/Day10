var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};
function myFunction(roar1) {
  
  var roar1 = "roar-roar";
  lion["roar"] = roar1; // ili lion.roar = roar1;
  return lion;
}
console.log(myFunction(("roar", "roar-roar")));
myFunction(("roar", "roar-roar"));
module.exports = myFunction;
