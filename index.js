var array = [];

function logArray(element, index, array) {
  console.log(`${index}: ${element}`);
}

function iterativeLog(array) {
  array.forEach(logArray);
}

function internalCallBack(array) {
  array.forEach(iterate);
}

function iterate(internalCallBack) {
  var potatoList = [
    "red potato",
    "russet potato",
    "sweet potato",
    "yellow potato"
  ];
  potatoList.forEach(internalCallBack);
  return potatoList;
}




function doToArray(array, callback) {
  array.forEach(callback)
}
