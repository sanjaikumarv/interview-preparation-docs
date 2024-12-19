



// function Arr() {
//     const numbers = [2, 2, 3, 4];
//     const product = numbers.reduce((accumulator, currentValue, crrIdx, arr) => {
//         console.log("acc", accumulator, "crr", currentValue, "crrIdx", crrIdx, "arr", arr)
//         return arr
//     });
//     console.log(product);
// }

// Arr()


const { pipeline } = require('node:stream/promises');
const fs = require('node:fs');
const zlib = require('node:zlib');

async function run() {
    const res = await pipeline(
        fs.createReadStream('work.txt'),
        zlib.createGzip(),
        fs.createWriteStream('archive.tar.gz'),
    );
    console.log('Pipeline succeeded.', res);
}

run().catch(console.error);