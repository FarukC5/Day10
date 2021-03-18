// create school obj here
var school = {
  name: "Arena",
  location: "Sarajevo",
  established: 2020,
};
// end of school object
function myFunction(name) {
  // change below
  school.name = name;
  return school;
  // change above
}
console.log(myFunction("Pragon")); // ovo mogu i izbrisati
myFunction("Paragon"); // change this line
module.exports = { school, myFunction };
