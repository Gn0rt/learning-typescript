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

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
