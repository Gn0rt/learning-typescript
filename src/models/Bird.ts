import { Animal } from "./Animal";
export class Bird extends Animal {
  makeSound(): void {
    console.log(`${this.name} (Bird): chip chip!`);
  }
}
