const res = require("express/lib/response");
const fs = require("fs");

const filePath = "2023/inputs/day03/testInput.txt";

const content = fs.readFileSync(filePath, "utf-8");

const lines = content.split("\n");

const newLines = lines.map((line) => "." + line + ".");

const lineLength = newLines[0].length;

const dots = () => {
	let result = "";
	for (let i = 0; i < lineLength; i++) {
		result += ".";
	}
	return result;
};

newLines.unshift(dots());
newLines.push(dots());

const newArray = () => {
	let result = [];
	for (const line of newLines) {
		result.push(line.split(""));
	}

	return result;
};

console.log(newArray());
