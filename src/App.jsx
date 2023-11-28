import Navbar from "./components/Navbar";
import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetallesContainer from "./components/ItemDetallesContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";
import Registro from "./components/Registro";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path= "/" element={<ItemListContainer />} />
          <Route path= "/item/:id" element={<ItemDetallesContainer/>} />
          <Route path= "/productos/" element={<ItemListContainer />} />
          <Route path= "/productos/:categoria" element={<ItemListContainer />} />
          <Route path= "/nosotros" element={<Nosotros />} />
          <Route path= "/registro" element={<Registro />} />




        </Routes>
        <Footer />
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
