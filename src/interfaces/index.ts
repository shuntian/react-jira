export interface Project {
  id: string;
  name: string;
  personId: string;
}

export interface User {
  id: string;
  name: string;
}

export type Users = Array<User>;
export type Projects = Array<Project>;
