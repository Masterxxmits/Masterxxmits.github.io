// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myArray = [3, 5, 7, 9];
let shallowCopy;
let deepCopy;

function setup() {
  // task 1 rearrange
  let lastItem = myArray.pop();
  let secondLast = myArray.pop();

  myArray.unshift(lastItem);
  myArray.unshift(secondLast);

  print('my Array - ' + myArray);
  shallowCopy = myArray;
  deepCopy = structuredClone(myArray);

  //Task 2 unshift random zeros
  myArray.shift();
  let n = random(0,3);
  for(let i = 0; i < n; i++){
    myArray.unshift(0);
  }
  print('my Array - ' + myArray);

  // Task 3 - remove 9
  for(let i = 0; i < myArray.length; i++){
    if(myArray[i] === 9){
      myArray.splice(i,1);
    }
  }
  print('My Array - ' + myArray);
  print('Shallow Array - ' + shallowCopy);
  print('Deep Array - ' + deepCopy);

}

function draw() {
  background(220);
}
