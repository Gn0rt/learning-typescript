export class Book {
    constructor(
        private _id: number,
        private _title: string,
        private _author: string,
        private _year: number,
        private _available: boolean
    ){}

    get id(): number {
        return this._id;
    }
    get title(): string {
        return this._title;
    }
    get author(): string {
        return this._author;
    }
    get year(): number {
        return this._year;
    }
    get available(): boolean {
        return this._available;
    }

    set title(newTitle: string) {
        if(newTitle.trim() === "") {
            throw new Error("Title is not empty");
        }
        this._title = newTitle;
    }
    set author(newAuthor: string) {
        if(newAuthor.trim() === "") {
            throw new Error("Author is not empty");
        }
        this._author = newAuthor;
    }
    set year(newYear: number) {
        if(newYear >= 1900 && newYear <= 2025) {
            throw new Error("Year is invalid!");
        }
        this._year = newYear;
    }
    set available(newAvailable: boolean) {
        this._available = newAvailable;
    }

    displayInfo(): void {
        console.log(`ID: ${this._id}, Title: ${this._title}, Author: ${this._author}, Year: ${this._year}, Available: ${this._available ? 'Con' : 'Het'}`);
    }
}