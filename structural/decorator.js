class Server {
  constructor(ip, port) {
    this.ip = ip
    this.port = port
  }

  get url() {
    return `https://${this._ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAws = true
  server.awsInfo = function() {
    return server.url
  }
  return server
}

function azure(server) {
  server.isAzure = true
  server.azureInfo = function() {
    return server.url
  }
  return server
}


const s1 = aws(new Server('12.34.56.78', 3000))
console.log('AWS SERVER: ', s1)
const s2 = azure(new Server('12.34.56.78', 3000))
console.log('AZURE SERVER: ', s2)
