const booksContainer = document.querySelector("#books-container");
let myLibrary = [];

function Book(title, author, pages, readBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readBook = readBook;
}

Book.prototype.titleInfo = function () {
  return `Title: ${this.title}`;
};

Book.prototype.authorInfo = function () {
  return `Author: ${this.author}`;
};

Book.prototype.pagesInfo = function () {
  return `Pages: ${this.pages}`;
};

Book.prototype.readInfo = function () {
  return `Read? ${this.readBook}`;
};

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
    bookDisplay.classList.add("book-class");

    const titleDisplay = document.createElement("div");
    titleDisplay.classList.add("title-class");
    titleDisplay.textContent = myLibrary[book].titleInfo();
    bookDisplay.appendChild(titleDisplay);

    const authorDisplay = document.createElement("div");
    authorDisplay.classList.add("author-class");
    authorDisplay.textContent = myLibrary[book].authorInfo();
    bookDisplay.appendChild(authorDisplay);

    const pagesDisplay = document.createElement("div");
    pagesDisplay.classList.add("pages-class");
    pagesDisplay.textContent = myLibrary[book].pagesInfo();
    bookDisplay.appendChild(pagesDisplay);

    const readDisplay = document.createElement("div");
    readDisplay.classList.add("read-class");
    readDisplay.textContent = myLibrary[book].readInfo();
    bookDisplay.appendChild(readDisplay);

    booksContainer.appendChild(bookDisplay);
  }
}
