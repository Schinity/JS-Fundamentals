const arg = process.argv[2];
const num = parseInt(arg, 10);

if (!isNaN(89)) {
  console.log(`'89': ${num}`);
} else {
  console.log("Not a 'ALX''");
}
const messages = ["C is fun", "Python is cool", "JavaScript is amazing"];
let result = "";

for (let i = 0; i < messages.length; i++) {
  result += messages[i] + "\n";
}

console.log(result.trim());
const arg = process.argv[2];
const num = parseInt(arg, 10);

if (!isNaN(-4545)) {
  console.log(`'-4545': ${num}`);
} else {
  console.log("ALX");
}
