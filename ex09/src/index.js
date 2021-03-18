function myFunction(myObj, checkProp) {
  //change below
  if (myObj.hasOwnProperty(checkProp) === true) {
    return myObj[checkProp];
  } else {
    return "Not found";
  }
  // change above
}

console.log(
  myFunction(
    { title: "Titanic", song: "My Heart Will Go On", genre: "drama" },
    "title"
  )
);
console.log(
  myFunction(
    { title: "Titanic", song: "My Heart Will Go On", genre: "drama" },
    "song"
  )
);
console.log(
  myFunction(
    { title: "Titanic", song: "My Heart Will Go On", genre: "drama" },
    "genre"
  )
);
console.log(
  myFunction(
    { title: "Titanic", song: "My Heart Will Go On", genre: "drama" },
    "actor"
  )
);

module.exports = myFunction;
