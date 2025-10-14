import { Animal } from "./Animal";
export class Bird extends Animal {
  constructor(name: string, age: number, private _canFly: boolean) {
    super(name, age); //Inheritance: gọi lại constructor cha
  }
  makeSound(): void {
    console.log(`${this.name} (Bird): chip chip!`);
  }
  fly() {
    if (this._canFly) {
      console.log(`${this.name} is flying!`);
    } else {
      console.log(`${this.name} can't fly.`);
    }
  }
}
