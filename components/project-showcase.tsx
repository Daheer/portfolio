import { Project } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function ProjectShowcase({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline rounded-xl border bg-card text-card-foreground shadow cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground"
    >
      <div className="space-y-2 p-6">
        <div className="flex space-x-1">
          <h3 className="font-semibold leading-none tracking-tight">{project.title}</h3>
          <ExternalLink aria-hidden="true" height={15} width={15} />
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </a>
  );
}
