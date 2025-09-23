export class Student {
    constructor(
        private _id: number,
        private _name: string,
        private _age: number,
        private _address: string,
        private _score: number
    ){}

    //getter
    get id(): number {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get age(): number {
        return this._age;
    }
        get address(): string {
        return this._address;
    }
        get score(): number {
        return this._score;
    }

    //setter
    set name(newName: string) {
        if(newName.trim() === "") {
            throw new Error("Name is not empty");
        }
        this._name = newName;
    }
    set age(newAge: number) {
        if (newAge <= 0) {
            throw new Error("Age must > 0");
        }
        this._age = newAge;
    }
    set address(newAddress: string) {
        if(newAddress.trim() === "") {
            throw new Error("Address is not empty");
        }
    }
    set score(newScore: number) {
        if(newScore < 0 || newScore > 10 ) {
            throw new Error("Score must between 0 and 10");
        }
    }

    displayInfo(): void {
        console.log(`ID: ${this._id}, Name: ${this._name}, Age: ${this._age}, Address: ${this._address}, Score: ${this._score}`);
    }

}