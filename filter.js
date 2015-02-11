load('UFCroster.js');
var UFCroster = JSON.parse(UFCROSTER_FILE);
function filter(array, test) {i
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

print(JSON.stringify(filter(UFCroster, function(person) {
  return person. age > 20 && person.age < 29 ;
})));

