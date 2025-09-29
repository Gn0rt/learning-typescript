import { Student } from "../models/Student";
import Table from "cli-table3";

export class Classroom {
  private students: Student[] = [
    new Student(1, "Gnort Bui", 22, 7, 8, 9),
    new Student(2, "Huyen Minh", 22, 9, 8, 9),
    new Student(3, "Bich Loc", 30, 7, 6, 6),
    new Student(4, "Nam Bui", 30, 4, 5, 7),
    new Student(5, "Khuong Bui", 32, 5, 5, 7),
    new Student(6, "Ba Huy", 22, 3, 2, 2),
    new Student(7, "Dinh An", 23, 5, 4, 4),
    new Student(8, "Gia Viet", 22, 4, 3, 3),
  ];
  private nextId: number;
  constructor() {
    // Khởi tạo nextId dựa vào id lớn nhất hiện tại
    this.nextId =
      this.students.length > 0
        ? Math.max(...this.students.map((s) => s.id)) + 1
        : 1;
  }

  private renderTable(data: Student[]) {
    const table = new Table({
      head: ["ID", "Name", "Age", "Math", "English", "Science", "Average"],
      colWidths: [5, 20, 5, 7, 10, 10, 10],
    });
    data.forEach((st) => {
      table.push([
        st.id,
        st.name,
        st.age,
        st.scoreMath,
        st.scoreEnglish,
        st.scoreScience,
        st.getAverageScore().toFixed(2),
      ]);
    });

    console.log(table.toString());
  }
  addStudentAuto(
    name: string,
    age: number,
    math: number,
    eng: number,
    sci: number
  ) {
    const student = new Student(this.nextId++, name, age, math, eng, sci);
    this.students.push(student);
    console.log("Add student successfully!");
  }

  addStudent(student: Student) {
    const exists = this.students.some((st) => st.id === student.id); // return true or false
    if (exists) {
      console.log("Can't add student because ID already exists!");
      return;
    }
    this.students.push(student);
    console.log("Add student successfully!");
  }
  removeStudent(id: number) {
    const oldListStudent = this.students.length;
    this.students = this.students.filter((st) => st.id !== id);
    if (this.students.length < oldListStudent) {
      console.log(
        `Student with ID: ${id} has been deleted \n Delete Successfully!`
      );
    } else {
      console.log(`Not found student with ID: ${id}`);
    }
  }
  updateStudent(
    id: number,
    name?: string,
    age?: number,
    scoreMath?: number,
    scoreEnglish?: number,
    scoreScience?: number
  ) {
    const stu = this.students.find((stu) => stu.id === id); // return object
    if (!stu) {
      console.log(`Not found student with ID: ${id}`);
      return;
    }

    if (name !== undefined) stu.name = name;
    if (age !== undefined) stu.age = age;
    if (scoreMath !== undefined) stu.scoreMath = scoreMath;
    if (scoreEnglish !== undefined) stu.scoreEnglish = scoreEnglish;
    if (scoreScience !== undefined) stu.scoreScience = scoreScience;
    console.log("Update Student Infomation Successfully!");
  }

  listStudent() {
    if (this.students.length === 0) {
      console.log("❌ No students in the classroom.");
      return;
    }
    console.log("📝 Lists student in classroom: ");
    this.renderTable(this.students.slice().sort((a, b) => a.id - b.id));
  }

  findTopStudent() {
    if (this.students.length === 0) {
      console.log("❌ No student found.");
      return;
    }
    console.log("Top Student: ");
    // ✅ fix: dùng reduce để tìm đúng max
    const top = this.students.reduce((max, stu) =>
      stu.getAverageScore() > max.getAverageScore() ? stu : max
    );
    console.log("\n🏆 Top Student:");
    this.renderTable([top]);

    // const liststu = this.students.map((stu) => {
    //   return stu;
    // });

    // let scoreMax = liststu[0].getAverageScore();

    // const newMax = liststu.filter((st) => st.getAverageScore() > scoreMax);
    // if (newMax) {
    //   console.log(
    //     `Student ${newMax[0].name} has average score is: ${newMax[0]
    //       .getAverageScore()
    //       .toFixed(2)}`
    //   );
    // }
  }
  findLowStudent() {
    console.log("Student has low average score < 5: ");
    const lowStudents = this.students.filter((st) => st.getAverageScore() < 5);
    if (lowStudents.length === 0) {
      console.log("🎉 All students are good!");
      return;
    }
    this.renderTable(lowStudents);
  }

  arrangeStudentByAverage(desc: boolean = false) {
    console.log(`\n📊 Arrange students by average (${desc ? "DESC" : "ASC"}):`);
    const sorted = this.students
      .slice()
      .sort((a, b) =>
        desc
          ? b.getAverageScore() - a.getAverageScore()
          : a.getAverageScore() - b.getAverageScore()
      );

    this.renderTable(sorted);
    // this.students
    //   .slice() //copy
    //   .sort((a, b) => a.getAverageScore() - b.getAverageScore())
    //   .forEach((st) => st.displayInfo());
  }
}
