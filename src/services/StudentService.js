import httpClient from "../routers/http-common";

const getStudents = () => {
  return httpClient.get("/students");
};

const getStudentById = (id) => {
  return httpClient.get("/student/" + id);
};

const addStudent = (data) => {
  return httpClient.post("/student", data);
};

const updateStudentDetails = (data) => {
  return httpClient.put("/student", data);
};

const deleteStudent = (id) => {
  return httpClient.delete("/student/" + id);
};

const studentService = {
  getStudents: getStudents,
  getStudentById: getStudentById,
  addStudent: addStudent,
  updateStudent: updateStudentDetails,
  deleteStudent: deleteStudent,
};

export default studentService;
