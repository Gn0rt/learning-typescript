export class Animal {
  constructor(
    private _name: string,
    private _age: number,
    protected _species: string
  ) {}

  get name(): string {
    return this._name;
  }
  get age(): number {
    return this._age;
  }

  set name(name: string) {
    if (name.length === 0) {
      console.log("Name cannot be empty");
      return;
    }
    this._name = name;
  }

  set age(age: number) {
    if (age < 0) {
      console.log("Age cannot be negative");
      return;
    }
    this._age = age;
  }

  makeSound() {
    console.log("Some generic animal sound");
  }
  displayInfo() {
    console.log(
      `Name: ${this._name}, Age: ${this._age}, Species: ${this._species}`
    );
  }
}
