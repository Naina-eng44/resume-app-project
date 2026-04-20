function Projects({ projects }) {
  return (
    <div className="card p-3">
      <h5>Projects</h5>
      {projects.map((p,i)=>(
        <div key={i}>
          <h6>{p.title}</h6>
          <p>{p.tech}</p>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  );
}
export default Projects;