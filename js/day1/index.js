const readLinesFromFile = require("../fileReader");

const partOne = (linesArray) => {
    let startingPosition = 50;
    let count = 0;
    for (const move of linesArray) {
        const direction = move[0];
        const value = Number(move.slice(1));
        if (direction === "L") {
            startingPosition -= value;
            if (startingPosition < 0) {
                const factor = -1 * Math.floor(startingPosition / 100)
                startingPosition += 100 * factor;
            }
        }
        if (direction === "R") {
            startingPosition += value;
            if (startingPosition > 99) {
                const factor =  Math.floor(startingPosition / 100)
                startingPosition -= 100 * factor;
            }
        }

        if (startingPosition === 0) {
            count++;
        }
    }

    return count;
};

const partTwo = (linesArray) => {
    let startingPosition = 50;
    let count = 0;
    for (const move of linesArray) {
        const direction = move[0];
        const value = Number(move.slice(1));
        if (direction === "L") {
            startingPosition -= value;
            if (startingPosition < 0) {
                const factor = -1 * Math.floor(startingPosition / 100)
                startingPosition += 100 * factor;
                count += factor
            }
        }
        if (direction === "R") {
            startingPosition += value;
            if (startingPosition > 99) {
                const factor =  Math.floor(startingPosition / 100)
                startingPosition -= 100 * factor;
                count += factor
            }
        }
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
