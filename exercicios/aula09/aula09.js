const numeros = [1, 50, 40, 25, 60]
let soma 

numeros.forEach((v) => {
    soma+=v
    console.log(`${v} x 2 = ${v*2}`)
})

console.log(`Soma Total: ${soma}`)