class Emitter {
	constructor() {
		this.observers = []
	}

	subscribe(event, fn) {
		this.observers[event] = [];
		this.observers[event].push(fn)

		return () => {
			this.observers[event] = this.observers[event]
				.filter(observer => observer !== fn)
		}
		
	}

	emmit(event, ...args) {
		this.observers[event].forEach(observer => {
			observer(...args)
		});
	}

}

const emmiter = new Emitter()

const unsubscribe = emmiter.subscribe('eventTest', (data) => console.log(`eventTest says: ${data}`))

console.log('observers: ', emmiter.observers);
emmiter.emmit('eventTest', 'hello');
emmiter.emmit('eventTest', 'world');
emmiter.emmit('eventTest', '!');

unsubscribe()
console.log('observers: ', emmiter.observers);
