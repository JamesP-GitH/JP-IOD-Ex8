// Main Roll Dice Function
function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

// Test 6 sided dice roll
function testDice6() {
    const numRolls = 100;
    for (let i = 0; i < numRolls; i++) {
        const result = rollDice(6);
        if (result < 1 || result > 6) {
            throw new Error("Test Failed for 6-sided dice roll: got " + result);
        }
    }
    console.log("All test rolls passed for 6 sided dice")
}

testDice6();
console.log(rollDice(6));