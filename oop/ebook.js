import Book from "./book.js";
export default class EBook extends Book {
    constructor(name, author, year,format){
        super(name, author, year)
        this._format = format
    }
    get format(){
       return this._format
    }
    set format(newFormat){
        if(typeof newFormat === 'string'){
            this._format = newFormat
        } else {
            console.error('Invalid format input');
        }
    }
    static findOldestBook(bookList){
        if(bookList.length === 0){
            return null
        }
        bookList.sort((a, b) => a._year - b._year)
        return bookList[0]
    }
}


