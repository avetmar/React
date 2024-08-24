import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Category from "./Pages/Category";
import CategoryDescription from "./Pages/CategoryDescription";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route exact path="/Category" element={<Category />} />
          <Route path="/Category/:catName" element={<CategoryDescription />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
