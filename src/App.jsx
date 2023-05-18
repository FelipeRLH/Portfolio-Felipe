import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import SinglePage from "./Pages/SinglePage";
import MoreAbout from "./Pages/SubPages/About/MoreAbout.jsx";
import MoreProjects from "./Pages/SubPages/Projects/MoreProjects.jsx";
import ProjectCreation from "./Pages/SubPages/Projects/ProjectCreation.jsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SinglePage />} />
        <Route path="/moreabout" element={<MoreAbout />} />
        <Route path="/moreprojects" element={<MoreProjects />} />
        <Route path="/moreprojects/:id" element={<ProjectCreation />} />
      </Routes>
    </Router>
  );
}

export default App;
