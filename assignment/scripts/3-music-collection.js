console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
const myCollection = [];
function addToCollection(collection, title, artist, yearPublished) {
  const Smasha = {
      title: "The Goodest",
      artist: "Diamond",
      yearPublished: 1970,
  }
  collection.push(Smasha);
    return Smasha;
  
  }
console.log(addToCollection(myCollection,"Borana Night", "Jarso", 1971));
console.log(addToCollection(myCollection,"The Thriller", "Michael", 1974));
console.log(addToCollection(myCollection,"Somali Danto", "Ali Dere", 1976));
console.log(addToCollection(myCollection,"Watamu Kwa Boma", "Ali Kiba", 1977));
console.log(addToCollection(myCollection,"Sar", "Dida", 1980));
console.log(addToCollection(myCollection,"The  Wall", "Smako", 1983));
console.log(myCollection);




function showCollection(collection) {
  for (const album of collection) {
      console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}


showCollection(myCollection);


function findByArtist(collection, artist) {
  const results = [];
  for (let album of collection) {
    
    
    
  }
  
  
}
  

































// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
