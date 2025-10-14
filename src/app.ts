import { Cat, Dog, Bird, Animal } from "./models";
const zoo: Animal[] = [
  new Dog("Doggy", 3),
  new Cat("Miu", 2),
  new Bird("Coky", 1),
];

function zooShow(list: Animal[]) {
  list.forEach((animal) => animal.makeSound());
}

zooShow(zoo);
