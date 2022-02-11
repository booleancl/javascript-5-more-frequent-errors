function countDown(actualCounter) {
  console.log(`The countdown is in ${actualCounter}`)
  actualCounter = actualCounter - 1
  countDown(actualCounter)
}
countDown(10)