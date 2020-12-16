// Write a program that reads three parameters: an integer, a character representing an operation (+,-,x or /) and a second integer, then performs the calculation thus indicated and displays the result. (Be careful to avoid divisions by 0) (switch)

const num1 = 5;
const num2 = 0;
const operator = '/';

if (num2 === 0 && operator === '/') {
    console.log('can\'t divide by zero!')
} else {
    switch (operator) {
        case '-':
            console.log(num1 - num2);
            break;
        case '+':
            console.log(num1 + num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        default:
            console.log(num1 * num2)
    }
}
