// Interactive Scene
// Mitsal Idris
// Sept. 16, 2024
//


function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Background for the program
function draw() {
  if(mouseX > windowWidth*.5){
    background(60, 90, 120);
  }
  else 
  background(60, 90, 140);

// Landscape for program
  fill(220, 170, 0);
  circle(mouseX, mouseY, 100);
  fill(60, 130, 60);
  ellipse(windowWidth*.9, windowHeight, windowHeight*2, windowWidth*.3);
  fill(90, 160, 90);
  ellipse(windowWidth*.15, windowHeight, windowHeight*1.8, windowWidth*.25);
  fill(119, 221, 119);
  ellipse(windowWidth*.7, windowHeight, windowHeight*3, windowWidth*.15);
  weather();
}

// Change weather
function weather() {
  if(mouseClicked());
    fill(255, 255, 255);
    rect(windowWidth*.10, windowHeight*5, windowWidth*.7);

}
 


