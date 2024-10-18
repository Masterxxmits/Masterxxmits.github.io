// Drawing w Loops pt2
// Mitsaal Idris
// Oct. 9, 2024



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let x = 0; x < width; x+=75){
    circle(x,0,50);
    line(x,0,mouseX,mouseY);
  }
  for(let y = 0; y < width; y+=75){
    circle(x,0,50);
    line(0,y,mouseX,mouseY);
  }
}
