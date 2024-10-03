import { Home } from "@mui/icons-material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./PrivateRoute";
import Error404 from "@/page/Login/Error";
import Login from "@/page/Login";
import RegisterPage from "@/page/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        toastStyle={{
          fontFamily: "Public Sans",
          fontSize: "0.8em",
          borderRadius: 12,
          boxShadow: "none",
        }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error404 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
