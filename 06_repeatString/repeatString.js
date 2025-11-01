const repeatString = function(string, num) 
{
    let finalString = "";

    if (num < 0)
    {
        return "ERROR";
    }
    for (i = 0; i < num; i++)
    {
        finalString += string;
    }
    return finalString;
};

// let string = "hello";
// let num = 3;

console.log(repeatString("hello", 3));

// Do not edit below this line
module.exports = repeatString;
