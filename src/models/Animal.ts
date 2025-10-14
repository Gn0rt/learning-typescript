// Abstraction: class này là nền tảng cho các loài cụ thể
export abstract class Animal {
  // Encapsulation: dùng private/protected để đóng gói
  constructor(private _name: string, private _age: number) {}

  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  // Abstract method → class con bắt buộc phải implement
  abstract makeSound(): void;

  eat(food: string) {
    console.log(`${this._name} is eating ${food}`);
  }
}
