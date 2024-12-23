function Book(title, author, pageCount, readStatus) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pageCount}, ${this.readStatus}`
  }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not started");

console.log(book1.title);
console.log(book1.pageCount);
console.log(book1.info())