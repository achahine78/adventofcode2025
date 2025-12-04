const readLinesFromFile = require("../fileReader");

const getMaxJoltage = (processedBank) => {
    let firstMax = -Infinity;
    let firstMaxIndex = -1;
    for (let i = 0; i < processedBank.length - 1; i++) {
        if (processedBank[i] > firstMax) {
            firstMax = processedBank[i];
            firstMaxIndex = i;
        }
    }

    let secondMax = -Infinity;

    for (let i = firstMaxIndex + 1; i < processedBank.length; i++) {
        if (processedBank[i] > secondMax) {
            secondMax = processedBank[i];
        }
    }

    return `${firstMax}${secondMax}`;
};

const partOne = (linesArray) => {
    let count = 0;
    for (const bank of linesArray) {
        const processedBank = bank.split("").map(Number);
        const maxJoltage = getMaxJoltage(processedBank);
        count += Number(maxJoltage);
    }

    return count;
};

const partTwo = (inputArray) => {
    let count = 0;
    for (const bank of linesArray) {
        const processedBank = bank.split("").map(Number);
        const maxJoltage = getMaxJoltage(processedBank);
        count += Number(maxJoltage);
    }

    return count;
};

const filePath = "./input.txt";
readLinesFromFile(filePath, (err, linesArray) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        // console.log(linesArray);
        console.log("Part 1:", partOne(linesArray));
        //console.log("Part 2:", partTwo(inputArray));
    }
});
