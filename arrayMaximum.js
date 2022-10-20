const arrayOfNums = [7, 2, 3, 4, 8, 9, 3];

// let trackedNum = 0;
// for (let number of arrayOfNums) {
//     if (trackedNum < number) {
//         trackedNum = number;
//     }
// }
// console.log(trackedNum)

let max = arrayOfNums[0];

for (let number of arrayOfNums) {
    if (number > max) {
        max = number;
    }
}
console.log(max)
