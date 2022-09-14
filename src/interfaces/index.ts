export interface Project {
  id: number;
  name: string;
  personId: number;
  department: string;
  created: number;
}

export interface User {
  id: number;
  name: string;
  token?: string;
}

export type Users = Array<User>;
export type Projects = Array<Project>;

export interface AuthForm {
  username: string;
  password: string;
}
