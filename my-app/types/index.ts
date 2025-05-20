export interface BaseCardData {
  id: number;
  title: string;
  tags: string[];
}

export interface Project extends BaseCardData {
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
}

export interface WorkExperience extends BaseCardData {
  current: boolean;
  company: string;
  location: string;
  duration: string;
  project: string;
  description: string[];
  technologies: string[];
  projectLink?: string;
}
