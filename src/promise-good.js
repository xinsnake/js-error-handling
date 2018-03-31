const throwError = () => {
  throw new Error("throwing error object")
}

const promiseInvoker = () => {
  return new Promise((resolve, reject) => {
    resolve(throwError())
  })
}

promiseInvoker()
  .catch((err) => {
    console.log('E.MESSAGE => ' + err.message)
    console.log('E.NAME => ' + err.name)
    console.log('E.STACK => ' + err.stack)
  })