// Define a Book class
class Book{
    constructor(title, author){
        this._title = title;
        this._author = author;
    }

    // Getter method for the title
    getTitle(){
        return this._title;
    }

    // Setter method for the title
    setTitle(newTitle){
        this._title = newTitle;
    }

    // Getter method for the author
    getAuthor(){
        return this._author;
    }

    // Setter method for the author
    setAuthor(newAuthor){
        this._author = newAuthor;
    }

    // Method: This is a function that describes an action related to the book
    describe(){
        console.log(`${this._title} is written by ${this._author}`);
    }
}
const myBook = new Book('The Great Adventure on JavaScript', 'Johann Coetzee');
console.log(myBook.getTitle());
console.log(myBook.getAuthor());

myBook.describe();

myBook.setTitle('The Great Mystery');
myBook.setAuthor('Jordan Lee');

console.log(myBook.getTitle());
console.log(myBook.getAuthor());

myBook.describe();