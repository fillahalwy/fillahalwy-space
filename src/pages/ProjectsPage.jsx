import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../utils/local-data';

function ProjectsPage() {
	const projects = getProjects(); 
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
        <p className="text-gray-500 mt-2">Kumpulan karya dan proyek yang telah saya kerjakan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;