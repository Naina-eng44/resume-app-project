function Experience({ experience }) {
  return (
    <div className="card p-3">
      <h5>Experience</h5>
      {experience.map((e,i)=>(
        <div key={i}>
          <h6>{e.role} - {e.company}</h6>
          <p>{e.years}</p>
        </div>
      ))}
    </div>
  );
}
export default Experience;