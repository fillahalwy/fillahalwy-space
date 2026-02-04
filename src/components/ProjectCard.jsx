// src/components/ProjectCard.jsx
function ProjectCard({ project }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
           <span className="text-white font-semibold tracking-wide">Lihat Detail Project</span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-[10px] sm:text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-gray-500 leading-relaxed line-clamp-3 text-sm sm:text-base">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;