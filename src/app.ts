import { Animal, Dog, Cat, Bird } from "./models";
import { Zoo } from "./manage/Zoo";

const zoo = new Zoo();
zoo.addAnimal(new Dog("Rex", 4, "Bulldog"));
zoo.addAnimal(new Cat("Mimi", 3, "White"));
zoo.addAnimal(new Bird("Kiwi", 1, false));

zoo.listAnimals();
zoo.makeAllSounds();
zoo.showSpeacies();
