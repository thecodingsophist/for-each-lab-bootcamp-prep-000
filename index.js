function iterativeLog(array) {
  array.forEach(function (element, index){
    console.log(`${index}: ${element}`)});
}

function iterate (callback) {
  var A= ["a","b","c"];
  A.forEach(callback);
  return A;
}

function doToArray (array, callback) {
array.forEach (callback);
return array; 
}
