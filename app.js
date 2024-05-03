

// import library class, book class, audiobook class, games class, movies class, music class
const { Library } = require("./Library");
const { Media } = require("./Media");
const { Book } = require("./Book");

// create instances of classes

// let lotr = new Media("fellowship of the ring");
let lotr = new Book("fellowship of the ring","fancy");

console.log(lotr);
console.log(lotr.name);
console.log(lotr.edition);
// lord of the rings as a instance of book class

// do things with those instances

// create an instance of a library
// add media instances into the library instance

let libraryInstance = new Library();
libraryInstance.books.push(lotr);

// log the data in the library
console.log(libraryInstance);

console.log(libraryInstance.books[0].name);