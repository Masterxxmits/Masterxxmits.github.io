// User Events
// Mitsaal Idris
// Sept. 12, 2024
//


let tSize = 40;
let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  //mouse section
  //if(mouseIsPressed) tSize = random(20,80);
  fill(0);
  textSize(tSize);
  text((mouseX + ", " + mouseY), mouseX, mouseY );

  // Shapes
  fill(255,0,0);
  circle(width*0.5,height*0.5,100);
  
  //let x = 0;
  fill(0,255,0);
  x = x + 3;
  if(x > width) x = 0;
  rect(x, height/2,60);
}

function mouseClicked(){
  // called automatically
  tSize = random(20,80);
}