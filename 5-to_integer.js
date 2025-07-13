const arg = process.argv[2];
const num = parseInt(arg, 10);

if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
const messages = ["C is fun", "Python is cool", "JavaScript is amazing"];
let result = "";

for (let i = 0; i < messages.length; i++) {
  result += messages[i] + "\n";
}

console.log(result.trim());
const arg = process.argv[2];
const num = parseInt(arg, 10);

if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
