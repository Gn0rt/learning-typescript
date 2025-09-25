import { Book } from "./models/Book";
import { Library } from "./managers/Library";
import * as readlineSync from "readline-sync";

const manager = new Library();

while(true) {
    console.log("\n===== MENU =====");
    console.log("1. Add book");
    console.log("2. Update book");
    console.log("3. Delete book");
    console.log("4. Display list books");
    console.log("5. Find book");
    console.log("0. Exit");

    const choice = readlineSync.questionInt("Enter your choice: ");
    switch(choice) {
        case 1: {
            const id = readlineSync.questionInt("Enter ID: ");
            const title = readlineSync.question("Enter title: ");
            const author = readlineSync.question("Enter author: ");
            const year = readlineSync.questionInt("Enter year: ");
            const available = true;
            manager.addBook(new Book(id, title, author, year, available));
            break;
        }
        case 2: {
            const id = readlineSync.questionInt("Enter ID need update: ");
            const title = readlineSync.question("Enter new title ('Enter' to skip): ");
            const author = readlineSync.question("Enter new author ('Enter' to skip): ");
            const year = readlineSync.question("Enter year ('Enter to skip): ");
            const availableInput = readlineSync.question("Enter available (true/flase, 'Enter' to skip): ");
            const available = availableInput ? availableInput.toLowerCase() === "true" : undefined;
            manager.updateBook(
                id,
                title || undefined,
                author || undefined,
                year ? Number(year) : undefined,
                available
            );
            break;
        }
        case 3: {
            while(true) {
                console.log("1. Delete by Id");
                console.log("2. Delete by title");
                console.log("0. Exit");
                const choice = readlineSync.questionInt("Enter your choice: ");
                switch(choice) {
                    case 1: {
                        const id = readlineSync.questionInt("Nhập ID cần xóa: ");
                        manager.deleteBook(id);
                        break;
                    }
                    case 2: {
                        console.log("Comming soon ...");
                        break;
                    }
                    case 0:
                        console.log("👋 Exit");
                        process.exit(0);
                    default:
                        console.log("❌ Choice is invalid");
                    }
            }
            break;
        }
        case 4: {
            manager.listBook();
            break;
        }
        case 5: {
            const query = readlineSync.question("Enter ID or Title to search: ");
            const result = isNaN(Number(query))
                ? manager.findBook(query)   // tìm theo title
                : manager.findBook(Number(query)); // tìm theo id

            if (result.length === 0) {
                console.log("❌ No book found!");
            } else {
                console.log("🔎 Found books:");
                result.forEach(b => b.displayInfo());
            }
            break;
        }
        case 0: {
            console.log("👋 Exit programme");
            process.exit(0);
        }
        default:
            console.log("Choice is invalid");    
    }
            
}
