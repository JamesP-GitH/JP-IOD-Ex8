// Main Roll Dice Function
function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

// Test 4 sided dice roll
function testDice4() {
    const numRolls = 100;
    for (let i = 0; i < numRolls; i++) {
        const result = rollDice(4);
        if (result < 1 || result > 4) {
            throw new Error("Test Failed for 4 sided dice roll: got " + result);
        }
    }
    console.log("All test rolls passed for 4 sided dice")
}

// Test 6 sided dice roll
function testDice6() {
    const numRolls = 100;
    for (let i = 0; i < numRolls; i++) {
        const result = rollDice(6);
        if (result < 1 || result > 6) {
            throw new Error("Test Failed for 6 sided dice roll: got " + result);
        }
    }
    console.log("All test rolls passed for 6 sided dice")
}

// Test 8 sided dice roll
function testDice8() {
    const numRolls = 100;
    for (let i = 0; i < numRolls; i++) {
        const result = rollDice(8);
        if (result < 1 || result > 8) {
            throw new Error("Test Failed for 8 sided dice roll: got " + result);
        }
    }
    console.log("All test rolls passed for 8 sided dice")
}

// Test 10 sided dice roll
function testDice10() {
    const numRolls = 100;
    for (let i = 0; i < numRolls; i++) {
        const result = rollDice(10);
        if (result < 1 || result > 10) {
            throw new Error("Test Failed for 10 sided dice roll: got " + result);
        }
    }
    console.log("All test rolls passed for 10 sided dice")
}

// Test 12 sided dice roll
function testDice12() {
    const numRolls = 100;
    for (let i = 0; i < numRolls; i++) {
        const result = rollDice(12);
        if (result < 1 || result > 12) {
            throw new Error("Test Failed for 12 sided dice roll: got " + result);
        }
    }
    console.log("All test rolls passed for 12 sided dice")
}

// Test 20 sided dice roll
function testDice20() {
    const numRolls = 100;
    for (let i = 0; i < numRolls; i++) {
        const result = rollDice(20);
        if (result < 1 || result > 20) {
            throw new Error("Test Failed for 20 sided dice roll: got " + result);
        }
    }
    console.log("All test rolls passed for 20 sided dice")
}

testDice4();
testDice6();
testDice8();
testDice10();
testDice12();
testDice20();
console.log(rollDice(6));