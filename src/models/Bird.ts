import { Animal } from "./Animal";
export class Bird extends Animal {
  constructor(name: string, age: number, private _canFly: boolean) {
    super(name, age, "Bird");
  }

  get canFly(): boolean {
    return this._canFly;
  }

  makeSound() {
    return "Chirp! Chirp!";
  }

  fly() {
    if (this._canFly) {
      console.log(`${this.name} is flying!`);
    }
  }
}
