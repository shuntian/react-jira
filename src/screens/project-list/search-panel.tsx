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
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value="">负责人</option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
}
