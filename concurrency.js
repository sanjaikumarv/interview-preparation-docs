const inventory = {
  red: 10,
  blue: 5,
  green: 8,
};

const locks = {};
function lock(color) {
  if (!locks[color]) {
    locks[color] = Promise.resolve();
  }
  let unlockNext;
  const currentLock = locks[color];
  locks[color] = new Promise((resolve) => {
    unlockNext = () => resolve();
  });
  return currentLock.then(() => unlockNext);
}

async function updateInventory(color, quantity) {
  const release = await lock(color);
  try {
    if (!inventory[color]) {
      console.log(`No such color: ${color}`);
      return;
    }
    console.log("inventory[color]", inventory[color]);
    if (inventory[color] < quantity) {
      console.log(`Not enough ${color} inventory`);
    }
    inventory[color] -= quantity;
    console.log(`Updated ${color} inventory: ${inventory[color]}`);
  } finally {
    release();
  }
}

Promise.allSettled([
  updateInventory("red", 3),
  updateInventory("red", 5),
  updateInventory("red", 3),
  updateInventory("red", 2),
  updateInventory("red", 5),
  updateInventory("red", 4),
  updateInventory("blue", 2),
  updateInventory("blue", 4),
]);
