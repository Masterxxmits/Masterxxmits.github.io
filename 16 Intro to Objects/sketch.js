// Intro to Objects
// Mitsaal Idris
// Oct. 10, 2024

let myBook;
let myBook2;
let myBook3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS 30 Textbook", "Donald Trump", "leatherbound", 690, 1110987654321, width*0.3);
  myBook1 = new Book("The Art of War", "Donald Trump", "softcover", 420, 1110987654321, width*0.2 + 120);
  myBook2 = new Book("Bible", "Donald Trump", "hardcover", 500, 1110987654321, width*0.4 - 120);
}

function draw() {
  background(220);
  myBook.display();
  myBook1.display();
  myBook2.display();
}

class Book{
  //1.constructor
  constructor(title, author, coverType, pages, isbn, xPos){
    this.title = title;
    this.author = author;
    this.coverType = coverType;
    this.pages = pages;
    this.isbn = isbn;
    this.xPos = xPos;
  }
  //2.class methods
  printSummary(){
    //print out a nicely formatted description of the object
    print(this.title + ", by" + this.author);
    print("length: ", + this.pages + "pages.");
    print("Covertype: " + this.coverType);
    print("ISBN: " + this.isbn);
  }

  display(){
    //visuallize the book based on its properties
    //width depends on pages(1/10 scale)
    rectMode(CENTER); textAlign(CENTER,CENTER);
    switch(this.coverType){
    case "softcover":
      fill(250,200,200); break;
    case "hardcover":
      fill(120,110,170); break;
    case "leatherbound":
      fill(90,190,200); break;
    }
    rect(this.xPos, height/2, this.pages/10, 150);
    textSize(20); fill(255);
    text(this.title[0], this.xPos, height/2 - 50);
  }
}