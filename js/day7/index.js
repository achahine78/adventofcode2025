const readLinesFromFile = require("../fileReader");

const print = (array) => {
    for (const line of array) {
        console.log(line.join(""));
    }
};

const partOne = (input) => {
    input = input.map((line) => line.split(""));
    let count = 0;

    for (let i = 1; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i - 1][j] === "S") {
                input[i][j] = "|";
            }

            if (input[i - 1][j] === "|") {
                if (input[i][j] === ".") {
                    input[i][j] = "|";
                }
                if (input[i][j] === "^") {
                    input[i][j - 1] = "|";
                    input[i][j + 1] = "|";
                    count++;
                }
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
        console.log("Part 1: ", partOne(linesArray));
        // console.log("Part 2: ", partTwo(linesArray));
    }
});
