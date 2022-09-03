import React, { useEffect, useState } from 'react';
import { cleanObject } from 'utils';
import List from './list';
import SearchPanel from './search-panel';
import { useDebounce, useMount } from 'utils/hooks';
import { useHttp } from 'utils/http';

export default function ProjectList() {
  const [param, setParam] = useState({ name: '', personId: '' });
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const debouncedValue = useDebounce(param, 500);
  const client = useHttp();

  useMount(() => {
    client('users').then(setUsers);
  });

  useEffect(() => {
    client('projects', cleanObject(debouncedValue)).then(setProjects);
    // eslint-disable-next-line
  }, [debouncedValue]);

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List projects={projects} users={users} />
    </div>
  );
}
