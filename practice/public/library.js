"use strict";
class person {
    constructor(name) {
        this.name = name;
    }
    displayrole() {
        console.log(`${this.name} is a person`);
    }
    role() {
        return false;
    }
}
class librarian extends person {
    constructor(name) {
        super(name);
    }
    displayrole() {
        console.log(`${this.name} is  librarian of the library`);
    }
    role() {
        return true;
    }
}
class book {
    constructor(title, author) {
        this.title = title,
            this.author = author;
    }
}
class member extends person {
    constructor(name) {
        super(name);
        this.borrowedBook = [];
    }
    borrowbook(book) {
        this.borrowedBook.push(book);
        console.log(`${book.title} this book is borrowed by ${this.name}`);
    }
    returnBook(book) {
        console.log(`${book.title} this book is returned by ${this.name}`);
        this.borrowedBook = this.borrowedBook.filter((item) => item.title != book.title);
    }
    displayrole() {
        console.log(`${this.name} is  member of the library`);
    }
}
class library {
    constructor() {
        this.availableBooks = [];
    }
    addBook(book) {
        this.availableBooks.push(book);
        console.log(`${book.title} this book is added to the available books `);
    }
    removeBook(book) {
        this.availableBooks = this.availableBooks.filter((item) => item.title != book.title);
        console.log(`${book.title} is removed from the available books`);
    }
    displayAllBooks() {
        console.log('this is the available books');
        this.availableBooks.forEach((item) => console.log(`${item.title} by ${item.author}`));
    }
}
const newLibrarian = new librarian('aswin');
const member1 = new member('member1');
const member2 = new member('member2');
const Library = new library();
const book1 = new book('book1', 'author1');
const book2 = new book('book2', 'author2');
const book3 = new book('book3', 'author3');
Library.addBook(book1);
Library.addBook(book2);
Library.addBook(book3);
// Library.displayAllBooks()
newLibrarian.displayrole();
member1.borrowbook(book1);
member1.returnBook(book1);
member1.displayrole();
