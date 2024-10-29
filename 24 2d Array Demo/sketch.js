// 2d Array Demo
// Mitsaal Idris
// Oct. 28, 2024

let grid = [[0, 255, 200, 50, 100],
            [255, 50, 150, 250, 0],
            [0, 0, 150, 200, 50]];

const NUM_ROWS = 3;
const NUM_COLS = 5;

let rectWidth, rectHeight;

function renderGrid(){
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      fill(grid[y][x]);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}
function getArrayX(){
  return int(mouseX/rectWidth);
}
function getArrayY(){
  return int(mouseY/rectHeight);
}

function setup() {
  createCanvas(500, 300);
  rectWidth = 500/NUM_COLS;
  rectHeight = 300/NUM_ROWS;
}

function draw() {
  background(220);
  renderGrid();
  //if(frameCount%1 === 0){
    //grid[int(random(NUM_ROWS))][int(random(NUM_COLS))] = color(random(255), random(255), random(255));
  //}
  print(int(mouseX/rectWidth), int(mouseY/rectHeight));
}

function mousePressed(){
  if(grid[getArrayY()][getArrayX()] === 255){
    grid[getArrayY()][getArrayX()] = color(random(255), random(255), random(255));
  }
  else{
    grid[getArrayY()][getArrayX()] = 255;
  }
}