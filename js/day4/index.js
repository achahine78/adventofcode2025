const readLinesFromFile = require("../fileReader");

const getNeighbors = (grid, i, j) => {
    const neighbors = [];
    const rows = grid.length;
    const cols = grid[0].length;

    const directions = [
        [-1, -1], // upper left
        [-1, 0], // left
        [-1, 1], // lower left
        [0, -1], // down
        [0, 1], // up
        [1, -1], // upper right
        [1, 0], // right
        [1, 1], // lower right
    ];

    for (const [dx, dy] of directions) {
        const x = i + dx;
        const y = j + dy;

        if (x >= 0 && x < rows && y >= 0 && y < cols) {
            neighbors.push(grid[x][y]);
        }
    }

    return neighbors;
};

const countRolls = (neighbors) =>
    neighbors.reduce((prev, current) => (current === "@" ? prev + 1 : prev), 0);

const partOne = (input) => {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        for (j = 0; j < input[i].length; j++) {
            if (input[i][j] === "@") {
                const neighbors = getNeighbors(input, i, j);
                if (countRolls(neighbors) < 4) {
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
        const input = linesArray.map((line) => line.split(""));
        console.log("Part 1: ", partOne(input));
    }
});
