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

    if (numberList.length == 0) {
        return null;
    }
    // exit condition
    if (target < 10 && numberList.includes(target) == false) {
        return null;
    }

    // var result;
    let number;
    let modulo;
    // var newResult;
    // var number1;
    // var number2;
    // getFactors(target)
    for (let index = 0; index < numberList.length; index++) {
        number = numberList[index];
        modulo = target % number
        if (modulo === 0) {
            break
        }
    }
    numberList.splice(numberList.length - 1)
    console.log(numberList)
    // if modulo does not equal zero
    if (modulo != 0) {
        // take target % number and if that modulo is in numberList, then
        console.log(modulo)
        if (numberList.includes(modulo)) {
            // solution is target = [something] + modulo
            return `${numbersSolver(target - modulo, numberList)}+ ${modulo}`
        }
        // if modulo is not in numberList then..
        if (numberList.includes(modulo) == false) {
            // pass modulo into the numberSolver function    
            let moduloResult = numbersSolver(modulo, numberList)
            // if numbersSolver function returns no solution, then ..
            if (moduloResult == null) {
                // away = modulo, solution is target = [something] + away
                return numbersSolver(target - modulo, numberList)
            }

        }
    }
    // if modulo is equal to zero then check if list includes number then..
    if (modulo === 0) {
        // target / number to get result
        let result = target / number
        if (numberList.includes(result)) {
            return `${result}*${number}`
        }
        return numberList
        // return [result, number, target, modulo]
        // if result is also in the list.. the solution is 'target = result*number'

        // if the result is not in the list then ..
        // target / number = result, get additions of the result then..
        // if numberList includes two indexes (a, b) of the additions then the solution is (a + b)*number

        // if the numberList doesn't include additions of result, then..
        // get subtractions of result and see if an index in that array is included in numberList (a)
        // take b = a + result and see if b is in the list, if it is then solution is  number(b-a)

        // if the numbers list doesn't include additions or subtractions then..
        // take result = target / number and check the multiples of the result
        // if the multiple (a) of that result is in the numberList then..
        // check if a/result (b) is in the list, if it is the solution is..
        // the solution is (a/b)*number
    }
    return ['hello', modulo]













    // if (numberList.includes(number) && target % number === 0) {

    //     // console.log('1st if, with result: '+ result)
    // }
    // if (numberList.includes(result)) {
    //     // console.log('2nd if')
    //     return `${result}*${number}`
    // }
    // if (numberList.includes(result) === false && result <= 10) {
    //     getAdditions(result)
    //     newResult = result;
    //     console.log('3rd if, with result: '+ result)
    // }
    // if (number <= 10) {
    //     console.log('4th if, additionsArray is: ' + additionsArray)
    //     var outcome = newResult - number

    //     console.log('4th if, result is : ' + newResult)
    //     console.log('4th if, outcome is: '+ outcome)
    // }
    // if (additionsArray.includes(outcome) && result <= 10) {
    //     console.log('function is reached')
    //     var number1 = newResult - outcome 
    //     var number2 = newResult - number1
    //     return `(${number1}+${number2})*${result}`
    // }
    // }
}

numbersSolver(800, [2, 6, 100])
// numbersSolver(900, [100, 8, 100])
module.exports = { getFactors, getAdditions, getSubtractions, getMultiples, numbersSolver };
