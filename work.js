



// // function Arr() {
// //     const numbers = [2, 2, 3, 4];
// //     const product = numbers.reduce((accumulator, currentValue, crrIdx, arr) => {
// //         console.log("acc", accumulator, "crr", currentValue, "crrIdx", crrIdx, "arr", arr)
// //         return arr
// //     });
// //     console.log(product);
// // }

// // Arr()


// const { pipeline } = require('node:stream/promises');
// const fs = require('node:fs');
// const zlib = require('node:zlib');

// async function run() {
//     const res = await pipeline(
//         fs.createReadStream('work.txt'),
//         fs.createWriteStream('archive.tar.gz'),
//     );
//     console.log('Pipeline succeeded.', res);
// }

// run().catch(console.error);
const arr = [1, 20, [100, 4, [5, 6]], 7, 8, [9, [10]]];

function getBiggest(arr) {
    let cnn = 0
    if (Array.isArray(arr)) {
        for (const item of arr) {
            const number = getBiggest(item);
            if (number > cnn) {
                cnn = number;
            }
        }
    } else if (arr > cnn) {
        cnn = arr;
    }
    return cnn;
}

console.log(getBiggest(arr)); 