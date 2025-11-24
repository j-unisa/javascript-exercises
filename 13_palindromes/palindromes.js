const palindromes = function (str) {
    // Split into array characters
    let arr = str.split("");

    // Filter alphanumeric characters into a new array
    let alphaNumeric = arr.filter((char) => /[a-zA-Z0-9]/.test(char));

    // If joined array equals reversed-joined array
    // Return true
    if (alphaNumeric.join("").toLowerCase() == alphaNumeric.reverse().join("").toLowerCase())
    {
        return true;
    }
    // Else return false
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
