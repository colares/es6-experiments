import {union as junta, uniq} from 'ramda'






import soma, {sub, multiplicacao, div as dividir} from './util.js'

console.log(soma(5,8))
console.log(sub(8,2))
console.log(multiplicacao(8,2))
console.log(dividir(8,2))


const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6]
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1]

const arr3 = junta(arr1, arr2)
const arr4 = uniq(arr1, arr2)

console.log(arr3)
console.log(arr4)