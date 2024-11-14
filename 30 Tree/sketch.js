// Tree
// Mitsaal Idris
// Nov. 13, 2024


let scale = 30;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  seed = random(100);
}
function draw() {
  background(255);
  randomSeed(seed);
  drawTree(width/2, height*0.9, 90, 6);
  drawLeaf(width/2, height*0.9, 90, 6);
}
function drawLine( x1, y1, x2, y2, depth) {
//draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}
function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle))*depth*scale; //calculate endpoints of current branch
    let y2 = y1 - sin(radians(angle))*depth*scale; //using trig ratios. Get shorter based on depth
    let den = map(mouseX, 0, width, 1, 30 );
    drawLine(x1, y1, x2, y2, depth);
    //for a 2-branch tree:
    drawTree(x2, y2, angle-den, depth-1);
    drawTree(x2, y2, angle+den, depth-1);
    //3 branch:
    drawTree(x2, y2, angle, depth-1);
  }
  //else if(depth < 5){
    //drawLeaf();
  //}
}

//draw leaves
function drawLeaf(x1, y1, angle, depth){
  let x2 = x1 + cos(radians(angle))*depth*scale;
  let y2 = y1 - sin(radians(angle))*depth*scale;
  fill(random(255), random(255), random(255));
  let cir = map(mouseX, 0, width, 1, 30);
  circle(x2, y2, d);
  drawLeaf(x2, y2, angle-cir, depth-1);
  drawLeaf(x2, y2, angle+cir, depth-1);
}

