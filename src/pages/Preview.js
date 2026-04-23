import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Preview = () => {
  const resumeRef = useRef();

  const data = JSON.parse(localStorage.getItem("resumeData"));

  const downloadPDF = () => {
    const input = resumeRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="preview-container">
      <div className="resume-box" ref={resumeRef}>
        <h1>{data?.fullName}</h1>
        <p>{data?.email}</p>
        <p>{data?.phone}</p>
        <p>{data?.address}</p>

        <h3>Career Objective</h3>
        <p>{data?.objective}</p>

        <h3>Education</h3>
        <p>{data?.education}</p>

        <h3>Skills</h3>
        <p>{data?.skills}</p>

        <h3>Experience</h3>
        <p>{data?.experience}</p>

        <h3>Projects</h3>
        <p>{data?.projects}</p>

        <h3>Certifications</h3>
        <p>{data?.certifications}</p>

        <h3>Languages</h3>
        <p>{data?.languages}</p>

        <h3>Hobbies</h3>
        <p>{data?.hobbies}</p>
      </div>

      <button onClick={downloadPDF}>
        Download PDF
      </button>
    </div>
  );
};

export default Preview;