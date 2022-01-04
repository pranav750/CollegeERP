import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminInfo from "./components/Admin/Info/Info";
import StudentInfo from "./components/Student/Info/Info";
import TeacherInfo from "./components/Teacher/Info/Info";
import ColorBox from "./components/Home/ColorBox";
import Home from "./components/Home/Home";
import Notification from "./components/Notification/Notification";
import Layout from "./components/Navbar/Layout";
import Add from "./components/Admin/Add/Add";
import Delete from "./components/Admin/Delete/Delete";
import Update from "./components/Admin/Update/Update";
import Get from "./components/Admin/Get/Get";
import GetAll from "./components/Admin/GetAll/GetAll";
import MarkAttendance from "./components/Teacher/MarkAttendance/MarkAttendance";
import GiveMarks from "./components/Teacher/GiveMarks/GiveMarks";
import UpdateMark from "./components/Teacher/UpdateMark/UpdateMark";
import GetMarks from "./components/Student/GetMarks/GetMarks";
import GetAttendance from "./components/Student/GetAttendance/GetAttendance";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Notification />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/admin/register"
              element={<ColorBox user="Admin" color="blue" register={true} />}
            />
            <Route path="/admin/home/:id" element={<AdminInfo />} />
            <Route path="/admin/add/:id" element={<Add />} />
            <Route path="/admin/delete/:id" element={<Delete />} />
            <Route path="/admin/update/:id" element={<Update />} />
            <Route path="/admin/get/:id" element={<Get />} />
            <Route path="/admin/get-all/:id" element={<GetAll />} />
            <Route
              path="/student/register"
              element={<ColorBox user="Student" color="blue" register={true} />}
            />
            <Route path="/student/home/:id" element={<StudentInfo />} />
            <Route path="/student/get-marks/:id" element={<GetMarks />} />
            <Route
              path="/student/get-attendance/:id"
              element={<GetAttendance />}
            />
            <Route
              path="/teacher/register"
              element={
                <ColorBox user="Teacher" color="white" register={true} />
              }
            />
            <Route path="/teacher/home/:id" element={<TeacherInfo />} />
            <Route
              path="/teacher/mark-attendance/:id"
              element={<MarkAttendance />}
            />
            <Route path="/teacher/give-marks/:id" element={<GiveMarks />} />
            <Route path="/teacher/update-mark/:id" element={<UpdateMark />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
