import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>AI Resume Maker</h1>
      <p>Create your professional resume in minutes</p>

      <button onClick={() => navigate("/resume-form")}>
        Create Resume
      </button>
    </div>
  );
};

export default Home;