const result1 = Math.log10(1000);
console.log("The result is", result1);

const result2 = Math.max(-100, -2, 56, 19.75, -163);
console.log("The result is", result2);

const result3 = Math.min(0, 150, 30, 20, -8, -200);
console.log("The result is", result3);

const result4 = Math.pow(4, 4);
console.log("The result is", result4);

const result5 = Math.random();
console.log("The result is", result5);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandom(0.1, 0.15))