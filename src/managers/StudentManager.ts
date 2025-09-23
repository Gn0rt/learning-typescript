import { Student } from "../models/Student";

export class StudentManager {
    private students: Student[] = [
        new Student(1, 'Trong', 22, 'Ha noi', 9),
        new Student(5, 'Nam', 30, 'Ha noi', 7),
        new Student(3, 'Huyen', 22, 'Ha noi', 8),
        new Student(2, 'Loc', 54, 'Ha noi', 5),
        new Student(4, 'Khuong', 55, 'Ha noi', 6)
    ];

    addStudent(student: Student): void {
        const exists = this.students.some(s => s.id === student.id);
        if (exists) {
            console.log("❌ ID đã tồn tại, không thể thêm sinh viên!");
            return;
        }
        this.students.push(student);
        console.log("Add student sucessfully ✅");
    }

    updateStudent(id: number, name?: string, age?: number, address?: string, score?: number): void {
        const student = this.students.find((s) => s.id === id);
        if(!student) {
            console.log("Not found student ❌");
            return;
        }
        if(name) student.name = name;
        if(age) student.age = age;
        if(address) student.address = address;
        if(score) student.score = score;
        console.log("Update student sucessfully ✅");
    }
    deleteStudent(id: number): void {
        const oldLength = this.students.length;
        this.students = this.students.filter((s) => s.id !== id);
        if (this.students.length < oldLength) {
            console.log("Delete student sucessfully 🗑️");
        } else {
            console.log("Not found student ❌");
        }
    }

    listStudents(): void {
        console.log("📋 Danh sách sinh viên:");
        this.students
            .slice() // copy ra mảng mới, tránh thay đổi mảng gốc
            .sort((a, b) => a.id - b.id) // sắp xếp tăng dần theo id
            .forEach(s => s.displayInfo());
    }
}