import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import StudentList from "../components/StudentList";
import "bootstrap/dist/css/bootstrap.min.css";
import AddStudent from "../components/AddStudent";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentList />}></Route>
        <Route path="/addStudent" element={<AddStudent />}></Route>
        <Route path="/student/edit/:id" element={<AddStudent />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
