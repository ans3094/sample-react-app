import React from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";

function App() {
 
  return (<BrowserRouter>
  <button>
    <Link to="/home">Home</Link>
  </button>
  <button>
    <Link to="/">Index</Link>
  </button>
  <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="/home" element={<Home/>}/>
  </Routes>
  </BrowserRouter>)
}

function Index() {
  var navigate = useNavigate();
  function handleClick() {
    navigate('/home')
    
  }
  return(
    <>
    <h2>Index</h2>
    <button onClick={handleClick}>Go home</button>
    </>
  )
}

function Home() {
  return(
    <>
    <h2>Index</h2>
    <p>This is home</p>
    </>
  )
}

export default App;