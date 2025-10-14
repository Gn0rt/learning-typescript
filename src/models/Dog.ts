import { Animal } from "./Animal";
export class Dog extends Animal {
  constructor(name: string, age: number, private _breed: string) {
    super(name, age); //Inheritance: gọi lại constructor cha
  }
  get breed() {
    return this._breed;
  }
  makeSound(): void {
    console.log(`${this.name} (Dog): woof woof!`);
  }
  fetchBall() {
    console.log(`${this.name} is fetching the ball!`);
  }
}
