import React, { useEffect, useState } from 'react';
import { cleanObject } from 'utils';
import List from './list';
import SearchPanel from './search-panel';
import { useDebounce, useMount } from 'utils/hooks';
import { useHttp } from 'utils/http';
import styled from '@emotion/styled';

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
    client('projects', { data: cleanObject(debouncedValue) }).then(setProjects);
    // eslint-disable-next-line
  }, [debouncedValue]);

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List projects={projects} users={users} />
    </Container>
  );
}

const Container = styled.div`
  padding: 3.2rem;
`;
