import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ResumeForm from "./pages/ResumeForm";
import Preview from "./pages/Preview";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ResumeForm />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;