export default class Book {
    constructor(name, author, year){
        this._name = name;
        this._author = author;
        this._year = year;
    }
    get name(){
        return this._name
    }
    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            console.log('Invalid input for name. It must be a string.');
        }
    }
    get author(){
        return this._author
    }
    set author(newAuthor){
        if (typeof newAuthor === 'string'){
            this._author = newAuthor
        } else {
            console.error("Invalid author input");
        }
    }
    get year(){
        return this._year
    }
    set year(newYear){
        if( typeof newYear === 'number' && newYear > 0 ){
            this._year = newYear
        }else {
            console.log('Invalid year input')
        }

    }
    printInfo(){
        console.log(`This is ${this._name} writed by ${this._author} in ${this._year} `)
    }
    static findOldestBook(bookList){
        if(bookList.length === 0){
            return null
        }
        bookList.sort((a, b) => a._year - b._year)
        return bookList[0]
    }
}
