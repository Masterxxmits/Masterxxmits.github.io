// Array Game
// Mitsaal Idris
// Oct. 29, 2024

// global variables
const NUM_ROWS = 4;
const NUM_COLS = 5;
let win = 0;
let rectWidth, rectHeight;
let currentRow, currentCol;

let grid = [];
// let gridData = [[0,0,0,255,0],
//                 [255,0,255,0,255],
//                 [0,255,0,0,0],
//                 [0,0,255,0,255]];

//sets up the rectangles
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomizer();
}

//draws the grid
function drawGrid(){
  for (let y = 0; y < NUM_ROWS; y++){
    for (let x = 0; x < NUM_COLS; x++){
      fill(grid[y][x]);
      rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
    }
  }
}
//determines witch squares are active
function determineActiveSquare(){
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
  print(currentCol, currentRow);
}
//flips only one of the squares
function mousePressed(){
  if(keyIsDown(SHIFT)){
    flip(currentCol, currentRow );
  }
  //flips squares in a cross pattern
  else{
    flip(currentCol, currentRow );
    flip(currentCol-1, currentRow );
    flip(currentCol+1, currentRow );
    flip(currentCol, currentRow-1 );
    flip(currentCol, currentRow+1 );
  }
}
// code for white or black tiles
function flip(col, row){
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS){
    if (grid[row][col] === 0){
      grid[row][col] = 255;
    }
    else{ 
      grid[row][col] = 0;
    }
  }
}

//calls everything
function draw() {
  background(220);
  determineActiveSquare();
  drawGrid();
  winner();
  overlay();
}
// detects if all tiles are white or black
function winner(){
  let firstValue = grid [0][0];
  let white = grid.every(row => row.every( value => value === firstValue ));

  if(white){
    textSize(50);
    stroke(1);
    fill(0);
    textAlign(CENTER,CENTER);
    text("YOU WIN!", width/2, height/2);
  }

  let black = grid.every(row => row.every( value => value === firstValue ));

  if(black){
    textSize(50);
    fill(255);
    textAlign(CENTER,CENTER);
    text("YOU WIN!", width/2, height/2);
  }
}
//randomize the starting position of white and black tiles
function randomizer(){
  for(let i = 0; i < NUM_ROWS; i++){
    let rowArray = [];
    for(let i = 0; i < NUM_COLS; i++){
      r = int(random(0,2));
      if(r === 0){
        rowArray.push(0);
      }
      else{
        rowArray.push(255);
      }
    }
    grid.push(rowArray);
  }
}

//highlights the affected squares
function overlay(){
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
  print(currentCol, currentRow);
  fill(0,100,0,150);
  rect(currentCol*rectWidth,currentRow*rectHeight,rectWidth,rectHeight);
  rect((currentCol+1)*rectWidth,currentRow*rectHeight,rectWidth,rectHeight);
  rect((currentCol-1)*rectWidth,currentRow*rectHeight,rectWidth,rectHeight);
  rect(currentCol*rectWidth,(currentRow-1)*rectHeight,rectWidth,rectHeight);
  rect(currentCol*rectWidth,(currentRow+1) *rectHeight,rectWidth,rectHeight);
}
