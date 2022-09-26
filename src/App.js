import HomeView from "./components/Home/HomeView";
import NavView from "./components/nav/NavView";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Support from "./components/pages/supportRequest/Support";

function App() {
  return (
    <div className="App">
      <Router>
      <NavView/>
      <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
