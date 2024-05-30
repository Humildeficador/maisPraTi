const tela = document.querySelector('.tela')
const del = document.querySelector('.del')

const div = document.querySelector('.div')
const mult = document.querySelector('.mult')

const sub = document.querySelector('.sub')
const adc = document.querySelector('.adc')

const enter = document.querySelector('.enter')
const float = document.querySelector('.float')

const nove = document.querySelector('.nove')
const oito = document.querySelector('.oito')
const sete = document.querySelector('.sete')
const seis = document.querySelector('.seis')
const cinco = document.querySelector('.cinco')
const quatro = document.querySelector('.quatro')
const tres = document.querySelector('.tres')
const dois = document.querySelector('.dois')
const um = document.querySelector('.um')
const zero = document.querySelector('.zero')

del.addEventListener('click', () => {
  tela.value = (tela.value).substring(0, tela.value.length - 1)
})

tela.addEventListener('change', (e) => {
  console.log(e)
})

nove.addEventListener('click', () => {
  tela.value += 9
})

oito.addEventListener('click', () => {
  tela.value += 8
})

sete.addEventListener('click', () => {
  tela.value += 7
})

seis.addEventListener('click', () => {
  tela.value += 6
})

cinco.addEventListener('click', () => {
  tela.value += 5
})

quatro.addEventListener('click', () => {
  tela.focus()
  tela.value += 4
})

tres.addEventListener('click', () => {
  tela.value += 3
})

dois.addEventListener('click', () => {
  tela.value += 2
})

um.addEventListener('click', () => {
  tela.value += 1
})

zero.addEventListener('click', () => {
  tela.value += 0
})

enter.addEventListener('click', () => {
  tela.value = eval(tela.value)
})

div.addEventListener('click', () => {
  tela.value += '/'
})

mult.addEventListener('click', () => {
  tela.value += '*'
})

sub.addEventListener('click', () => {
  tela.value += '-'
})

adc.addEventListener('click', () => {
  tela.value += '+'
})


document.addEventListener('keydown', (e) => {
  /* if(/[0-9]/.test(Number(e.key))){
    tela.value += Number(e.key)
  } */
})