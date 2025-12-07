const readLinesFromFile = require("../fileReader");

const partOne = (input) => {
    const processedInput = input.map((line) =>
        line.split(" ").filter((s) => s !== "")
    );

    const operations = processedInput.pop();

    let count = 0;

    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];
        if (operation === "*") {
            let accumulator = 1;
            for (let j = 0; j < processedInput.length; j++) {
                accumulator *= Number(processedInput[j][i]);
            }

            count += accumulator;
        }

        if (operation === "+") {
            let accumulator = 0;
            for (let j = 0; j < processedInput.length; j++) {
                accumulator += Number(processedInput[j][i]);
            }

            count += accumulator;
        }
    }

    return count;
};

const partTwo = (input) => {
    const operations = input
        .pop()
        .split(" ")
        .filter((s) => s !== "");
    let operands = [];
    let count = 0;
    for (let i = input[0].length - 1; i >= 0; i--) {
        let accumulator = "";
        for (let j = 0; j < input.length; j++) {
            accumulator += input[j][i];
        }

        accumulator = accumulator.trim();

        if (accumulator.length === 0) {
            const operation = operations.pop();
            const value =
                operation === "+"
                    ? operands
                          .map(Number)
                          .reduce((prev, curr) => prev + curr, 0)
                    : operands
                          .map(Number)
                          .reduce((prev, curr) => prev * curr, 1);
            count += value;
            operands = [];
        } else {
            operands.push(accumulator);
        }
    }

    const operation = operations.pop();
    const value =
        operation === "+"
            ? operands.map(Number).reduce((prev, curr) => prev + curr, 0)
            : operands.map(Number).reduce((prev, curr) => prev * curr, 1);
    count += value;

    return count;
};

const filePath = "./input.txt";
readLinesFromFile(filePath, (err, linesArray) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("Part 1: ", partOne(linesArray));
        console.log("Part 2: ", partTwo(linesArray));
    }
});
