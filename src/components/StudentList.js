import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import studentService from "../services/StudentService";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    studentService
      .getStudents()
      .then((response) => {
        console.log("Printing all the students", response.data);
        setStudents(response.data);
      })
      .catch((error) => {
        console.log("Error occured", error);
      });
  };

  const deleteStudent = (id) => {
    studentService
      .deleteStudent(id)
      .then((response) => {
        alert("Student successfully deleted");
        init();
      })
      .catch((error) => alert("Error deleting student"));
  };

  return (
    <div className="container">
      <h2>List of StudentList</h2>
      <hr />
      <Link to="/addStudent" className="btn btn-primary">
        Add Student
      </Link>
      <hr />
      <div>
        <table className="table table-bordered table-stripped">
          <thead>
            <tr className="thead-dark">
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
                  {student.firstName +
                    " " +
                    student.middleName +
                    " " +
                    student.lastName}
                </td>
                <td>
                  {" "}
                  {new Date(student.dateOfBirth)
                    .toISOString()
                    .slice(0, 10)}{" "}
                </td>
                <td> {student.phoneNumber} </td>
                <td>
                  <Link
                    to={"/student/edit/" + student.id}
                    className="btn btn-info"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger ml-3"
                    onClick={(e) => {
                      deleteStudent(student.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
