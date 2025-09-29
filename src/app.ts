import { Student } from "./models/Student";
import { Classroom } from "./managers/Classroom";
import * as readlineSync from "readline-sync";
import Table from "cli-table3";
import { read } from "fs";

const manager = new Classroom();
manager.listStudent();

const manageClassroom: (string | number)[] = [
  "Add new student",
  "Update student info",
  "Remove student",
  "Find top students",
  "Find low students",
  "List students in class",
  "Exit",
];

const renderTable = (data: (string | number)[]) => {
  const table = new Table({
    head: ["#", "Action"],
    colWidths: [5, 30],
  });

  data.forEach((a, index) => {
    const displayIndex = a === "Exit" ? 0 : index + 1;
    table.push([displayIndex, a]);
  });
  return table.toString(); // ✅ trả về string để in
};

while (true) {
  console.log("\n===== MENU MANAGER CLASSROOM =====");
  console.log(renderTable(manageClassroom));

  const choice = readlineSync.questionInt("Enter your choice: ");
  switch (choice) {
    case 1: {
      const name = readlineSync.question("Enter student's name: ");
      const age = readlineSync.questionInt("Enter student's age: ");
      const math = readlineSync.questionFloat("Enter student math score: ");
      const eng = readlineSync.questionFloat("Enter student math score: ");
      const science = readlineSync.questionFloat("Enter student math score: ");
      manager.addStudentAuto(name, age, math, eng, science);
      break;
    }
    case 2: {
      const id = readlineSync.questionInt("Enter student's ID need update: ");
      const name = readlineSync.question(
        "Enter new student name (Enter to skip): "
      );
      const age = readlineSync.question(
        "Enter new student age (Enter to skip): "
      );
      const math = readlineSync.question(
        "Enter new student math score (Enter to skip): "
      );
      const eng = readlineSync.question(
        "Enter new student english score (Enter to skip): "
      );
      const science = readlineSync.question(
        "Enter new student science score (Enter to skip): "
      );

      manager.updateStudent(
        id,
        name || undefined,
        age ? Number(age) : undefined,
        math ? Number(math) : undefined,
        eng ? Number(eng) : undefined,
        science ? Number(science) : undefined
      );
      break;
    }
    case 3: {
      const id = readlineSync.questionInt("Enter ID need delete: ");
      manager.removeStudent(id);
      break;
    }
    case 4: {
      manager.findTopStudent();
      break;
    }
    case 5: {
      manager.findLowStudent();
      break;
    }
    case 6: {
      manager.listStudent();
      break;
    }
    case 0: {
      console.log("👋 Exit programme");
      process.exit(0);
    }
    default:
      console.log("Choice is invalid");
  }
}
