import React, { useEffect, useState } from 'react';
import { cleanObject } from 'utils';
import List from './list';
import SearchPanel from './search-panel';
import { useDebounce, useMount } from 'utils/hooks';
import { useHttp } from 'utils/http';
import styled from '@emotion/styled';
import { Typography } from 'antd';

export default function ProjectList() {
  const [param, setParam] = useState({ name: '', personId: '' });
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const debouncedValue = useDebounce(param, 500);
  const client = useHttp();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useMount(() => {
    client('users').then(setUsers);
  });

  useEffect(() => {
    setIsLoading(true);
    client('projects', { data: cleanObject(debouncedValue) })
      .then(setProjects)
      .catch((error) => {
        setProjects([]);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, [debouncedValue]);

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      {error ? (
        <Typography.Text style={{ marginBottom: '1rem' }} type="danger">
          {error?.message}
        </Typography.Text>
      ) : null}
      <List loading={isLoading} dataSource={projects} users={users} />
    </Container>
  );
}

const Container = styled.div`
  padding: 3.2rem;
`;
