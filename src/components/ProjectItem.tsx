import { Project } from '@/data/projects';

interface ProjectItemProps {
  project: Project;
}

const statusIcons: Record<string, string> = {
  merged: '✓',
  shipped: '◆',
  archived: '○',
  wip: '◐',
};

const statusClasses: Record<string, string> = {
  merged: 'status-merged',
  shipped: 'status-shipped',
  archived: 'status-archived',
  wip: 'status-wip',
};

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <article className="border-dashed-custom p-5 group">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <span className="text-dim text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-100">›</span>
          <span className="group-hover:underline underline-offset-2 decoration-border-dashed">
            {project.title}
          </span>
        </h3>
        <div className="flex items-center gap-3 text-xs shrink-0">
          <span className="text-dim">{project.year}</span>
          <span className={`${statusClasses[project.status]} flex items-center gap-1`}>
            <span className="text-[10px]">{statusIcons[project.status]}</span>
            {project.statusLabel}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed pl-4">
        {project.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-4 pl-4">
        <span className="text-xs text-dim flex items-center gap-1.5">
          <span className="opacity-60">⚙</span>
          {project.stack}
        </span>
        
        <div className="flex gap-4 text-xs">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source code repository for ${project.title}`}
              className="text-muted-foreground link-external hover:text-foreground flex items-center gap-1"
            >
              <span className="text-dim text-[10px]">↗</span>
              source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="text-muted-foreground link-external hover:text-foreground flex items-center gap-1"
            >
              <span className="text-dim text-[10px]">↗</span>
              demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
