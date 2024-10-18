// Basic Transformations Sandbox


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawBasicGrid(220);
  

  //transformation one: TRANSLATION
  //push(); // makes a copy pf the coordinate system
  //translate(120,120); // moves the origin
  //drawBasicGrid(150);
  //pop(); // revert back to previous system
  //rectangleRed(50, 50);
  //add push()  pop()

  //transformation two: SCALE
  //push();
  //rectMode(CORNER);
  //rectangleRed(50, 50);
  
  //SCALE FACTORS
  //1 = no change, 1< smaller, 1> larger
  //let scaleAmount = 2.5;
  //scale(scaleAmount);
  //translate(100,0);
  //drawBasicGrid(100);
  //rectangleBlue(0, 0); //50px square
  //let scaleAmount = map(mouseX,0,width,0,4)
  //scale(scaleAmount);
  //drawBasicGrid(220);
  //rectangleRed(50, 50);
  //pop();

  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  // can useangleMode(DEGREES) if we like
  angleMode(DEGREES);
  //push();
  //rectangleRed(50, 50);
  //translate(200,200);
  //drawBasicGrid(220);
  //rotate(frameCount%360);
  //drawBasicGrid(220);
  //face(0,0);
  //pop();

  //Combinations of Transformations
  //push();
  //translate(100,100);
  //rotate(45);
  //scale(2);
  //face(0,0);
  //pop();

  //Drawing Challenge
  push();
  translate(200,200);
  circle(0,0,150);
  rotate(frameCount);
  let numSpokes = map(mouseX,0,width,0,360);
  numSpokes = floor(numSpokes);
  for(let i = 0; i < numSpokes; i++){
    line(0,0,75,0);
    rotate(360/numSpokes);
  }

}

function face(x, y) {
  //draw a face at x,y
  push();
  translate(x,y);
  ellipseMode(CENTER);
  fill(200,200,0);
  stroke(0);
  ellipse(0,0,80,80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25,0,10,10);
  ellipse(25,0,10,10);
  strokeWeight(5);
  line(-30,-10,30,-10);
  strokeWeight(1);
  pop();
}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);
}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);
}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);
}