import './Projects.css';
import portfolioProjects  from '../../portfolioProjects';
import ProjectCard from './ProjectCard';

function Projects({category}) {
  return (
      <div className="Projects">
            {
                portfolioProjects.map((project,index)=>{
                    return <ProjectCard key={project.id} project={project} index={index} />
                }).filter((project)=>project.category===category)
            }
            <div className="More-Projects-Container">
                <p>
                    Adding more projects as we grow more ......
                </p>
            </div>
      </div>
  );
}

export default Projects;
