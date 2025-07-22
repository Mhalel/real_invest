import { Routes, Route, Link } from "react-router-dom";
import LayOut from "./layOut/LayOut";
import Home from "./pages/home/Home";
import LandingPage from "./pages/home/LandingPage";
function App() {
  return (
    <div className="font-manrope font-dlig">
      <LayOut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing-page" element={<LandingPage />} />
        </Routes>
      </LayOut>
    </div>
  );
}

export default App;
