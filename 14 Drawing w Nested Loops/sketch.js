// Drawing w Nested Loops
// Mitsaal Idris
// Oct. 9, 2024

//Global Variable(s)
let gridSpacing = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //  loopReview();
 
}

function loopReview(){
  //quick nested loop practice (x,y)
  for(let x = 0; x < 4; x++){ // x: 0,1,2,3
    for(let y = 0; y < 4; y++){ //y: 0,1,2,3
      print(x,y);
    }
  }
}

function draw() {
  background(220);
  renderGrid();
}

function circleDistance(x1,y1,x2,y2){
  // takes in two endpoints and returns the straightline distance between them
  // Our answer will be rounded
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(pow(a,2) + pow(b,2));
  return round(c);
}

function renderGrid(){
  //use nested loops to create a grid of shapes
  for(let x = 0; x < width; x = x + gridSpacing){
    for(let y = 0; y < height; y = y + gridSpacing){
      circle(x,y,gridSpacing);
      let d = circleDistance(x,y,mouseX,mouseY);
      if(d > 150){
        fill(0);
      }
      else{
        fill(200,50,255);
      }
      circle(x,y,gridSpacing);
      fill(200);
      textSize(gridSpacing/2.3);
      textAlign(CENTER,CENTER);
      text(d,x,y);
    }
  }
}