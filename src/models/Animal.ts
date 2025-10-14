// Cha (encapsulation + inheritance)
export class Animal {
  constructor(private _name: string, private _age: number) {}

  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  makeSound(): void {
    console.log(`${this._name} makes a sound`);
  }
}
