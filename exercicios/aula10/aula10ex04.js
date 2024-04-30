console.time('tempo')

const list = Array.from({ length: 45678599 }).map((v, i) => {
    return i
})


const correctNumber = 9;

function maiorMenor(actualNumber, correctNumber) {
    if (actualNumber === correctNumber) {
        return null
    }
    return actualNumber > correctNumber ? true : false
}

let tentativas = 0;


function binarySearch(list, correctNumber) {
    let newList = list.sort((a, b) => a - b)
    let actualNumber = Math.floor(newList.length / 2)
    let isHigh = maiorMenor(actualNumber, correctNumber);

    while (isHigh !== null) {
        tentativas++
        isHigh = maiorMenor(actualNumber, correctNumber)
        if (isHigh === true) {
            newList = newList.slice(0, newList.indexOf(actualNumber) + 1)
            actualNumber = Math.floor((newList[0] + newList[newList.length - 1]) / 2)
        } else if (isHigh === false) {
            newList = newList.slice(newList.indexOf(actualNumber + 1))
            actualNumber = Math.floor((newList[0] + newList[newList.length - 1]) / 2)
        }
    }

    return {actualNumber, tentativas}
}


console.log(binarySearch(list, correctNumber))

console.timeEnd('tempo')