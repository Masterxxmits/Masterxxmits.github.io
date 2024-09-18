// Interactive Scene
// Mitsal Idris
// Sept. 16, 2024
//
let clouds = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Background for the program
function draw() {
  if(mouseX > windowWidth*.75){
    background(60, 90, 120);
  }
  else  background(60, 90, 140);

// Landscape for program
  
  fill(220, 170, 0);
  circle(mouseX, mouseY, 100);
  fill(60, 130, 60);
  ellipse(windowWidth*.9, windowHeight, windowHeight*2, windowWidth*.3);
  fill(90, 160, 90);
  ellipse(windowWidth*.15, windowHeight, windowHeight*1.8, windowWidth*.25);
  fill(119, 221, 119);
  ellipse(windowWidth*.7, windowHeight, windowHeight*3, windowWidth*.15);  
  
 if(clouds===0){
    fill(255,255,255);
  rect(windowWidth*.5, windowHeight*.2, windowHeight*.2,windowWidth*.05, 30);
  rect(windowWidth*.1, windowHeight*.1, windowHeight*.2,windowWidth*.04, 30);
  rect(windowWidth*.7, windowHeight*.07, windowHeight*.2,windowWidth*.03, 30);
  rect(windowWidth*.8, windowHeight*.4, windowHeight*.2,windowWidth*.03, 30);

 }
 if(clouds===1){
  fill(170,170,170);
  rect(windowWidth*.4, windowHeight*.08, windowHeight*.2,windowWidth*.03, 30);
  rect(windowWidth*.2, windowHeight*.2, windowHeight*.2,windowWidth*.04, 30);
  rect(windowWidth*.6, windowHeight*.4, windowHeight*.2,windowWidth*.04, 30);
  rect(windowWidth*.1, windowHeight*.1, windowHeight*.2,windowWidth*.05, 30);
 }

 if(clouds===2){
  fill(170,170,170);
  rect(windowWidth*.4, windowHeight*.08, windowHeight*.2,windowWidth*.03, 30);
  rect(windowWidth*.2, windowHeight*.2, windowHeight*.2,windowWidth*.04, 30);
  rect(windowWidth*.6, windowHeight*.4, windowHeight*.2,windowWidth*.04, 30);
  rect(windowWidth*.1, windowHeight*.1, windowHeight*.2,windowWidth*.05, 30);
 }
}

function mouseClicked(){
  clouds += 1
  if(clouds === 3){
    clouds -= 3
  }
  

}
