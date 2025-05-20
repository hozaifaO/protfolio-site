import { TechIcon } from "./tech-icon";

interface TechTagListProps {
  tags: string[];
  className?: string;
}

export function TechTagList({ tags, className = "" }: TechTagListProps) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {tags.map((tag) => (
        <span key={tag} className="px-2.5 py-0.5 bg-muted text-muted-foreground rounded-full text-xs flex items-center gap-1">
          <TechIcon tech={tag} showLabel={true} />
        </span>
      ))}
    </div>
  );
}
