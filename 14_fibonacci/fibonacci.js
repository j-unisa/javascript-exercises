const fibonacci = function(num) {
    if (num < 0)
        {
            return "OOPS";
        }
    let sequence = [0];
    let number = 1;

    for (let i = 1; i <= num; i++)
    {        
        if (!sequence.at(-2))
        {
            sequence.push(number);
        }
        else
        {
            sequence.push(sequence.at(-1) + sequence.at(-2));
        }
    }

    return sequence.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;