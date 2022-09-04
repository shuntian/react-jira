import React from 'react';
import { Projects, Users } from 'interfaces';
import { Table } from 'antd';

interface ListProps {
  projects: Projects;
  users: Users;
}

export default function List({ projects, users }: ListProps) {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: '名称',
          dataIndex: 'name',
        },
        {
          title: '负责人',
          render: (value, project) => {
            return (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>
                  {users.find((user) => user.id === project.personId)?.name ||
                    '未知'}
                </td>
              </tr>
            );
          },
        },
      ]}
      dataSource={projects}
    />
  );
}
