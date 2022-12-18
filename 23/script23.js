const screen = document.querySelector(".screen");
const button = document.querySelector("button");
const sum = document.querySelector(".summation");
const sub = document.querySelector(".subtraction");
const multi = document.querySelector(".multiplication");
const div = document.querySelector(".division");
const equals = document.querySelector(".equalization");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
let counter = 0;
localStorage.clear();
sum.addEventListener("click", function sum() {
    localStorage.setItem(counter, "+");
    console.log("+");
    screen.innerText = "+";
    counter++;
});
sub.addEventListener("click", function () {
    localStorage.setItem(counter, "-");
    console.log("-");
    screen.innerText = "-";
    counter++;
});
multi.addEventListener("click", function () {
    localStorage.setItem(counter, "*");
    console.log("*");
    screen.innerText = "*";
    counter++;
});
div.addEventListener("click", function () {
    localStorage.setItem(counter, "/");
    console.log("/");
    screen.innerText = "/";
    counter++;
});

one.addEventListener("click", function () {
    localStorage.setItem(counter, 1);
    console.log("1");
    screen.innerText = 1;
    counter++;
});
two.addEventListener("click", function () {
    localStorage.setItem(counter, 2);
    console.log("2");
    screen.innerText = 2;
    counter++;
});
three.addEventListener("click", function () {
    localStorage.setItem(counter, 3);
    console.log("3");
    screen.innerText = 3;
    counter++;
});
four.addEventListener("click", function () {
    localStorage.setItem(counter, 4);
    console.log("4");
    screen.innerText = 4;
    counter++;
});
five.addEventListener("click", function () {
    localStorage.setItem(counter, 5);
    console.log("5");
    screen.innerText = 5;
    counter++;
});
six.addEventListener("click", function () {
    localStorage.setItem(counter, 6);
    console.log("6");
    screen.innerText = 6;
    counter++;
});
seven.addEventListener("click", function () {
    localStorage.setItem(counter, 7);
    console.log("7");
    screen.innerText = 7;
    counter++;
});
eight.addEventListener("click", function () {
    localStorage.setItem(counter, 8);
    console.log("8");
    screen.innerText = 8;
    counter++;
});
nine.addEventListener("click", function () {
    localStorage.setItem(counter, 9);
    console.log("9");
    screen.innerText = 9;
    counter++;
});
zero.addEventListener("click", function () {
    localStorage.setItem(counter, 0);
    console.log("0");
    screen.innerText = 0;
    counter++;
});
equals.addEventListener("click", function () {
    console.log("=");
    counter++;
    eq();
    localStorage.clear();
    function eq() {
        const values = Object.values(localStorage);
        let first = Number(values[0]);
        let second = Number(values[1]);
        let op = values[2];
        let result;
        if (op === "+") {
            function summ(number) {
                result = first + second;
                screen.innerText = result;
            }
            summ();
            counter = 0;
            console.log(result);
        }
        if (op === "-") {
            function subb(number) {
                result = first - second;
                localStorage.clear();
                screen.innerText = result;
            }
            subb();
            counter = 0;
            console.log(result);
        }
        if (op === "*") {
            function mul() {
                result = first * second;
                screen.innerText = result;
            }
            mul();
            counter = 0;
            console.log(result);
        }
        if (op === "/") {
            function dvd() {
                result = first / second;
                screen.innerText = result;
                localStorage.clear();
            }
            dvd();
            counter = 0;
            console.log(result);
        }
    }
})