class Emitter {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    this.observers.filter(candidate => candidate !== observer)
  }

  dispatch(action) {
    this.observers.forEach(observer => {
      observer.update(action)
    });
  }

}

class Observer {
  constructor(state = 1) {
    this.state = state
    this.inititalState = state
  }

  update({type, payload}) {
    switch(type) {
      case 'INCREMENT':
        this.state = ++this.state
        break
      case 'DECREMENT':
        this.state = --this.state
        break
      case 'ADD':
        this.state = this.state + payload
        break
      default:
        this.state = this.inititalState
    }
  }
}

const stream = new Emitter()

const obs1 = new Observer()
const obs2 = new Observer(42)

stream.subscribe(obs1)
stream.subscribe(obs2)

stream.dispatch({type: 'INCREMENT'})
stream.dispatch({type: 'ADD', payload: 10})
stream.dispatch({type: 'DECREMENT'})

console.log(obs1.state);
console.log(obs2.state);
