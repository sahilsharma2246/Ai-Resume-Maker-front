import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("resumeData", JSON.stringify(formData));

    navigate("/preview");
  };

  return (
    <div className="form-container">
      <h2>Resume Details Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />

        <textarea
          name="objective"
          placeholder="Career Objective"
          onChange={handleChange}
        />

        <textarea
          name="education"
          placeholder="Education"
          onChange={handleChange}
        />

        <textarea
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
        />

        <textarea
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
        />

        <textarea
          name="projects"
          placeholder="Projects"
          onChange={handleChange}
        />

        <textarea
          name="certifications"
          placeholder="Certifications"
          onChange={handleChange}
        />

        <textarea
          name="languages"
          placeholder="Languages"
          onChange={handleChange}
        />

        <textarea
          name="hobbies"
          placeholder="Hobbies"
          onChange={handleChange}
        />

        <button type="submit">Preview Resume</button>
      </form>
    </div>
  );
};

export default ResumeForm;