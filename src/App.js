import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="bg-white dark:bg-zinc-800">
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Project />} />
          <Route path="resume" element={<Resume />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
