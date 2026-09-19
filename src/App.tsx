import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import RecruiterDashboard from "./pages/RecruiterDashboard/RecruiterDashboard";
import CreateJob from "./pages/CreateJob/CreateJob";
import JobRequirements from "./pages/JobRequirements/JobRequirements";
import CandidateDashboard from "./pages/CandidateDashboard/CandidateDashboard";
import JobDetails from "./pages/JobDetails/JobDetails";
// import CandidateDetails from "./pages/CandidateDetails/CandidateDetails";
import MatchResults from "./pages/MatchResults/MatchResults";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route
          path="/recruiter"
          element={<RecruiterDashboard />}
        />
        <Route path="/recruiter/jobs/new" element={<CreateJob />} />

      <Route
  path="/recruiter/jobs/requirements"
  element={<JobRequirements />}
  />
  <Route
  path="/candidate"
  element={<CandidateDashboard />}
/>
<Route
  path="/candidate/assessments/backend-engineer"
  element={<JobDetails />}
/>
{/* <Route
  path="/recruiter/candidates/arjun-mehta"
  element={<CandidateDetails />}
/> */}
<Route
  path="/recruiter/matches"
  element={<MatchResults />}
/>
  </Routes>
    </BrowserRouter>
  );
}

export default App;
