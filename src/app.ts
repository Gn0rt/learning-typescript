import { Cat, Dog, Bird, Animal } from "./models";
const zoo: Animal[] = [
  new Dog("Doggy", 3, "Husky"),
  new Cat("Miu", 2, "Black"),
  new Bird("Coky", 1, true),
];
//instanceof không phải là đặc trưng riêng của TypeScript,
//mà là toán tử gốc của JavaScript (TypeScript chỉ kế thừa và hiểu kiểu tốt hơn thôi).
//Nó dùng để kiểm tra xem một đối tượng có được tạo ra từ một lớp (class) cụ thể hay không.
// [object instanceof ClassName]
function zooShow(list: Animal[]) {
  list.forEach((animal) => {
    animal.makeSound();
    animal.eat("food");
    if (animal instanceof Dog) {
      animal.fetchBall();
    } else if (animal instanceof Cat) {
      animal.sleep();
    } else if (animal instanceof Bird) {
      animal.fly();
    }
  });
}

zooShow(zoo);
