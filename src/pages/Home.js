// src/pages/Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-box">
        <h1>AI Resume Maker</h1>

        <p>
          Create your professional and attractive resume
          in just a few minutes with a beautiful modern
          design.
        </p>

        <button onClick={() => navigate("/form")}>
          Create Resume
        </button>
      </div>
    </div>
  );
};

export default Home;