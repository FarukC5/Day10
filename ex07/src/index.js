function myFunction(deleteL) {
  lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar",
  };

  delete lion[deleteL];
  return lion;
}
console.log(myFunction("roar"));
myFunction("roar");
module.exports = myFunction;
