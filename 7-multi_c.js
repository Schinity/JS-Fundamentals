const arg = process.argv[2];
const count = parseInt(arg, 10);

if (!isNaN(count)) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += "C is fun\n";
  }
  console.log(result.trim());
} else {
  console.log("Missing number of occurrences");
}
