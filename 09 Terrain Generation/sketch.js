// Terrain Generation
// Mitsaal Idris
// Oct. 1, 2024
//

//sets the width, time and change
let rectWidth = 20;
let terrainInterval = .01;
let terrainTime = 5;

//draws canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//calls the functions for the mountains, flag, average
function draw() {
  background(237, 167, 97);
  terrainTime = 5+frameCount/50;
  totalRects = 0;
  sumHeight = 0;
  terrain();
  drawFlag();
  average();
}

//draws the terrain
function terrain(){

  stroke(153, 158, 123);
  let highestTerrain = 0
  let highestTerrainx = 0
  //calculates the mountains
  for(let x = 0; x <= width; x += rectWidth){
    fill(153, 158, 123);
    let rectHeight = noise(terrainTime);
    rectHeight = map(rectHeight,0,1,10,999);

    //calculates the average
    sumHeight += rectHeight;
    totalRects++;
    if(rectHeight > highestTerrain){
      highestTerrain = rectHeight
      highestTerrainx = x
    }

  //draws the rectangle
    rect(x,height,rectWidth,-rectHeight);
    terrainTime += terrainInterval

  }

  //places the flag where the hihest point is
  drawFlag(highestTerrainx,height-highestTerrain);
}

//the left and right arrows changes the speed and mountain range
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    rectWidth += 1
    }
  if(keyCode === LEFT_ARROW){
    if(rectWidth > 1){
    rectWidth -= 1
  }
}
}

//draws the flag
function drawFlag(x,y){
  stroke(1);
  fill(201, 20, 10);
  line(x,y,x,y-50);
  rect(x,y-50,20,20);
}

//draws the average line
function average(){
  let averageHeight = sumHeight / totalRects;
  stroke(255,0,0);
  line(0,height-averageHeight,windowWidth,height-averageHeight);
}