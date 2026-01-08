import { type JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import FrontPage from "./components/Pages/FrontPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
  return (
    <div className="main">
      <TopBar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </div>
  );
}

export default App;
