export function round(num, to = 5) {
  return Number.parseFloat(num.toFixed(to))
}

export function rndm(min, max) {
  return Math.random() * (max - min) + min
}

export function times(num, fn) {
  while (num--) {
    fn(num)
  }
}
