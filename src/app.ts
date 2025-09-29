import { Student } from "./models/Student";
import { Classroom } from "./managers/Classroom";
import * as readlineSync from "readline-sync";

const manager = new Classroom();

manager.arrangeStudentByAverage();
