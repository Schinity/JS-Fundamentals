const arg1 = parseInt(process.argv[2], 10);
const arg2 = parseInt(process.argv[3], 10);

function add(a, b) {
  return a + b;
}

console.log(isNaN(arg1) || isNaN(arg2) ? 'NaN' : add(arg1, arg2));
