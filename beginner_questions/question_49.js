const str = "dvkjvhsd dlvjsdlkv djsdklvj";
const split_word = str.split("");
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str.charCodeAt(i)) {
    count += 1;
  }
}
console.log(count);
