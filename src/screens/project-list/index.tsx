import React, { useEffect, useState } from 'react';
import { cleanObject } from 'utils';
import List from './list';
import SearchPanel from './search-panel';
import { useDebounce } from 'utils/hooks';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { useProjects, useUsers } from './hooks';

export default function ProjectList() {
  const [param, setParam] = useState({ name: '', personId: '' });
  const debouncedValue = useDebounce(param, 500);

  const { data: users } = useUsers();
  const { isLoading, error, data: projects } = useProjects(debouncedValue);

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? (
        <Typography.Text style={{ marginBottom: '1rem' }} type="danger">
          {error?.message}
        </Typography.Text>
      ) : null}
      <List
        loading={isLoading}
        dataSource={projects || []}
        users={users || []}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 3.2rem;
`;
