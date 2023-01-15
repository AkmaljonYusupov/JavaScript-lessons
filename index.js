"use strict";
class Car {
  constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }
  calcSpeed() {
    return this.speed * 100;
  }
}
class Spark extends Car {
  constructor(name, color, speed, isAirbag, extraBallon) {
    super(name, color, speed);
    this.isAirbag = isAirbag;
    this.extraBallon = extraBallon;
  }
  logger() {
    console.log(
      `Name of Car ${this.name}, color is ${this.color}. Is Airbag ${this.isAirbag}. Are there extra ballon ${this.extraBallon} `
    );
  }
}

// const bmw = new Car("BMW", "Black", 200);
// const merc = new Car("MERC", "Red", 250);

// console.log(bmw.calcSpeed());
// console.log(merc.calcSpeed());

const aboutcar = new Spark("Spark", "Black", 20, true, 5);
aboutcar.logger();
console.log(aboutcar.calcSpeed());
console.log(aboutcar);
