const throwError = () => {
  try {
    throw new Error("throwing error object")
  } catch (e) {
    console.log("E.MESSAGE => " + e.message)
    console.log("E.NAME => " + e.name)
    console.log("E.STACK => " + e.stack)
  }
}

const callbackInvoker = cb => {
  setTimeout(cb, 10)
}

callbackInvoker(throwError)
