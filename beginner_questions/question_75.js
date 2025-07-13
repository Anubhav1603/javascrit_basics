// Print Pascal’s Triangle.
const pascal = [[1]];
for (let i = 0; i < 5; i++) {
  const prevRow = pascal[pascal.length - 1]; // Get the last row
  const temp = [0, ...prevRow, 0]; // Pad with zeros on both sides

  let row = [];
  for (let j = 0; j < prevRow.length + 1; j++) {
    row.push(temp[j] + temp[j + 1]);
  }
  pascal.push(row);
}

console.log(pascal);
