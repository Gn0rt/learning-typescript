import { Animal } from "./Animal";
export class Cat extends Animal {
  constructor(name: string, age: number, private _color: string) {
    super(name, age); // Inheritance: gọi lại constructor cha
  }
  get color() {
    return this._color;
  }
  makeSound(): void {
    console.log(`${this.name} (Cat): meow meow!`);
  }
  sleep() {
    console.log(`${this.name} is sleeping...!zzz`);
  }
}
