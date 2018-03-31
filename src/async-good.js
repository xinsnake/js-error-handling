const throwError = () => {
  throw new Error("throwing error object")
}

const promiseInvoker = () => {
  return new Promise((resolve, reject) => {
    resolve(throwError())
  })
}

(async () => {
  try {
    await promiseInvoker()
  } catch (e) {
    console.log('E.MESSAGE => ' + e.message)
    console.log('E.NAME => ' + e.name)
    console.log('E.STACK => ' + e.stack)
  }
})()