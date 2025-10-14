# Learning Typescript

1. Run file `index.ts`

```bash
npm run dev
```

2. Run any file

```bash
npm run start src/(file)
```

Ex: npm run start `src/file1.ts`

# Properties OOP

1. Encapsulation (Đóng gói)

- Gói dữ liệu (thuộc tính) + hành vi (phương thức) vào trong class.
- Giấu bớt chi tiết không cần thiết → chỉ expose những gì cần qua get/set hoặc method.
  Ví dụ: bạn không cho sửa id trực tiếp, chỉ cho sửa name, age thông qua setter.

2. Inheritance (Kế thừa)

- Class con kế thừa class cha → tái sử dụng code.
- Con có thể mở rộng hoặc override hành vi của cha.
  Ví dụ: Person là class cha, Student và Teacher kế thừa từ Person.

3. Polymorphism (Đa hình)

- Cùng 1 method tên giống nhau, nhưng mỗi class có cách thực hiện khác nhau.
  Ví dụ: speak() trong Dog thì “Gâu gâu”, trong Cat thì “Meo meo”.

4. Abstraction (Trừu tượng hóa)

- Tập trung vào cái cần làm, giấu đi cái cách làm.
- Dùng abstract class hoặc interface để định nghĩa khung, class con phải implement chi tiết.
  Ví dụ: Interface Shape có getArea(), còn Circle và Square implement khác nhau.

| Thuộc tính    |      Mô tả    |  Ý nghĩa |
| ------------- | :-----------: | ----: |
| Encapsulation (Đóng gói) | Giấu dữ liệu, chỉ cho phép truy cập qua getter/setter | Bảo vệ dữ liệu, tránh bị sửa lung tung |
| Inheritance (Kế thừa) | Class con dùng lại thuộc tính & phương thức của class cha | Giảm trùng lặp code |
| Polymorphism (Đa hình) | Cùng 1 phương thức, nhưng hành vi khác nhau ở class con |    Linh hoạt trong xử lý |
| Abstraction (Trừu tượng) | Ẩn chi tiết, chỉ thể hiện hành vi cần thiết (interface/abstract) | Dễ mở rộng, tập trung vào “làm gì”, không quan tâm “làm như thế nào” |
