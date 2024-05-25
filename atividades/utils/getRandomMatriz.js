import { getRandomNumber } from "./getRandomNumber.js"

export const getRandomMatriz = ({ x = 5, y = 5, maxRandomNumber = 10 }) => {
  const matriz = []
  for (let i = 0; i < x; i++) {
    matriz[i] = []
    for (let j = 0; j < y; j++) {
      matriz[i][j] = getRandomNumber(maxRandomNumber)
    }
  }
  return {value: matriz, x, y}
}