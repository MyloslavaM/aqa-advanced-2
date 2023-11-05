class Book {
    constructor(name, author, year){
        this._name = name;
        this._authour = author;
        this._year = year;
    }
    printInfo(){
        console.log(`This is ${this.name} writed by ${this.authour} in ${this.year} `)
    }
}
const science = new Book('Deep Work', 'Cal Newport', 2016)
const favorite = new Book('Alice in Wonderland', 'Lewis Carroll', 1865)
const classic = new Book('The Little Prince', 'Antonie de Saint-Exupery', 1943)
science.printInfo()
favorite.printInfo()
classic.printInfo()

class EBook extends Book {
    constructor(name, author, year,format){
        super(name, author, year)
        this.format = format
    }
    printInfo(){
        console.log(`This is ${this.name} writed by ${this.authour} in ${this.year} format ${this.format} `)
    }
}
const eBook = new EBook('history', 'Myloslava', 1991, 'PDF')
eBook.printInfo()