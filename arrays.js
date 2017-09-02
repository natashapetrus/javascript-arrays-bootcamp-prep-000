var chocolateBars = [snickers, hundred grand, kitkat, skittles];

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array];
  array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
}