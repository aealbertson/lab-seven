var items = [
  "milk",
  "eggs",
  "apples",
  "bread",
  "candy",
];

var prices = [
  2.99,
  4.99,
  2.50,
  3.49,
  3.00
];

var total = 0;

for (var i=0; i<items.length; i++){

  console.log(items[i] + ": " + prices[i])
  total = total + prices[i];

}

console.log("$ " + total);
