// Arrays
// Mitsaal Idris
// Oct, 17, 2024

let names = ['John', 'Jane', 'Stephen'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  names.push('Liam');
  console.log(names);
  //.pop removes from list
  let namesLast = names.pop();
  console.log(names);
  console.log(namesLast);

  let namesFirst = names.shift();
  console.log(names);
  console.log(namesFirst);

  names.push('Mitsaal1');
  names.push('Mitsaal2');
  names.push('Mitsaal3');
  names.push('Mitsaal4');

  for (n of names){
    console.log(n);
  }

  console.log(random(names));
  
}

function draw() {
  background(220);
}
