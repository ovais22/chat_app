let store = []

const SPush = (msg) => {
  const msgFLT = msg.filter(({ role }) => role === 'system')
  store.push(...msgFLT)
}
const Qpush = (msg) => {
  const msgFLT = msg.filter(({ role }) => role === 'user')

  store.push(...msgFLT)
}
const Apush = (msg) => {
  const msgF = {
    role: 'assistant',
    content: msg
  }
  store.push(...msgF)
}

export { store, SPush, Qpush, Apush}