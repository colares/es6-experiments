function sum(a, b) {
    return a + b
}

// named exports
// vários exports dentro de um mesmo arquivo
// só pode chamar com o mesmo nome
// import precisa das chaves
export function sub(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

const PI = 3.14

export { mult as multiplicacao, div, PI };

// método principal
// só podemos ter 1 export default por arquivo
// importar com qualquer nome
// não precisa usar { } no import
export default sum;