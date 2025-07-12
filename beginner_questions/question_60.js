// Create a function to generate Fibonacci series.

const fabonacci = (num) => {
  let a = 0;
  let b = 1;
  let temp = 0;

  for (let i = 0; i < num; i++) {
    if (i === 0) {
      console.log(a);
    } else if (i === 1) {
      console.log(b);
    } else {
      temp = a + b;
      a = b;
      b = temp;
      console.log(b);
    }
  }
};
fabonacci(5);
