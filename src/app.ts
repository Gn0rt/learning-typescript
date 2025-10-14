import { Cat, Dog, Animal } from "./models";

const zoo: Animal[] = [
  new Dog("Milu", 3, "Golden Retriever"),
  new Cat("Mimi", 2, "White"),
];

function zooShow(list: Animal[]) {
  list.forEach((animal) => {
    animal.makeSound();
    if (animal instanceof Dog) {
      animal.fetch("ball");
    } else if (animal instanceof Cat) {
      animal.sleep();
    }
  });
}

zooShow(zoo);
