import { Animal } from "./Animal";
export class Dog extends Animal {
  constructor(name: string, age: number, private _breed: string) {
    super(name, age, "Dog");
  }

  get breed(): string {
    return this._breed;
  }

  makeSound() {
    return "Woof! Woof!";
  }

  fetch(item: string): void {
    console.log(`${this.name} is fetching the ${item}`);
  }
}
