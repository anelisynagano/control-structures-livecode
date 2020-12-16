// Allows you to multiply between 2 numbers using only the addition operation. (while)

// 4 x 5 = 20
// total will start zero
// start loop at zero

// 0 + 5 = 5 loop 0
// 5 + 5 = 10 loop 1
// 10 + 5 = 15 loop 2
// 15 + 5 = 20 loop 3

// at every loop we can add:
// current value of total plus number we are multiplying (in this case 5)
// add one to loop

const times = 4;
const number = 5;

let total = 0;
let loop = 0;

while (loop < times) {
    total = total + number;
    loop = loop + 1;
}

console.log(total)
