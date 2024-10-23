// Cars Cars Cars
// Mitsaal Idris
// Oct. 18, 2024

let lineA = 0;
let lineB = 20;
let myCar;
let eastbound = [];
let westbound = [];
let light;
let count;

function setup() {
  createCanvas(windowWidth, windowHeight);
  count = 0;

}

function draw() {
  background(220);
  drawRoad();
  for(let i = 0; i<eastbound.length; i++){
    eastbound[i].action();
  }
  for(let i = 0; i<westbound.length; i++){
    westbound[i].action();
  }
}

function drawRoad(){
  fill(0);
  noStroke();
  rect(0,height/2.5, height,250);
  stroke(255,255,0);
  strokeWeight(3);
  while(lineA < width){
    line(lineA, height/1.9, lineB, height/1.9);
    lineA += 30;
    lineB += 30;
  }
  lineA = 0;
  lineB = 20;
}

function mouseClicked(){
  if (keyIsPressed&&keyCode === SHIFT){
    westbound.push(new Vehicle(0,random(height/2.1,height/2.3),0));
  }
  else{
    eastbound.push(new Vehicle(width,random(height/1.6,height/1.8),1));
  }
}
class Vehicle{
  constructor(x, y, direction){
    this.type = int(random(2));
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));
    this.direction = direction;
    this.xSpeed = random(1,15);
   
  }

  action(){
    this.move();
    this.display();
    this.speedUp();
    this.speedDown();
    this.changeColor();
    this.trafficLight();
  }

  display(){
    if (this.type===0){
      this.drawCar();
    }
    else if (this.type===1){
      this.drawTruck();
    }
  }
  
  drawCar(){
    stroke(0);
    fill(this.color);
    rect(this.x,this.y,100,40);
  }
  drawTruck(){
    stroke(0);
    fill(this.color);
    ellipse(this.x,this.y,100,40);
  }

  move(){
    if(this.direction === 0){
      this.x += this.xSpeed;
      if(this.x > width){
        this.x = 0;
      }
    }
    else if(this.direction === 1){
      this.x -= this.xSpeed;
      if(this.x < 0){
        this.x  = width;
      }
    }
  }
  speedUp(){
    if(this.direction === 0){
      if(random(1,100) >= 100){
        xSpeed += random(-15, -1);
      }
    }
    if(this.direction === 1){
      if(random(1,100) >= 100){
        xSpeed += random(1, 15);
      }
    }
  }
  speedDown(){
    if(this.direction === 0){
      if(random(1,100) >= 100){
        xSpeed -= random(-15, -1);
      }
    }
    if(this.direction === 1){
      if(random(1,100) >= 100){
        xSpeed -= random(1, 15);
      }
    }
  }
  changeColor(){
    if(random(1,100) >= 100){
      this.color = color(random(255), random(255),random(255));
    }
  }
  trafficLight(){ 
    fill("green");
    circle(width/2,height/3,50);
    if(keyIsPressed && keyCode === 32){
      light = 0;
      if(light === 0){
        for(let l = 0; l < 5600; l++){
          fill("red");
          circle(width/2,height/3,50);
          
          
        }
      }
    }
  }
}

  
 