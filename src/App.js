import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import ProjectPage from "./components/ProjectPage";
import ProjectLayout from "./components/ProjectLayout";

function App() {
  return (
    <div className="bg-white dark:bg-zinc-800">
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectLayout />}>
          <Route index element={<Project />} />
            <Route path="project/:projectID" element={<ProjectPage />} />
          </Route>
          {/* <Route path="jobs" element={<JobLayout />}>
                      <Route index element={<JobsList />} />
                      <Route path="create" element={<Job />} />
                      <Route path="edit/:jobID" element={<Job />} />
                    </Route> */}
          <Route path="resume" element={<Resume />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
