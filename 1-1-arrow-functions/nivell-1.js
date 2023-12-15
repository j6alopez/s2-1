//exercici 1

const add = (a, b) => a + b;

//exercici 2

const randomNumber = () => {
  const min = 0;
  const max = 100;

  return Math.floor(Math.random() * (max - min));
};

//exercici 3

class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hello, ${this.name}`);
  };
}
