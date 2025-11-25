



// // // // function Arr() {
// // // //     const numbers = [2, 2, 3, 4];
// // // //     const product = numbers.reduce((accumulator, currentValue, crrIdx, arr) => {
// // // //         console.log("acc", accumulator, "crr", currentValue, "crrIdx", crrIdx, "arr", arr)
// // // //         return arr
// // // //     });
// // // //     console.log(product);
// // // // }

// // // // Arr()


// const { pipeline } = require('node:stream/promises');
// const fs = require('node:fs');
// const zlib = require('node:zlib');

// async function run() {

//     const data = await fs.createReadStream('work.txt');
//     console.log("data", data)
//     await fs.createWriteStream('archive.tar.gz', data);

//     console.log('Pipeline succeeded.', data);
// }

// run().catch(console.error);
// const fs = require('node:fs');

// async function getData() {
//     const chunks = [];

//     for await (const chunk of fs.createReadStream('work.txt')) {
//         chunks.push(chunk); // collect each chunk
//     }

//     const data = Buffer.concat(chunks).toString(); // combine into one string
//     await fs.createWriteStream('archive.tar.gz', chunks);
//     console.log(data);
// }

// getData();
const fs = require('node:fs');

async function getData() {
    const chunks = [];

    // Read file in chunks
    for await (const chunk of fs.createReadStream('work.txt')) {
        chunks.push(chunk);
    }

    const data = Buffer.concat(chunks); // Combine into one Buffer

    // Create a writable stream
    const writeStream = fs.createWriteStream('archive.tar.gz');
    writeStream.write(data); // Write buffer to the stream
    writeStream.end();       // Close the stream

    // Wait for the stream to finish writing
    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });

    console.log('Data written successfully');
}

getData().catch(console.error);

// // // const arr = [1, 20, [100, 4, [5, 6]], 7, 8, [9, [10]]];

// // // function getBiggest(arr) {
// // //     let cnn = 0
// // //     if (Array.isArray(arr)) {
// // //         for (const item of arr) {
// // //             const number = getBiggest(item);
// // //             if (number > cnn) {
// // //                 cnn = number;
// // //             }
// // //         }
// // //     } else if (arr > cnn) {
// // //         cnn = arr;
// // //     }
// // //     return cnn;
// // // }

// // // console.log(getBiggest(arr));
// // Suppose you're building an ecommerce app with 5 products.
// //     * Black Shoes x 5
// //         * White Shoes x 2
// //             * Red Shoes x 8
// //                 * Yellow Shoes x 4
// //                     * Green Shoes x 10
// // If you're getting 1000 requests per second, how will you prevent overbooking for each product?

// // const inventory = [
// //     {
// //         id: 1,
// //         item: "Black Shoe",
// //         quantity: 5
// //     },
// //     {
// //         id: 2,
// //         item: "White Shoe",
// //         quantity: 2
// //     },
// //     {
// //         id: 3,
// //         item: "Red Shoe",
// //         quantity: 8
// //     },
// //     {
// //         id: 4,
// //         item: "Yellow Shoe",
// //         quantity: 4
// //     },
// //     {
// //         id: 5,
// //         item: "Green Shoe",
// //         quantity: 10
// //     }
// // ];

// // Sample Order
// // {
// //     id: 1,
// //         quantity: 1
// // }
// // let orderQueues = {}



// // const handleIncomingOrder = (order) => {
// //     const getCurrentinventory = inventory.find((item) => item.id === orderId)
// //     if (!getCurrentinventory) {
// //         console.log("Order item is not found")
// //     }
// //     if (!orderQueues[orderId]) {
// //         orderQueues[orderId] = [order.quantity]
// //     } else {
// //         orderQueues[orderId] = [...orderQueues[orderId], order.quantity]
// //     }
// //     orderQuques[orderId].push(() => {

// //         if (getCurrentinventory.quantity >= order.quantity) {

// //             console.log("Your order is placed")

// //             inventory.map((item) => {

// //                 if (item.id === orderId) {

// //                     return {
// //                         quantity: item.quantity - order.quantity

// //                     } else {

// //                         return item

// //                     }

// //                 } else {
// //                     console.log("Order item is out of stock")
// //                 }
// //             })
// //         }

// //     })
// // }

// // handleIncomingOrder({ itemId: 1, quantity: 3 })




// const inventory = {
//     red: 10,
//     blue: 5,
//     green: 8
// };

// const queues = {};

// // Process the queue for a color
// function processQueue(color) {
//     if (queues[color] && queues[color].length > 0) {
//         const next = queues[color][0];
//         next();
//     }
// }

// // The main function to place an order
// function placeOrder(color, quantity) {

//     if (!inventory[color]) {
//         console.log(`❌ No such color: ${color}`);
//         return;
//     }

//     if (!queues[color]) {
//         queues[color] = [];
//         processQueue(color);
//     }

//     // Push a new order into the queue
//     queues[color].push(() => {
//         setTimeout(() => {
//             if (inventory[color] >= quantity) {
//                 inventory[color] -= quantity;
//                 console.log(`✅ Order Placed: ${color} -${quantity}, Remaining: ${inventory[color]}`);
//             } else {
//                 console.log(`❌ Order Failed: Not enough ${color} shoes`);
//             }

//             // Remove from queue and process next
//             queues[color].shift();
//             if (queues[color].length > 0) {
//                 processQueue(color);
//             }
//         }, 100); // simulate processing time
//     });
// }

// placeOrder('red', 3);
// placeOrder('red', 5);
// placeOrder('red', 4);
// placeOrder('blue', 2);
// placeOrder('blue', 4);

// function placeOrder(color, quantity) {
//     if (!inventory[color]) {
//         console.log(`❌ No such color: ${color}`);
//         return;
//     }

//     if (!queues[color]) {
//         queues[color] = [];
//     }

//     // Push a new order into the queue
//     queues[color].push(() => {
//         setTimeout(() => {
//             if (inventory[color] >= quantity) {
//                 inventory[color] -= quantity;
//                 console.log(`✅ Order Placed: ${color} -${quantity}, Remaining: ${inventory[color]}`);
//             } else {
//                 console.log(`❌ Order Failed: Not enough ${color} shoes`);
//             }

//             // Remove from queue and process next
//             queues[color].shift();
//             if (queues[color].length > 0) {
//                 processQueue(color);
//             }
//         }, 100); // simulate processing time
//     });

//     // Only start processing if this is the first item
//     if (queues[color].length === 1) {
//         processQueue(color);
//     }
// }

// function processQueue(color) {
//     if (queues[color] && queues[color].length > 0) {
//         queues[color][0]();
//     }
// }
// Promise.allSettled([
//     placeOrder('red', 3),
//     placeOrder('red', 5),
//     placeOrder('red', 4),
//     placeOrder('blue', 2),
//     placeOrder('blue', 4)
// ]);


const inventory = { red: 10, blue: 5, green: 8 };
const locks = { red: false, blue: false, green: false };

async function placeOrder(color, quantity) {
    // Wait until the lock is free
    while (locks[color]) {
        await new Promise(res => setTimeout(res, 10));
    }

    locks[color] = true; // acquire lock

    if (inventory[color] >= quantity) {
        inventory[color] -= quantity;
        console.log(`✅ Order Placed: ${color} -${quantity}, Remaining: ${inventory[color]}`);
    } else {
        console.log(`❌ Order Failed: Not enough ${color}`);
    }

    locks[color] = false; // release lock
}

// Usage
Promise.allSettled([
    placeOrder('red', 3),
    placeOrder('red', 5),
    placeOrder('red', 4),
])



// function mySAcquireLock(color) {
//     if (!locks[color]) {
//         console.log("promise", locks[color])
//         console.log("rendering...")
//         locks[color] = Promise.resolve();
//         console.log("olo", locks[color])
//     }
//     console.log("render---.")
//     let unlockNext;
//     const willLock = new Promise(resolve => {
//         unlockNext = () => resolve();
//     });
//     console.log("rendered---->w", willLock)
//     const currentLock = locks[color];
//     console.log("currentLock", currentLock)
//     locks[color] = new Promise(resolve => {
//         unlockNext = () => resolve();
//     });
//     console.log("lockpromise", locks[color])
//     console.log("lockpromise2", currentLock)
//     console.log("--------------------------------")
//     return currentLock.then(() => unlockNext);
// }
// function acquireLock(color) {
//     if (!locks[color]) {
//         console.log("promise", locks[color])
//         console.log("rendering...")
//         locks[color] = Promise.resolve();
//         console.log("olo", locks[color])
//     }
//     const willLock = new Promise(resolve => {
//         unlockNext = () => resolve();
//     });
//     console.log("rendered---->w", willLock)
//     const currentLock = locks[color];
//     console.log("currentLock", currentLock)
//     locks[color] = currentLock.then(() => willLock)
//     console.log("lockpromise", locks[color])
//     console.log("lockpromise2", currentLock)
//     console.log("--------------------------------")
//     return currentLock.then(() => unlockNext);
// }


// const inventory = {
//     red: 10,
//     blue: 5,
//     green: 8
// };

// const locks = {}; // to track locks for each color

// // function myAcquireLock(color) {
// //     if (!locks[color]) {
// //         console.log("promise", locks[color])
// //         console.log("rendering...")
// //         locks[color] = Promise.resolve();
// //         console.log("olo", locks[color])
// //     }
// //     console.log("render---.")
// //     let unlockNext;
// //     const willLock = new Promise(resolve => {
// //         unlockNext = () => resolve();
// //     });
// //     console.log("rendered---->w", willLock)
// //     const currentLock = locks[color];
// //     console.log("currentLock", currentLock)
// //     locks[color] = new Promise(resolve => {
// //         unlockNext = () => resolve();
// //     });
// //     console.log("lockpromise", locks[color])
// //     console.log("lockpromise2", currentLock)
// //     console.log("--------------------------------")
// //     return currentLock.then(() => unlockNext);
// // }
// async function updateInventory(color, quantity) {
//     const release = await acquireLock(color);
//     console.log("lock granted")
//     try {
//         if (!inventory[color]) {
//             console.log(`No such color: ${color}`);
//             return;
//         }

//         if (inventory[color] >= quantity) {
//             inventory[color] -= quantity;
//             console.log(`Success: ${color} -${quantity}. Remaining: ${inventory[color]}`);
//         } else {
//             console.log(`Failed: Not enough ${color} shoes`);
//         }
//     } finally {
//         release(); // release lock
//     }


// }

// Promise.allSettled([
//     updateInventory('red', 3),
//     updateInventory('red', 5),
//     updateInventory('red', 5),
//     updateInventory('red', 5),
//     updateInventory('red', 5),
//     updateInventory('red', 4),
//     updateInventory('blue', 2),
//     updateInventory('blue', 4)
// ]);
// updateInventory('red', 3);
// updateInventory('red', 5);
// updateInventory('red', 5);
// updateInventory('red', 5);
// updateInventory('red', 5);
// updateInventory('red', 4);
// updateInventory('blue', 2);
// updateInventory('blue', 4);


// // Helper function
// function waitUntil(conditionFn, intervalMs = 100) {
//     return new Promise((resolve) => {
//         const timer = setInterval(() => {
//             if (conditionFn()) {
//                 clearInterval(timer);
//                 resolve();
//             }
//         }, intervalMs);
//     });
// }

// // Example usage
// async function main() {
//     let value = 0;

//     // Simulate something updating the value in the background
//     setTimeout(() => { value = 5; }, 2000);

//     console.log("Waiting until value is 5...");

//     await waitUntil(() => value === 5); // Will stay pending until condition is true

//     console.log("Condition met! value =", value);
// }

// main();
