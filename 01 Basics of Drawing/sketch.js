// Basics of Drawing
// Mitsaal Idris
// Sept. 11, 2024
//
// 2D primitives, color, animation, mouse/keyboard events


function setup() {
  // happens once at very start
  createCanvas(500, 400);
}

function draw() {
  // when possible to
  // keep draw() clean...
  background(220);
  drawCircle()
}

function drawCircle(){
  //draw five circles
  
  fill(100,0,220);
  circle(0,0,50);

  fill(50,175,60);
  circle(width/2,height/2,50);

  fill(50,40,60);
  circle(width,0,50);

  fill(50,175,255);
  circle(width,height,50);

  fill(177,175,60);
  circle(0,height,50);
  // draw a circle 2/3 across
  //the screen.
  circle(width/3*2,height/2,50);
}