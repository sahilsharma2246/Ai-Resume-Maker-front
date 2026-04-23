// src/pages/ResumeForm.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResumeForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    objective: "",
    education: "",
    skills: "",
    experience: "",
    projects: "",
    certifications: "",
    languages: "",
    hobbies: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/resume/create",
        formData
      );

      navigate("/preview");
    } catch (error) {
      console.log(error);
      alert("Failed to save resume");
    }
  };

  return (
    <div className="form-container">
      <h2>Resume Details Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        <textarea
          name="objective"
          placeholder="Career Objective"
          value={formData.objective}
          onChange={handleChange}
        />

        <textarea
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
        />

        <textarea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
        />

        <textarea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
        />

        <textarea
          name="projects"
          placeholder="Projects"
          value={formData.projects}
          onChange={handleChange}
        />

        <textarea
          name="certifications"
          placeholder="Certifications"
          value={formData.certifications}
          onChange={handleChange}
        />

        <textarea
          name="languages"
          placeholder="Languages"
          value={formData.languages}
          onChange={handleChange}
        />

        <textarea
          name="hobbies"
          placeholder="Hobbies"
          value={formData.hobbies}
          onChange={handleChange}
        />

        <button type="submit">
          Preview Resume
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;