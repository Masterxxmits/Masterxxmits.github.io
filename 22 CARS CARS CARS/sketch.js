// Cars Cars Cars
// Mitsaal Idris
// Oct. 18, 2024

let lineA = 0;
let lineB = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad(){
  fill(0);
  noStroke();
  rect(0,height/2.5, height,250);
  stroke(255);
  strokeWeight(3);
  while(lineA < width){
    line(lineA, height/1.9, lineB, height/1.9);
    lineA += 30;
    lineB += 30;
  }
  lineA = 0;
  lineB = 20;
}
class Vehicle{
  constructor(type, x, y, color, direction,){
    this.type = type;
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));
    this.direction = direction;
    this.xSpeed = random(1,200);

  }
}