import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import RecruiterDashboard from "./pages/RecruiterDashboard/RecruiterDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route
          path="/recruiter"
          element={<RecruiterDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
