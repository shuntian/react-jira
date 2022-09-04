import { Form, Input, Select } from 'antd';
import { User, Users } from 'interfaces';
import React from 'react';

interface SearchPanelProps {
  param: {
    name: string;
    personId: string;
  };
  users: Users;
  setParam: (param: SearchPanelProps['param']) => void;
}
export default function SearchPanel({
  param,
  setParam,
  users,
}: SearchPanelProps) {
  return (
    <Form style={{ marginBottom: '2rem' }} layout="inline">
      <Form.Item>
        <Input
          placeholder="项目名"
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value="">负责人</Select.Option>
          {users.map((user: User) => {
            return (
              <Select.Option key={user.id} value={user.id}>
                {user.name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    </Form>
  );
}
