import { useState, useEffect } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import dataFile from "./data/profileData";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const [data, setData] = useState(dataFile);
  const [dark, setDark] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  // LocalStorage load
  useEffect(() => {
    const saved = localStorage.getItem("resume");
    if (saved) setData(JSON.parse(saved));
  }, []);

  // Save
  useEffect(() => {
    localStorage.setItem("resume", JSON.stringify(data));
  }, [data]);

  // Add skill
  const addSkill = () => {
    if (!newSkill) return;
    setData({...data, skills:[...data.skills, newSkill]});
    setNewSkill("");
  };

  // PDF
  const downloadPDF = () => {
    html2canvas(document.body).then(canvas=>{
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(img, "PNG", 0, 0);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="container-fluid">
        <div className="row">

          {/* Sidebar */}
          <div className="col-md-4 sidebar">
            <Header name={data.name} role={data.role}/>
            <Profile email={data.email}/>
            <Skills skills={data.skills}/>

            <input
              value={newSkill}
              onChange={(e)=>setNewSkill(e.target.value)}
              placeholder="Add skill"
            />
            <button onClick={addSkill}>Add</button>
          </div>

          {/* Main */}
          <div className="col-md-8 main">
            <button onClick={()=>setDark(!dark)}> Theme</button>
            <button onClick={downloadPDF}> PDF</button>

            <Experience experience={data.experience}/>
            <Education education={data.education}/>
            <Projects projects={data.projects}/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;