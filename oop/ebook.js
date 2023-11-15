import Book from './book.js';
export default class EBook extends Book {
	constructor(name, author, year, format) {
		super(name, author, year);
		this._format = format;
	}
	get format() {
		return this._format;
	}
	set format(newFormat) {
		if (typeof newFormat === 'string') {
			this._format = newFormat;
		} else {
			console.error('Invalid format input');
		}
	}
	static fromBook(book, fileFormat) {
		return new EBook(book.name, book.author, book.year, fileFormat);
	}
}

//Створіть статичний метод для EBook
//який буде приймати як аргументи екземпляр класу Book
//і формат файлу як рядок та повертати екземпляр класу EBook
