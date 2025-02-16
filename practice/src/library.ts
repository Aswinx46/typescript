class person{
    name:string
    constructor(name:string)
    {
        this.name=name
    }
    displayrole():void{
        console.log(`${this.name} is a person`)
    }
    role():boolean{
        return false
    }
}

class librarian extends person{
    constructor(name:string)
    {
        super(name)
    }
    displayrole(): void {
        console.log(`${this.name} is  librarian of the library`)
    }
    role():boolean{
        return true
    }
}

class book{
    title:string;
    author:string
    constructor(title:string,author:string)
    {
        this.title=title,
        this.author=author
    }
}

class member extends person{
    borrowedBook:book[]=[]
    constructor(name:string)
    {
        super(name)
    }
    borrowbook(book:book)
    {
        this.borrowedBook.push(book)
        console.log(`${book.title} this book is borrowed by ${this.name}`)
    }
    returnBook(book:book)
    {
        console.log(`${book.title} this book is returned by ${this.name}`)
        this.borrowedBook=this.borrowedBook.filter((item)=>item.title !=book.title)
    }
    displayrole(): void {
        console.log(`${this.name} is  member of the library`)
    }
}



class library{
   private availableBooks:book[]=[];
   addBook(book:book)
   {
    this.availableBooks.push(book)
    console.log(`${book.title} this book is added to the available books `)
   }
   removeBook(book:book)
   {
    this.availableBooks=this.availableBooks.filter((item)=>item.title != book.title)
    console.log(`${book.title} is removed from the available books`)
   }
   displayAllBooks():void{
    console.log('this is the available books')
    this.availableBooks.forEach((item:book)=>console.log(`${item.title} by ${item.author}`))
   }
}

const newLibrarian=new librarian('aswin')
const member1=new member('member1')
const member2=new member('member2')
const Library=new library()
const book1=new book('book1','author1')
const book2=new book('book2','author2')
const book3=new book('book3','author3')
Library.addBook(book1)
Library.addBook(book2)
Library.addBook(book3)
// Library.displayAllBooks()
newLibrarian.displayrole()
member1.borrowbook(book1)
member1.returnBook(book1)
member1.displayrole()
