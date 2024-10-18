// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  angleMode(DEGREES);
  clock();
  
  
}

function clock() {
  noFill();
  push();
  translate(200,200);
  circle(0,0,150);
  //rotate(frameCount);
  let minArm = map(1,0,width,0,360);
  minArm = floor(minArm);
  for(let i = 0; i < 12; i++){
    line(50,0,75,0);
    rotate(360/12);
  }
  for(let i = 0; i < 60; i++){
    line(70,0,75,0);
    rotate(360/60);
  }
  rotate(frameCount/10);
  let HrArm = map(1,0,width,0,360);
  HrArm = floor(HrArm);
  for(let i = 0; i < 1; i++){
    line(0,0,40,0);
  }
  rotate(frameCount);
  let slowArm = map(1,0,width,0,360);
  slowArm = floor(slowArm);
  for(let i = 0; i < 1; i++){
    line(0,0,65,0);
  }
}
