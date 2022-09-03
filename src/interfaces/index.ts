export interface Project {
  id: string;
  name: string;
  personId: string;
}

export interface User {
  id: string;
  name: string;
  token?: string;
}

export type Users = Array<User>;
export type Projects = Array<Project>;

export interface AuthForm {
  username: string;
  password: string;
}
