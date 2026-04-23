import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

const Preview = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/resume/latest"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchResume();
  }, []);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Resume", 20, 20);
    doc.save("Resume.pdf");
  };

  if (!data) {
    return <h2>Loading Resume...</h2>;
  }

  return (
    <div className="preview-container">
      <div className="resume-box">

        {/* HEADER */}
        <div className="resume-header">
          <h1>{data.fullName}</h1>
          <h2>SOFTWARE DEVELOPER</h2>
          <div className="header-line"></div>
        </div>

        <div className="contact-info">
  <p>📞 {data.phone}</p>
  <p>✉️ {data.email}</p>
  <p>🌐 yourwebsite.com</p>
  <p>📍 {data.address}</p>
</div>

        {/* MAIN CONTENT */}
        <div className="resume-content">

          {/* LEFT SIDE */}
          <div className="left-side">
            <h3>EDUCATION</h3>
            <p>{data.education}</p>

            <h3>SKILLS</h3>
            <p>{data.skills}</p>

            <h3>LANGUAGES</h3>
            <p>{data.languages}</p>

            <h3>HOBBIES</h3>
            <p>{data.hobbies}</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="right-side">
            <h3>PROFILE SUMMARY</h3>
            <p>{data.objective}</p>

            <h3>WORK EXPERIENCE</h3>
            <p>{data.experience}</p>

            <h3>PROJECTS</h3>
            <p>{data.projects}</p>

            <h3>CERTIFICATIONS</h3>
            <p>{data.certifications}</p>
          </div>

        </div>

        {/* DOWNLOAD BUTTON */}
        <div className="download-btn">
          <button onClick={handleDownload}>
            Download Resume
          </button>
        </div>

      </div>
    </div>
  );
};

export default Preview;