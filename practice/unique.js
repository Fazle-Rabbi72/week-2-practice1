
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var seen = {};
var uniqueNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (!seen[number]) {
    uniqueNumbers.push(number);
    seen[number] = true;
  }
}
console.log(uniqueNumbers);
