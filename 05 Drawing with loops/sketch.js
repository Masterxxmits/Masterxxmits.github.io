// Project Title
// Mitsaal
// Sept. 19, 2024
//



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(100);
}

function draw() {
  myBackground();
  myForeground();

  //this is where the screen actually draws the frame
}

function myBackground(){
  //use some loops to create gradient background
  //assuming height === 800
  noStroke();
  let rectHeight = 1;
  for(let y = height; y >= 0; y -= rectHeight){
    let value = map(y,0,height,0,255);

    fill(value/1,255-value,value/6);
    rect(0,y,width,rectHeight);

  }
}

function myForeground(){
  //draw some shapes using FOR/while loops
  //var //cond. //modifiction of var
  for(let x = 0; x < width; x += 40){
    fill(0);
    circle(x, height/2, 40);
    fill(255,255,255);
    text(x, x, height/2);
  }

  //create stars
  let starCount = 0;
  randomSeed(5);
  while(starCount < 1000){
    fill(255,0,0);
    let x = random(0,width);
    let y = random(0,height);
    circle(x,y,5);
    starCount++;
  }

}


