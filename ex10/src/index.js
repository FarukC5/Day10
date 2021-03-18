function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },

    002: {   // add here
      artist: "Jon Bon Jovi",
      title: "These Days",
      release_year: 1995,
      formats: {
        1: "CD",
        2: "Cassette",
        3: "MP3",
      },
      gold: false,   
    },         // change above
  };
  return myMusic;
}
console.log(myFunction()[2]);
myFunction()[2];

module.exports = myFunction;
