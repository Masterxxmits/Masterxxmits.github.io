// Tree
// Mitsaal Idris
// Nov. 13, 2024


let scale = 30;
let dep = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  //stop seizures
  seed = random(100);
}
function draw() {
  background(255);
  randomSeed(seed);
  drawTree(width/2, height*0.9, 90, 6);
  
}
function drawLine( x1, y1, x2, y2, depth) {
//Thick lines
  strokeWeight(depth);
//draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}
function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle))*depth*scale; //calculate endpoints of current branch
    let y2 = y1 - sin(radians(angle))*depth*scale; //using trig ratios. Get shorter based on depth
    let den = map(mouseX, 0, width, 1, 30 );
    drawLine(x1, y1, x2, y2, depth);
    if(depth <= dep){
      drawLeaf(x2, y2, depth*15);
    }
    //for a 2-branch tree:
    drawTree(x2, y2, angle-den, depth-1);
    drawTree(x2, y2, angle+den, depth-1);
    //3 branch:
    drawTree(x2, y2, angle, depth-1);
  
  
  }
}

//More leaf or less leaf
function keyPressed(){
  if(keyCode === 90){
    dep -= 1;

  }
  if(keyCode === 88){
    dep += 1;

  }
}

//draw leaves
function drawLeaf(x1, y1, d){
  fill(random(255), random(255), random(255));
  circle(x1, y1, d);
}

