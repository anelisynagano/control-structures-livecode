// Count from 5 to 5 from 0 to 100 and then display the sum of the numbers found. (for)

// 0 + 5 = 5
// 5 + 5 = 10
// 10 + 5 = 15
// 15 + 5 = 20
// 20 + 5 = 25
// ...
// 100

let sum = 0;
for (let i=0; i <=100; i = i + 5) {
    sum = sum + i
}

// for (let i=0; i <= 100; i++){
//     if (i % 5 === 0) {
//         sum = sum + i
//     }
// }


console.log(sum);