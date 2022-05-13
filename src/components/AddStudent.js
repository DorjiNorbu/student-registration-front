import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import studentService from "../services/StudentService";

const AddStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const saveStudent = (e) => {
    e.preventDefault();

    const student = {
      id,
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      phoneNumber,
    };

    if (id) {
      studentService
        .updateStudent(student)
        .then((response) => {
          alert("student details successfully updated");
          navigate("/");
        })
        .catch((error) => alert("Update failed"));
    } else {
      studentService
        .addStudent(student)
        .then((response) => {
          alert("Studnet information added successfully");
          navigate("/");
        })
        .catch((error) => alert("Student information coulnt be saved"));
    }
  };

  useEffect(() => {
    if (id) {
      studentService.getStudentById(id).then((student) => {
        console.log(student);
        setFirstName(student.data.firstName);
        setMiddleName(student.data.middleName);
        setLastName(student.data.lastName);
        var date = new Date(student.data.dateOfBirth);
        setDateOfBirth(date.toISOString().slice(0, 10));
        setPhoneNumber(student.data.phoneNumber);
      });
    } else {
    }
  }, [id]);

  return (
    <div className="container">
      <h3>Add Student information</h3>
      <hr />

      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            className="form-control col-4"
            id="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholde="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle Name: </label>
          <input
            type="text"
            className="form-control col-4"
            id="middleName"
            value={middleName}
            onChange={(e) => {
              setMiddleName(e.target.value);
            }}
            placeholde="Enter Middle Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            className="form-control col-4"
            id="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholde="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth: </label>
          <input
            type="date"
            className="form-control col-4"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => {
              setDateOfBirth(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            type="text"
            className="form-control col-4"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary"
            onClick={(e) => {
              saveStudent(e);
            }}
          >
            Save Student
          </button>
        </div>
      </form>
      <Link to="/">Back to Student List</Link>
    </div>
  );
};

export default AddStudent;
