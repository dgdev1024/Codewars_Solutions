function isValidCoordinates (coordinates) {
    // Split our string by the comma.
    const substrings = coordinates.split(",");

    // Validity Check: There should be two substrings.
    if (substrings.length !== 2) { return false; }

    // Get our latitude and longitude strings.
    const latitudeStr = substrings[0].trim();
    const longitudeStr = substrings[1].trim();

    // Validity Check: Our strings should not contain letters.
    const alpha = /[a-zA-Z]/;
    if (alpha.test(latitudeStr) || alpha.test(longitudeStr)) {
        return false;
    }

    // Validity Check: Our strings should not contain more than one period a piece.
    if (latitudeStr.split(".").length > 2 || longitudeStr.split(".").length > 2) {
        return false;
    }

    // Parse our strings as floats.
    const latitude = parseFloat(latitudeStr);
    const longitude = parseFloat(longitudeStr);

    // Validity Check: Our floats should not equal NaN.
    if (Number.isNaN(latitude) || Number.isNaN(longitude)) { 
        return false;
    }

    // Validity Check: Laitutude is between -90.0 and 90.0.
    // Longitude is between -180.0 and 180.0.
    if (latitude < -90.0 || latitude > 90.0) { return false; }
    if (longitude < -180.0 || longitude > 180.0) { return false; }

    // Return true.
    return true;
}

const Coordinates = [
    "-23, 25",
    "4, -3",
    "24.53525235, 23.45235",
    "04, -23.234235",
    "43.91343345, 143",
    "23.234, - 23.4234",
    "2342.43536, 34.324236",
    "N23.43345, E32.6457",
    "99.234, 12.324",
    "6.325624, 43.34345.345",
    "0, 1,2",
    "0.342q0832, 1.2324",
    "23.245, 1e1"
];

Coordinates.forEach(val => console.log(isValidCoordinates(val)));