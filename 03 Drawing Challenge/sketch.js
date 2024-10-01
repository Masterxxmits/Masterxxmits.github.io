// Drawing Challenge
// Mitsaal Idris
// Sept. 13, 2024
//

//let rX = 50; let rY = 50;
let head = 100

function setup() {
  createCanvas(windowWidth, windowHeight);
}

//function draw() {
  //background(220);
  // moving rectangle part
  //if (keyIsPressed){
    //if (key === "a") {
      //rY += 10; //rY = rY + 10
      //if (rY > height) rY = 0;
    //}
  //}


//fill(200, 0, 140);
//rect(rX, rY, 70, 20, 50, 0, 0, 0);
//}

//function keyPressed(){
  //dont call function its automatic
  //if(keyCode===DOWN_ARROW){ //DOWN ARROW
    //rY += 100;

  //}
//}

function draw(){
  background(220);
  fill(0,255,0);
  noStroke( circle(windowWidth/2, windowHeight/2, head));
  rect(windowWidth/2 - head/2, windowHeight/2, head, head*.5);
  stroke(1,1,1);
  fill(0,0,0);
  line(windowWidth/2 , windowHeight/2, windowWidth , windowHeight);


}

