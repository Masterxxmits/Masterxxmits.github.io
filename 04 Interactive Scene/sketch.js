// Interactive Scene
// Mitsal Idris
// Sept. 16, 2024
//

// variables and lets
let land = 0;
let clouds = 0;
var currentBack = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Background for the program
function draw() {
  bg()

// Landscape for program
  fill(220, 170, 0);
  circle(mouseX, mouseY, 100);
  fill(60, 130, 60);
  ellipse(windowWidth*.9, windowHeight, windowHeight*2, windowWidth*.3);
  fill(90, 160, 90);
  ellipse(windowWidth*.15, windowHeight, windowHeight*1.8, windowWidth*.25);
  fill(119, 221, 119);
  ellipse(windowWidth*.7, windowHeight, windowHeight*3, windowWidth*.15);  
  
  //change the clouds of the scene
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
  fill(100,100,100);
  rect(windowWidth*.6, windowHeight*.08, windowHeight*.2,windowWidth*.05, 30);
  rect(windowWidth*.1, windowHeight*.2, windowHeight*.2,windowWidth*.02, 30);
  rect(windowWidth*.4, windowHeight*.4, windowHeight*.2,windowWidth*.01, 30);
  rect(windowWidth*.3, windowHeight*.1, windowHeight*.2,windowWidth*.04, 30);
 }
 
 //change the land of the scene
 if(land===0){
  fill(60, 130, 60);
  ellipse(windowWidth*.9, windowHeight, windowHeight*2, windowWidth*.3);
  fill(90, 160, 90);
  ellipse(windowWidth*.15, windowHeight, windowHeight*1.8, windowWidth*.25);
  fill(119, 221, 119);
  ellipse(windowWidth*.7, windowHeight, windowHeight*3, windowWidth*.15); 
 } 
if(land===1){
  fill(100, 50, 30);
  ellipse(windowWidth*.9, windowHeight, windowHeight*2, windowWidth*.3);
  fill(120, 80, 50);
  ellipse(windowWidth*.15, windowHeight, windowHeight*1.8, windowWidth*.25);
  fill(150, 100, 70);
  ellipse(windowWidth*.7, windowHeight, windowHeight*3, windowWidth*.15);  
  
 }
 if(land===2){
  fill(140, 100, 40);
  ellipse(windowWidth*.9, windowHeight, windowHeight*2, windowWidth*.3);
  fill(190, 130, 70);
  ellipse(windowWidth*.15, windowHeight, windowHeight*1.8, windowWidth*.25);
  fill(200, 160, 100);
  ellipse(windowWidth*.7, windowHeight, windowHeight*3, windowWidth*.15);  
 }

 // my name in the program
fill(0);
text("Mitsaal Idris", windowWidth*.9, windowHeight*.95);
textSize(30);
}

// mouse interact
function mouseClicked(){
  clouds += 1
  if(clouds === 3){
    clouds -= 3
  }
}

// any key interact
function keyReleased(){
  land += 1
  if(land === 3){
    land -= 3
  }
}

// change the sky of the program
function mousePressed(){
  if(mouseButton === CENTER && currentBack < 2){
  currentBack += 1
  }
  else if(currentBack === 2){
    currentBack -= 2
  }

}

// the color of the sky in the program
function bg(){
  if(currentBack===0){
    background(30,60,110)
  }
  else if(currentBack===1){
    background(60,90,140)
  }
  else if(currentBack===2){
    background(100,130,180)
  }
}