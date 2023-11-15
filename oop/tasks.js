import Book from './book.js';
import EBook from './ebook.js';

const harryPotterBook = new Book('Harry Potter', 'J.Rouling', 2000);

harryPotterBook.printInfo();

const book1 = new Book('Deep Work', 'Cal Newport', 2016);
const book2 = new Book('Alice in Wonderland', 'Lewis Carroll', 1865);
const book3 = new Book('The Little Prince', 'Antonie de Saint-Exupery', 1943);
const eBook1 = new EBook('Kateryna', 'T.Shevchenko', 1939, 'PDF');
book1.printInfo();
book2.printInfo();
book3.printInfo();
const oldestBook = Book.findOldestBook([book1, book2, book3, eBook1]);
console.log(oldestBook);

const newEb = EBook.fromBook([eBook1]);
console.log(newEb);
