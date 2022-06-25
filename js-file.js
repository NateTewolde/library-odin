const container = document.querySelector("#container");
const booksContainer = document.querySelector("#books-container");
let myLibrary = [];

newBookButton();

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

function newBookButton() {
  const newBookBtn = document.querySelector(".new-book-btn");
  newBookBtn.addEventListener("click", newBookForm);
}

function newBookForm() {
  const formSection = document.createElement("div");
  formSection.classList.add("form-section");

  const formHeader = document.createElement("div");
  formHeader.classList.add("form-header");
  formHeader.textContent = "New Book";

  const newBookForm = document.createElement("form");
  newBookForm.setAttribute("action", "");
  newBookForm.setAttribute("method", "post");
  newBookForm.setAttribute("id", "new_book_form");

  const titleField = document.createElement("div");
  titleField.classList.add("form-field");
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title:\n";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("placeholder", "Title");
  titleInput.setAttribute("required", "");
  titleField.appendChild(titleLabel);
  titleField.appendChild(titleInput);
  newBookForm.appendChild(titleField);

  const authorField = document.createElement("div");
  authorField.classList.add("form-field");
  const authorLabel = document.createElement("label");
  authorLabel.setAttribute("for", "author");
  authorLabel.textContent = "Author:\n";
  const authorInput = document.createElement("input");
  authorInput.setAttribute("type", "text");
  authorInput.setAttribute("name", "author");
  authorInput.setAttribute("id", "author");
  authorInput.setAttribute("placeholder", "Author");
  authorInput.setAttribute("required", "");
  authorField.appendChild(authorLabel);
  authorField.appendChild(authorInput);
  newBookForm.appendChild(authorField);

  const pagesField = document.createElement("div");
  pagesField.classList.add("form-field");
  const pagesLabel = document.createElement("label");
  pagesLabel.setAttribute("for", "pages");
  pagesLabel.textContent = "Number of pages:\n";
  const pagesInput = document.createElement("input");
  pagesInput.setAttribute("type", "number");
  pagesInput.setAttribute("name", "pages");
  pagesInput.setAttribute("id", "pages");
  pagesInput.setAttribute("placeholder", "Pages");
  pagesInput.setAttribute("min", 1);
  pagesInput.setAttribute("required", "");
  pagesField.appendChild(pagesLabel);
  pagesField.appendChild(pagesInput);
  newBookForm.appendChild(pagesField);

  const readField = document.createElement("div");
  readField.classList.add("form-field");
  const readLabel = document.createElement("label");
  readLabel.setAttribute("for", "read");
  readLabel.textContent = "Have you read this book?\n";
  const readInput = document.createElement("input");
  readInput.setAttribute("type", "text");
  readInput.setAttribute("name", "read");
  readInput.setAttribute("id", "read");
  readField.appendChild(readLabel);
  readField.appendChild(readInput);
  newBookForm.appendChild(readField);

  formSection.appendChild(formHeader);
  formSection.appendChild(newBookForm);
  container.appendChild(formSection);
}

function addBookToLibrary() {}

displayBooks();
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
