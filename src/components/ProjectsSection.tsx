import { projects } from '@/data/projects';
import ProjectItem from './ProjectItem';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container max-w-3xl">
        {/* Section header */}
        <div className="mb-8">
          <h2 className="section-title mb-2">
            /projects
          </h2>
          <p className="text-sm text-muted-foreground pl-5">
            Things I've built, shipped, and sometimes archived.
          </p>
        </div>

        <div className="divider-dashed mb-8" />

        {/* Projects grid */}
        <div className="grid gap-4 stagger">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
