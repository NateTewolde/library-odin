let myLibrary = [];

function Book(title, author, pages, readBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readBook = readBook;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readBook}`;
};

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R Tolkien",
  "295",
  "not read yet"
);
const thePenis = new Book("The Penis", "P.P Penis", "69", "read every day");

console.log(theHobbit.info());
console.log(thePenis.info());

myLibrary.push(theHobbit);
myLibrary.push(thePenis);

console.log("hi");
displayBooks();
function addBookToLibrary() {}

function displayBooks() {
  console.table(myLibrary[0]);
  console.table(myLibrary[1]);
}
