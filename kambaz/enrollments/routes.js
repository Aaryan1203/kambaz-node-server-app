import EnrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app, db) {
  const dao = EnrollmentsDao(db);

  const enrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.params;
    const status = dao.enrollUserInCourse(userId, courseId);
    res.send(status);
  };
  
  const unenrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.params;
    const status = dao.unenrollUserInCourse(userId, courseId);
    res.send(status);
  };

  app.post("/api/enrollments/enroll/:userId/:courseId", enrollUserInCourse);
  app.delete("/api/enrollments/unenroll/:userId/:courseId", unenrollUserInCourse);
}
