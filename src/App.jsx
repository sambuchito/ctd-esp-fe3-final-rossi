import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
/* import Card from "./Components/Card"; */
import Missing from "./Routes/Missing";


function App() {
  return (
      <div className="App">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        <Footer />
      </div>
  );
}

export default App;
