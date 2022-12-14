import { Button, Divider, Typography } from 'antd';
import Card from 'antd/lib/card/Card';
import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { LoginScreen } from './login';
import { RegisterScreen } from './register';
import { useDocumentTitle } from 'utils/hooks';

export const UnauthenticatedApp = () => {
  const [isRegister, setRegister] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useDocumentTitle('jira 任务管理系统');

  const handleState = useCallback(() => {
    setRegister(!isRegister);
  }, [isRegister]);

  return (
    <Container>
      <Header>Jira</Header>
      <ShadowCard>
        <Title>{isRegister ? '请注册' : '请登录'}</Title>
        {error ? (
          <Typography.Text type="danger">{error?.message}</Typography.Text>
        ) : null}
        {isRegister ? (
          <RegisterScreen onError={setError} />
        ) : (
          <LoginScreen onError={setError} />
        )}
        <Divider />
        <Button type={'link'} onClick={handleState}>
          {isRegister ? '已有账号了?直接登录' : '没有账号?注册新账号'}
        </Button>
      </ShadowCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Header = styled.header`
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 50rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 2.4rem;
  color: rgb(94, 108, 132);
`;
