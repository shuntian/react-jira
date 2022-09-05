import { useEffect } from 'react';
import { Project, Projects, User, Users } from 'interfaces';
import { useAsync, useMount } from 'utils/hooks';
import { useHttp } from 'utils/http';
import { cleanObject } from 'utils';

export const useProjects = (param: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Projects>();

  useEffect(() => {
    run(client('projects', { data: cleanObject(param) }));
    // eslint-disable-next-line
  }, [param]);

  return result;
};

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Users>();

  useMount(() => {
    run(client('users'));
  });

  return result;
};
