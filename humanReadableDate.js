// The number of seconds in each of our time units.
const secondsIn = {
    minutes:    60,
    hours:      60 * 60,
    days:       60 * 60 * 24,
    years:      60 * 60 * 24 * 365
};

// Derive a human-readable date format from a given number of seconds.
function formatSeconds (seconds) {
    // Don't allow negative integers.
    if (seconds < 0) { return 'invalid'; }

    // Return 'now' if zero seconds.
    if (seconds === 0) { return 'now'; }

    // Track the number of time units found in the seconds passed in.
    let years = 0, days = 0, hours = 0, minutes = 0;

    // Track the number of seconds remaining.
    let secondsLeft = seconds;

    // Track our date elements.
    let dateElements = [];

    // A helper function to find out our number of time units.
    const findTimeUnits = unit => {
        let count = 0;
        while (secondsLeft >= secondsIn[unit]) {
            secondsLeft -= secondsIn[unit];
            count++;
        }
        return count;
    };

    // Find our time units...
    years = findTimeUnits('years');
    days = findTimeUnits('days');
    hours = findTimeUnits('hours');
    minutes = findTimeUnits('minutes');

    // ...populate our date elements array with them...
    if (years > 0)          { dateElements.push(`${years} ${years > 1 ? 'years' : 'year'}`); }
    if (days > 0)           { dateElements.push(`${days} ${days > 1 ? 'days' : 'day'}`); }
    if (hours > 0)          { dateElements.push(`${hours} ${hours > 1 ? 'hours' : 'hour'}`); }
    if (minutes > 0)        { dateElements.push(`${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`); }
    if (secondsLeft > 0)    { dateElements.push(`${secondsLeft} ${secondsLeft > 1 ? 'seconds' : 'second'}`); }

    // ...and format them into our return string.
    let returnString = '';
    dateElements.forEach((val, idx) => {
        if (idx === dateElements.length - 1 && idx !== 0) {
            returnString += ` and ${val}`;
        } else {
            if (idx === 0) {
                returnString += val;
            } else {
                returnString += `, ${val}`;
            }
        }
    });

    return returnString;
}

module.exports = formatSeconds;