const sumAll = function(a, b) {
    // Figure our which of the 2 arguments is smaller
    // and use that as the for loop initializer
    // then use the larger as the conditional
    let small = 0;
    let large = 0;

    if (((a < 0) || (!Number.isInteger(a))) || ((b < 0) || (!Number.isInteger(b))))
    {
        return "ERROR";
    }
    else if (a < b)
    {
        small += a;
        large += b;
    }
    else
    {
        small += b;
        large += a;
    }

    let sum = 0;
    for (i = small; i <= large; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
