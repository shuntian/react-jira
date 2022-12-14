import styled from '@emotion/styled';
import { Button, Dropdown, Menu } from 'antd';
import { Row } from 'components/lib';
import { useAuth } from 'contexts/auth-provider';
import { Routes, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProjectScreen } from 'screens/project';
import ProjectList from 'screens/project-list';
import { gotoHome } from 'utils';

export const AuthenticatedApp = () => {
  return (
    <Container>
      <AppHeader />
      <Main>
        <Router>
          <Routes>
            <Route path="/projects" element={<ProjectList />}></Route>
            <Route
              path="/projects/:projectId/*"
              element={<ProjectScreen />}
            ></Route>
            <Route index element={<ProjectList />} />
          </Routes>
        </Router>
      </Main>
    </Container>
  );
};

const AppHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={3}>
        <h2>
          <Button type={'link'} onClick={gotoHome}>
            Logo
          </Button>
        </h2>
        <h2>项目</h2>
        <h2>用户</h2>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="logout">
                <Button type="link" onClick={logout}>
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="link" onClick={(e) => e.preventDefault()}>
            Hi, {user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;

const Main = styled.div`
  height: calc(100vh - 6rem);
`;
