// Print all prime numbers between 1 to 100.

for (let i = 1; i <= 100; i++) {
  let fact = [];
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      fact.push(j);
    }
  }
  if (fact.length == 2) {
    console.log(i);
    fact = [];
  }
}
