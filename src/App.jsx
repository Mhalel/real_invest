import { Routes, Route, Link } from "react-router-dom";
import LayOut from "./layOut/LayOut";
import Home from "./pages/home/Home";
import DashBoard from "./pages/dashboard/DashBoard";
function App() {
  return (
    <div className="font-manrope font-dlig">
      <LayOut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<DashBoard />} />
        </Routes>
      </LayOut>
    </div>
  );
}

export default App;
