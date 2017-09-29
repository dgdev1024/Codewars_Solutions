function justify (string, length) {
    const substrings = string.split(' ');
    let currentString = '';
    let lines = [];

    for (const substring of substrings) {
        if (substring.length > length) { continue; }

        if (currentString === '') {
            currentString += substring;
        } else {
            if (`${currentString} ${substring}`.length > length) {
                lines.push(currentString);
                currentString = substring;
            } else {
                currentString += ` ${substring}`;
            }
        }
    }

    if (currentString !== '') {
        lines.push(currentString);
    }

    return lines.map((line, idx) => {
        if (idx === lines.length - 1) {
            return line;
        }

        let remaining = length - line.length;
        let substrings = line.split(' ');
        let index = 0;

        if (substrings.length === 1) {
            return line;
        }

        while (remaining > 0) {
            substrings[index] += ' ';
            index = (index + 1 < substrings.length - 1) ? index + 1 : 0;
            remaining--;
        }

        return substrings.join(' ');
    }).join('\n');
}

console.log(
    justify(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id magna convallis, dignissim leo id, vehicula massa. Proin elit sem, lacinia non odio et, facilisis bibendum orci. Nam eget nibh feugiat, congue lorem eget, tempus nunc. Nulla mollis ornare leo in scelerisque. Nam eu enim ipsum. Donec quis odio ac mi ultrices vulputate. Vestibulum congue dapibus lacus id ullamcorper. Mauris quis dapibus felis, sed rutrum libero. Fusce a facilisis dui. Nulla commodo imperdiet rutrum. Integer leo enim, sodales id molestie et, mattis sed velit. Vestibulum eget tortor at ipsum tempus luctus sit amet id nibh. Duis placerat vel arcu consectetur hendrerit.', 35
    )
);