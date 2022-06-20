var factorDividers = Array.from(Array(1000).keys())

let target = 800

let factors = []

let numberList = [100, 2, 6]

let operationsText = document.getElementById('operation')

let result = [];

let resultFactors = [];

function getFactors(target, array, newArray) {
    for (let index = 0; index < array.length; index++) {
        const number = array[index];

        let dividingResult = target / number
        if (target % number === 0) {
            newArray.push(dividingResult)
        }
    }
}

function multiplyCase() {
    var result;
    var number;
    for (let index = 0; index < numberList.length; index++) {
        number = numberList[index];
        if (numberList.includes(number) && target % number === 0) {
            result = target / number
        }
        if (numberList.includes(result)) {
            operationsText.textContent = `Operation is: ${result} * ${number}`
        }
    }
}

function multiplyBySumCase() {
    var result;
    var number;
    var quantityOfNumbersNotDivisible = 0

    for (let index = 0; index < numberList.length; index++) {
        number = numberList[index];
        if (target % number != 0) {
            quantityOfNumbersNotDivisible ++
        }
    }
    for (let index = 0; index < numberList.length-quantityOfNumbersNotDivisible; index++) {
        number = numberList[index];
        if (numberList.includes(number) && target % number === 0) {
            result = target / number
        }
        if (numberList.includes(result)) {
            operationsText.textContent = `Operation is: ${result} * ${number}`
        }
        if (!numberList.includes(result)) {
            factorDividers = Array.from(Array(result).keys())
            getFactors(result, factorDividers, resultFactors)
            console.log(resultFactors);
        }
    }

    console.log(resultFactors);
}
console.log(factors)
getFactors(target, factorDividers, factors)
multiplyCase()
multiplyBySumCase()

