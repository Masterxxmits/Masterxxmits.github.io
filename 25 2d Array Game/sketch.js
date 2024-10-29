// Array Game
// Mitsaal Idris
// Oct. 29, 2024


const NUM_ROWS = 4;
const NUM_COLS = 5;
let win = 0;
let rectWidth, rectHeight;
let currentRow, currentCol;

let gridData = [[0,0,0,255,0],
                [255,0,255,0,255],
                [0,255,0,0,0],
                [0,0,255,0,255]];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
}

function drawGrid(){
  for (let y = 0; y < NUM_ROWS; y++){
    for (let x = 0; x < NUM_COLS; x++){
      fill(gridData[y][x]);
      rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
    }
  }
}

function determineActiveSquare(){
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
  print(currentCol, currentRow);
}
function mousePressed(){
  if(keyIsDown(SHIFT)){
    flip(currentCol, currentRow );
  }
  else{
    flip(currentCol, currentRow );
    flip(currentCol-1, currentRow );
    flip(currentCol+1, currentRow );
    flip(currentCol, currentRow-1 );
    flip(currentCol, currentRow+1 );
  }
}

function flip(col, row){
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS){
    if (gridData[row][col] === 0){
      gridData[row][col] = 255;
    }
    else{ 
      gridData[row][col] = 0;
    }
  }
}

function draw() {
  background(220);
  determineActiveSquare();
  drawGrid();
  winner();
}

function winner(){
  let firstValue = gridData [0][0];
  let white = gridData.every(row => row.every( value => value === firstValue ));

  if(white){
    textSize(50);
    stroke(1);
    fill(0);
    textAlign(CENTER,CENTER);
    text("YOU WIN!", width/2, height/2);
  }

  let black = gridData.every(row => row.every( value => value === firstValue ));

  if(black){
    textSize(50);
    fill(255);
    textAlign(CENTER,CENTER);
    text("YOU WIN!", width/2, height/2);
  }
}
