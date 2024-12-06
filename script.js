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

// Пример использования:
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295);
console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

// Если книга прочитана:
theHobbit.read = true;
console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, read"

