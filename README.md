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

## Protected and Private

| Tính năng                |      `public`       | `protected` |   `private`    |
| ------------------------ | :-----------------: | :---------: | :------------: |
| Truy cập trong class     |         ✅          |     ✅      |       ✅       |
| Truy cập trong class con |         ✅          |     ✅      |       ❌       |
| Truy cập từ bên ngoài    |         ✅          |     ❌      |       ❌       |
| Dùng phổ biến trong      | Giao tiếp bên ngoài |   Kế thừa   | Dữ liệu nội bộ |
