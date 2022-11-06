import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home2 from "./components/Home2";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home2 />} />
      </Routes>
    </main>
  );
}

export default App;