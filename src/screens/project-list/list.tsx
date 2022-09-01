import React from 'react';
import { Projects, Users } from 'interfaces';

interface ListProps {
  projects: Projects;
  users: Users;
}

export default function List({ projects, users }: ListProps) {
  return (
    <table>
      <thead>
        <tr>
          <td>名称</td>
          <td>负责人</td>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => {
          return (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name ||
                  '未知'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
