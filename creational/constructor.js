// <-- ES5 Syntax
// function Server(ip) {
// 	this.ip = ip
// }

// Server.prototype.getUrl = function() {
// 	console.log(`http://${this.ip}:8080`)
// }
// ES5 Syntax -->


// ES6 Syntax
class Server {
	constructor(ip) {
		this.ip = ip
	}
	getUrl() {
		console.log(`http://${this.ip}:8080`)
	}
}
// -->

const aws = new Server('82:82:21:32')

aws.getUrl()
