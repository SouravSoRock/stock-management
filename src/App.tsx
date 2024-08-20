import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import UserDashboard from "./Components/UserDashboard";
import AppLayout from "./Components/AppLayout";
import CpuAssignment from "./Components/CpuAssignment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="userdashboard" element={<UserDashboard />} />
          <Route path="addCpu" element={<CpuAssignment />} />
        </Route>
        <Route index element={<Navigate replace to="/login" />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
