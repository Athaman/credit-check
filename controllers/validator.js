const validate = (number) => {
  if (!parseInt(number)) return false; // user didn't enter a number
  // NOTE card length assumptions below are based off a quick googling, needs more research
  if (number.length < 14) return false; // diners club cards have 14 digits
  if (number.length > 19) return false; // 19 digits is the maximum length for a credit card number

  // Luhn formula see https://en.wikipedia.org/wiki/Luhn_algorithm for more details
  // split the string into an array for processing
  let numbers = number.split('');

  // iterate from right, double every second number
  let toDouble = false; // should this number be doubled
  let total = 0; // holds the sum of all numbers
  for (let i = numbers.length - 1; i >= 0; i--) {
    let current = parseInt(numbers[i]); // get the current number
    if (toDouble){
      let addToTotal = 0; // instantiate an output variable
      current *= 2; // double the number
      // Loop to add the two digits together if greater than 9
      while(current) {
        addToTotal += current % 10;
        current = Math.floor(current / 10);
      }
      total += addToTotal;
    } else {
      total += current;
    }
    // toggle between each number
    toDouble = !toDouble;
  }

// to qualify for the luhn formula the total modulo 10 must equal to 0
  return total % 10 === 0;
}

module.exports = validate;
