import Navbar from "./components/Navbar";
import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetallesContainer from "./components/ItemDetallesContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      
     <Navbar />
     <ItemListContainer />
     <ItemDetallesContainer itemId={2}/>
    </div>
  );
}

export default App;
