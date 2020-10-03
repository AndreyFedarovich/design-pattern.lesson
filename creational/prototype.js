const car = {
  wheels: 4,
  init() {
    console.log(
      `I have ${this.wheels} wheels, my owner is ${this.owner}`
    );
  }
}

const AndreysCar = Object.create(car, {
  owner: {
    value: 'Andrey'
  }
})

console.log(AndreysCar.__proto__ === car);


AndreysCar.init()
