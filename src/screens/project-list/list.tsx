import React from 'react';
import { Project, User, Users } from 'interfaces';
import { Table, TableProps } from 'antd';
import dayjs from 'dayjs';

interface ListProps extends TableProps<Project> {
  users: Users;
}

export default function List({ users, ...props }: ListProps) {
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
      {...props}
    />
  );
}
