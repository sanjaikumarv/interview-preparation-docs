



function Arr() {
    const numbers = [2, 2, 3, 4];
    const product = numbers.reduce((accumulator, currentValue, crrIdx, arr) => {
        console.log("acc", accumulator, "crr", currentValue, "crrIdx", crrIdx, "arr", arr)
        return arr
    });
    console.log(product);
}

Arr()