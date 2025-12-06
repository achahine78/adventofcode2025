const readLinesFromFile = require("../fileReader");

const partOne = (input) => {
    const ranges = input.filter((s) => s.includes("-"));
    const ingredients = input.filter((s) => !s.includes("-") && s !== "");

    let count = 0;

    for (const ingredient of ingredients) {
        let found = false;
        for (const range of ranges) {
            const left = Number(range.split("-")[0]);
            const right = Number(range.split("-")[1]);
            if (Number(ingredient) >= left && Number(ingredient) <= right) {
                found = true;
            }
        }

        if (found) count++;
    }

    return count;
};

const insert = function (intervals, newInterval) {
    const result = [];
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }

    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};

const collapseRanges = (ranges) => {
    let result = [];
    const queue = [...ranges];
    while (queue.length) {
        const range = queue.shift();
        result = insert(result, range);
    }
    return result;
};

const partTwo = (input) => {
    const ranges = input
        .filter((s) => s.includes("-"))
        .map((range) => {
            const left = Number(range.split("-")[0]);
            const right = Number(range.split("-")[1]);
            return [left, right];
        });

    const collapsedRanges = collapseRanges(ranges);

    let count = 0;

    for (const [left, right] of collapsedRanges) {
        count += right - left + 1;
    }

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
