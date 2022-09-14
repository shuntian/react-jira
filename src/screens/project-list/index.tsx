import React, { useMemo } from 'react';
import List from './list';
import SearchPanel from './search-panel';
import { useDebounce, useDocumentTitle, useUrlQueryParam } from 'utils/hooks';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { useProjects, useUsers } from './hooks';

export default function ProjectList() {
  useDocumentTitle('项目列表');

  // const [, setParam] = useState({ name: '', personId: '' });
  const [param, setParam] = useUrlQueryParam(['name', 'personId']);
  const projectsParam = useMemo(() => {
    return { ...param, personId: Number(param.personId) || undefined };
  }, [param]);
  const debouncedValue = useDebounce(projectsParam, 500);
  const { isLoading, error, data: projects } = useProjects(debouncedValue);

  const { data: users } = useUsers();

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={projectsParam} setParam={setParam} />
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
