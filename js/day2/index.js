const readLinesFromFile = require("../fileReader");

const splitEvenHalves = (str) => {
    const mid = str.length / 2;
    return [str.slice(0, mid), str.slice(mid)];
};

const chunkString = (str, n) => {
    const chunks = [];
    for (let i = 0; i < str.length; i += n) {
        chunks.push(str.slice(i, i + n));
    }
    return chunks;
};

const isAllElementsEqual = (arr) =>
    arr.reduce((acc, curr) => acc && curr === arr[0], true);

const isInvalidPartOne = (number) => {
    const numberString = String(number);
    if (numberString.length % 2 === 0) {
        const [left, right] = splitEvenHalves(numberString);
        if (left === right) return true;
    }

    return false;
};

const isInvalidPartTwo = (number) => {
    const numberString = String(number);

    for (
        let windowSize = 1;
        windowSize <= numberString.length / 2;
        windowSize++
    ) {
        if (numberString.length % windowSize === 0) {
            const chunks = chunkString(numberString, windowSize);
            if (isAllElementsEqual(chunks)) return true;
        }
    }

    return false;
};

const partOne = (inputArray) => {
    const [input] = inputArray;
    const linesArray = input.split(",");
    console.log(linesArray);

    let count = 0;
    for (const range of linesArray) {
        let [start, end] = range.split("-");
        start = Number(start);
        end = Number(end);
        for (let i = start; i <= end; i++) {
            if (isInvalidPartOne(i)) count += i;
        }
    }

    return count;
};

const partTwo = (inputArray) => {
    const [input] = inputArray;
    const linesArray = input.split(",");
    console.log(linesArray);

    let count = 0;
    for (const range of linesArray) {
        let [start, end] = range.split("-");
        start = Number(start);
        end = Number(end);
        for (let i = start; i <= end; i++) {
            if (isInvalidPartTwo(i)) count += i;
        }
    }

    return count;
};

const filePath = "./input.txt";
readLinesFromFile(filePath, (err, inputArray) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("Part 1:", partOne(inputArray));
        console.log("Part 2:", partTwo(inputArray));
    }
});
