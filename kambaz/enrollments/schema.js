import mongoose from "mongoose";
const enrollmentSchema = new mongoose.Schema(
  {
    _id: String,
    course: { type: String, ref: "CourseModel" },
    user: { type: String, ref: "UserModel" },
    modules: { type: String, ref: "ModulesModel"},
    grade: Number,
    letterGrade: String,
    enrollmentDate: Date,
    status: {
      type: String,
      enum: ["ENROLLED", "DROPPED", "COMPLETED"],
      default: "ENROLLED",
    },
  },
  { collection: "enrollments" },
);
export default enrollmentSchema;
