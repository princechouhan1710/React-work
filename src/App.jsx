import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Data from "./pages/data";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [toggleView, setToggleView] = useState(false); // false = Table, true = Card

  return (
     <BrowserRouter>
    <div className="flex">
      <Sidebar toggleView={toggleView} setToggleView={setToggleView} />
    
      <div className="w-[83%] ml-64 ">
          <Routes>
        <Route path="/" element={
        <Data toggleView={toggleView} />}></Route>
        <Route path="/Feedbackform" element={<FeedbackForm/>}></Route>
      </Routes>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
