import { Form, Input, Select } from 'antd';
import { Users } from 'interfaces';
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
    <div style={{ display: 'flex' }}>
      <Input
        type="text"
        value={param.name}
        onChange={(evt) =>
          setParam({
            ...param,
            name: evt.target.value,
          })
        }
      />
      <Select
        style={{ minWidth: '100px' }}
        onChange={(evt) =>
          setParam({
            ...param,
            personId: evt.target.value,
          })
        }
      >
        <Select.Option value="">负责人</Select.Option>
        {users.map((user) => {
          return (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
}
