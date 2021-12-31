import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminInfo from "./components/Admin/Info/Info";
import ColorBox from "./components/Home/ColorBox";
import Home from "./components/Home/Home";
import Notification from "./components/Notification/Notification";
import Layout from "./components/Navbar/Layout";
import Add from "./components/Admin/Add/Add";
import Delete from "./components/Admin/Delete/Delete";
import Update from "./components/Admin/Update/Update";
import Get from "./components/Admin/Get/Get";
import GetAll from "./components/Admin/GetAll/GetAll";

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
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
