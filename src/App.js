import HomeView from "./components/Home/HomeView";
import NavView from "./components/nav/NavView";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Support from "./components/pages/supportRequest/SupportPage";
import Aad from "./components/utils/Aad/Aad";
import Faq from "./components/pages/FAQ/Faq";
import ProductEnquiry from "./components/pages/ProductEnquiry/ProductEnquiry";
import SolutionAssesment from "./components/pages/solutionsAssesment/SolutionAssesment";
import Submit from "./components/pages/submitRequest/Submit";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Router>
      <NavView/>
      <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/aad" element={<Aad/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/enquiry" element={<ProductEnquiry/>}/>
        <Route path="/solutions" element={<SolutionAssesment/>}/>
        <Route path="/submitRequest" element={<Submit/>}/>
      </Routes>
      <Toaster/>
      </Router>
    </div>
  );
}

export default App;
