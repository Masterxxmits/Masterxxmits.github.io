// Terrain Generation
// Mitsaal Idris
// Oct. 1, 2024
//

let rectWidth = 20;
let terrainInterval = .01;
let terrainTime = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  terrainTime = 5+frameCount/50;
  terrain();
  drawFlag();
}

function terrain(){
  let highestTerrain = 0
  let highestTerrainx = 0
  let averageHeight = 0
  for(let x = 0; x <= width; x += rectWidth){
    noFill();
    let rectHeight = noise(terrainTime);
    rectHeight = map(rectHeight,0,1,10,999);
    if(rectHeight > highestTerrain){
      highestTerrain = rectHeight
      highestTerrainx = x
    }
    //averageHeight =
    rect(x,height,rectWidth,-rectHeight);
    terrainTime += terrainInterval

  }
  drawFlag(highestTerrainx,height-highestTerrain);
}

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

function drawFlag(x,y){
  stroke(1);
  fill(255,0,0);
  line(x,y,x,y-50);
  rect(x,y-50,20,20);

}