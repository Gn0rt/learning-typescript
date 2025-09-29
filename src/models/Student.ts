export class Student {
  constructor(
    private _id: number,
    private _name: string,
    private _age: number,
    private _scoreMath: number,
    private _scoreEnglish: number,
    private _scoreScience: number
  ) {}

  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get age(): number {
    return this._age;
  }
  get scoreMath(): number {
    return this._scoreMath;
  }
  get scoreEnglish(): number {
    return this._scoreEnglish;
  }
  get scoreScience(): number {
    return this._scoreScience;
  }

  set name(newName: string) {
    if (newName === "") {
      throw new Error("Name is not empty!");
    }
    this._name = newName;
  }
  set age(newAge: number) {
    if (newAge < 0 || newAge > 40) {
      throw new Error("Age must 0 < age < 40");
    }
    this._age = newAge;
  }
  set scoreMath(newScore: number) {
    if (newScore < 0 || newScore > 10) {
      throw new Error("Score must 0 < score < 10");
    }
    this._scoreMath = newScore;
  }
  set scoreEnglish(newScore: number) {
    if (newScore < 0 || newScore > 10) {
      throw new Error("Score must 0 < score < 10");
    }
    this._scoreEnglish = newScore;
  }
  set scoreScience(newScore: number) {
    if (newScore < 0 || newScore > 10) {
      throw new Error("Score must 0 < score < 10");
    }
    this._scoreScience = newScore;
  }

  displayInfo() {
    console.log(
      `ID: ${this._id}, Name: ${this._name}, Age: ${this._age}, Math: ${this._scoreMath}, English: ${this._scoreEnglish}, Science: ${this._scoreScience}`
    );
  }

  getAverageScore(): number {
    return (this._scoreMath + this._scoreEnglish + this._scoreScience) / 3;
  }
}
