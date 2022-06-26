var factorDividers = []
let multiplesArray = []
let additionsArray = []
let subtractionsArray = []

// let operationsText = document.getElementById('operation')

// let result = [];

let resultFactors = [];

function getFactors(number) {
    factorsArray = [];
    factorDividers = Array.from({ length: number }, (_, i) => i + 1)
    for (let index = 0; index < factorDividers.length; index++) {
        const divisor = factorDividers[index];
        let dividingResult = number / divisor
        if (number % divisor === 0) {
            factorsArray.push(dividingResult)
            factorsArray.sort((a, b) => a - b)
        }
    }
    return factorsArray;
}


function getAdditions(number) {
    additionsArray = Array.from({ length: number }, (_, i) => i + 1);
    if (number > 10) {
        return [number]
    }
    return additionsArray;
};

function getSubtractions(number) {
    let smallNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    subtractionsArray = []
    let result;
    // a - b = 6
    
    smallNumbers.forEach(element => {
        result = element - number
    });
    if (smallNumbers.includes(result)) {

    }
    // for (let index = 0; index < smallNumbers.length; index++) {
    //     var element = smallNumbers[index];
    //     result = Math.abs(element - number)
    //     if (smallNumbers.includes(result) && result != 0) {
    //         subtractionsArray.push(element)
    //     }
    // }
    if (number >= 10) {
        return [number]
    }
    return subtractionsArray;
};

function getMultiples(number) {
    multiplesDivider = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 50, 75, 100];
    multiplesArray = [];
    for (let index = 0; index < multiplesDivider.length; index++) {
        const divisor = multiplesDivider[index];
        if (divisor % number === 0) {
            multiplesArray.push(divisor)
            multiplesArray.sort((a, b) => a - b)
        }
    }
    return multiplesArray;
}
getSubtractions(6)
// var numbers = []
// var operationString = ''
function numbersSolver(target, numberList) {
    var result;
    var number;
  
    getFactors(target)
    for (let index = 0; index < numberList.length; index++) {
        number = numberList[index];
        if (numberList.includes(number) && target % number === 0) {
            result = target / number
        }
        if (numberList.includes(result)) {
            return `${result}*${number}`
        }
        if (numberList.includes(result) === false && result <=10) {
            getAdditions(result)
        }
        if (additionsArray.includes(number)) {
            console.log('number is: ' + number)
            console.log('result is: '+ result)
            //expected: 'result is: 8'
            //actual: 'result is: 400'
            var outcome = result - number
            console.log('outcome is: '+ outcome)
            // expected: 'outcome is: 6'
            //           'outcome is: 2'
            // actual: 'outcome is: 398'
            //         'outcome is: 394'
            console.log(number)
        }
    }
}

numbersSolver(800, [100, 2, 6])
// numbersSolver(900, [100, 8, 100])
module.exports = { getFactors, getAdditions, getSubtractions, getMultiples, numbersSolver };
