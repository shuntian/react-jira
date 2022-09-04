import React from 'react';
import { Projects, User, Users } from 'interfaces';
import { Table } from 'antd';
import dayjs from 'dayjs';

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
          title: '部门',
          dataIndex: 'department',
        },
        {
          title: '负责人',
          render: (value, project) => {
            return (
              <>
                {users.find((user: User) => user.id === project.personId)
                  ?.name || '未知'}
              </>
            );
          },
        },
        {
          title: '创建时间',
          dataIndex: 'created',
          render: (value, project) => {
            return (
              <>
                {project.created
                  ? dayjs(project.created).format('YYYY-MM-DD')
                  : '无'}
              </>
            );
          },
        },
      ]}
      dataSource={projects}
    />
  );
}
