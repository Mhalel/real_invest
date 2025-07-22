import { Routes, Route, Link } from "react-router-dom";
import LayOut from "./layOut/LayOut";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="font-manrope font-dlig">
      <LayOut>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </LayOut>
    </div>
  );
}

export default App;
