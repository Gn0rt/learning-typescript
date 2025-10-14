import { Animal } from "./Animal";
export class Dog extends Animal {
  constructor(name: string, age: number, private _breed: string) {
    super(name, age); // Inheritance: gọi lại constructor cha
  }
  get breed() {
    return this._breed;
  }
  makeSound(): void {
    console.log(`${this.name} (Dog): woof woof!`);
  }
  fetch(item: string) {
    console.log(`${this.name} is fetching ${item}`);
  }
}
