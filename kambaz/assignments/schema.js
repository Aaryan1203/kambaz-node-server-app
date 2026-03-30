import mongoose from "mongoose";
const assignmentsSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: String,
    description: String,
    points: Number,
    availableDate: Date,
    dueDate: Date,
    untilDate: Date,
  },
  { collection: "assignments" },
);
export default assignmentsSchema;
