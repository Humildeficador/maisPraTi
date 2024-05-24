import { getRandomNumber } from "./getRandomNumber.js"

export const getRandomMatriz = ({ x = 5, y = 5, maxRandomNumber = 10 }) => {
  const matriz = []
  for (let i = 0; i < y; i++) {
    matriz[i] = []
    for (let j = 0; j < x; j++) {
      matriz[i][j] = getRandomNumber(maxRandomNumber)
    }
  }
  return {value: matriz, x, y}
}