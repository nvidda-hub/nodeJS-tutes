function getArraySum(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return `sum of array element : ${sum}`;
}

function calculator(a, b, op){
    if (op == 'add'){return `${a} ${op} ${b} : ${a+b}`;}
    else if (op == 'subs'){return `${a} ${op} ${b} : ${a-b}`;}
    else if (op == 'mul'){return `${a} ${op} ${b} : ${a*b}`;}
    else if (op == 'div'){return `${a} ${op} ${b} : ${a/b}`;}
}

// module.exports = getArraySum; // exporting single function 

// exporting multiple functions, then create an object

module.exports = {
    arrSum : getArraySum,
    calc : calculator,
    author : "Vidda",
    
}

module.exports.dateCreated = "07-12-2022";