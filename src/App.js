import HomeView from "./components/Home/HomeView";
import NavView from "./components/nav/NavView";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <NavView/>
      <Routes>
        <Route path="/" element={<HomeView/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
