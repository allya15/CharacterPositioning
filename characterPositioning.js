var string = "Lighthouse in the house";


function characterPosition (string) {
  var newString = string.split(" ").join("").toLowerCase();
  var result = {};

  for (var i = 0; i < newString.length; i++) {
    if (result[newString[i]]) {
      result[newString[i]].push(i);
    } else {
      result[newString[i]] = [i];
    }
  }
  return result;
}

console.log(characterPosition(string));