import { Book } from "../models/Book";

export class Library {
    private books: Book[] = [
        new Book(1, 'Book 1', 'Gnort', 2003, true),
        new Book(2, 'Book 2', 'Huyn', 2016, true),
        new Book(3, 'Book 3', 'Loc', 1970, false),
        new Book(4, 'Book 4', 'Khuong', 2024, true),
        new Book(5, 'Book 5', 'Nam', 2013, false),
    ];

    addBook(book: Book): void {
        const existsId = this.books.some(b => b.id === book.id);
        const existsTitle = this.books.some(b => b.title.toLowerCase() === book.title.toLowerCase());

        if(existsId && existsTitle) {
            console.log("Id or Title is had, can't add, please try again...");
            return;
        }
        this.books.push(book);
        console.log("Add book successfully!");
    }
    updateBook(id: number, title?: string, author?: string, year?: number, available?: boolean): void {
        const book = this.books.find((b) => b.id === id);
        if(!book) {
            console.log("Not found book!");
            return;
        }
        if(title) book.title = title;
        if(author) book.author = author;
        if(year) book.year = year;
        if(available !== undefined) book.available = available;
        console.log("Update book successfully!");
    }
    deleteBook(id: number, title?: string): void {
        const oldLength = this.books.length;
        this.books = this.books.filter((b) => b.id !== id);
        // const byTitle = this.books.filter((b) => b.title.trim().toLowerCase() !== title.trim().toLowerCase());
        if(this.books.length < oldLength) {
            console.log("Delete book successfully!")
        }else {
            console.log("Delete fail, not found book!");
        }
    }
    findBook(query: string | number): Book[] {
        if(typeof query === 'number') {
            return this.books.filter((b) => b.id === query);
        }
        else {
            return this.books.filter(b => b.title.toLowerCase().includes(query.toLowerCase()));
        }
    }
    listBook(): void {
        console.log("List books in Library:");
        this.books
            .slice() //copy
            .sort((a,b) => a.id - b.id) //sort
            .forEach(b => b.displayInfo());
    }
}