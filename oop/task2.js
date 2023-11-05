class EBook extends Book {
    constructor(name, author, year,format){
        super(name, author, year)
        this.format = format
    }
    printInfo(){
        console.log(`This is ${this.name} writed by ${this.authour} in ${this.year} format ${this.format} `)
    }
}
const eBook = new EBook('Kateryna', 'Taras Shevchenko', 1939, 'PDF')
eBook.printInfo()