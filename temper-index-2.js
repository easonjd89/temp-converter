// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
  return fahren - 32 * (9 / 5).toFixed(2);
}

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} cels
 * @param {string} feels
 */

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */

function rand(limit) {
  return Math.random(110);
}
/*console.log(rand);*/

function tempDescr(fahren) {
  if (fahren < 32) {
    feels = "very cold";
    return feels;
  } else if (fahren < 64) {
    feels = "cold";
    return feels;
  } else if (fahren < 86) {
    feels = "warm";
    return feels;
  } else if (fahren < 100) {
    feels = "hot";
    return feels;
  } else if (fahren < 110) {
    feels = "very hot";
    return feels;
  } else return feels;
}

let feels = tempDescr.feels;

//feels = tempDescr.feels;

function createMessage(fahren, cels, feels) {
  prompt(
    `You entered ${fahren} degrees Fahrenheit. The temperature in Celsius is ${cels} degrees. It feels ${feels}.`
  );
}

let fahren = prompt(
  "Enter a number. We will convert that number from Fahrenheit to Celsius."
);

let cels = convertToCelsius(fahren).toFixed(2);
let output = createMessage(fahren, cels);
console.log(output);

fahren = prompt(
  "Let's try that again. Enter a number and we will convert that number from fahrenheit to Celsius."
);
//feels = tempDescr;
cels = convertToCelsius(fahren).toFixed(2);
output = createMessage(fahren, cels);
console.log(output);

fahren =
  /*rand(110);*/
  prompt(
    "Enter another number. We will convert that number from Fahrenheit to Celsius."
  );
//feels = tempDescr;
cels = convertToCelsius(fahren).toFixed(2);
output = createMessage(fahren, cels);
console.log(output);

fahren = rand(110);
/* prompt(
      "Enter another number. We will convert that number from Fahrenheit to Celsius."
    );*/
//feels = tempDescr.feels;
cels = convertToCelsius(fahren).toFixed(2);
output = createMessage(fahren, cels);
console.log(output);
