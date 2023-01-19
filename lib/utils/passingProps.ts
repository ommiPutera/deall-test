function fromServer(props: any) {
  return JSON.stringify(props)
}

function toClient(props: any) {
  return JSON.parse(props)
}

export {fromServer, toClient}
