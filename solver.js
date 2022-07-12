var factorDividers = []
let multiplesArray = []
let additionsArray = []
let subtractionsArray = []

// let operationsText = document.getElementById('operation')

// let result = [];
let target = 800;
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
        if (result > 0 && result <= 10) {
            subtractionsArray.push(result)
        }
    });

    if (number >= 10) {
        return [number]
    }
    return subtractionsArray;
};
getSubtractions(1)
console.log(subtractionsArray)

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
var numbers = []
var operationString = ''
function numbersSolver(target, numberList) {

    var result;
    var number;
    var newResult;
    var number1;
    var number2;
    getFactors(target)
    for (let index = 0; index < numberList.length; index++) {
        number = numberList[index];
        result = target / number
        if (numberList.includes(number) && target % number === 0) {
            
            // console.log('1st if, with result: '+ result)
        }
        if (numberList.includes(result)) {
            // console.log('2nd if')
            return `${result}*${number}`
        }
        if (numberList.includes(result) === false && result <= 10) {
            getAdditions(result)
            newResult = result;
            console.log('3rd if, with result: '+ result)
        }
        if (number <= 10) {
            console.log('4th if, additionsArray is: ' + additionsArray)
            var outcome = newResult - number
         
            console.log('4th if, result is : ' + newResult)
            console.log('4th if, outcome is: '+ outcome)
        }
        if (additionsArray.includes(outcome) && result <= 10) {
            console.log('function is reached')
            var number1 = newResult - outcome 
            var number2 = newResult - number1
            return `(${number1}+${number2})*${result}`
        }
    }
}

numbersSolver(800, [2, 6, 100])
// numbersSolver(900, [100, 8, 100])
module.exports = { getFactors, getAdditions, getSubtractions, getMultiples, numbersSolver };
