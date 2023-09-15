export interface Experience {
  company: string;
  startYear: string;
  endYear: string;
  duties: string;
}

export type Project = {
  name: string;
  desc: string;
  stack?: string[];
};
