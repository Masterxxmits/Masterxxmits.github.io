// CUBE CUBE CUBE
// Mitsaal Idris
// Nov. 18, 2024



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  rotateY(frameCount);
  for(let i = 0; i < 360; i += 30){
    push();
    rotateY(i);
    boxes(50);
    pop();
  }
}

function boxes(size){
  let angle = map(mouseX, 0, width, -90, 90);
  if(size > 3){
    rotateZ(angle);
    translate(size*1.5, 0);
    box(size);

    boxes(size*0.8);
  }
}