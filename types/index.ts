export interface Experience {
  company: string;
  startYear: string;
  endYear: string;
  duties: string;
}

export interface Project {
  title: string;
  description: string;
  stack?: string[];
}
