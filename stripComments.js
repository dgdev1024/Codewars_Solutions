function stripComments (string, tokens) {
    // First, split the string by the newline character.
    const lines = string.split("\n");

    // Iterate each line...
    const strippedLines = lines.map(line => {
        let temp = line;

        tokens.forEach(token => {
            if (temp.indexOf(token) !== -1) {
                temp = temp.split(token)[0];
            }
        });

        return temp.trim();
    });

    return strippedLines.join("\n");
}

console.log(
    stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
);