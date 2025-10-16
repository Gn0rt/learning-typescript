import { Animal, Dog, Cat, Bird } from "../models";
import Table from "cli-table3";
export class Zoo {
  private animals: Animal[] = [
    new Dog("Buddy", 3, "Golden Retriever"),
    new Cat("Whiskers", 2, "Tabby"),
    new Bird("Tweety", 1, true),
  ];

  private renderTable(data: Animal[]) {
    const table = new Table({
      head: ["Name", "Age", "Species"],
      colWidths: [20, 10, 10],
    });
    data.forEach((animal) => {
      table.push([animal.name, animal.age, animal.constructor.name]);
    });

    console.log(table.toString());
  }

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }
  listAnimals(): void {
    console.log("===== Listing All Animals in the Zoo =====");
    this.renderTable(this.animals);
  }

  makeAllSounds(): void {
    console.log("===== Animal Sounds in the Zoo =====");
    this.animals.forEach((animal) => {
      console.log(`${animal.name}: ${animal.makeSound()}`);
    });
  }

  showSpeacies(): void {
    console.log("===== 🌟 Special Abilities =====");
    this.animals.forEach((animal) => {
      if (animal instanceof Dog) {
        animal.fetch("ball");
      } else if (animal instanceof Cat) {
        animal.sleep();
      } else if (animal instanceof Bird) {
        animal.fly();
      }
    });
  }
}
