function getUserName() {
    let userName = prompt('What is your name?');
    alert("Hello, " + userName);
}

function calculateAge() {
    let currentYear = new Date().getFullYear();

    let userYear = prompt('What is your birth year?');
    userYear = parseInt(userYear);
    if (!Number.isInteger(userYear)) {
        alert('Your input is wrong!!!');
        return;
    }
    if (userYear > currentYear) {
        alert('Are you from future?');
        return;
    }

    let userAge = currentYear - userYear;

    alert('Your age is ' + userAge);
}

function calculatePerimeter() {
    let side = prompt('Input square side');
    side = parseInt(side)
    if (checkIsValid(side, 'Your side is bad')) {
        let perimeter = side * 4;

        alert('Perimeter is ' + perimeter);
    }
}

function calculateCircle() {
    let radius = prompt('Input radius');
    radius = parseInt(radius)

    if (checkIsValid(radius, 'Your radius is bad')) {
        let square = Math.PI * radius * radius;

        alert('Square circle ' + square.toFixed(2));
    }
}

function checkIsValid(value, message) {
    if ((value <= 0) || (!Number.isInteger(value))) {
        alert(message);
        return false;
    }
    return true;
}


function calculateSpeed() {
    let distance = parseInt(prompt('What is distance?'));
    let time = parseInt(prompt('What is time?'));

    if (checkIsValid(distance, 'AAA') && checkIsValid(time, 'OOO')) {
        let speed = distance / time;
        alert('Your speed should be ' + speed + 'km/h');
    }
}

function getEuro() {
    const dollarEuro = 0.9;
    let dollar = parseInt(prompt('Input your dollars'));
    if (checkIsValid(dollar, 'WRONG!!!')) {
        let euro = dollarEuro * dollar;
        alert('You wil have ' + euro);
    }
}

function getQuantity() {
    const constSize = 820;
    let capacity = 1024 * parseInt(prompt('Input capacity'));
    if (checkIsValid(capacity, 'Wrong capacity')) {
        let quantity = Math.round(capacity / constSize);
        alert('Quantity is ' + quantity + ' times');
    }
}

function getMoney() {
    let money = parseInt(prompt('All your money'));
    let chocolatePrice = parseInt(prompt('Price of chocolate'));
    if (checkIsValid(money, 'Wrong money') && (checkIsValid(chocolatePrice, 'Wrong price'))) {

        let quantity = Math.round(money / chocolatePrice);
        let rest = money % chocolatePrice;
        alert('Quantity of chocolates is ' + quantity + ' Rest of money is ' + rest);
    }
}


function getReverse() {
    let userNumber = prompt('Input your number');
    let rest;
    let reverseNumber;
    if (userNumber.length !== 3) {
        alert('Wrong number(length)');
        return;
    }
    userNumber = parseInt(userNumber);
    if (checkIsValid(userNumber, 'This is not number or bad one')) {
        rest = userNumber % 10;
        reverseNumber = rest * 100;
        userNumber = (userNumber - rest) / 10;
        rest = userNumber % 10;
        reverseNumber = reverseNumber + rest * 10;
        userNumber = (userNumber - rest) / 10;
        reverseNumber = reverseNumber + userNumber;
        alert('Reverse is ' + reverseNumber);
    }
}

function getAnotherReverse() {
    let userNumber = (prompt('Input your number'));
    let reverseNumber;
    if (userNumber.length !== 3) {
        alert('Wrong number(length)');
        return;
    }
    userNumber = Number(userNumber);
    if (checkIsValid(userNumber, 'Bad number')) {
        userNumber = String(userNumber);
        reverseNumber = userNumber.split("").reverse().join("");
        alert('Reverse is ' + reverseNumber);
    }

}




function getPercent() {
    let money = parseInt(prompt('Your money, please'));
    let userPercent;
    let bankPercent;
    bankPercent = 0.05;
    let duration = parseInt(prompt('Input duration, month'));
    if (checkIsValid(money, 'Wrong money') && checkIsValid(duration, 'Wrong duration')) {
        userPercent = money * bankPercent * duration / 12;
        alert('Your percent is ' + userPercent);
    }
}

function getA() {
    let a = 1;
    a = a + a;
    alert(a);
    a += a;
    alert(a);
}