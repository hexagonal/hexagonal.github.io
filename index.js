let worker = new Worker('worker.js')

const fibOutput = document.getElementById("fibOutput")

worker.onmessage = e => fibOutput.textContent = e.data

const fibInput = document.getElementById("fibInput")
const onChange = () => worker.postMessage(Number(fibInput.value))

onChange()
fibInput.onchange = onChange
