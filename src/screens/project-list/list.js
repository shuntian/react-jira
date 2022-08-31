import React from 'react';
export default function List({ projects, users }) {
  return (
    <table>
      <thead>
        <tr>
          <td>名称</td>
          <td>负责人</td>
        </tr>
      </thead>
      <tbody>
        {projects.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                {users.find((user) => user.id === item.personId)?.name ||
                  '未知'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
