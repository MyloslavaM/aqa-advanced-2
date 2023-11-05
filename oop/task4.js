
class Book{
    constructor(name, authour, year){
        this._name = name
        this._authour = authour
        this._year = year
    }

    static findOldestBook(bookList){
        if(bookList.length === 0){
            return null
        }
        bookList.sort((a, b) => a._year - b._year)
        return bookList[0]
    }

}
class EBook extends Book{
    constructor(name, authour, year, format){
        super(name, authour, year)
        this._format = format
    }
    static fromBook(book, format){
        return new EBook(book._name, book._authour, book._year, format)
    }
}
const book1 = new Book('Deep Work', 'Cal Newport', 2016)
const book2 = new Book('Alice in Wonderland', 'Lewis Carroll', 1865)
const book3 = new Book('Kateryna', 'Taras Shevchenko', 1939)
const book4 = new EBook('The Little Prince', 'Antonie de Saint-Exupery', 1943, 'PDF')
const findOldestBook = Book.findOldestBook([book1, book2, book3, book4])
console.log(findOldestBook)

const ebook = EBook.fromBook(book1, 'PDF')
console.log(ebook)