import Navbar from "./components/Navbar";
import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetallesContainer from "./components/ItemDetallesContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path= "/" element={<ItemListContainer />} />
          <Route path= "item" element={<ItemDetallesContainer itemId={2}/>} />


        </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
