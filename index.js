const mexp = require('math-expression-evaluator');
const permutations = require('heaps-algorithm');
// const { numbersSolver } = require('./solver');
var numberList = [2, 100, 8]
let target = 800
var perms;

perms = permutations(numberList)

//   for (let index = 0; index < perms.length; index++) {
//     const element = perms[index];
//     console.log(perms[1]);
//   }




let element;



for (let i = 0; i < perms.length; i++) {
    for (let j = 0; j < perms[i].length; j++) {
        // var element = perms[i][j];

        // numbersSolver(target, element)
        var exp1 = `${perms[i][j]}*${perms[i][j]}`
        var value = mexp.eval(exp1);
        console.log(value)
        // if (value === target) console.log(exp1)

        var exp2
        var exp3
        var exp4
        var exp5
        var exp6
        var exp7
        var exp8
        var exp9
        var exp10

    }

}




