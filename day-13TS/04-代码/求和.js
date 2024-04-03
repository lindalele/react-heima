function getSum(n1, n2) {
  if (n1 === n2 - 1) {
    return n1 + n2
  }
  return getSum(n1, n2 - 1) + n2
}

console.log(getSum(-10, 0))
