function Skills({ skills }) {
  return (
    <div className="card p-3">
      <h5>Skills</h5>
      {skills.map((s, i) => (
        <div key={i}>
          <p>{s}</p>
          <div className="progress">
            <div className="progress-bar" style={{width: `${70 + i*5}%`}}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Skills;