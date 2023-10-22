import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./components/Items";
import Header from "./components/Header";
import CreateItem from "./components/CreateItem";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Items/>}></Route>
          <Route path="/todo" element={<Items/>}></Route>
          <Route path="/done" element={<Items/>}></Route>
          <Route path="/create_item" element={<CreateItem/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
  
}

export default App;