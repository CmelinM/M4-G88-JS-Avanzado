function* countThings(){
  const emojis = ['👁️', '🦿', '🤡']
  
  for(let i = 0; i < emojis.length; i++) {
    yield emojis[i]
  }
}

const iterator = countThings()
iterator.next()
iterator.next()
iterator.next()
iterator.next()

function* secondYield() {
  yield 0
  yield 1
  yield 2
  yield 3
  yield 4
}

const secondIterator = secondYield()

secondIterator.next()
secondIterator.next()
secondIterator.next()
secondIterator.next()
secondIterator.next()
secondIterator.next()
secondIterator.next()

function* fibonacci() {
  let a = 1
  let b = 2
  yield a
  yield b
  let currentVal = b + a
  yield currentVal
  while(true) {
    a = b
    b = currentVal
    currentVal = b + a
    yield currentVal  
  }
}

const fibo = fibonacci()

fibo.next()
fibo.next()
fibo.next()
fibo.next()
fibo.next()
fibo.next()
fibo.next()
fibo.next()
fibo.next()

function speak(line) {
  console.log(`El perro ${this.type} dice ${line}
  `)
}

let llanka = { type: 'Flojita', speak }
let maik = { type: 'Hambriento', speak }

llanka.speak('Oli')