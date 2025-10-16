import { Animal } from "./Animal";
export class Cat extends Animal {
  constructor(name: string, age: number, private _color: string) {
    super(name, age, "Cat");
  }

  get color(): string {
    return this._color;
  }

  makeSound() {
    return "Meow! Meow!";
  }

  sleep() {
    console.log(`${this.name} is sleeping.! zZz...`);
  }
}
