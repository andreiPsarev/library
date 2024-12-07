const myLibrary = [];

function Book(title, author, pages, read = false) { // Значение по умолчанию для read
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        const readStatus = this.read ? 'read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}

function addBookToLibrary(title, author, pages, read = false) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const libraryContainer = document.getElementById("library-container");
    libraryContainer.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
         <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.read ? 'Read' : 'Not read yet'}</p>
            <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
            <button onclick="removeBook(${index})">Remove</button>
        `;
        libraryContainer.appendChild(bookCard);
    });
}

// Функция для изменения статуса прочтения книги
function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

// Функция для удаления книги из библиотеки
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks(); // Обновление отображения на странице
}

document.getElementById("new-book-button").addEventListener("click", () => {
    const form = document.getElementById("add-book-form");
    form.style.display = form.style.display === "none" || form.style.display === "" ? "block" : "none";
});

document.getElementById("add-book-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value, 10);
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);

    e.target.reset();
    document.getElementById("add-book-form").style.display = "none";
});

// Добавляем тестовые книги
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('1984', 'George Orwell', 328, true);