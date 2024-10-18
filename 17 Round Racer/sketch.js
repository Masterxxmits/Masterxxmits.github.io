// Round Racer
// Mitsaal Idris
// Oct. 15, 2024

let xPosition = 0;
let xSpeed = 0;
let circle1;
let circle2;
let circle3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circle1 = new roundRacer(200,50);
  circle2 = new roundRacer(400,100);
  circle3 = new roundRacer(50,150);
}

function draw() {
  background(220);
  circle1.display();
  circle2.display();
  circle3.display();
  circle1.move();
  circle2.move();
  circle3.move();
}

class roundRacer{
  constructor(yPosition, color){
    this.xPosition = 0;
    this.yPosition = yPosition;
    this.xSpeed = random(3,15);
    this.color = color;
  }
  move(){
    this.xPosition = this.xPosition + this.xSpeed;
    if(this.xPosition >= width){
      this.xPosition = 0;
    }
  }
  display(){
    fill(this.color);
    circle(this.xPosition,this.yPosition,10);
  }
}
  
