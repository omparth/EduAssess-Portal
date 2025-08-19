import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateAssessment from "./pages/CreateAssessment";
import SubmitAssessment from "./pages/SubmitAssessments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateAssessment />} />
        <Route path="/submit/:id" element={<SubmitAssessment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
