export const getRandomNumber = (max, min = 0) => {
  return Math.floor(Math.random() * ((max + 1) - min) + min)
}