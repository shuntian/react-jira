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
      rowKey={'id'}
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
              <>
                {users.find((user) => user.id === project.personId)?.name ||
                  '未知'}
              </>
            );
          },
        },
      ]}
      dataSource={projects}
    />
  );
}
