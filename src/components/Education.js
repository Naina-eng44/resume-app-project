function Education({ education }) {
  return (
    <div className="card p-3">
      <h5>Education</h5>
      {education.map((e,i)=>(
        <div key={i}>
          <h6>{e.degree}</h6>
          <p>{e.college}</p>
        </div>
      ))}
    </div>
  );
}
export default Education;