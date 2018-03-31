const throwError = () => {
  throw new Error("throwing error object")
}

try {
  throwError()
} catch (e) {
  console.log('E.MESSAGE => ' + e.message)
  console.log('E.NAME => ' + e.name)
  console.log('E.STACK => ' + e.stack)
}