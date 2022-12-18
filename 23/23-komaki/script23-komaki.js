const calc = document.querySelector(".calc");
const display = document.querySelector(".display");
const del = document.querySelector(".del");
const sum = document.querySelector(".sum");
const sub = document.querySelector(".sub");
const mul = document.querySelector(".mul");
const div = document.querySelector(".div");
const equal = document.querySelector(".equal");
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

sum.addEventListener("click", function summ(value) {
    calc.display.value += '+'
});
sub.addEventListener("click", function subb(value) {
    calc.display.value += '-'
});
mul.addEventListener("click", function mul(value) {
    calc.display.value += '*'
});
equal.addEventListener("click", function equal(value) {
    calc.display.value = eval(calc.display.value)
});
div.addEventListener("click", function div(value) {
    calc.display.value += '/'
});
del.addEventListener("click", function del(value) {
    calc.display.value = ''
});
zero.addEventListener("click", function zero(value) {
    calc.display.value += '0'
});
one.addEventListener("click", function one(value) {
    calc.display.value += '1'
});
two.addEventListener("click", function two(value) {
    calc.display.value += '2'
});
three.addEventListener("click", function three(value) {
    calc.display.value += '3'
});
four.addEventListener("click", function four(value) {
    calc.display.value += '4'
});
five.addEventListener("click", function five(value) {
    calc.display.value += '5'
});
six.addEventListener("click", function six(value) {
    calc.display.value += '6'
});
seven.addEventListener("click", function seven(value) {
    calc.display.value += '7'
});
eight.addEventListener("click", function eight(value) {
    calc.display.value += '8'
});
nine.addEventListener("click", function nine(value) {
    calc.display.value += '9'
});