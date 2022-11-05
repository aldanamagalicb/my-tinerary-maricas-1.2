import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home1 from "./components/Home1";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home1 />} />
      </Routes>
    </main>
  );
}

export default App;