var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
}

function addElementToEndOfArray(array, element){
  [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
}

function accessElementInArray(array, index){
  array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
}

function removeElementFromEndOfArray(array){
  array.pop()
}
