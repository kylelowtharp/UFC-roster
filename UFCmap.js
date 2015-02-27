



function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
	mapped.push(transform(array[i]));
  return mapped;
}

var over15wins = UFCroster.filter(function(person) {
  return person.wins > 15;
});
console.log(map(over30YearsOld, function(person) {
  return person.name;
}));

