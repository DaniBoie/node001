let num1 = parseInt(process.argv[3])
let num2 = parseInt(process.argv[4])
let result

switch (process.argv[2]) {
  case 'add':
    result = num1 + num2
    break;
  case 'subtract':
    result = num1 - num2
    break;
  case 'multiply':
    result = num1 * num2
    break;
  case 'divide':
    result = num1 / num2
    break;
  case 'exponent':
    result = num1 ** num2
    break;
}

console.log(result)