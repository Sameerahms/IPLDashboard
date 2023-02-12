import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";
import { HomePage } from "./pages/HomePage";

import IPLLogo from "./assets/ipl-logo-img.png";

function App() {
  return (
    <BrowserRouter>
      <header className="nav-bar">
        <Link to="/">
          <img src={IPLLogo} alt="IPL-logo" className="ipl-logo" />
        </Link>
        <h1 className="header-title">IPL Dashboard</h1>
      </header>
      <div className="app">
        <Routes>
          <Route
            path="/teams/:teamName/matches/:year"
            element={<MatchPage />}
          />
          <Route path="/teams/:teamName" element={<TeamPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
