import { useState } from "react";
import "./App.css";

import { data } from "./data";

import Header from "./components/header/header";
import Home from "./pages/home/home";
import DetailsPage from "./pages/details/details";
import { Route, Routes } from "react-router-dom";


function App() {
  const [block, setBlock] = useState(data);




  return (
    <div className="flex flex-col items-center ">
      <Header />
        <Routes>
          <Route path='/' element={ <Home data={block} /> } />
          <Route path='details' element={ <DetailsPage />} />
        </Routes>
        
    </div>
  );
}

export default App;
