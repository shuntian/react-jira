import styled from '@emotion/styled';
import { Routes, Route, Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { EpicScreen } from 'screens/epic';
import { KanbanScreen } from 'screens/kanban';

export const ProjectScreen = () => {
  return (
    <Container>
      <Link to="kanban">看板</Link>
      <Link to="epic">任务组</Link>
      <Container>
        <Routes>
          <Route path="/kanban" element={<KanbanScreen />} />
          <Route path="/epic" element={<EpicScreen />} />
          <Route index element={<KanbanScreen />} />
        </Routes>
      </Container>
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
