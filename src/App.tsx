import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import No1ProjectPage from "./pages/ProjectPage/No1ProjectPage";
import No2ProjectPage from "./pages/ProjectPage/No2ProjectPage";
import No3ProjectPage from "./pages/ProjectPage/No3ProjectPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/projects/1" element={<No1ProjectPage />}></Route>
        <Route path="/projects/2" element={<No2ProjectPage />}></Route>
        <Route path="/projects/3" element={<No3ProjectPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
