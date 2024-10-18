// Comparing Objects
// Mitsaal Idris
// Oct. 15, 2024

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let i = 0; i < points.length; i++){
    points[i].move();
    points[i].display();
  }
}

function mouseClicked(){
  points.push(new MiniPoint(mouseX, mouseY));
}

class MiniPoint{
  // constructor
  constructor(x, y){
    //set up
    this.x = x;
    this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.s = 20;
    this.noiseX = random(10);
    this.noiseY = random(10);
    this.offset = 0.01;
    this.maxSpeed = 5;
  }
  //class function
  display(){
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.s, this.s);
  }
  move(){
    let xSpeed = map(noise(this.noiseX),0,1,-this.maxSpeed,this.maxSpeed);
    let ySpeed = map(noise(this.noiseY),0,1,-this.maxSpeed,this.maxSpeed);
    this.x += xSpeed;
    this.y += ySpeed;
    this.noiseX += this.offset;
    this.noiseY += this.offset;

  }
}
