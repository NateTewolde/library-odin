const container = document.querySelector("#container");
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

myLibrary.push(theHobbit);
myLibrary.push(thePenis);

displayBooks();
function addBookToLibrary() {}

function displayBooks() {
  for (book in myLibrary) {
    const bookDisplay = document.createElement("div");
    bookDisplay.classList.add("book-display-class");
    console.log(myLibrary[book].info());
    bookDisplay.textContent = myLibrary[book].info();
    container.appendChild(bookDisplay);
  }
}
