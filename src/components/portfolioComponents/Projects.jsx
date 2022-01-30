import './Projects.css';
import portfolioProjects  from '../../portfolioProjects';
import ProjectCard from './ProjectCard';

function Projects({category}) {
    return (
        <div className="Projects">
            {
                category!=="All"
                ?   portfolioProjects
                    .filter((project)=>project.category===category)
                    .map((project,index)=>{
                        return <ProjectCard key={project.id} project={project} index={index} />
                    })
                :    portfolioProjects
                    .map((project,index)=>{
                        return <ProjectCard key={project.id} project={project} index={index} />
                    })
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
