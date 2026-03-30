import EnrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app) {
  const dao = EnrollmentsDao();

  const enrollUserInCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await dao.enrollUserInCourse(userId, courseId);
    res.send(status);
  };

  const unenrollUserFromCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await dao.unenrollUserFromCourse(userId, courseId);
    res.send(status);
  };

  const getAllEnrollments = async (req, res) => {
    const enrollments = await dao.findAllEnrollments();
    res.json(enrollments);
  };

  app.post("/api/enrollments/enroll/:userId/:courseId", enrollUserInCourse);
  app.delete(
    "/api/enrollments/unenroll/:userId/:courseId",
    unenrollUserFromCourse,
  );
  app.get("/api/enrollments", getAllEnrollments);
}
