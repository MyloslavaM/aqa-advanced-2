class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            console.log('Invalid input for name. It must be a string.');
        }
    }
}

class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year);
        this._format = format;
    }

    get format() {
        return this._format;
    }

    set format(newFormat) {
        this._format = newFormat;
    }
}

const book = new Book('Alice in Wonderland', 'Lewis Carroll', 1865);
console.log(book.name);

book.name = 'Alice';
console.log(book.name); 