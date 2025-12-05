const readLinesFromFile = require("../fileReader");

const maxBetween = (arr, start, end) => {
    let max = -Infinity;
    let maxIndex = -1;

    const s = Math.max(0, start);
    const e = Math.min(arr.length - 1, end);

    for (let i = s; i <= e; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }

    return {
        max,
        maxIndex,
    };
};

const getMaxJoltage = (processedBank, numberOfBatteries) => {
    let pointers = new Array(numberOfBatteries).fill(0);
    pointers = pointers.map(
        (_, i) => processedBank.length - numberOfBatteries + i
    );
    let previousIndex = 0;
    for (let i = 0; i < pointers.length; i++) {
        const { max, maxIndex } = maxBetween(
            processedBank,
            previousIndex,
            pointers[i]
        );
        previousIndex = maxIndex + 1;
        pointers[i] = maxIndex;
    }

    let value = "";

    pointers.forEach((pointer) => {
        value += processedBank[pointer];
    });

    return value;
};

const partOne = (linesArray) => {
    let count = 0;
    for (const bank of linesArray) {
        const processedBank = bank.split("").map(Number);
        const maxJoltage = getMaxJoltage(processedBank, 2);
        count += Number(maxJoltage);
    }

    return count;
};

const partTwo = (linesArray) => {
    let count = 0;
    for (const bank of linesArray) {
        const processedBank = bank.split("").map(Number);
        const maxJoltage = getMaxJoltage(processedBank, 12);
        count += Number(maxJoltage);
    }

    return count;
};

const filePath = "./input.txt";
readLinesFromFile(filePath, (err, linesArray) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("Part 1:", partOne(linesArray));
        console.log("Part 2:", partTwo(linesArray));
    }
});
