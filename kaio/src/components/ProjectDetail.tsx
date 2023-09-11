import projects from "../data/projects.json";

function ProjectDetail() {
  const { slug } = match.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Add more project details here */}
    </div>
  );
}

export default ProjectDetail;
