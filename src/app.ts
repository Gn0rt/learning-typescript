import { Student } from "./models/Student";
import { StudentManager } from "./managers/StudentManager";
import * as readlineSync from "readline-sync";

const manager = new StudentManager();

while(true){
    console.log("\n===== MENU =====");
    console.log("1. Thêm sinh viên");
    console.log("2. Sửa sinh viên");
    console.log("3. Xóa sinh viên");
    console.log("4. Hiển thị danh sách");
    console.log("0. Thoát");

    const choice = readlineSync.questionInt("👉 Chọn chức năng: ");
    switch (choice) {
        case 1: {
        const id = readlineSync.questionInt("Nhập ID: ");
        const name = readlineSync.question("Nhập tên: ");
        const age = readlineSync.questionInt("Nhập tuổi: ");
        const address = readlineSync.question("Nhập địa chỉ: ");
        const score = readlineSync.questionInt("Nhập điểm: ");
        manager.addStudent(new Student(id, name, age, address, score));
        break;
        }
    case 2: {
        const id = readlineSync.questionInt("Nhập ID cần sửa: ");
        const name = readlineSync.question("Tên mới (Enter bỏ qua): ");
        const ageStr = readlineSync.question("Tuổi mới (Enter bỏ qua): ");
        const address = readlineSync.question("Nhập địa chỉ (Enter bỏ qua): ");
        const scoreStr = readlineSync.question("Điểm mới (Enter bỏ qua): ");
      manager.updateStudent(
        id,
        name || undefined,
        ageStr ? Number(ageStr) : undefined,
        address || undefined,
        scoreStr ? Number(scoreStr) : undefined
      );
      break;
    }
    case 3: {
      const id = readlineSync.questionInt("Nhập ID cần xóa: ");
      manager.deleteStudent(id);
      break;
    }
    case 4:
      manager.listStudents();
      break;
    case 0:
      console.log("👋 Thoát chương trình");
      process.exit(0);
    default:
      console.log("❌ Lựa chọn không hợp lệ");
  }
}